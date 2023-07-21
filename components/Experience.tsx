import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./work/ReactBD";
import Google from "./work/Google";

const Experience = () => {
  const [workreactBD, setWorkReactBD] = useState(true);
  const [workgoole, setWorkGoogle] = useState(false);

  const handleReactBD = () => {
    setWorkReactBD(true);
    setWorkGoogle(false);
  };

  const handleGoogle = () => {
    setWorkReactBD(false);
    setWorkGoogle(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Wored" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            className={`${
              workreactBD
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleReactBD}
          >
            ReacBD
          </li>
          <li
            className={`${
              workgoole
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleGoogle}
          >
            Google
          </li>
          <li className="border-l-2 border-l-hoverColor  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Apple
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Amazon
          </li>
          <li className="border-l-2 border-l-hoverColor  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Facebook
          </li>
        </ul>
        {workreactBD && <ReactBD />}
        {workgoole && <Google />}
      </div>
    </section>
  );
};

export default Experience;
