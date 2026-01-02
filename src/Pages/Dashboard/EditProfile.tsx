import type { ProfileData } from "@/types";
import { Upload } from "lucide-react";
import { useState } from "react";

interface EditProfileProps {
  profileData: ProfileData;
  handleProfileChange: (
  field: keyof ProfileData,
  value: string | null
) => void;
  handleImageClick: () => void;
  handleImageChange: (file: File) => Promise<void>;
  handleUpdateProfile: () => Promise<void>;
  setIsEditing: (val: boolean) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  uploadingImage: boolean;
  updatingProfile: boolean;
}

export default function EditProfile({
  profileData,
  handleProfileChange,
  handleImageClick,
  handleImageChange,
  handleUpdateProfile,
  setIsEditing,
  fileInputRef,
}: EditProfileProps) {
  const [loadingImage, setLoadingImage] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoadingImage(true);
    await handleImageChange(file);
    setLoadingImage(false);
  };

  const backendFields = [
    { label: "First Name", key: "first_name", value: profileData.first_name, placeholder: "Alex" },
    { label: "Last Name", key: "last_name", value: profileData.last_name, placeholder: "Johnson" },
    { label: "Phone Number", key: "phone", value: profileData.phone, placeholder: "+9854 54214 5325" },
    { label: "Address", key: "address", value: profileData.address, placeholder: "New York, NY" },
    { label: "Emergency Contact Name", key: "emaergency_contact_name", value: profileData.emaergency_contact_name, placeholder: "Alex Johnson" },
    { label: "Emergency Contact Phone", key: "emaergency_contact_number", value: profileData.emaergency_contact_number, placeholder: "+9854 54214 5325" },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Image */}
      <div className="flex flex-col items-start">
        <div
          onClick={handleImageClick}
          className="w-[136px] h-[136px] rounded-full bg-gray-700 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group"
        >
          <img
            src={profileData.profile_image as string}
            alt="Profile"
            className={`w-full h-full object-cover ${loadingImage ? "opacity-50" : ""}`}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Upload className="w-6 h-6 text-white" />
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleImageClick}
          className="w-[136px] mt-3 px-4 py-1.5 bg-primary hover:bg-primary/80 rounded-full text-muted text-sm font-medium transition-colors"
        >
          {loadingImage ? "Uploading..." : "Upload Image"}
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {backendFields.map(({ label, key, value, placeholder }) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              value={value || ""}
              onChange={(e) => handleProfileChange(key as keyof ProfileData, e.target.value)}
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleUpdateProfile}
          className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg text-muted font-medium transition-colors"
        >
          Update Information
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="px-6 py-2 bg-transparent border border-gray-700 hover:bg-gray-800 rounded-lg text-white font-medium transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
