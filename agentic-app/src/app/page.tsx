import Image from "next/image";
import styles from "./page.module.css";

const stats = [
  { label: "Abonnés", value: "2,4 M" },
  { label: "Engagement", value: "7,8%" },
  { label: "Collabs annuelles", value: "36" }
];

const interests = ["Mode responsable", "Tech créative", "Metaverse", "Voyages sensoriels"];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <article className={styles.details}>
          <span className={styles.eyebrow}>Influenceur IA</span>
          <h1 className={styles.title}>Léna Nova</h1>
          <p className={styles.subtitle}>
            Créatrice de tendances holographiques, Léna fusionne storytelling immersif, mode durable et
            expériences Web3 pour inspirer une génération connectée et consciente.
          </p>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.tags}>
            {interests.map((interest) => (
              <span key={interest} className={styles.tag}>
                {interest}
              </span>
            ))}
          </div>
        </article>
        <section className={styles.portraitWrapper}>
          <span className={styles.portraitFrame} />
          <Image
            src="/influencer.png"
            alt="Portrait réaliste d'une influenceuse virtuelle"
            width={820}
            height={1024}
            className={styles.image}
            priority
          />
          <p className={styles.quote}>
            « Ma mission est de prouver que l&apos;innovation peut rimer avec poésie, inclusivité et impact réel. »
          </p>
        </section>
      </div>
    </main>
  );
}
