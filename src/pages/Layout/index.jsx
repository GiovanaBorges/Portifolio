import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Layout() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-around items-center px-4">

      {/* LEFT SIDE */}
      <div className="flex flex-col md:flex-row justify-around w-full md:w-1/2 p-4 text-left items-center md:items-start">

        {/* SOCIAL ICONS */}
        <ul className="flex md:flex-col justify-center items-center gap-4 mb-4 md:mb-0">
          <li>
            <a
              href="https://github.com/GiovanaBorges"
              target="_blank"
              rel="noreferrer"
              className="text-[#7d7cae] hover:text-[#8E37F0] transition duration-500"
            >
              <FaGithub size={25} />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/giovana-franco-borges-607073184/"
              target="_blank"
              rel="noreferrer"
              className="text-[#7d7cae] hover:text-[#8E37F0] transition duration-500"
            >
              <FaLinkedin size={25} />
            </a>
          </li>


        </ul>

        {/* TEXT */}
        <ul className="flex flex-col justify-center list-none p-2 text-center md:text-left">
          <li>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-normal">Hi , i am</h2>

              <h1 className="text-4xl font-bold my-2">
                Giovana Borges
              </h1>

              <h2 className="font-normal">
                Backend Developer
              </h2>

              <h3 className="font-light mt-3">
                Do you want to develop something with me?
              </h3>

              <a
                href="https://api.whatsapp.com/send?phone=5511991846381&text=oi , eu vim pelo seu site"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 px-3 py-3 bg-[#2f0f56] text-white rounded-lg hover:bg-[#8E37F0] transition"
              >
                Send an message
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
        
        className="flex justify-center items-center w-full md:w-1/2 mt-6 md:mt-0"
      >
        <div className="w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <img
            src="/image-cover-home.jpg"
            alt="image of Giovana Borges"
            className="w-full h-full object-cover rounded-full border-2 border-[#8E37F0] shadow-xl hover:scale-105 transition duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Layout;