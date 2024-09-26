import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-8 pb-10 cursor-pointer">
            <BiLogoLinkedin onClick={() => window.open("https://www.linkedin.com/in/aslam-thachapalli/", "_blank")}/>
            <BsGithub onClick={() => window.open("https://github.com/AslamThachapalli/", "_blank")}/>
            <SiMedium onClick={() => window.open("https://medium.com/@aslam.develop912", "_blank")}/>
            <AiOutlineYoutube onClick={() => window.open("https://www.youtube.com/@AslamTDev", "_blank")}/>
        </div>
    )
}

export default Footer;