import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2f0f56] text-white flex justify-center py-6">

      <div className="flex flex-col items-center text-center">

        <h1 className="text-2xl mb-2">Giovana</h1>

        {/* Social icons */}
        <div className="flex gap-4 my-2">

          <a
            href="https://github.com/GiovanaBorges"
            target="_blank"
            rel="noreferrer"
            className="opacity-50 hover:opacity-100 transition duration-500"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/giovana-franco-borges-607073184/"
            target="_blank"
            rel="noreferrer"
            className="opacity-50 hover:opacity-100 transition duration-500"
          >
            <FaLinkedin size={25} />
          </a>

        </div>

        <h2 className="text-sm md:text-base font-normal mt-2">
          © All rights reserved, Giovana Borges
        </h2>

      </div>
    </footer>
  );
}

export default Footer;