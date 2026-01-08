import React, { useMemo } from "react";

type Props = {
  src?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
  onClick?: () => void;
  alt?: string;
};

const Avatar: React.FC<Props> = ({ src, name, size = 40, className = "", onClick, alt }) => {
  const initials = useMemo(() => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "?";
    return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
  }, [name]);

  const container = (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full border border-slate-200 bg-white flex items-center justify-center text-sm font-bold text-slate-700 overflow-hidden ${className}`}
      onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? name ?? "Avatar"}
          className="object-cover w-full h-full"
          draggable={false}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );

  return onClick ? (
    <button type="button" onClick={onClick} className="p-0">
      {container}
    </button>
  ) : (
    container
  );
};

export default Avatar;
