import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const pricingPlans = [
  {
    title: "Standard Gaming",
    description: "Perfect for casual gamers looking to experience premium gaming setups.",
    price: 15,
    period: "hour",
    features: [
      "PC or Console Gaming",
      "Standard Peripherals",
      "Free Beverage",
      "Access to Game Library"
    ],
    cta: "Book Now",
    popular: false
  },
  {
    title: "Premium Experience",
    description: "Enhanced gaming with access to all our gaming platforms and extras.",
    price: 25,
    period: "hour",
    features: [
      "All Gaming Platforms (PC, Console, VR)",
      "Premium Peripherals",
      "Free Snacks & Beverages",
      "Priority Booking",
      "Full Game Library Access"
    ],
    cta: "Book Now",
    popular: true
  },
  {
    title: "Monthly Membership",
    description: "Unlimited access for serious gamers who want the best value.",
    price: 199,
    period: "month",
    features: [
      "30 Hours of Gaming per Month",
      "Access to All Gaming Platforms",
      "Unlimited Snacks & Beverages",
      "Exclusive Member Events",
      "10% Discount for Friends"
    ],
    cta: "Join Now",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background/95 to-background relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_0_10px_rgba(162,32,240,0.7)]">
            PRICING <span className="text-primary">OPTIONS</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Choose the perfect gaming package that fits your needs, from hourly sessions to premium memberships.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className={`transition-all duration-500 ${plan.popular ? 'transform lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-background/50 rounded-xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-[0_0_10px_rgba(162,32,240,0.5)] transition-all duration-500">
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-1 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.title}</h3>
                  <p className="text-gray-300 mb-5">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-primary text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-300 ml-1">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={`w-full bg-primary hover:bg-primary/80 text-white font-semibold rounded-full 
                      ${plan.popular ? 'shadow-[0_0_10px_rgba(162,32,240,0.5),_0_0_20px_rgba(162,32,240,0.3)]' : ''}`}
                  >
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300">Looking for group bookings or special events? Contact us for custom pricing.</p>
          <a href="#contact" className="text-primary hover:text-primary/80 font-medium mt-2 inline-block">
            Get Custom Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
