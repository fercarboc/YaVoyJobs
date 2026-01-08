import React from "react";
import { JobStatus } from "@/types";

const STATUS_STYLES: Record<JobStatus, string> = {
  [JobStatus.DRAFT]: "bg-slate-100 text-slate-600",
  [JobStatus.OPEN]: "bg-emerald-100 text-emerald-700",
  [JobStatus.ASSIGNED]: "bg-indigo-100 text-indigo-700",
  [JobStatus.IN_PROGRESS]: "bg-amber-100 text-amber-700",
  [JobStatus.COMPLETED]: "bg-teal-100 text-teal-700",
  [JobStatus.CANCELLED]: "bg-rose-100 text-rose-700",
};

type Props = {
  status: JobStatus;
  className?: string;
};

const JobStatusBadge: React.FC<Props> = ({ status, className }) => {
  const style = STATUS_STYLES[status] ?? "bg-slate-100 text-slate-600";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${style} ${className ?? ""}`}
    >
      {status.replace(/_/g, " ")}
    </span>
  );
};

export default JobStatusBadge;
