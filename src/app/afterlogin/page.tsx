"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/title/Title";
import CardModule from "@/components/module/Module";
import React from "react";
import { useTranslation } from "react-i18next";
import enModules from "../../../public/locales/en/cardModule.json";
import esModules from "../../../public/locales/es/cardModule.json";
import i18n from "../../i18n";
import DynamicTitle from "@/components/multiTilte/MultiTitle";

const MainAfterLogin = () => {
  const { t } = useTranslation(['mainAfterLogin', 'cardModule'])
  const modules = i18n.language === 'es' ? esModules : enModules;

  return (
    <>
      <section className={styles.section1}>
        <div className={styles.textContent}>
          <h1>
            <span className={styles.staticText}>Learn how to</span>
            <DynamicTitle
              titles={[
                " launch your own Subnet",
                " deploy a Solidity DApp on the C-Chain",
                " build your own Virtual Machines",
                " customize your own EVM"
              ]}
              speed={100}

            />
          </h1>
        </div>
      </section>

      <section className={styles.section2}>
        <h2>{t("yourCourses")}</h2>
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


    </>
  );
}

export default MainAfterLogin;