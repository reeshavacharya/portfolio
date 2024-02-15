import Image from "next/image";
import styles from "./page.module.css";
import Contacts from "@/components/contact";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <header>
          <h1>Ｒｅｅｓｈａｖ &nbsp; Ａｃｈａｒｙａ</h1>
        </header>
        <div className="circular-frame">
          <Image
            src='https://media.licdn.com/dms/image/D4D03AQGnm_Go-SREAg/profile-displayphoto-shrink_800_800/0/1702526675149?e=1713398400&v=beta&t=cXl24tvQRbDsLIi5oIIBrowrFO0CUBQtLj0KNOyh5lk'
            alt='Profile Photo'
            width={300}
            height={300}
          />
        </div>
        <div className="top-margin-20">
          <h2 >Software Engineer</h2>
          <h3>Web3 & Blockchain</h3>
        </div>
        <div className="top-margin-20">
          A passionate and innovative software developer, experienced in web, software, and blockchain development. My journey in the tech world has allowed me to delve into the exciting realms of DApps and decentralized technologies. I thrive on challenges and focus on crafting clean, scalable, and robust code that not only meets project requirements but sets a high standard for maintainability and efficiency.
        </div>
        <div className="top-margin-40">
          <Contacts />
        </div>
      </main>
    </>

  );
}
