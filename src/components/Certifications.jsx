import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiExternalLink } from "react-icons/fi";

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const certVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  
  const certifications = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "June 2023",
      description: "Comprehensive course covering front-end and back-end web development technologies including HTML, CSS, JavaScript, Node.js, and MongoDB.",
      url: "https://www.udemy.com/"
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      issuer: "Coursera",
      date: "August 2023",
      description: "Course covering the fundamentals of data science including data analysis, visualization, and machine learning basics.",
      url: "https://www.coursera.org/"
    },
    {
      id: 3,
      name: "Python Programming",
      issuer: "Codecademy",
      date: "March 2023",
      description: "In-depth course on Python programming covering fundamentals to advanced concepts including object-oriented programming and data structures.",
      url: "https://www.codecademy.com/"
    },
    {
      id: 4,
      name: "UI/UX Design Fundamentals",
      issuer: "Coursera",
      date: "October 2023",
      description: "Course covering user interface and user experience design principles, user research, wireframing, and prototyping.",
      url: "https://www.coursera.org/"
    },
    {
      id: 5,
      name: "Introduction to Cloud Computing",
      issuer: "edX",
      date: "December 2023",
      description: "Introduction to cloud computing concepts, service models, deployment models, and cloud providers.",
      url: "https://www.edx.org/"
    },
    {
      id: 6,
      name: "JavaScript Data Structures and Algorithms",
      issuer: "Udemy",
      date: "February 2024",
      description: "Course covering common data structures and algorithms implementation in JavaScript with a focus on problem-solving.",
      url: "https://www.udemy.com/"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">
            My <span className="text-pink-600 dark:text-pink-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 dark:bg-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've completed several professional certifications to enhance my skills and knowledge in various technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              custom={index}
              variants={certVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <FiAward className="text-pink-600 dark:text-pink-500 text-2xl flex-shrink-0" />
                  <div className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-1 rounded-full">
                    {cert.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <div className="text-sm text-pink-600 dark:text-pink-500 mb-3">
                  Issued by {cert.issuer}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {cert.description}
                </p>
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
                >
                  View Certificate
                  <FiExternalLink className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;