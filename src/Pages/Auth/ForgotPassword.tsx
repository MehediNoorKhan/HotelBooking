import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { forgotPassword } from "@/features/auth/authThunk";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const dispatch = useAppDispatch();
  const { loading} = useAppSelector((state) => state.auth);
  const navigate = useNavigate()

  // 🔒 simple email validation
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      await dispatch(forgotPassword({ email })).unwrap();
      toast.success("OTP sent successfully. Check your email.");
      navigate('/varification')
    } catch (err: string | any) {
      toast.error("Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen bg-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-xl">

        <div className="text-center mb-10">
          <h1
            className="text-4xl md:text-4xl font-bold text-muted mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Forgot Your Password?
          </h1>
          <p className="text-muted/70 text-base">
            No worries. Enter your email and we'll send you a OTP to reset your password.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-muted text-base font-medium mb-2"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full bg-transparent border border-primary/60 rounded-lg px-4 py-6 text-muted placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/80 text-muted font-semibold py-6 rounded-lg transition-colors"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-muted/70 text-sm">
            Need help? Contact our support team at <br />
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

export default ForgotPasswordForm;
