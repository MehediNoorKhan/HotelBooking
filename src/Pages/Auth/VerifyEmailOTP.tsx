import React from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { RefreshCw } from 'lucide-react';

const VerifyEmailOTP: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [timeLeft, setTimeLeft] = React.useState(80);

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    setTimeLeft(80);
    setValue('');
    console.log('Resending code...');
  };

  const handleVerify = () => {
    console.log('Verifying code:', value);
    // Add your verification logic here
  };

  return (
    <div className="min-h-screen bg-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Verify Your Email
          </h1>
          <p className="text-muted text-base">
            We've sent a 6-digit verification code to
          </p>
          <p className="text-muted text-base mt-1">
            demo@example.com
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-muted text-sm text-center mb-4">
              Enter Verification Code
            </label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
                
              >
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot 
                    index={0} 
                    className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg text-muted text-xl focus:border-primary focus:ring-0"
                  />
                  <InputOTPSlot 
                    index={1} 
                    className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg text-muted text-xl focus:border-primary focus:ring-0"
                  />
                  <InputOTPSlot 
                    index={2} 
                    className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg text-muted text-xl focus:border-primary focus:ring-0"
                  />
                  <InputOTPSlot 
                    index={3} 
                    className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg text-muted text-xl focus:border-primary focus:ring-0"
                  />
                  <InputOTPSlot 
                    index={4} 
                    className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg text-muted text-xl focus:border-primary focus:ring-0"
                  />
                  <InputOTPSlot 
                    index={5} 
                    className="w-12 h-14 bg-transparent border-2 border-primary/80 rounded-lg text-muted text-xl focus:border-primary focus:ring-0"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

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

          <Button
            onClick={handleVerify}
            className="w-full bg-primary hover:bg-primary/80 text-muted font-semibold py-6 rounded-lg transition-colors"
          >
            Verify Code
          </Button>
        </div>

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