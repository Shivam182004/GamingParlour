import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demonstration, just show a success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/95 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_0_10px_rgba(162,32,240,0.7)]">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Have questions or want to book a session? Reach out to us through any of these channels.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Location</h3>
                  <p className="text-gray-300">123 Gaming Street, Tech City, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">info@nebulagaming.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                    <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.5806 2.37306 15.0897 3.04088 16.4332L2.03053 20.8315C1.94338 21.1887 2.15606 21.5405 2.51531 21.6251C2.59471 21.6451 2.67682 21.6513 2.75774 21.6437L7.1434 21.0693C8.47654 21.7223 9.96582 22.0835 11.5258 22.0972C11.6838 22.0991 11.8419 22.1 12.001 22.1C17.5239 22.1 22.001 17.6229 22.001 12.1C22.001 6.57715 17.5239 2.1 12.001 2ZM12.001 20.0171L11.9283 20.007C10.4337 19.9976 8.98548 19.6345 7.73274 18.958L7.31211 18.7215L4.7296 19.0793L5.09117 16.5441L4.84749 16.1131C4.15287 14.8551 3.78385 13.4065 3.78385 11.9171C3.78385 7.45455 7.46924 3.8285 12.0108 3.8285C16.5426 3.8285 20.2182 7.45455 20.2182 11.9171C20.2182 16.3796 16.5328 20.0171 12.001 20.0171ZM16.6742 14.0809C16.422 13.9522 15.1155 13.3243 14.8829 13.2383C14.6504 13.1522 14.48 13.1096 14.3096 13.3621C14.1393 13.6145 13.6442 14.1993 13.5064 14.37C13.3686 14.5407 13.2307 14.5619 12.9786 14.4332C12.7265 14.3044 11.8673 14.0322 10.8518 13.1307C10.0627 12.4272 9.54279 11.5593 9.40499 11.3068C9.26719 11.0544 9.38988 10.9257 9.51248 10.8078C9.62138 10.7025 9.75467 10.5334 9.87208 10.3953C9.98949 10.2572 10.0319 10.1499 10.1178 9.97924C10.2037 9.80859 10.1613 9.67042 10.0965 9.54175C10.0319 9.41307 9.52271 8.10356 9.30958 7.59865C9.1027 7.11014 8.8928 7.17225 8.74684 7.16318C8.60904 7.15412 8.43868 7.15259 8.26831 7.15259C8.09795 7.15259 7.82213 7.21733 7.58963 7.46979C7.35713 7.72225 6.68816 8.35015 6.68816 9.65966C6.68816 10.9692 7.61095 12.235 7.72836 12.4057C7.84577 12.5763 9.52422 15.198 12.1207 16.3248C12.8038 16.6227 13.3331 16.8037 13.7432 16.9408C14.4184 17.168 15.0337 17.1359 15.5221 17.0693C16.0666 16.9947 17.0535 16.4398 17.2668 15.8489C17.4799 15.258 17.4799 14.7531 17.4151 14.644C17.3504 14.5348 17.1801 14.4709 16.9276 14.3421L16.6742 14.0809Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-300">Direct booking via WhatsApp available</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center mt-1"
                  >
                    Message us on WhatsApp
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-white font-semibold text-lg mb-3">Hours</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div className="text-gray-300">Monday - Thursday</div>
                  <div className="text-gray-300">10:00 AM - 11:00 PM</div>
                  <div className="text-gray-300">Friday - Saturday</div>
                  <div className="text-gray-300">10:00 AM - 2:00 AM</div>
                  <div className="text-gray-300">Sunday</div>
                  <div className="text-gray-300">12:00 PM - 10:00 PM</div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-white font-semibold text-lg mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary/20 p-3 rounded-full hover:bg-primary/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary/20 p-3 rounded-full hover:bg-primary/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary/20 p-3 rounded-full hover:bg-primary/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary/20 p-3 rounded-full hover:bg-primary/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary/20 p-3 rounded-full hover:bg-primary/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background/50 rounded-xl p-8 border border-primary/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-primary/20 rounded-lg px-4 py-3 text-white focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-primary/20 rounded-lg px-4 py-3 text-white focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background border border-primary/20 rounded-lg px-4 py-3 text-white focus:border-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-primary/20 rounded-lg px-4 py-3 text-white focus:border-primary"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-full w-full md:w-auto shadow-[0_0_10px_rgba(162,32,240,0.5),_0_0_20px_rgba(162,32,240,0.3)]"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="mt-8 rounded-xl overflow-hidden border border-primary/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40435.59095358628!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a0a9d309d5%3A0xb14cef96fa6a41c9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652134815307!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nebula Gaming location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
