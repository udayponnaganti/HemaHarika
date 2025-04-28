import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-white dark:bg-gray-900 shadow-inner">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="text-pink-600 dark:text-pink-500">H</span>ema <span className="text-pink-600 dark:text-pink-500">H</span>arika
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              B.Tech student specializing in Computer Science with a passion for software development and problem-solving.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/hemaharika"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:hemaharika@example.com"
                whileHover={{ y: -5 }}
                className="text-gray-500 hover:text-pink-600 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Contact Info
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Andhra Pradesh, India
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              hemaharika@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              +91 9876543210
            </p>
          </div>
        </div>
        
        <div className="pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            &copy; {currentYear} G Hema Harika. All rights reserved. Made with 
            <FiHeart className="text-pink-600 mx-1" /> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;