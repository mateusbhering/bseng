import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className }: LogoProps) {
  const ink = variant === "dark" ? "text-ink" : "text-white";
  const sub = variant === "dark" ? "text-gray" : "text-white/60";

  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 shrink-0 rounded-full object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-bold tracking-tight ${ink}`}>
          Beltrão Santos
        </span>
        <span className={`mt-1 font-mono text-[9px] tracking-[0.28em] uppercase ${sub}`}>
          Engenharia
        </span>
      </span>
    </span>
  );
}
