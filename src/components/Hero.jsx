import { motion } from "framer-motion";
import { FiDownload, FiLinkedin, FiGithub } from "react-icons/fi";
import resume from '../assets/resume.pdf';
import hemaFormal from "../assets/hemaformal.jpg";


const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 pb-8 px-4 md:px-0"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-lg md:text-xl text-pink-600 dark:text-pink-500 font-medium mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            G Hema Harika
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            B.Tech Student & <span className="text-pink-600 dark:text-pink-500">Aspiring Developer</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
            I'm a passionate third-year B.Tech student with a strong interest in software development 
            and problem-solving. Welcome to my portfolio.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={resume}
              download="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <FiDownload /> Download Resume
            </motion.a>
            
            <motion.div className="flex gap-4 items-center">
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </motion.a>
              
              <motion.a
                href="https://github.com/hemaharika"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-70 blur-xl animate-pulse" />
            <img
              src={hemaFormal}
              alt="Hema Harika"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center mt-12"
      >
        <motion.a
          href="#about"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
          className="text-gray-400 dark:text-gray-500"
          aria-label="Scroll down"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5"></path>
            <path d="M7 7l5 5 5-5"></path>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;