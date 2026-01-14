import React from "react";

export default function AnimatedLogo() {
  return (
    <div className="flex items-center gap-1 group w-full h-full justify-center">
      {/* "M" Shape */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent drop-shadow-teralight"
      >
        <path
          d="M10 40V10L25 25L40 10V40"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
        />
      </svg>
      
      {/* "S" Shape */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent ml-[-12px] drop-shadow-teralight"
      >
        <path
          d="M38 15C38 10 12 10 12 20C12 30 38 30 38 40C38 50 12 50 12 45"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}