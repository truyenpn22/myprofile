import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { amazonImg, cyberImg, noorShop } from "@/public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I Have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://project-movie-nine.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={amazonImg}
                  alt="movie"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Website Watch Movie</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                <span className="text-textGreen">Search movies</span> by name.
                <span className="text-textGreen">Filter movie</span> genre by
                option, can select multiple at the same time .
                <span className="text-textGreen">Pagination, View</span>{" "}
                detailed information
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>API</li>
                <li>Vercel Deloyment</li>
              </ul>
              <div className="text-2xl flex gap-5">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/truyenpn22/project-movie"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="mailto:phantruyen19722@gmail.com"
                  target="_blank"
                >
                  <i className="ri-mail-send-line"></i>
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://project-movie-nine.vercel.app"
                  target="_blank"
                >
                  <i className="ri-share-forward-2-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://task-manager-nine-gold.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={cyberImg}
                  alt="cyberImg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Task Manager</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                Receive form validations when trying to
                <span className="text-textGreen"> create/edit</span> boards and
                tasks Mark subtasks as complete and move tasks between columns
                <span className="text-textGreen">.Hide/show</span> the board
                sidebar
                <span className="text-textGreen">.Light & Dark</span> Mode
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Tailwind</li>
                <li>JSON</li>
                <li>Vercel Deloyment</li>
              </ul>
              <div className="text-2xl flex gap-5">
                <a
                  className="hover:text-textGreen duration-300"
                  href=" https://github.com/truyenpn22/task-manager"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="mailto:phantruyen19722@gmail.com"
                  target="_blank"
                >
                  <i className="ri-mail-send-line"></i>
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://task-manager-nine-gold.vercel.app/"
                  target="_blank"
                >
                  <i className="ri-share-forward-2-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://men4men-pihz.onrender.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={noorShop}
                  alt="shop"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Clothes Online</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                <span className="text-textGreen">Login/Signup</span> with
                Validation.
                <span className="text-textGreen">Multi language, </span>
                Cart and check out the
                <span className="text-textGreen"> payment</span> page and conrm
                the order.Product reviews and comments.Admin ascess to
                add/modify products.Statistics of sales and number of products
                sold.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Onrender Deloyment</li>
              </ul>
              <div className="text-2xl flex gap-5">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/truyenpn22/doantotnghiep"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="mailto:phantruyen19722@gmail.com"
                  target="_blank"
                >
                  <i className="ri-mail-send-line"></i>
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://men4men-pihz.onrender.com/"
                  target="_blank"
                >
                  <i className="ri-share-forward-2-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
