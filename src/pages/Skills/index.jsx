import { useState } from "react";
import { 
  SiDocker, 
  SiRedis, 
  SiMysql, 
  SiGithub, 
  SiReact,
  SiKubernetes, 
  SiRabbitmq, 
  SiSpringboot, 
  SiSpringsecurity,
  SiJunit5,
  SiKeycloak,
  SiCloudflare
 } from "react-icons/si";
 import { FaJava } from "react-icons/fa";
 import { FaAws } from "react-icons/fa";

function Skills() {
  const [title, setTitle] = useState("Skills");
  const [subtitle, setSubtitle] = useState(
    "*hover over a skill to see details*"
  );

  function resetText() {
    setTitle("Skills");
    setSubtitle("*hover over a skill to see details*");
  }

  const skills = [
    {
      icon: <FaJava size={70} />,
      title: "Java",
      desc: "Java programming language for backend development, OOP and design patterns.",
    },
    {
      icon: <SiSpringboot size={70} />,
      title: "Spring Boot",
      desc: "Backend development with REST APIs, business rules and scalable architectures.",
    },
     {
      icon: <SiSpringsecurity size={70} />,
      title: "Spring Security",
      desc: "Securing Spring applications with authentication and authorization mechanisms.",
    },
    {
      icon: <SiKeycloak size={70} />,
      title: "Keycloak",
      desc: "Identity and access management solution for securing applications and APIs.",
    },
     {
      icon: <FaAws size={70} />,
      title: "AWS",
      desc: "Amazon Web Services for cloud computing and hosting solutions.",
    },
    {
      icon: <SiMysql size={70} />,
      title: "MySQL",
      desc: "Relational database design, queries optimization and data modeling.",
    },
    {
      icon: <SiRedis size={70} />,
      title: "Redis",
      desc: "Caching strategies and performance optimization for backend systems.",
    },
    {
      icon: <SiRabbitmq size={70} />,
      title: "RabbitMQ",
      desc: "Asynchronous communication using message queues and event-driven architecture.",
    },
    {
      icon: <SiDocker size={70} />,
      title: "Docker",
      desc: "Containerization of applications and development environments.",
    },
    {
      icon: <SiKubernetes size={70} />,
      title: "Kubernetes",
      desc: "Container orchestration, scaling and deployment of microservices.",
    },
    {
      icon: <SiGithub size={70} />,
      title: "CI/CD",
      desc: "Automation pipelines with GitHub Actions for build, test and deploy.",
    },
     {
      icon: <SiJunit5 size={70} />,
      title: "JUnit 5/Mockito",
      desc: "Testing framework for Java applications with enhanced features and flexibility.",
    },
    {
      icon: <SiReact size={70} />,
      title: "React",
      desc: "Building interactive UIs and dashboards for web applications.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4">

      {/* TEXT SIDE */}
      <div className="min-h-[50vh] w-full md:w-[40%] flex flex-col justify-center items-start text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-thin mb-4">{title}</h1>

        <h3 className="font-light max-w-[580px] break-words">
          {subtitle}
        </h3>
      </div>

      {/* GRID */}
      <div className="w-full md:w-[50%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2">

          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setTitle(skill.title);
                setSubtitle(skill.desc);
              }}
              onMouseLeave={resetText}
              className="
                p-4
                border-2 border-[#303030]
                flex items-center justify-center
                transition duration-500
                hover:border-[#5f5da6]
                hover:shadow-[0_0_10px_#2f0f56]
                transition duration-300
                hover:scale-105
              "
            >
              <div className="text-[#5f5da6]">
                {skill.icon}
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Skills;