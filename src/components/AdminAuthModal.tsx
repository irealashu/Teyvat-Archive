import { useState } from 'react';
import { Lock, Unlock, KeyRound, ShieldCheck, X, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onUnlock: (passcode: string) => boolean;
  onLock: () => void;
  onChangePasscode: (oldPass: string, newPass: string) => boolean;
}

export function AdminAuthModal({
  isOpen,
  onClose,
  isAdmin,
  onUnlock,
  onLock,
  onChangePasscode,
}: AdminAuthModalProps) {
  if (!isOpen) return null;

  const [inputPasscode, setInputPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Tab for change passcode
  const [isChangingPass, setIsChangingPass] = useState(false);
  const [oldPasscode, setOldPasscode] = useState('');
  const [newPasscode, setNewPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!inputPasscode.trim()) {
      setErrorMessage('Please enter the administrator passcode.');
      return;
    }

    const success = onUnlock(inputPasscode.trim());
    if (success) {
      setSuccessMessage('Curator privileges granted! Edit & management unlocked.');
      setInputPasscode('');
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 1000);
    } else {
      setErrorMessage('Incorrect passcode. Access denied.');
    }
  };

  const handleChangePassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!newPasscode || newPasscode.length < 4) {
      setErrorMessage('New passcode must be at least 4 characters.');
      return;
    }

    if (newPasscode !== confirmPasscode) {
      setErrorMessage('New passcode and confirmation do not match.');
      return;
    }

    const success = onChangePasscode(oldPasscode, newPasscode);
    if (success) {
      setSuccessMessage('Admin passcode updated successfully!');
      setOldPasscode('');
      setNewPasscode('');
      setConfirmPasscode('');
      setTimeout(() => {
        setIsChangingPass(false);
        setSuccessMessage('');
      }, 1500);
    } else {
      setErrorMessage('Current passcode verification failed.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
              isAdmin
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/40 text-amber-400'
            }`}>
              {isAdmin ? <ShieldCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-100">
                {isAdmin ? 'Curator Access Active' : 'Curator Authentication'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {isAdmin
                  ? 'Edit, add, and deletion permissions enabled'
                  : 'Protected mode: Read-only for general visitors'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="admin-modal-close-btn"
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 text-xs bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded-lg">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-2 p-3 text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-lg">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {isAdmin ? (
            /* Unlocked Options */
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 space-y-1">
                <p className="font-semibold flex items-center gap-1.5">
                  <Unlock className="w-3.5 h-3.5" />
                  Admin Controls Unlocked
                </p>
                <p className="text-emerald-400/80 text-[11px] leading-relaxed">
                  You have authorized editing, deleting, and adding entries across all archives. To protect the site from public edits, remember to lock it when finished.
                </p>
              </div>

              {!isChangingPass ? (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      onLock();
                      onClose();
                    }}
                    id="admin-lock-now-btn"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-medium text-xs shadow-md transition-all active:scale-95"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Lock Archive (Revert to Read-Only)
                  </button>

                  <button
                    onClick={() => setIsChangingPass(true)}
                    id="admin-change-passcode-tab-btn"
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 font-medium text-xs border border-slate-700 transition-colors"
                  >
                    <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                    Change Admin Passcode
                  </button>
                </div>
              ) : (
                /* Change Passcode Form */
                <form onSubmit={handleChangePassSubmit} className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">Change Passcode</span>
                    <button
                      type="button"
                      onClick={() => setIsChangingPass(false)}
                      className="text-[11px] text-slate-400 hover:text-slate-200 underline"
                    >
                      Cancel
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Current Passcode
                    </label>
                    <input
                      type="password"
                      value={oldPasscode}
                      onChange={(e) => setOldPasscode(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-amber-400"
                      placeholder="Enter current passcode"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      New Passcode
                    </label>
                    <input
                      type="password"
                      value={newPasscode}
                      onChange={(e) => setNewPasscode(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-amber-400"
                      placeholder="Min 4 characters"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Confirm New Passcode
                    </label>
                    <input
                      type="password"
                      value={confirmPasscode}
                      onChange={(e) => setConfirmPasscode(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-amber-400"
                      placeholder="Re-type new passcode"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-all active:scale-95"
                  >
                    Save New Passcode
                  </button>
                </form>
              )}
            </div>
          ) : (
            /* Enter Passcode Form */
            <form onSubmit={handleUnlockSubmit} className="space-y-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-amber-300 leading-relaxed">
                <p className="font-semibold mb-0.5">🔒 Protected Archive Architecture</p>
                To prevent random visitors from altering or deleting entries, modifications require administrator authorization.
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Enter Admin Passcode:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={inputPasscode}
                    onChange={(e) => setInputPasscode(e.target.value)}
                    id="admin-passcode-input"
                    className="w-full pl-3 pr-10 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    placeholder="Enter admin passcode"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Enter secret curator passcode</span>
                  <span className="text-slate-600">Private access only</span>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="admin-passcode-submit-btn"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Unlock Admin</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
