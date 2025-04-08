import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.5806 2.37306 15.0897 3.04088 16.4332L2.03053 20.8315C1.94338 21.1887 2.15606 21.5405 2.51531 21.6251C2.59471 21.6451 2.67682 21.6513 2.75774 21.6437L7.1434 21.0693C8.47654 21.7223 9.96582 22.0835 11.5258 22.0972C11.6838 22.0991 11.8419 22.1 12.001 22.1C17.5239 22.1 22.001 17.6229 22.001 12.1C22.001 6.57715 17.5239 2.1 12.001 2ZM12.001 20.0171L11.9283 20.007C10.4337 19.9976 8.98548 19.6345 7.73274 18.958L7.31211 18.7215L4.7296 19.0793L5.09117 16.5441L4.84749 16.1131C4.15287 14.8551 3.78385 13.4065 3.78385 11.9171C3.78385 7.45455 7.46924 3.8285 12.0108 3.8285C16.5426 3.8285 20.2182 7.45455 20.2182 11.9171C20.2182 16.3796 16.5328 20.0171 12.001 20.0171ZM16.6742 14.0809C16.422 13.9522 15.1155 13.3243 14.8829 13.2383C14.6504 13.1522 14.48 13.1096 14.3096 13.3621C14.1393 13.6145 13.6442 14.1993 13.5064 14.37C13.3686 14.5407 13.2307 14.5619 12.9786 14.4332C12.7265 14.3044 11.8673 14.0322 10.8518 13.1307C10.0627 12.4272 9.54279 11.5593 9.40499 11.3068C9.26719 11.0544 9.38988 10.9257 9.51248 10.8078C9.62138 10.7025 9.75467 10.5334 9.87208 10.3953C9.98949 10.2572 10.0319 10.1499 10.1178 9.97924C10.2037 9.80859 10.1613 9.67042 10.0965 9.54175C10.0319 9.41307 9.52271 8.10356 9.30958 7.59865C9.1027 7.11014 8.8928 7.17225 8.74684 7.16318C8.60904 7.15412 8.43868 7.15259 8.26831 7.15259C8.09795 7.15259 7.82213 7.21733 7.58963 7.46979C7.35713 7.72225 6.68816 8.35015 6.68816 9.65966C6.68816 10.9692 7.61095 12.235 7.72836 12.4057C7.84577 12.5763 9.52422 15.198 12.1207 16.3248C12.8038 16.6227 13.3331 16.8037 13.7432 16.9408C14.4184 17.168 15.0337 17.1359 15.5221 17.0693C16.0666 16.9947 17.0535 16.4398 17.2668 15.8489C17.4799 15.258 17.4799 14.7531 17.4151 14.644C17.3504 14.5348 17.1801 14.4709 16.9276 14.3421L16.6742 14.0809Z" />
      </svg>
    </motion.a>
  );
}
