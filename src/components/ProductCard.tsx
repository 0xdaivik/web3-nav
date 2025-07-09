
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  icon?: React.ReactNode;
  isComingSoon?: boolean;
  onClick?: () => void;
  buttonLink?: string;
}

export const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  icon,
  isComingSoon = false,
  onClick,
  buttonLink
}: ProductCardProps) => {
  const handleButtonClick = () => {
    if (buttonLink) {
      window.open(buttonLink, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  if (isComingSoon) {
    return (
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/30 animate-fade-in">
        <div className="flex items-center justify-center h-48">
          <div className="text-center">
            <h3 className="text-white font-inter font-bold text-2xl">Coming Soon</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/50 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in group">
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-white font-inter font-bold text-xl mb-1">{title}</h3>
          <p className="text-blue-400 font-inter font-medium text-sm">{subtitle}</p>
        </div>
      </div>
      
      <p className="text-white/80 font-inter text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <Button
        onClick={handleButtonClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-inter font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group-hover:animate-glow"
      >
        {buttonText}
      </Button>
    </div>
  );
};
