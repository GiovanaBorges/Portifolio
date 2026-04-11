import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AccessibilityIcon, UnreadIcon } from "@primer/octicons-react";

function Layout() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-around items-start px-4">

      {/* LEFT SIDE */}
      <div className="flex flex-col md:flex-row justify-around w-full md:w-1/2 p-4 text-left items-center md:items-start">



        {/* TEXT */}
        <ul className="flex flex-col justify-center list-none p-3 text-center md:text-left">
          <li>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold mb-4">Hello</h1>

              <p className="text-lg mb-4">
                I'm a Backend Developer specialized in Java and Spring Boot, 
                experienced in building and maintaining scalable REST APIs, 
                implementing unit and integration tests with JUnit and Mockito,
                 and contributing to full-stack applications using React in enterprise systems
              </p>


{/* SOCIAL ICONS */}
              <ul className="flex md:flex-row mb-3 justify-start items-end gap-4 ">
                <li>
                  <a
                    href="https://github.com/GiovanaBorges"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#2f0f56] text-white hover:text-[#8E37F0] transition duration-500"
                  >
                    <FaGithub size={30} /> 
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/giovana-franco-borges-607073184/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#2f0f56] text-white hover:text-[#8E37F0] transition duration-500"
                  >
                    <FaLinkedin size={30} /> 
                  </a>
                  
                </li>


              </ul>
              {/* INFO */}
              <ul className="space-y-3 mb-3">
                <li className="flex items-center gap-2 text-lg">
                  <AccessibilityIcon size={20} />
                  (11) 99184-6381
                </li>

                <li className="flex items-center gap-2 text-lg">
                  <UnreadIcon size={20} />
                  giovanaborges.contato@gmail.com
                </li>
              </ul>

              


              {/* EXPERIÊNCIA */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Experience</h2>

                <div className="space-y-4">

                  <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-lg">First Tech — Backend Developer Java (Junior)</h3>
                    <p className="text-sm text-gray-500">
                      April 2022 — December 2023
                    </p>
                    <p className="mt-2 text-sm">
                      Worked with Java and Spring Boot on backend development, 
                      focusing on maintenance, bug fixes, and REST API improvements. 
                      Implemented unit tests with JUnit and Mockito and supported React dashboard features in full-stack tasks.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-lg">Bradesco — InovaBra (Intern)</h3>
                    <p className="text-sm text-gray-500">
                      December 2023 — March 2025
                    </p>
                    <p className="mt-2 text-sm">
                     Worked with React on frontend features and maintenance of legacy systems in a Joomla-based platform. 
                     Developed and integrated REST APIs using Axway (low-code platform) in enterprise environments.
                    </p>
                  </div>

                </div>
              </div>

              {/* CV */}
              <a
                href="/GiovanaBorges-BackendJava.pdf"
                download
                className="inline-block px-6 py-2 bg-[#2f0f56] text-white rounded-lg hover:scale-105 hover:bg-[#8E37F0] transition"
              >
                Download CV
              </a>
            </motion.div>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: [0, -15, 0]
        }}

        className="flex justify-center items-center  h:1/2 md:w-1/2 mb-2 md:mt-0 bg-red-500"
      >
        <div className="bg-blue-500">
          <img
            src="/image-cover-home.jpg"
            alt="image of Giovana Borges"
            className="object-cover  border-2 border-[#8E37F0] shadow-xl  transition duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Layout;