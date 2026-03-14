import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="h-12 w-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg hover:shadow-warm transition-all duration-300">
        <div className="text-white font-bold text-base">
          SKF
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
          SHREE KALYANI
        </span>
        <span className="text-xs sm:text-sm text-primary font-semibold -mt-1">
          FOODS
        </span>
      </div>
    </Link>
  );
};

export default Logo;