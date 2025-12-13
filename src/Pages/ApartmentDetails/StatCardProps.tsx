import React from "react";

interface StatCardProps {
  icon: React.ReactNode; 
  label: string;
  value?: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 flex-1 min-w-[242px] h-[55px] bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5">
      <div className="text-[24px]">{icon}</div>
      <div className="flex flex-col">
        <div className="text-muted text-[16px] font-normal leading-[120%] mb-1">{label}</div>
        <div className="text-muted text-[12px] font-normal leading-[120%]">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
