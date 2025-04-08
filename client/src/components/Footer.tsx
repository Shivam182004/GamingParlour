import { GamepadIcon } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const quickLinks = [
  { name: "Home", path: "#home" },
  { name: "Gaming Options", path: "#gaming-options" },
  { name: "Pricing", path: "#pricing" },
  { name: "Gallery", path: "#gallery" },
  { name: "About Us", path: "#about" },
  { name: "Contact", path: "#contact" }
];

const gamingServices = [
  { name: "PC Gaming", path: "#" },
  { name: "Console Gaming", path: "#" },
  { name: "VR Experience", path: "#" },
  { name: "Racing Simulators", path: "#" },
  { name: "Gaming Tournaments", path: "#" },
  { name: "Private Events", path: "#" }
];

const socialLinks = [
  {
    name: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
    url: "#"
  },
  {
    name: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    url: "#"
  },
  {
    name: "Twitter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    url: "#"
  },
  {
    name: "GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    url: "#"
  },
  {
    name: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    url: "#"
  }
];

export default function Footer() {
  return (
    <footer className="py-10 bg-background/90 border-t border-primary/20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <GamepadIcon className="text-primary w-8 h-8" />
              <h2 className="text-white text-xl font-bold ml-2 [text-shadow:_0_0_10px_rgba(162,32,240,0.7)]">
                NEBULA <span className="text-primary">GAMING</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-6">
              Providing the ultimate gaming experience with state-of-the-art equipment and premium environments.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  className="text-gray-400 hover:text-primary transition"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-gray-400 hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Gaming Services</h3>
            <ul className="space-y-2">
              {gamingServices.map((service) => (
                <li key={service.name}>
                  <a href={service.path} className="text-gray-400 hover:text-primary transition">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">123 Gaming Street, Tech City, CA 94107</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@nebulagaming.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary mr-3 mt-1">
                  <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.5806 2.37306 15.0897 3.04088 16.4332L2.03053 20.8315C1.94338 21.1887 2.15606 21.5405 2.51531 21.6251C2.59471 21.6451 2.67682 21.6513 2.75774 21.6437L7.1434 21.0693C8.47654 21.7223 9.96582 22.0835 11.5258 22.0972C11.6838 22.0991 11.8419 22.1 12.001 22.1C17.5239 22.1 22.001 17.6229 22.001 12.1C22.001 6.57715 17.5239 2.1 12.001 2ZM12.001 20.0171L11.9283 20.007C10.4337 19.9976 8.98548 19.6345 7.73274 18.958L7.31211 18.7215L4.7296 19.0793L5.09117 16.5441L4.84749 16.1131C4.15287 14.8551 3.78385 13.4065 3.78385 11.9171C3.78385 7.45455 7.46924 3.8285 12.0108 3.8285C16.5426 3.8285 20.2182 7.45455 20.2182 11.9171C20.2182 16.3796 16.5328 20.0171 12.001 20.0171ZM16.6742 14.0809C16.422 13.9522 15.1155 13.3243 14.8829 13.2383C14.6504 13.1522 14.48 13.1096 14.3096 13.3621C14.1393 13.6145 13.6442 14.1993 13.5064 14.37C13.3686 14.5407 13.2307 14.5619 12.9786 14.4332C12.7265 14.3044 11.8673 14.0322 10.8518 13.1307C10.0627 12.4272 9.54279 11.5593 9.40499 11.3068C9.26719 11.0544 9.38988 10.9257 9.51248 10.8078C9.62138 10.7025 9.75467 10.5334 9.87208 10.3953C9.98949 10.2572 10.0319 10.1499 10.1178 9.97924C10.2037 9.80859 10.1613 9.67042 10.0965 9.54175C10.0319 9.41307 9.52271 8.10356 9.30958 7.59865C9.1027 7.11014 8.8928 7.17225 8.74684 7.16318C8.60904 7.15412 8.43868 7.15259 8.26831 7.15259C8.09795 7.15259 7.82213 7.21733 7.58963 7.46979C7.35713 7.72225 6.68816 8.35015 6.68816 9.65966C6.68816 10.9692 7.61095 12.235 7.72836 12.4057C7.84577 12.5763 9.52422 15.198 12.1207 16.3248C12.8038 16.6227 13.3331 16.8037 13.7432 16.9408C14.4184 17.168 15.0337 17.1359 15.5221 17.0693C16.0666 16.9947 17.0535 16.4398 17.2668 15.8489C17.4799 15.258 17.4799 14.7531 17.4151 14.644C17.3504 14.5348 17.1801 14.4709 16.9276 14.3421L16.6742 14.0809Z"/>
                </svg>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition"
                >
                  WhatsApp Booking
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nebula Gaming. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
