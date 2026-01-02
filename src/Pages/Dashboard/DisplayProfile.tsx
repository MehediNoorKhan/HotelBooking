import { User, Phone, Mail, MapPin } from "lucide-react";

interface DisplayProfileProps {
  profileData: any;
  setIsEditing: (val: boolean) => void;
}


export default function DisplayProfile({
  profileData,
  setIsEditing,
}: DisplayProfileProps) {



  return (
    <>
    <div>

   
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-[136px] h-[136px] rounded-full bg-foreground/50 overflow-hidden mb-3">
            <img
              src={profileData.profile_image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-1.5 bg-primary hover:bg-primary/80 rounded-4xl text-muted text-sm font-medium transition-colors"
          >
            Edit Information
          </button>
        </div>

        <div className="flex-1"></div>

        <div className="border border-gray-700 rounded-lg p-4 md:w-80">
          <h3 className="text-sm font-semibold">Emergency Contact</h3>
          <div className="h-0.5 w-14 bg-primary mb-6" />
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 mt-1 text-primary" />
              <div>
                <p className="text-sm text-primary">Contact Name</p>
                <p className="text-xs">
                  {profileData.emaergency_contact_name || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-primary" />
              <div>
                <p className="text-sm text-primary">Phone Number</p>
                <p className="text-xs">
                  {profileData.emaergency_contact_number || "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="flex items-center gap-3 text-gray-300 ">
          <User className="text-primary w-5 h-5" />
          <div>
            <p className="text-base text-primary">Name</p>
            <p className="text-sm text-muted">
              {profileData.first_name} {profileData.last_name}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:gap-40  gap-6">
        <div className="flex items-center gap-3 text-gray-300">
          <Mail className="text-primary w-5 h-5" />
          <div>
            <p className="text-base text-primary">Email Address</p>
            <p className="text-sm text-muted">{profileData.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <Phone className="text-primary w-5 h-5" />
          <div>
            <p className="text-base text-primary">Phone Number</p>
            <p className="text-sm text-muted">{profileData.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-3  text-gray-300">
          <MapPin className="text-primary w-5 h-5" />
          <div>
            <p className="text-base text-primary">Address</p>
            <p className="text-sm text-muted">{profileData.address}</p>
          </div>
        </div>
        <div>
        </div>
      </div>
       </div>
    </>
  );
}
