import { ReactNode, HTMLAttributes } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const headingStyles = {
  h1: "text-[2em] lg:text-[3em] font-normal leading-[3.5rem]",
  h2: "text-[1.5em] lg:text-[2em] font-normal leading-[3rem]",
  h3: "text-xl font-semibold leading-[2rem]",
  h4: "text-lg font-semibold leading-[1.5rem]",
};

const Typo = ({
  level,
  className,
  children,
  ...props
}) => {
  const classes = `text-white-900 ${poppins.className} ${headingStyles[level]} ${className}`;
  return (
    <div className={classes} {...props}>
      <div className="sr-only">{children}</div>
      {children}
    </div>
  );
};

const h1 = ({ children, isGradient, className, ...props }) => (
  <Typo
    level="h1"
    className={`${isGradient ? "bg-gradient-to-r from-[#414443] via-[#0D9999] to-[#12CCCC] text-transparent bg-clip-text" : "text-black"} ${className}`}
    {...props}
  >
    {children}
  </Typo>
);

const h2 = ({ children, isGradient, className, ...props }) => (
  <Typo
    level="h2"
    className={`${isGradient ? "bg-gradient-to-r from-[#414443] via-[#0D9999] to-[#12CCCC] text-transparent bg-clip-text" : "text-black"} ${className}`}
    {...props}
  >
    {children}
  </Typo>
);

const h3 = ({ children, isGradient, className, ...props }) => (
  <Typo level="h3" className={`${isGradient ? "bg-gradient-to-r from-[#414443] via-[#0D9999] to-[#12CCCC] text-transparent bg-clip-text" : "text-black"} ${className}`} {...props}>
    {children}
  </Typo>
);

const h4 = ({ children, isGradient, className, ...props }) => (
  <Typo level="h4" className={`${isGradient ? "bg-gradient-to-r from-[#414443] via-[#0D9999] to-[#12CCCC] text-transparent bg-clip-text" : "text-black"} ${className}`} {...props}>
    {children}
  </Typo>
);

const p = ({ children, className, isGray, ...props }) => {
  return isGray ? (
    <>
      <p
        {...props}
        className={`text-base text-gray-400 ${poppins.className} ${className}`}
      >
        {children}
      </p>
      <p {...props} className="sr-only">
        {children}
      </p>
    </>
  ) : (
    <>
      <p
        {...props}
        className={`text-base text-neutral-800 ${poppins.className} ${className}`}
      >
        {children}
      </p>
      <p {...props} className="sr-only">
        {children}
      </p>
    </>
  );
};

const s = ({ children, isGray, className, ...props }) => {
  return isGray ? (
    <>
      <p
        {...props}
        className={`text-gray-400 text-[0.75em] ${poppins.className} ${className}`}
      >
        {children}
      </p>
      <p {...props} className="sr-only">
        {children}
      </p>
    </>
  ) : (
    <>
      <p
        {...props}
        className={`text-neutral-800 text-[0.75em] ${poppins.className} ${className}`}
      >
        {children}
      </p>
      <p {...props} className="sr-only">
        {children}
      </p>
    </>
  );
};

export default function Typography() {
  return <p></p>;
}

Typography.h1 = h1;
Typography.h2 = h2;
Typography.h3 = h3;
Typography.h4 = h4;
Typography.p = p;
Typography.s = s;
