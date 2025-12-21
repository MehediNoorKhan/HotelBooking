import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { useResetPasswordMutation } from '@/features/auth/authAPI';

const SetNewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const validation = {
    length: newPassword.length >= 8,
    hasUpperAndLower: /[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword),
    hasNumber: /\d/.test(newPassword),
    passwordsMatch: newPassword === confirmPassword && newPassword.length > 0,
  };

  const handleVerify = async () => {
    const reset_password_token = localStorage.getItem('resetPasswordToken');
    const email = localStorage.getItem('resetPasswordEmail');

    if (!reset_password_token || !email) {
      toast.error("Session expired. Please try forgot password again.");
      navigate("/reset-password");
      return;
    }

    if (!validation.length || !validation.hasUpperAndLower || !validation.hasNumber) {
      toast.error("Password does not meet requirements");
      return;
    }

    if (!validation.passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await resetPassword({
        email,
        reset_password_token,
        password: newPassword,
        password_confirmation: confirmPassword,
      }).unwrap();

      if (res.status) {
        toast.success(res.message || "Password reset successfully!");
         navigate("/signin");
        localStorage.removeItem('resetPasswordToken');
        localStorage.removeItem('resetPasswordEmail');
       
      } else {
        toast.error(res.message || "Failed to reset password");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
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
          {/* New Password */}
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

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="block text-muted text-base font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-type your password"
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

          {/* Password Validation */}
          <div className="pt-2">
            <p className="text-muted text-sm font-medium mb-3">Your password should:</p>
            {Object.entries({
              "Be at least 8 characters long": validation.length,
              "Include both uppercase and lowercase letters": validation.hasUpperAndLower,
              "Contain at least one number": validation.hasNumber,
              "Passwords match": validation.passwordsMatch,
            }).map(([label, valid]) => (
              <div key={label} className="flex items-center gap-2 mb-1">
                <div className={`shrink-0 w-4 h-4 rounded-full border ${valid ? 'bg-green-500 border-green-500' : 'border-gray-500'} flex items-center justify-center`}>
                  {valid && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${valid ? 'text-white' : 'text-gray-400'}`}>{label}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleVerify}
            disabled={isLoading || !validation.length || !validation.hasUpperAndLower || !validation.hasNumber || !validation.passwordsMatch}
            className="w-full bg-primary hover:bg-primary/90 text-muted font-semibold py-6 rounded-lg transition-colors mt-6"
          >
            {isLoading ? 'Verifying...' : 'Set New Password'}
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-muted/90 text-sm">
            Need help? Contact our support team at{' '}
            <br />
            <a href="mailto:support@luxurystays.com" className="text-primary hover:underline">
              support@luxurystays.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
