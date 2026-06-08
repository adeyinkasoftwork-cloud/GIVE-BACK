// Exact SVG paths lifted from Onramper's asset files (logo-mark.svg, icon-nav-arrow.svg, arrow.svg).

export function LogoMark({ className = "", fill = "#151515" }) {
  return (
    <svg
      width="48"
      height="27"
      viewBox="0 0 48 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34.9929 0.988281C42.1317 0.988281 47.9171 6.72233 47.9171 13.7978C47.9171 20.8733 42.1317 26.5606 34.9929 26.5606H12.877C5.73816 26.5597 0 20.8724 0 13.7978C0 6.7232 5.73816 0.988281 12.877 0.988281H34.9929ZM25.8003 13.7978C25.8003 18.8846 29.8598 22.8612 34.9912 22.8612C40.1226 22.8612 44.182 18.8846 44.182 13.7978C44.182 8.7111 40.0762 4.68851 34.9912 4.68851C29.9061 4.68851 25.8003 8.75789 25.8003 13.7978ZM22.1142 13.7978C22.1142 10.2371 23.5603 7.0005 25.893 4.68851H23.9336C18.8014 4.68851 14.7428 8.75789 14.7428 13.7978C14.7428 18.8378 18.6152 22.6766 23.5612 22.8612H25.8939C23.5594 20.5492 22.1133 17.3585 22.1133 13.7978H22.1142ZM3.68613 13.7978C3.68613 18.8378 7.7456 22.8612 12.877 22.8612H14.8363C12.5037 20.5492 11.0575 17.3585 11.0575 13.7978C11.0575 10.2371 12.5037 7.0005 14.8363 4.68851H12.877C7.74473 4.68851 3.68613 8.75789 3.68613 13.7978Z"
        fill={fill}
      />
    </svg>
  );
}

// Full lockup: mark + "onramper" wordmark in Saans
export function LogoLockup({ className = "", color = "#151515" }) {
  return (
    <div className={`flex items-center gap-[6px] ${className}`}>
      <LogoMark className="h-[20px] w-auto" fill={color} />
      <span
        className="font-saans text-[27px] font-medium leading-none tracking-[-0.5px]"
        style={{ color }}
      >
        onramper
      </span>
    </div>
  );
}

export function NavChevron({ className = "", stroke = "#808099" }) {
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

// Diagonal up-right arrow used in "Read Report ↗" and product card corner buttons
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
