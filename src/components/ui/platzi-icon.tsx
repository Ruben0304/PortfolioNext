interface PlatziIconProps {
  className?: string;
  size?: number;
}

export function PlatziIcon({ className = "", size = 24 }: PlatziIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      fill="none" 
      viewBox="0 0 21 26" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fill="currentColor" 
        fillRule="evenodd" 
        d="M9.314 3.277 2.01 10.639a3.49 3.49 0 0 0 0 4.908l7.305 7.363a3.424 3.424 0 0 0 4.87 0l2.435-2.454L14.184 18l-2.435 2.454-7.305-7.362 7.305-7.362 4.87 4.908-4.87 4.908L14.184 18l4.87-4.908a3.49 3.49 0 0 0 0-4.908l-4.87-4.908a3.424 3.424 0 0 0-4.87 0" 
        clipRule="evenodd"
      />
    </svg>
  );
}