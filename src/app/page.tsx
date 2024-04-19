import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/title/Title";
import Card from "@/components/card/Card";
import CardModule from "@/components/module/Module";
import React from "react";
import modules from "@/utils/courses_data.json"

const Home = () => {
  const lang = 'en';
  return (
    <>
      <section className={styles.section1}>
        <div className={styles.textContent}>
          <div className={styles.typewriter}>
            <h1>
              <Title title="Create Without Limits" fontSize={56} />
            </h1>
          </div>
          <p className={styles.p}>
            Become an expert in the Avalanche Ecosystem, Virtual Machine Development and Subnet Architecture.
          </p>
          <button className={styles.ctaButton}>
            Start Learning Today
          </button>
        </div>
        <div className={styles.imageContent}>
          <Image
            src={"/images/pc.png"}
            priority={true}
            alt="pc"
            height={500}
            width={500}
          />
        </div>
      </section>

      <section className={styles.section2}>
        <Card src="/images/total_courses.svg" count="3" title="Total Courses" />
        <Card src="/images/expert_mentors.svg" count="5" title="Expert Mentors" />
        <Card src="/images/students.svg" count="1,800+" title="Students" />
      </section>

      <section className={styles.section3}>
        <h3 className={styles.h3}>Courses</h3>
        <h2>Explore Our Courses</h2>
        <p className={styles.description}>
          We offer fundamental courses are specifically designed for individuals who are new to the Avalanche ecosystem, and advanced courses for those who wish to master the art of configuring, modifying, or even creating entirely new Virtual Machines from scratch.
        </p>
        <div className={styles.containerModule}>
          {modules.map((module, index) => (
            <CardModule
              key={index}
              image={module[lang].image}
              hours={module[lang].duration}
              title={module[lang].title}
              description={module[lang].description}
              path={module[lang].path}
            />
          ))}
        </div>
      </section>

      <section className={styles.section4}>
        <Image src={"/images/certificate.png"} alt="certificate" height={450} width={450} />
        <div>
          <Title title="Earn an Avalanche Academy Certificate" fontSize={56} />
          <p className={styles.p}>
            Showcase your Avalanche Academy accomplishments on your CV and platforms like LinkedIn, X, and more.
          </p>
        </div>
      </section>

      <section className={styles.section4}>
        <div>
          <Title title="Join the Avalanche Community" fontSize={56} />
          <p className={styles.p}>
            Get connected with other Avalanche builders and like-minded individuals passionate about Avalanche.
          </p>
        </div>
        <Image src={"/images/community.png"} alt="community" height={450} width={450} />
      </section>

      <section className={styles.section4}>
        <Image src={"/images/getRewards.png"} alt="getRewards" height={450} width={450} />
        <div>
          <Title title="Get Rewards" fontSize={56} />
          <p className={styles.p}>
            Top performing students can earn benefits, such as exclusive Avalanche Merchandise, complimentary event tickets, and additional privileges.
          </p>
        </div>
      </section>

      <section className={styles.section5}>
        <div className={styles.contentSection5}>
          <h2 className={styles.title}>Take your Career to the next Level!</h2>
          <button className={styles.buttonRegister}>
            Register Now
          </button>
        </div>
      </section>

    </>
  );
}

export default Home;