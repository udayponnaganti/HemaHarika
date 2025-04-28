import { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { title: 'Home', link: '#home' },
    { title: 'About', link: '#about' },
    { title: 'Skills', link: '#skills' },
    { title: 'Projects', link: '#projects' },
    { title: 'Education', link: '#education' },
    { title: 'Certifications', link: '#certifications' },
    { title: 'Contact', link: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white"
        >
          <span className="text-pink-600 dark:text-pink-500">H</span>ema <span className="text-pink-600 dark:text-pink-500">H</span>arika
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={item.link}
                  className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 
              <FiSun className="text-yellow-400 w-5 h-5" /> : 
              <FiMoon className="text-gray-700 w-5 h-5" />
            }
          </motion.button>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-2 mr-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 
              <FiSun className="text-yellow-400 w-5 h-5" /> : 
              <FiMoon className="text-gray-700 w-5 h-5" />
            }
          </motion.button>
          
          <button 
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <FiX className="w-6 h-6" /> : 
              <FiMenu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;