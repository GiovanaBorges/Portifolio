import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md";

function Project() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl mb-8">Projects</h1>
      </motion.div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">

        {/* CARD 1 */}
        <div className="w-[90%] md:w-[20%] border-2 border-[#303030] hover:border-[#5f5da6] transition duration-500 hover:shadow-[0px_10px_13px_-7px_#5f5da6,4px_1px_20px_4px_#000000]">
          <div className="p-6 flex flex-col justify-center min-h-[35vh] text-left">

            <p className="text-2xl font-normal mb-2">
              Bookings API
            </p>

            <h3 className="font-light mb-4">
              Booking management API with authentication via Keycloak, role-based authorization using Spring Security, and Redis caching to improve performance. Designed with scalable architecture patterns.
            </h3>

            <a
              href="https://github.com/GiovanaBorges/Booking-api"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-[#5f5da6] hover:underline"
            >
              See
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-[90%] md:w-[20%] border-2 border-[#303030] hover:border-[#5f5da6] transition duration-500 hover:shadow-[0px_10px_13px_-7px_#5f5da6,4px_1px_38px_4px_#000000]">
          <div className="p-6 flex flex-col justify-center min-h-[35vh] text-left">

            <p className="text-2xl font-normal mb-2">
              Notification Api
            </p>

            <h3 className="font-light mb-4">
              Event-driven notification service using RabbitMQ for asynchronous communication and WebSockets for real-time updates, integrated with a React frontend.
            </h3>

            <a
              href="https://github.com/GiovanaBorges/notification-service"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-[#5f5da6] hover:underline"
            >
              See
            </a>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="w-[90%] md:w-[20%] border-2 border-[#303030] hover:border-[#5f5da6] transition duration-500 hover:shadow-[0px_10px_13px_-7px_#5f5da6,4px_1px_38px_4px_#000000]">
          <div className="p-6 flex flex-col justify-center min-h-[35vh] text-left">

            <p className="text-2xl font-normal mb-2">
              Helm Chart
            </p>

            <h3 className="font-light mb-4">
              Kubernetes deployment setup using Helm charts to manage and scale Spring Boot microservices.
            </h3>

            <a
              href="https://github.com/GiovanaBorges/booking-platform-chart"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-[#5f5da6] hover:underline"
            >
              See
            </a>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="w-[90%] md:w-[20%] border-2 border-[#303030] ">
          <div className="p-6 flex flex-col justify-center items-start min-h-[35vh] text-left">

            <MdDesignServices size={35} className="text-[#5f5da6] mb-2" />

            <p className="text-2xl font-normal mb-2">
              Working...
            </p>

            <h3 className="font-light">
              Developing a new Projects. Working on the best for you.
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Project;