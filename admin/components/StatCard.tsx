import React from "react";

type Props = {
  title: string;
  value: React.ReactNode;
  helper?: string;
};

const StatCard: React.FC<Props> = ({ title, value, helper }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
      <p className="text-xs uppercase text-gray-500 font-bold">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value ?? "—"}</p>
      {helper && <p className="text-xs text-gray-500 mt-1">{helper}</p>}
    </div>
  );
};

export default StatCard;
