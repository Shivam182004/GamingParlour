import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GamingCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  alt: string;
}

export function GamingCard({ title, description, image, features, alt }: GamingCardProps) {
  return (
    <div className="group bg-background/50 rounded-xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-[0_0_15px_rgba(162,32,240,0.8)] transition-all duration-500 h-full hover:-translate-y-2">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature) => (
            <span 
              key={feature} 
              className="bg-primary/20 text-xs text-white px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        <Button
          asChild
          variant="default"
          className="bg-primary hover:bg-primary/80 text-white font-semibold px-4 py-2 rounded-full text-sm"
        >
          <a href="#pricing" className="flex items-center">
            View Pricing
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
