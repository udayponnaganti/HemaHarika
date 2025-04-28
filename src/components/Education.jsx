import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional  University",
      location: "Punjab, India",
      period: "2021 - 2025",
      description: "Currently pursuing B.Tech with a focus on computer science, maintaining a strong academic record. Coursework includes Data Structures, Algorithms, Database Management, Web Development, and Software Engineering."
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream (Mathematics, Physics, Chemistry)",
      institution: "Sri Shirdi Sai Junior College ",
      location: "Andhra Pradesh, India",
      period: "2019 - 2021",
      description: "Completed higher secondary education with excellent grades, laying a strong foundation in mathematics and sciences."
    },
    {
      degree: "Secondary School Certificate",
      field: "General Education",
      institution: "Shri Shirdi Sai Vidya Niketan",
      location: "Andhra Pradesh, India",
      period: "2019",
      description: "Completed secondary education with distinction and active participation in extracurricular activities."
    }
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">
            My <span className="text-pink-600 dark:text-pink-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 dark:bg-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science and technology.
          </p>
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-pink-200 dark:bg-pink-900/30 transform md:translate-x-[-50%]"></div>
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row mb-10 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 md:px-8 z-10">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-xs text-pink-600 dark:text-pink-400 font-semibold mb-1">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-md text-pink-600 dark:text-pink-500 font-medium mb-2">
                    {item.field}
                  </h4>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {item.institution}, {item.location}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-pink-600 dark:bg-pink-500 transform md:translate-x-[-50%] z-20"></div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;