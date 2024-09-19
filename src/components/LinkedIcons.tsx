interface LinkedIconsProps {
    icon: JSX.Element;
    link: string;
  }
  
  const LinkedIcons = ({ icon, link }: LinkedIconsProps) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-[white] after:absolute after:left-0 after:-bottom-2"
      >
        {icon}
      </a>
    );
  };
  
  export default LinkedIcons;
  