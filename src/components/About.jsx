import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  const strengthsList = [
    "Problem Solving",
    "Technical Learning",
    "Team Collaboration",
    "Adaptability",
    "Attention to Detail",
    "Project Management",
  ];

  const interestsList = [
    "Web Development",
    "Data Science",
    "Artificial Intelligence",
    "UI/UX Design",
    "Software Engineering",
    "Mobile App Development",
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800 dark:text-white">
            About <span className="text-pink-600 dark:text-pink-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 dark:bg-pink-500 mx-auto mb-10"></div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm G Hema Harika, a third-year B.Tech student passionate about technology and its 
              potential to solve real-world problems. My academic journey has equipped me with 
              strong fundamentals in computer science, software development, and problem-solving.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Beyond academics, I actively engage in personal projects to enhance my skills and 
              stay updated with the latest technology trends. I believe in continuous learning 
              and constantly challenging myself with new concepts and technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm seeking opportunities to apply my knowledge in real-world settings and collaborate 
              with experienced professionals to further develop my skills. My goal is to contribute 
              to innovative solutions that make a positive impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-pink-600 dark:text-pink-500">
                Key Strengths
              </h3>
              <ul className="space-y-2">
                {strengthsList.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-pink-600 dark:bg-pink-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-pink-600 dark:text-pink-500">
                Professional Interests
              </h3>
              <ul className="space-y-2">
                {interestsList.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-pink-600 dark:bg-pink-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;