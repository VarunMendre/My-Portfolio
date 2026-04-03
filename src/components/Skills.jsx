import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaPython, FaPhp, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaAws, FaMobileAlt, FaServer, FaLock, FaCogs
} from 'react-icons/fa';
import { 
  SiC, SiCplusplus, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiJsonwebtokens, SiPm2, SiNginx, SiGithubactions, SiSocketdotio, SiMysql
} from 'react-icons/si';
import { MdApi } from 'react-icons/md';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Core Languages",
      skills: [
        { name: "C", icon: SiC, color: "#A8B9CC" }, 
        { name: "C++ (STL)", icon: SiCplusplus, color: "#00599C" }, 
        { name: "JavaScript (ES6)", icon: SiJavascript, color: "#F7DF1E" }, 
        { name: "Python", icon: FaPython, color: "#3776AB" }, 
        { name: "PHP", icon: FaPhp, color: "#777BB4" }
      ]
    },
    {
      name: "Frontend & Styling",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" }, 
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" }, 
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }, 
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, 
        { name: "Responsive Design", icon: FaMobileAlt, color: "#4ADE80" }
      ]
    },
    {
      name: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" }, 
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" }, 
        { name: "RESTful APIs", icon: MdApi, color: "#FF6C37" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },
        { name: "MVC Architecture", icon: FaServer, color: "#9333EA" }
      ]
    },
    {
      name: "Databases & Security",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, 
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }, 
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" }, 
        { name: "Auth/Security", icon: FaLock, color: "#FACC15" }, 
        { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" }
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "AWS (EC2, S3, CDN)", icon: FaAws, color: "#FF9900" }, 
        { name: "PM2", icon: SiPm2, color: "#2B037A" }, 
        { name: "NGINX", icon: SiNginx, color: "#009639" }, 
        { name: "CI/CD", icon: FaCogs, color: "#0EA5E9" }, 
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div 
              key={i} 
              className="border border-muted border-opacity-20 bg-primary bg-opacity-40 p-6"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted border-opacity-20">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.span 
                    key={j} 
                    className="group text-sm bg-secondary px-3 py-2 rounded-sm flex items-center gap-2 border border-muted border-opacity-10 shadow-sm cursor-pointer"
                    style={{ "--hover-color": skill.color }}
                    whileHover={{ 
                      y: -2, 
                      backgroundColor: "rgba(245, 245, 245, 0.08)",
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {skill.icon && <skill.icon className="text-lg transition-colors duration-300 group-hover:text-[color:var(--hover-color)]" />}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 border border-muted border-opacity-20 bg-primary bg-opacity-40"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Ready to collaborate?</h3>
            <p className="text-muted">Let's discuss how my skills can help your project.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;