import { cn } from "@/lib/utils";

export const IsoLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("w-16 h-16", className)}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M30 50 L45 65 L70 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="25"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="currentColor"
      >
        ISO 9001
      </text>
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="currentColor"
      >
        CERTIFIED
      </text>
    </svg>
  );
};
