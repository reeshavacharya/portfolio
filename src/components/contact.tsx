import { FaLinkedin, FaGithub, FaArtstation, FaInstagram } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi";

const Contacts = () => {
    return (
        <>
            <div className="item-seperation-20">
                <a href="mailto:reeshav99acharya@gmail.com" target="_blank" rel="noopener noreferrer">
                    <BiLogoGmail/>
                </a>
                <a href="https://www.linkedin.com/in/reeshav-acharya-79b21a215/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/reeshavacharya" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.artstation.com/ryukiree" target="_blank" rel="noopener noreferrer">
                    <FaArtstation/>
                </a>
                
                <a href="https://www.instagram.com/ryukiree/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </div>
        </>
    )
}
export default Contacts