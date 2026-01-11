import { useEffect, useRef } from "react";
import styles from "./infoCard.module.css";
import Card from "./Card";

export default function InfoCard() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.layout}>
      <div
        ref={el => (refs.current[0] = el)}
        className={`${styles.item} ${styles.aboutSection} ${styles.fadeInUp}`}
      >
        <h2>Hair Salon</h2>
        <p>The House of Hair salon & savon</p>
        <span>About us</span>
      </div>

      <div
        ref={el => (refs.current[1] = el)}
        className={`${styles.item} ${styles.fadeInUp}`}
      >
        <img
          src="/tool.png"
          alt=""
          height={406}
          width={350}
          className={styles.toolImage}
        />
      </div>

      <div
        ref={el => (refs.current[2] = el)}
        className={`${styles.item} ${styles.fadeInUp}`}
      >
        <Card
          title="Beautiful Hair Comes From A Legendary."
          content="“Working in a salon, you look at trends all day long. You’re looking at color all the time,what new products are coming out. You’re a part of the fashion industry,especially if you’re working in a higher-end salon.”"
        />
      </div>
    </div>
  );
}
