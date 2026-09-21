import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

// Default fallback if ADMIN_PASSWORD is not set in environment
let runtimeAdminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSCODE || 'genshin123';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', server: 'Teyvat Archive Compendium API' });
  });

  // Admin Auth Verification API
  app.post('/api/auth/verify', (req, res) => {
    const { passcode } = req.body || {};
    if (!passcode || typeof passcode !== 'string') {
      res.status(400).json({ success: false, message: 'Passcode is required' });
      return;
    }

    const currentAdminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSCODE || runtimeAdminPassword;
    if (passcode === currentAdminPassword) {
      res.json({ success: true, message: 'Authentication successful' });
      return;
    }

    res.status(401).json({ success: false, message: 'Incorrect passcode. Access denied.' });
  });

  // Admin Change Passcode API
  app.post('/api/auth/change-passcode', (req, res) => {
    const { oldPasscode, newPasscode } = req.body || {};
    if (!oldPasscode || !newPasscode || typeof newPasscode !== 'string' || newPasscode.length < 4) {
      res.status(400).json({ success: false, message: 'Valid current and new passcodes (min 4 chars) are required.' });
      return;
    }

    const currentAdminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSCODE || runtimeAdminPassword;
    if (oldPasscode !== currentAdminPassword) {
      res.status(401).json({ success: false, message: 'Current passcode verification failed.' });
      return;
    }

    runtimeAdminPassword = newPasscode;
    res.json({ success: true, message: 'Admin passcode updated successfully.' });
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Teyvat Archive Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
