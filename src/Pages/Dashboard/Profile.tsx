import { useState, useRef, useEffect } from "react";
import DisplayProfile from "./DisplayProfile";
import EditProfile from "./EditProfile";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateProfileImageMutation,
  useUpdateProfilePasswordMutation,
} from "@/features/user/userAPI";
import type { PasswordForm, ProfileData } from "@/types";
import PasswordUpdateForm from "./PasswordUpdateForm";
import { toast } from "sonner";

export default function ProfileSettings() {
  const [updateProfilePassword] =
  useUpdateProfilePasswordMutation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const { data, isLoading, isError } = useGetUserProfileQuery();
  const [updateProfile, { isLoading: updatingProfile }] =
    useUpdateUserProfileMutation();
  const [updateProfileImage, { isLoading: uploadingImage }] =
    useUpdateProfileImageMutation();
console.log(data);
  const [profileData, setProfileData] = useState<ProfileData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    emaergency_contact_name: "",
    emaergency_contact_number: "",
    profile_image: data?.image ?? "/images/avatar-placeholder.png",
  });

// Update Password
const [passwordForm, setPasswordForm] = useState<PasswordForm>({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const [errors, setErrors] = useState<Partial<PasswordForm>>({});
const [touched, setTouched] = useState<
  Partial<Record<keyof PasswordForm, boolean>>
>({});

const [showCurrentPassword, setShowCurrentPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handlePasswordChange = (
  field: keyof PasswordForm,
  value: string
) => {
  setPasswordForm((prev) => ({ ...prev, [field]: value }));
};

const handlePasswordBlur = (field: keyof PasswordForm) => {
  setTouched((prev) => ({ ...prev, [field]: true }));
};

const handleUpdatePassword = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors: Partial<PasswordForm> = {};
  if (!passwordForm.currentPassword) newErrors.currentPassword = "Current password is required";
  if (!passwordForm.newPassword) newErrors.newPassword = "New password is required";
  if (passwordForm.newPassword !== passwordForm.confirmPassword)
    newErrors.confirmPassword = "Passwords do not match";

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  try {
    const formData = new FormData();
    formData.append("current_password", passwordForm.currentPassword);
    formData.append("new_password", passwordForm.newPassword);
    formData.append("new_password_confirmation", passwordForm.confirmPassword);

    await updateProfilePassword(formData).unwrap();
    toast.success("Password updated successfully!");

    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setTouched({});
  } catch (err: any) {
    console.error("Password update failed", err);
    toast.error(err?.data?.message || "Password update failed");
  }
};



  /* --------------------------------------------
   Populate data from backend
  ---------------------------------------------*/
  useEffect(() => {
    if (!data) return;

    setProfileData({
      first_name: data.first_name ?? "",
      last_name: data.last_name ?? "",
      email: data.email ?? "",
      phone: data.phone ?? "",
      address: data.address ?? "",
      emaergency_contact_name: data.emaergency_contact_name ?? "",
      emaergency_contact_number: data.emaergency_contact_number ?? "",
      profile_image: data.image ?? "/images/avatar-placeholder.png",
    });
  }, [data]);

  /* --------------------------------------------
   Handlers
  ---------------------------------------------*/
  const handleProfileChange = (
  field: keyof ProfileData,
  value: string | null
) => {
  setProfileData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageChange = async (file: File) => {
    const formData = new FormData();
    formData.append("profile_image", file);

    try {
      const result = await updateProfileImage(formData).unwrap();

      setProfileData((prev) => ({
        ...prev,
        profile_image: result?.image,
      }));
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("first_name", profileData.first_name);
      formData.append("last_name", profileData.last_name);
      formData.append("phone", profileData.phone);
      formData.append("address", profileData.address);
      formData.append(
        "emaergency_contact_name",
        profileData.emaergency_contact_name
      );
      formData.append(
        "emaergency_contact_number",
        profileData.emaergency_contact_number
      );

      await updateProfile(formData).unwrap();
      setIsEditing(false);
    } catch (err) {
      console.error("Profile update failed", err);
    }
  };

  /* --------------------------------------------
   UI States
  ---------------------------------------------*/
  if (isLoading) {
    return (
     
        <div className="p-8 text-muted">Loading profile...</div>
    
    );
  }

  if (isError) {
    return (
     
        <div className="p-8 text-red-500">Failed to load profile</div>
      
    );
  }

  return (
      <div className="min-h-screen text-white p-8">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-muted/50 mb-8">
            Manage your personal information and account preferences
          </p>

          <div className="bg-black border border-border/50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className="h-0.5 w-14 bg-primary mb-6" />

            {!isEditing ? (
              <DisplayProfile
                profileData={profileData}
                setIsEditing={setIsEditing}
              />
            ) : (
              <EditProfile
                profileData={profileData}
                handleProfileChange={handleProfileChange}
                handleImageClick={handleImageClick}
                handleImageChange={handleImageChange}
                handleUpdateProfile={handleUpdateProfile}
                setIsEditing={setIsEditing}
                fileInputRef={fileInputRef}
                uploadingImage={uploadingImage}
                updatingProfile={updatingProfile}
              />
            )}
          </div>
        </div>
        <PasswordUpdateForm
  formData={passwordForm}
  errors={errors}
  touched={touched}
  handlePasswordChange={handlePasswordChange}
  handlePasswordBlur={handlePasswordBlur}
  handleUpdatePassword={handleUpdatePassword}
  showCurrentPassword={showCurrentPassword}
  setShowCurrentPassword={setShowCurrentPassword}
  showNewPassword={showNewPassword}
  setShowNewPassword={setShowNewPassword}
  showConfirmPassword={showConfirmPassword}
  setShowConfirmPassword={setShowConfirmPassword}
/>
      </div>
  );
}
