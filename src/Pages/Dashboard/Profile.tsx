// import { useState, useRef } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Eye,
//   EyeOff,
//   AlertCircle,
//   Upload,
// } from "lucide-react";
// import DashboardLayout from "@/_Components/Dashboard/DashboardLayout";

// export default function ProfileSettings() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const fileInputRef = useRef(null);

//   const [profileData, setProfileData] = useState({
//     firstName: "Alex",
//     lastName: "Johnson",
//     email: "alexj@email.com",
//     phone: "+8854 54214 5325",
//     address: "New York, NY",
//     emergencyContactName: "Alex Johnson",
//     emergencyContactPhone: "+8854 54214 5325",
//     profileImage:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
//   });

//   const [formData, setFormData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const validatePassword = (password) => {
//     const errors = [];
//     if (password.length < 8) {
//       errors.push("Password must be at least 8 characters");
//     }
//     if (!/[A-Z]/.test(password)) {
//       errors.push("Must contain at least one uppercase letter");
//     }
//     if (!/[a-z]/.test(password)) {
//       errors.push("Must contain at least one lowercase letter");
//     }
//     if (!/[0-9]/.test(password)) {
//       errors.push("Must contain at least one number");
//     }
//     return errors;
//   };

//   const handleBlur = (field) => {
//     setTouched({ ...touched, [field]: true });
//     validateField(field, formData[field]);
//   };

//   const validateField = (field, value) => {
//     const newErrors = { ...errors };

//     switch (field) {
//       case "currentPassword":
//         if (!value) {
//           newErrors.currentPassword = "Current password is required";
//         } else {
//           delete newErrors.currentPassword;
//         }
//         break;

//       case "newPassword":
//         if (!value) {
//           newErrors.newPassword = "New password is required";
//         } else {
//           const passwordErrors = validatePassword(value);
//           if (passwordErrors.length > 0) {
//             newErrors.newPassword = passwordErrors[0];
//           } else {
//             delete newErrors.newPassword;
//           }
//         }
//         if (formData.confirmPassword && value !== formData.confirmPassword) {
//           newErrors.confirmPassword = "Passwords do not match";
//         } else if (formData.confirmPassword) {
//           delete newErrors.confirmPassword;
//         }
//         break;

//       case "confirmPassword":
//         if (!value) {
//           newErrors.confirmPassword = "Please confirm your password";
//         } else if (value !== formData.newPassword) {
//           newErrors.confirmPassword = "Passwords do not match";
//         } else {
//           delete newErrors.confirmPassword;
//         }
//         break;
//     }

//     setErrors(newErrors);
//   };

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//     if (touched[field]) {
//       validateField(field, value);
//     }
//   };

//   const handleProfileChange = (field, value) => {
//     setProfileData({ ...profileData, [field]: value });
//   };

//   const handleImageClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData({ ...profileData, profileImage: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUpdateProfile = () => {
//     console.log("Updating profile:", profileData);
//     // Add your API call here
//     setIsEditing(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setTouched({
//       currentPassword: true,
//       newPassword: true,
//       confirmPassword: true,
//     });

//     const newErrors = {};

//     if (!formData.currentPassword) {
//       newErrors.currentPassword = "Current password is required";
//     }

//     if (!formData.newPassword) {
//       newErrors.newPassword = "New password is required";
//     } else {
//       const passwordErrors = validatePassword(formData.newPassword);
//       if (passwordErrors.length > 0) {
//         newErrors.newPassword = passwordErrors[0];
//       }
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.confirmPassword !== formData.newPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
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
//     <DashboardLayout>
//       <div className="min-h-screen text-white p-8">
//         <div className="mx-auto">
//           <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
//           <p className="text-muted/50 mb-8">
//             Manage your personal information and account preferences
//           </p>

//           {/* Personal Information Section */}
//           <div className="bg-black border border-border/50 rounded-lg p-6 mb-6">
//             <h2 className="text-xl font-semibold">Personal Informations</h2>
//             <div className="h-0.5 w-14 bg-primary mb-6" />

//             {!isEditing ? (
//               <>
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <div className="flex flex-col items-center md:items-start">
//                     <div className="w-[136px] h-[136px] rounded-full bg-foreground/50 overflow-hidden mb-3">
//                       <img
//                         src={profileData.profileImage}
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <button
//                       onClick={() => setIsEditing(true)}
//                       className="px-4 py-1.5 bg-primary hover:bg-primary/80 rounded-4xl text-muted text-sm font-medium transition-colors"
//                     >
//                       Edit Information
//                     </button>
//                   </div>

//                   <div className="flex-1"></div>

//                   <div className="border border-gray-700 rounded-lg p-4 md:w-80">
//                     <h3 className="text-sm font-semibold">Emergency Contact</h3>
//                     <div className="h-0.5 w-14 bg-primary mb-6" />
//                     <div className="space-y-3">
//                       <div className="flex items-start gap-3">
//                         <User className="w-5 h-5 mt-1 text-primary" />
//                         <div>
//                           <p className="text-sm text-primary">Contact Name</p>
//                           <p className="text-xs">
//                             {profileData.emergencyContactName}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-3">
//                         <Phone className="w-5 h-5 mt-1 text-primary" />
//                         <div>
//                           <p className="text-sm text-primary">Phone Number</p>
//                           <p className="text-xs">
//                             {profileData.emergencyContactPhone}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="my-5">
//                   <div className="flex items-center gap-3 text-gray-300 ">
//                     <User className="text-primary w-5 h-5" />
//                     <div>
//                       <p className="text-base text-primary">Name</p>
//                       <p className="text-sm text-muted">
//                         {profileData.firstName} {profileData.lastName}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-x-80 space-y-4">
//                   <div className="flex items-center gap-3 text-gray-300">
//                     <Mail className="text-primary w-5 h-5" />
//                     <div>
//                       <p className="text-base text-primary">Email Address</p>
//                       <p className="text-sm text-muted">{profileData.email}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 text-gray-300">
//                     <Phone className="text-primary w-5 h-5" />
//                     <div>
//                       <p className="text-base text-primary">Phone Number</p>
//                       <p className="text-sm text-muted">{profileData.phone}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 text-gray-300">
//                     <MapPin className="text-primary w-5 h-5" />
//                     <div>
//                       <p className="text-base text-primary">Address</p>
//                       <p className="text-sm text-muted">
//                         {profileData.address}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               /* Edit Form */
//               <div className="space-y-6">
//                 {/* Profile Image Upload */}
//                 <div className="flex flex-col items-start ">
//                   <div
//                     onClick={handleImageClick}
//                     className="w-[136px] h-[136px] rounded-full bg-gray-700 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group"
//                   >
//                     <img
//                       src={profileData.profileImage}
//                       alt="Profile"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                       <Upload className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                   <button
//                     onClick={handleImageClick}
//                     className="w-[136px] mt-3 px-4 py-1.5 bg-primary hover:bg-primary/80 rounded-full text-muted text-sm font-medium transition-colors"
//                   >
//                     Upload Image
//                   </button>
//                 </div>

//                 {/* Form Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Alex"
//                       value={profileData.firstName}
//                       onChange={(e) =>
//                         handleProfileChange("firstName", e.target.value)
//                       }
//                       className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Johnson"
//                       value={profileData.lastName}
//                       onChange={(e) =>
//                         handleProfileChange("lastName", e.target.value)
//                       }
//                       className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="alex.jo@email.com"
//                       value={profileData.email}
//                       onChange={(e) =>
//                         handleProfileChange("email", e.target.value)
//                       }
//                       className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="+9854 54214 5325"
//                       value={profileData.phone}
//                       onChange={(e) =>
//                         handleProfileChange("phone", e.target.value)
//                       }
//                       className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="New York, NY"
//                     value={profileData.address}
//                     onChange={(e) =>
//                       handleProfileChange("address", e.target.value)
//                     }
//                     className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                   />
//                 </div>

//                 {/* Emergency Contact */}
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">
//                     Emergency Contact
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">
//                         Contact Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Alex Johnson"
//                         value={profileData.emergencyContactName}
//                         onChange={(e) =>
//                           handleProfileChange(
//                             "emergencyContactName",
//                             e.target.value
//                           )
//                         }
//                         className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-2">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         placeholder="+9854 54214 5325"
//                         value={profileData.emergencyContactPhone}
//                         onChange={(e) =>
//                           handleProfileChange(
//                             "emergencyContactPhone",
//                             e.target.value
//                           )
//                         }
//                         className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleUpdateProfile}
//                     className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg text-muted font-medium transition-colors"
//                   >
//                     Update Information
//                   </button>
//                   <button
//                     onClick={() => setIsEditing(false)}
//                     className="px-6 py-2 bg-transparent border border-gray-700 hover:bg-gray-800 rounded-lg text-white font-medium transition-colors"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Password Update Section */}
//           <div className="bg-black border border-border/50 rounded-lg p-6">
//             <h2 className="text-xl font-semibold">Password Update</h2>
//             <div className="h-0.5 w-14 bg-primary mb-6" />

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm mb-2">Current Password</label>
//                 <div className="relative">
//                   <input
//                     type={showCurrentPassword ? "text" : "password"}
//                     placeholder="Current password"
//                     value={formData.currentPassword}
//                     onChange={(e) =>
//                       handleChange("currentPassword", e.target.value)
//                     }
//                     onBlur={() => handleBlur("currentPassword")}
//                     className={`w-full bg-transparent border ${
//                       touched.currentPassword && errors.currentPassword
//                         ? "border-red-500"
//                         : "border-primary"
//                     } rounded px-4 py-2.5 pr-10 text-sm focus:border-primary/80 transition-colors`}
//                   />
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowCurrentPassword(!showCurrentPassword)
//                     }
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
//                   >
//                     {showCurrentPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//                 {touched.currentPassword && errors.currentPassword && (
//                   <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
//                     <AlertCircle className="w-3 h-3" />
//                     <span>{errors.currentPassword}</span>
//                   </div>
//                 )}
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm mb-2">New Password</label>
//                   <div className="relative">
//                     <input
//                       type={showNewPassword ? "text" : "password"}
//                       placeholder="New password"
//                       value={formData.newPassword}
//                       onChange={(e) =>
//                         handleChange("newPassword", e.target.value)
//                       }
//                       onBlur={() => handleBlur("newPassword")}
//                       className={`w-full bg-transparent border ${
//                         touched.newPassword && errors.newPassword
//                           ? "border-red-500"
//                           : "border-primary"
//                       } rounded px-4 py-2.5 pr-10 text-sm focus:outline-none transition-colors`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowNewPassword(!showNewPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
//                     >
//                       {showNewPassword ? (
//                         <EyeOff className="w-4 h-4" />
//                       ) : (
//                         <Eye className="w-4 h-4" />
//                       )}
//                     </button>
//                   </div>
//                   {touched.newPassword && errors.newPassword && (
//                     <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
//                       <AlertCircle className="w-3 h-3" />
//                       <span>{errors.newPassword}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm mb-2">
//                     Confirm New Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       placeholder="Confirm Password"
//                       value={formData.confirmPassword}
//                       onChange={(e) =>
//                         handleChange("confirmPassword", e.target.value)
//                       }
//                       onBlur={() => handleBlur("confirmPassword")}
//                       className={`w-full bg-transparent border ${
//                         touched.confirmPassword && errors.confirmPassword
//                           ? "border-red-500"
//                           : "border-primary"
//                       } rounded px-4 py-2.5 pr-10 text-sm focus:outline-none transition-colors`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="w-4 h-4" />
//                       ) : (
//                         <Eye className="w-4 h-4" />
//                       )}
//                     </button>
//                   </div>
//                   {touched.confirmPassword && errors.confirmPassword && (
//                     <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
//                       <AlertCircle className="w-3 h-3" />
//                       <span>{errors.confirmPassword}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-md text-sm text-muted font-medium transition-colors"
//               >
//                 Update Password
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }