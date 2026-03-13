import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "ChatMe — Real-Time Instant Messaging",
      description: "A lightning-fast, real-time messaging platform designed for instant communication without the friction of registration. ChatMe allows users to create private rooms and start chatting in seconds, solving the problem of invasive tracking and long setup times for temporary or anonymous discussions.",
      tech: ["React.js", "Node.js", "Express", "Socket.io", "Tailwind CSS", "Lucide React", "GitHub Actions", "AWS", "Cloudflare"],
      image: "/images/chatme.png",
      liveLink: "https://github.com/VarunMendre/SocketRoom",
      deployLink: "https://chat-me.cloudvault.cloud",
      highlights: [
        "Neo-Brutalist UI/UX with high-contrast design",
        "Real-time low-latency communication via Socket.io",
        "Zero-persistence ephemeral architecture for privacy",
        "Fluid layout optimized for all screen spectrums"
      ]
    },
    {
      title: "ImageShrink: Premium Serverless Image Compressor",
      description: "A high-level, event-driven serverless application designed to optimize web performance and reduce storage costs. It automatically compresses high-resolution images upon upload using a robust pipeline of AWS services, providing a seamless \"drop and forget\" experience.",
      tech: ["React", "Node.js", "Express.js", "AWS Lambda", "AWS S3", "Serverless", "Sharp", "Lucide React"],
      image: "/images/imageshrink.png",
      liveLink: "https://github.com/VarunMendre/Serverless-Image-Compressor",
      deployLink: "https://img-compressor.cloudvault.cloud/",
      highlights: [
        "Automated event-driven S3 to Lambda pipeline",
        "90%+ storage optimization using Sharp engine",
        "Secure architecture with S3 pre-signed URLs",
        "Premium glassmorphic drag-and-drop interface"
      ]
    },
    {
      title: "CloudVault \u2014 Cloud Storage & File Sharing",
      description: "A highly scalable, serverless cloud storage platform built for secure file management and seamless sharing. Migrated the backend to AWS Lambda with Serverless Framework, reducing infrastructure costs by ~60%. Features automated CI/CD deployments via GitHub Actions, high-performance S3 direct uploads, Google Drive imports, and EventBridge cron jobs for fully automated subscription lifecycle and storage management.",
      tech: ["React", "Node.js", "AWS Lambda", "Serverless", "EventBridge", "MongoDB", "Razorpay", "GitHub Actions", "Tailwind"],
      image: "/images/storage-app.png",
      liveLink: "https://github.com/VarunMendre/Personal-Cloud-Drive",
      deployLink: "https://cloudvault.cloud",
      highlights: [
        "Serverless AWS Lambda backend reducing infra costs by ~60%",
        "Automated CI/CD via GitHub Actions with sub-60s deploys & bot alerts",
        "EventBridge cron jobs automating subscriptions & orphaned cleanup",
        "High-performance S3 Direct Uploads & Google Drive imports"
      ]
    },
    {
      title: "Custom CI-CD-Server",
      description: "An automated CI/CD orchestrator on AWS EC2 to streamline deployments for frontend and backend services. Utilizes SSH-based remote execution and PM2 process management for automated, zero-downtime application updates. Features a Telegram Bot for real-time deployment notifications.",
      tech: ["Node.js", "Express.js", "PM2", "NGINX", "EC2", "TelegramBot", "SSH"],
      image: "/images/cicd-server.png",
      liveLink: "https://github.com/VarunMendre/Custom-CI-CD-Server",
      highlights: [
        "Automated deployment orchestrator",
        "Zero-downtime updates with PM2",
        "Real-time Telegram notifications",
        "Remote execution via SSH"
      ]
    },
    {
      title: "Mental-Health-chatbot",
      description: "A full-stack web application providing mental health support through an intelligent chatbot. Integrates Google Dialogflow for NLU, Flask for backend services, and PostgreSQL for database management. Features secure user authentication and a RESTful chat API.",
      tech: ["Python", "Flask", "Dialogflow", "PostgreSQL", "Bcrypt", "Google Cloud SDK"],
      image: "/images/mental-health-bot.png",
      liveLink: "https://github.com/VarunMendre/Mental-Health-chatbot",
      highlights: [
        "Intelligent Dialogflow integration",
        "Secure authentication with Bcrypt",
        "RESTful Chat API",
        "PostgreSQL database management"
      ]
    },
    {
      title: "Event-Driven Notification System",
      description: "A production-ready, scalable notification service leveraging event-driven architecture to handle asynchronous notification delivery at scale. Built with Node.js, Express, RabbitMQ, PostgreSQL, and Resend API, this system demonstrates enterprise-grade patterns including idempotent message processing, dead letter queues (DLQ), automatic retry mechanisms, and clean separation of concerns using Service/Repository pattern and Handler Registry.",
      tech: ["Node.js", "Express.js", "RabbitMQ", "PostgreSQL", "Resend API", "Docker", "Joi", "amqplib"],
      image: "/images/placeholder-project.png",
      liveLink: "https://github.com/VarunMendre/Event-Driven-Notification-Service",
      highlights: [
        "Scalable Event-Driven Architecture with RabbitMQ",
        "Production-Ready Patterns (Service/Repository, Handler Registry)",
        "Robust Error Handling with retry mechanism and DLQ",
        "Clean Code Architecture with middleware validation"
      ]
    },
    {
      title: "OrderXpress - Restaurant Management",
      description: "A comprehensive, multi-tenant restaurant management and digital ordering ecosystem. It allows customers to browse menus and place orders via QR code from their web browsers, while providing restaurant staff an intuitive mobile application to track and serve orders in real-time. Features advanced AI-driven menu digitization to automatically parse physical menus during restaurant onboarding.",
      tech: ["React.js", "React Native", "Node.js", "MongoDB", "Socket.io", "Google Vision API", "Redis"],
      liveLink: "https://github.com/ShardulDhiwar/OrderXpress",
      highlights: [
        "Built React.js customer web endpoints and React Native staff mobile apps",
        "Implemented real-time Socket.io connections for instant order updates",
        "Developed Python/PaddleOCR microservice for AI-powered menu digitization",
        "Custom multi-tenant routing, JWT authentication, and Razorpay integration"
      ]
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
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div 
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">{activeProject + 1}/{projects.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20" 
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}>
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div 
            className="hidden md:block md:col-span-4" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index ? "border-opacity-100" : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${
                  activeProject === index ? "text-light" : "text-muted"
                }`}>
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div 
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">{projects[activeProject].title}</h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center md:justify-end gap-4">
                {projects[activeProject].deployLink && (
                  <a 
                    href={projects[activeProject].deployLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    LIVE DEMO
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                )}

                {projects[activeProject].liveLink && (
                  <a 
                    href={projects[activeProject].liveLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    VIEW PROJECT
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;