import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Landing Page Shopping"
          des="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["HTML5", "SCSS", "Javascript"]}
          link="https://landing-shopping.vercel.app/"
        />
        <ArchiveCard
          title="Landing Page"
          des="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Bootstrap", "jQuery", "Javascript"]}
          link="https://landing-page-truyenpn22.vercel.app/          "
        />
        <ArchiveCard
          title="Travel Tour"
          des="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={["HTML5", "SCSS", "Javascript"]}
          link="https://landing-travel-ten.vercel.app/"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <ArchiveCard
                title="Portfolio"
                des="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Bootstrap", "jQuery", "Javascript"]}
                link="https://portfolio-truyenpn22.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <ArchiveCard
                title="Travel Booking Tour"
                des="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["ReactJS", "NodeJS", "MongoDB"]}
                link="https://github.com/truyenpn22/travels-booking"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            onClick={() => setShowMore(false)}
          >
            Show Less
          </button>
        ) : (
          <button
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
