import { cn } from "@/lib/utils";

export const IsoLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("w-16 h-16", className)}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="#333" strokeWidth="3" />
      <path
        d="M25,55 Q50,20 75,55"
        fill="none"
        stroke="#333"
        strokeWidth="3"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy=".3em"
        fontSize="12"
        fontWeight="bold"
        fill="#333"
      >
        ISO 9001
      </text>
      <text
        x="50"
        y="68"
        textAnchor="middle"
        dy=".3em"
        fontSize="8"
        fontWeight="bold"
        fill="#333"
      >
        CERTIFIED
      </text>
    </svg>
  );
};
