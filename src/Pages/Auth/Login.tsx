import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginFormData } from "@/types/schema";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { loginUser } from "@/features/auth/authThunk";
import { toast } from "sonner";


interface LoginPageProps {
  onSignIn?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
}

export default function LoginPage({
  onForgotPassword,
}: LoginPageProps = {}) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {  isAuthenticated } = useAppSelector(s => s.auth);

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 const onSubmit = async (data: LoginFormData) => {
    const result = await dispatch(loginUser({ email: data.email, password: data.password }));

    if (loginUser.fulfilled.match(result)) {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error(result.payload as string || "Login failed");
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-foreground text-muted flex items-center justify-center">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Welcome Back</h1>
          <p className="text-muted/70">
            Sign in the access your booking, inquiries, and account details.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-muted text-sm mb-2">
                    Email
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-transparent border border-primary/50 text-muted placeholder:text-muted/40
                                 focus:border-border/80"
                    />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-muted text-sm mb-2">
                    Password
                  </label>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="bg-transparent border border-primary/50 text-muted placeholder:text-muted/40
                                   focus:border-primary/80 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/50 hover:text-muted/40"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-primary"/>
                </FormItem>
              )}
            />

            {/* Forgot password */}
            <div className="text-left">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-muted hover:text-muted/60 text-sm transition-colors"
              >
                Forgot your password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-muted font-medium py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>

            {/* Sign up */}
            <div className="text-center">
              <span className="text-muted/50">Don't have an account? </span>
              <Link
                to="/signup"
                className="text-muted hover:text-muted/80 font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>

          </form>
        </Form>
      </div>
    </div>
  );
}
