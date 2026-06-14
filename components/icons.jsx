import Image from "next/image";

// Small circular mark used as a bullet/accent (kept for ProductsGrid).
export function LogoMark({ className = "", fill = "#0D232B" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="10" cy="10" r="8" stroke={fill} strokeWidth="2" />
      <path
        d="M13.5 7.5L8.5 12.5L6.5 10.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// GIVEBACK logo lockup, renders the uploaded brand logo from /public.
// Keeps the same prop signature (className, color) so Header/Footer callers
// don't change. `color` is accepted but unused now that it's an image.
export function LogoLockup({ className = "", color }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/giveback-logo.png"
        alt="GIVEBACK $GBACK"
        width={150}
        height={42}
        priority
        style={{ height: 40, width: "auto" }}
      />
    </span>
  );
}

export function NavChevron({ className = "", stroke = "#5B6B70" }) {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 2L8 8L2 2"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "", stroke = "white" }) {
  return (
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5547 1.24414L30.3377 14.0272L17.0221 27.3428"
        stroke={stroke}
        strokeWidth="2.25974"
      />
      <line
        x1="0.871094"
        y1="14.2998"
        x2="30.0006"
        y2="14.2998"
        stroke={stroke}
        strokeWidth="2.25974"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "", stroke = "currentColor" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6M13.5 4.5V12"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
