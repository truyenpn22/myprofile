

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <a href="https://github.com/truyenpn22" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <i className="ri-github-line"></i>
            </span>
            </a>
        <a href="https://www.facebook.com/truyen.pn" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <i className="ri-facebook-fill"></i>
            </span>
            </a>
        <a href="https://www.linkedin.com/in/phan-ngoc-truyen-b893bb266" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <i className="ri-linkedin-box-fill"></i>
            </span>
            </a>
        <a href="https://www.instagram.com/__p.trye.22" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <i className="ri-instagram-line"></i>
            </span>
            </a>
            
            <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide