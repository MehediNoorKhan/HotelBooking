import type { PasswordForm } from "@/types";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

interface PasswordUpdateFormProps {
  formData: PasswordForm;
  errors: Partial<PasswordForm>;
  touched: Partial<Record<keyof PasswordForm, boolean>>;
  handlePasswordChange: (field: keyof PasswordForm, value: string) => void;
  handlePasswordBlur: (field: keyof PasswordForm) => void;
  handleUpdatePassword: (e: React.FormEvent) => void;
  showCurrentPassword: boolean;
  setShowCurrentPassword: (val: boolean) => void;
  showNewPassword: boolean;
  setShowNewPassword: (val: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (val: boolean) => void;
}

export default function PasswordUpdateForm({
  formData,
  errors,
  touched,
  handlePasswordChange,
  handlePasswordBlur,
  handleUpdatePassword,
  showCurrentPassword,
  setShowCurrentPassword,
  showNewPassword,
  setShowNewPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}: PasswordUpdateFormProps) {
  const renderPasswordField = (
    label: string,
    field: keyof PasswordForm,
    show: boolean,
    setShow: (val: boolean) => void
  ) => (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={label}
          value={formData[field]}
          onChange={(e) => handlePasswordChange(field, e.target.value)}
          onBlur={() => handlePasswordBlur(field)}
          className={`w-full bg-transparent border ${
            touched[field] && errors[field] ? "border-red-500" : "border-primary"
          } rounded px-4 py-2.5 pr-10 text-sm focus:border-primary/80 transition-colors`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {touched[field] && errors[field] && (
        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
          <AlertCircle className="w-3 h-3" />
          <span>{errors[field]}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="border border-background/50 p-5 rounded-[10px] bg-black">
    <div className="space-y-4">
      {renderPasswordField("Current Password", "currentPassword", showCurrentPassword, setShowCurrentPassword)}

      <div className="grid md:grid-cols-2 gap-4">
        {renderPasswordField("New Password", "newPassword", showNewPassword, setShowNewPassword)}
        {renderPasswordField("Confirm New Password", "confirmPassword", showConfirmPassword, setShowConfirmPassword)}
      </div>

      <button
        onClick={handleUpdatePassword}
        className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-md text-sm text-muted font-medium transition-colors"
      >
        Update Password
      </button>
    </div>
    </div>
  );
}
