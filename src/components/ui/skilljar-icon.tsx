interface SkilljarIconProps {
  className?: string;
  size?: number;
}

export function SkilljarIcon({ className = "", size = 24 }: SkilljarIconProps) {
  return (
    <div 
      className={`flex items-center justify-center bg-blue-600 text-white font-bold rounded ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      S
    </div>
  );
}