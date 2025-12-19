// import { useState } from "react";
// import { Eye, EyeOff, AlertCircle } from "lucide-react";

// export default function PasswordUpdateSection() {
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [touched, setTouched] = useState<Record<string, boolean>>({});

//   const validatePassword = (password: string) => {
//     const issues: string[] = [];
//     if (password.length < 8) issues.push("Password must be at least 8 characters");
//     if (!/[A-Z]/.test(password)) issues.push("Must contain at least one uppercase letter");
//     if (!/[a-z]/.test(password)) issues.push("Must contain at least one lowercase letter");
//     if (!/[0-9]/.test(password)) issues.push("Must contain at least one number");
//     return issues;
//   };

//   const validateField = (field: string, value: string) => {
//     const next = { ...errors };

//     if (field === "currentPassword") {
//       !value
//         ? (next.currentPassword = "Current password is required")
//         : delete next.currentPassword;
//     }

//     if (field === "newPassword") {
//       if (!value) {
//         next.newPassword = "New password is required";
//       } else {
//         const issues = validatePassword(value);
//         issues.length ? (next.newPassword = issues[0]) : delete next.newPassword;
//       }

//       if (formData.confirmPassword && value !== formData.confirmPassword) {
//         next.confirmPassword = "Passwords do not match";
//       }
//     }

//     if (field === "confirmPassword") {
//       if (!value) {
//         next.confirmPassword = "Please confirm your password";
//       } else if (value !== formData.newPassword) {
//         next.confirmPassword = "Passwords do not match";
//       } else {
//         delete next.confirmPassword;
//       }
//     }

//     setErrors(next);
//   };

//   const handleChange = (field: string, value: string) => {
//     setFormData((p) => ({ ...p, [field]: value }));
//     if (touched[field]) validateField(field, value);
//   };

//   const handleBlur = (field: string) => {
//     setTouched((p) => ({ ...p, [field]: true }));
//     validateField(field, formData[field as keyof typeof formData]);
//   };

//   const handleSubmit = () => {
//     setTouched({
//       currentPassword: true,
//       newPassword: true,
//       confirmPassword: true,
//     });

//     validateField("currentPassword", formData.currentPassword);
//     validateField("newPassword", formData.newPassword);
//     validateField("confirmPassword", formData.confirmPassword);

//     if (Object.keys(errors).length === 0) {
//       alert("Password updated successfully!");
//       setFormData({
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//       setTouched({});
//     }
//   };

//   return (
//     <div className="bg-black border border-border/50 rounded-lg p-6">
//       <h2 className="text-xl font-semibold">Password Update</h2>
//       <div className="h-0.5 w-14 bg-primary mb-6" />

//       <div className="space-y-4">
//         {/* Current Password */}
//         <PasswordField
//           label="Current Password"
//           value={formData.currentPassword}
//           show={showCurrentPassword}
//           error={touched.currentPassword && errors.currentPassword}
//           onToggle={() => setShowCurrentPassword((p) => !p)}
//           onChange={(v) => handleChange("currentPassword", v)}
//           onBlur={() => handleBlur("currentPassword")}
//         />

//         <div className="grid md:grid-cols-2 gap-4">
//           <PasswordField
//             label="New Password"
//             value={formData.newPassword}
//             show={showNewPassword}
//             error={touched.newPassword && errors.newPassword}
//             onToggle={() => setShowNewPassword((p) => !p)}
//             onChange={(v) => handleChange("newPassword", v)}
//             onBlur={() => handleBlur("newPassword")}
//           />

//           <PasswordField
//             label="Confirm New Password"
//             value={formData.confirmPassword}
//             show={showConfirmPassword}
//             error={touched.confirmPassword && errors.confirmPassword}
//             onToggle={() => setShowConfirmPassword((p) => !p)}
//             onChange={(v) => handleChange("confirmPassword", v)}
//             onBlur={() => handleBlur("confirmPassword")}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-md text-sm text-muted font-medium transition-colors"
//         >
//           Update Password
//         </button>
//       </div>
//     </div>
//   );
// }

// /* Internal helper – UI unchanged */
// function PasswordField({
//   label,
//   value,
//   show,
//   error,
//   onToggle,
//   onChange,
//   onBlur,
// }: any) {
//   return (
//     <div>
//       <label className="block text-sm mb-2">{label}</label>
//       <div className="relative">
//         <input
//           type={show ? "text" : "password"}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           onBlur={onBlur}
//           className={`w-full bg-transparent border ${
//             error ? "border-red-500" : "border-primary"
//           } rounded px-4 py-2.5 pr-10 text-sm`}
//         />
//         <button
//           type="button"
//           onClick={onToggle}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//         >
//           {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//         </button>
//       </div>

//       {error && (
//         <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
//           <AlertCircle className="w-3 h-3" />
//           <span>{error}</span>
//         </div>
//       )}
//     </div>
//   );
// }
