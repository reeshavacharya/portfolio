import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="stacks">
      <h1 className="text-2xl">
        <a
          href="https://www.linkedin.com/in/reeshav-acharya-79b21a215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </h1>
      <h1 className="text-2xl">
        <a
          href="https://github.com/reeshavacharya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </h1>
      <h1 className="text-2xl">
        <a
          href="mailto:reeshav99acharya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail />
        </a>
      </h1>
      <h1 className="text-2xl">
        <a
          href="https://discord.com/users/747436557400670268"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </a>
      </h1>
    </div>
  );
};
export default Contact;
