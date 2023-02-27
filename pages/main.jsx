import React, { useEffect, useState } from "react";
import styles from "../styles/main.module.sass";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Image from "next/image";

const Main = () => {
  const t = useTranslations();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState(router.locale);

  useEffect(() => {
    if (selectedLang) {
      router.push(router.asPath, undefined, {
        locale: selectedLang,
      });
    }
  }, [selectedLang]);
  return (
    <>
      <div className={styles.cont}>
        <Image
          src="/assets/img1.png"
          alt="img"
          width={60}
          height={60}
          className={styles.cont__img}
        ></Image>
        <p className={styles.p}>Soft Clean</p>

        <p className={styles.p1}>8-800-700-60-50</p>
        <p className={styles.p2}>
          {t("p1")}
        </p>
        <div>
          <Image className={styles.img}
            src="/assets/img2.png"
            alt="img"
            width={20}
            height={20}
          ></Image>
          <Image className={styles.img}
            src="/assets/img3.png"
            alt="img"
            width={20}
            height={20}
          ></Image>
        </div>
        <select
          className={styles.cont__select}
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="uz">Uz</option>
          <option value="tr">Tr</option>
          <option value="en">En</option>
          <option value="af-ZA">Arab</option>
        </select>
      </div>
      <div className={styles.cont2}>
        <p className={styles.cont2__header}>{t("p2")}</p>
        <p className={styles.cont2__title}>{t("p3")}</p>
        <button className={styles.cont2__btn1}>{t("btn1")}</button>
        <button className={styles.cont2__btn2}>{t("btn2")}</button>
      </div>
      <div className={styles.cont3}>
        <div className={styles.cont3__box1}><p>{t("t1")}</p></div>
        <div className={styles.cont3__box2}><p>{t("t2")}</p></div>
        <div className={styles.cont3__box3}><p>{t("t3")}</p></div>
        <div className={styles.cont3__box4}><p>{t("t4")}</p></div>
      </div>
    </>
  );
};
export default Main