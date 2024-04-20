"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/title/Title";
import Card from "@/components/card/Card";
import CardModule from "@/components/module/Module";
import React from "react";
import { useTranslation } from "react-i18next";
import enModules from "../../public/locales/en/cardModule.json";
import esModules from "../../public/locales/es/cardModule.json";
import i18n from "../i18n";

const Home = () => {
  const { t } = useTranslation(['home', 'cardModule'])
  const modules = i18n.language === 'es' ? esModules : enModules;

  return (
    <>
      <section className={styles.section1}>
        <div className={styles.textContent}>
          <div className={styles.typewriter}>
            <h1>
              <Title title={t("createWithoutLimits")} fontSize={56} />
            </h1>
          </div>
          <p className={styles.p}>
            {t("becomeExpert")}
          </p>
          <button className={styles.ctaButton}>
            {t('startLearning')}
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
        <Card src="/images/total_courses.svg" count="3" title={t("totalCourses")} />
        <Card src="/images/expert_mentors.svg" count="5" title={t("expertMentors")} />
        <Card src="/images/students.svg" count="1,800+" title={t("students")} />
      </section>

      <section className={styles.section3}>
        <h3 className={styles.h3}>{t("courses")}</h3>
        <h2>{t("exploreCourses")}</h2>
        <p className={styles.description}>{t("courseDescription")}</p>
        <div className={styles.containerModule}>
          {modules.map((module, index) => (
            <CardModule
              key={index}
              image={module.image}
              hours={module.duration}
              title={module.title}
              description={module.description}
              path={module.path}
              available={module.available}
            />
          ))}
        </div>
      </section>

      <section className={styles.section4}>
        <Image src={"/images/certificate.png"} alt="certificate" height={450} width={450} />
        <div>
          <Title title={t("certificate")} fontSize={56} />
          <p className={styles.p}>{t("certificateDescription")}</p>
        </div>
      </section>

      <section className={styles.section4}>
        <div>
          <Title title={t("joinCommunity")} fontSize={56} />
          <p className={styles.p}>{t("communityDescription")}</p>
        </div>
        <Image src={"/images/community.png"} alt="community" height={450} width={450} />
      </section>

      <section className={styles.section4}>
        <Image src={"/images/getRewards.png"} alt="getRewards" height={450} width={450} />
        <div>
          <Title title={t("getRewards")} fontSize={56} />
          <p className={styles.p}>{t("rewardsDescription")}</p>
        </div>
      </section>

      <section className={styles.section5}>
        <div className={styles.contentSection5}>
          <h2 className={styles.title}>{t("careerLevel")}</h2>
          <button className={styles.buttonRegister}>{t("registerNow")}</button>
        </div>
      </section>

    </>
  );
}

export default Home;