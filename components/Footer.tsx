const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/truyenpn22" target="_blank">
        <span className="w-10 h-10 bg-bodyColor border-[1px] border-zinc-700 hover:text-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center  cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <i className="ri-github-line"></i>
        </span>
      </a>
      <a href="https://www.facebook.com/truyen.pn" target="_blank">
        <span className="w-10 h-10 bg-bodyColor border-[1px] border-zinc-700 hover:text-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <i className="ri-facebook-fill"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/phan-ngoc-truyen-b893bb266"
        target="_blank"
      >
        <span className="w-10 h-10 bg-bodyColor border-[1px] border-zinc-700 hover:text-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <i className="ri-linkedin-box-fill"></i>
        </span>
      </a>
      <a href="https://www.instagram.com/__p.trye.22" target="_blank">
        <span className="w-10 h-10 bg-bodyColor border-[1px] border-zinc-700 hover:text-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <i className="ri-instagram-line"></i>
        </span>
      </a>
    </div>
  );
};

export default Footer;
