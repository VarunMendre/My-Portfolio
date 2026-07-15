import { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Axiom Technology",
      period: "Jan 2026 – May 2026",
      location: "Pune, Maharashtra, India",
      highlights: [
        <>Built and deployed a full-stack <span className="text-light font-semibold">Fees & Student Management System</span> for 1000+ students using the MERN Stack, replacing manual Excel-based workflows and reducing administrative effort by <span className="text-light font-semibold">75%</span>.</>,
        <>Implemented <span className="text-light font-semibold">RBAC</span>, Razorpay payment integration, and automated fee reports/exports — used in production by college staff on real institutional data.</>,
        <>Deployed on <span className="text-light font-semibold">AWS EC2</span> with GitHub Actions CI/CD pipeline, achieving zero-downtime releases as a backend developer in a cross-functional team of 5.</>
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay", "AWS EC2", "GitHub Actions"]
    },
    {
      role: "Web Developer Intern",
      company: "Acmegrade Pvt. Ltd",
      period: "Jan 2025 – Mar 2025",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        <>Built <span className="text-light font-semibold">15+ RESTful APIs</span> with Express.js and MySQL across 5+ core modules, reducing data retrieval time by <span className="text-light font-semibold">40%</span> and average API response time by <span className="text-light font-semibold">35%</span>.</>,
        <>Designed <span className="text-light font-semibold">10+ responsive UI components</span> improving mobile compatibility across 3 major breakpoints, boosting user engagement by <span className="text-light font-semibold">20%</span>.</>
      ],
      tech: ["Node.js", "Express.js", "MySQL", "RESTful APIs", "Responsive UI", "HTML5", "CSS3"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">JOURNEY</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Experience selector - mobile version */}
          <motion.div 
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT EXPERIENCE</p>
              <div className="text-xs text-muted">{activeExperience + 1}/{experiences.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeExperience === index 
                      ? "bg-primary bg-opacity-50 border border-light border-opacity-20" 
                      : "bg-primary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveExperience(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-sm mb-1 ${
                    activeExperience === index ? "text-light" : "text-muted"
                  }`}>
                    {exp.company}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {exp.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience selector - desktop version */}
          <motion.div 
            className="hidden md:block md:col-span-4" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeExperience === index ? "border-opacity-100" : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeExperience === index ? "bg-primary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveExperience(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${
                  activeExperience === index ? "text-light" : "text-muted"
                }`}>
                  {exp.company}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {exp.period}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience details */}
          <motion.div 
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeExperience}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-primary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-light">
                {experiences[activeExperience].role}
              </h3>
              <div className="text-sm font-mono text-muted mb-4 md:mb-6">
                <span className="text-light opacity-90">{experiences[activeExperience].company}</span>
                <span className="mx-2">•</span>
                <span>{experiences[activeExperience].location}</span>
                <span className="mx-2">•</span>
                <span>{experiences[activeExperience].period}</span>
              </div>
              
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="space-y-3">
                  {experiences[activeExperience].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm text-muted leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeExperience].tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1 px-2 md:px-3 bg-secondary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
