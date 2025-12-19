import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Check } from 'lucide-react';

const SetNewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const validatePassword = () => {
    return {
      length: newPassword.length >= 8,
      hasUpperAndLower: /[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
    };
  };

  const validation = validatePassword();

  const handleVerify = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Setting new password...');
    // Add your password reset logic here
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-muted mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Set Your New Password
          </h1>
          <p className="text-muted/90 text-base">
            Choose a strong password to keep your account secure.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="new-password" className="block text-muted text-base font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-transparent border border-primary/50 rounded-lg px-4 py-6 pr-12 text-muted placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/70 hover:text-muted"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-muted text-base font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-type your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border border-primary/50 rounded-lg px-4 py-6 pr-12 text-muted placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/70 hover:text-muted"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-muted text-sm font-medium mb-3">
              Your password should:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`shrink-0 w-4 h-4 rounded-full border ${validation.length ? 'bg-green-500 border-green-500' : 'border-gray-500'} flex items-center justify-center`}>
                  {validation.length && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${validation.length ? 'text-white' : 'text-gray-400'}`}>
                  Be at least 8 characters long
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`shrink-0 w-4 h-4 rounded-full border ${validation.hasUpperAndLower ? 'bg-green-500 border-green-500' : 'border-gray-500'} flex items-center justify-center`}>
                  {validation.hasUpperAndLower && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${validation.hasUpperAndLower ? 'text-white' : 'text-gray-400'}`}>
                  Include both uppercase and lowercase letters
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`shrink-0 w-4 h-4 rounded-full border ${validation.hasNumber ? 'bg-green-500 border-green-500' : 'border-gray-500'} flex items-center justify-center`}>
                  {validation.hasNumber && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${validation.hasNumber ? 'text-white' : 'text-gray-400'}`}>
                  Contain at least one number
                </span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleVerify}
            className="w-full bg-primary hover:bg-primary/90 text-muted font-semibold py-6 rounded-lg transition-colors mt-6"
          >
            Verify Code
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-muted/90 text-sm">
            Need help? Contact our support team at{' '}
            <br />
            <a 
              href="mailto:support@luxurystays.com" 
              className="text-primary hover:underline"
            >
              support@luxurystays.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;