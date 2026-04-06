import { motion } from "framer-motion";
import { AccessibilityIcon, UnreadIcon } from "@primer/octicons-react";

function Sobre() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* TEXTO */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="text-lg mb-4">
            I'm a Backend developer passionate about building modern and scalable applications.
            I enjoy solving real-world problems and continuously improving my skills.
          </p>

         

          {/* INFO */}
          <ul className="space-y-3 mb-6">
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
                  Worked on backend development, performing code maintenance and improvements.
                  Also developed dashboard interfaces using React.
                </p>
              </div>

              <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-lg">Bradesco — InovaBra (Intern)</h3>
                <p className="text-sm text-gray-500">
                  December 2023 — March 2025
                </p>
                <p className="mt-2 text-sm">
                  Worked with React and maintained legacy code in a Joomla-based platform (Sandbox).
                  Also developed REST APIs using Axway (low-code API platform).
                </p>
              </div>

            </div>
          </div>

          {/* CV */}
          <a
            href="/Portfolio/GiovanaBorges-BackendJava.pdf"
            download
            className="inline-block px-6 py-2 bg-[#2f0f56] text-white rounded-lg hover:bg-[#8E37F0] transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* IMAGEM */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Portfolio/giovana-about.jpeg"
            alt="Giovana image cover"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Sobre;