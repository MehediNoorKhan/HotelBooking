import { Upload } from "lucide-react";
import { useRef } from "react";

interface Props {
  profileData: any;
  setProfileData: (data: any) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function ProfileEditSection({
  profileData,
  setProfileData,
  onCancel,
  onSubmit,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleProfileChange = (field: string, value: string) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData({ ...profileData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      {/* Profile Image Upload */}
      <div className="flex flex-col items-center">
        <div
          onClick={handleImageClick}
          className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group"
        >
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Upload className="w-6 h-6 text-white" />
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        <button
          onClick={handleImageClick}
          className="mt-3 px-4 py-1.5 bg-primary hover:bg-primary/80 rounded-full text-muted text-sm font-medium transition-colors"
        >
          Upload Image
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          value={profileData.firstName}
          onChange={(v) => handleProfileChange("firstName", v)}
        />
        <InputField
          label="Last Name"
          value={profileData.lastName}
          onChange={(v) => handleProfileChange("lastName", v)}
        />
        <InputField
          label="Email Address"
          type="email"
          value={profileData.email}
          onChange={(v) => handleProfileChange("email", v)}
        />
        <InputField
          label="Phone Number"
          value={profileData.phone}
          onChange={(v) => handleProfileChange("phone", v)}
        />
      </div>

      <InputField
        label="Address"
        value={profileData.address}
        onChange={(v) => handleProfileChange("address", v)}
      />

      {/* Emergency Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Contact Name"
            value={profileData.emergencyContactName}
            onChange={(v) =>
              handleProfileChange("emergencyContactName", v)
            }
          />
          <InputField
            label="Phone Number"
            value={profileData.emergencyContactPhone}
            onChange={(v) =>
              handleProfileChange("emergencyContactPhone", v)
            }
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg text-muted font-medium transition-colors"
        >
          Update Information
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-transparent border border-gray-700 hover:bg-gray-800 rounded-lg text-white font-medium transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/* Small internal helper — keeps design SAME */
function InputField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
      />
    </div>
  );
}
