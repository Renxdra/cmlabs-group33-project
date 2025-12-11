import React from "react";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  let bgClass = "bg-muted-foreground";
  if (status === "Active") bgClass = "bg-green-600";
  if (status === "Inactive") bgClass = "bg-red-500";
  if (status === "Onboarding") bgClass = "bg-blue-500";
  if (status === "On Leave") bgClass = "bg-yellow-500";

  return (
    <div className={`flex items-center gap-2 ${bgClass} text-white text-xs px-3 py-1 rounded-full w-fit`}>
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <span>{status}</span>
    </div>
  );
};