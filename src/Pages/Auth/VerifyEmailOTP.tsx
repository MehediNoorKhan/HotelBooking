import React from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { useLocation, useNavigate } from 'react-router';
import { useCheckOtpMutation } from '@/features/auth/authAPI';

interface VerifyEmailOTPProps {}

const VerifyEmailOTP: React.FC<VerifyEmailOTPProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email as string;

  const [otpValue, setOtpValue] = React.useState('');
  const [timeLeft, setTimeLeft] = React.useState(80);
  const [checkOtp, { isLoading }] = useCheckOtpMutation();

  // Redirect if email is missing
  React.useEffect(() => {
    if (!email) {
      toast.error("Email is missing, please try again.");
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  // Countdown timer
  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    setTimeLeft(80);
    setOtpValue('');
    toast.success("OTP resent successfully.");
    // Optionally, trigger forgotPassword API again to send new OTP
  };

  const handleVerify = async () => {
  if (!email) return;
  if (otpValue.length !== 6) {
    toast.error("OTP must be 6 digits");
    return;
  }

  try {
    const res = await checkOtp({ email, otp: otpValue }).unwrap();
    toast.success(res.message);

    // Save token in localStorage
    localStorage.setItem('resetPasswordToken', res.data.reset_password_token);
    localStorage.setItem('resetPasswordEmail', email);

    navigate("/reset-password"); // navigate to set new password page
  } catch (err: any) {
    toast.error(err?.data?.message || "Invalid OTP");
  }
};

  return (
    <div className="min-h-screen bg-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Verify Your Email
          </h1>
          <p className="text-muted text-base">We've sent a 6-digit verification code to</p>
          <p className="text-muted text-base mt-1">{email}</p>
        </div>

        <div className="space-y-6">
          {/* OTP Input */}
          <div>
            <label className="block text-muted text-sm text-center mb-4">
              Enter Verification Code
            </label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otpValue}
                onChange={setOtpValue}
              >
                <InputOTPGroup className="gap-2">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <InputOTPSlot
  key={idx}
  index={idx}
  className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg 
             text-muted text-xl text-center 
             focus:border-primary focus:ring-0"
/>
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {/* Timer & Resend */}
          <div className="text-center space-y-2">
            <p className="text-muted/70 text-sm">
              Code expires in <span className='text-primary'>{formatTime(timeLeft)}</span>
            </p>
            <div>
              <p className="text-muted/70 text-sm">Didn't receive the code?</p>
              <button
                onClick={handleResend}
                className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 justify-center mx-auto mt-1"
              >
                <RefreshCw className="w-3 h-3" />
                Resend Code
              </button>
            </div>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/80 text-muted font-semibold py-6 rounded-lg transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </Button>
        </div>

        {/* Support Info */}
        <div className="text-center mt-6">
          <p className="text-muted/70 text-sm">
            Need help? Contact our support team at{' '}
            <br />
            <a 
              href="mailto:support@luxurystays.com" 
              className="text-primary hover:underline text-base"
            >
              support@luxurystays.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailOTP;
