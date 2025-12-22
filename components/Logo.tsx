import NextImage from "next/image";

export default function Logo({ ...rest }) {
  return (
    <div className="relative w-44 h-28 sm:w-56 sm:h-36 md:w-72 md:h-48" {...rest}>
      <NextImage
        src="/logos/LOGO.png"
        alt="logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
