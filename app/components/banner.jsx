"use client"; // sempre que tiver eventos de interação com o usuário, colocar essa linha

import styles from "./banner.module.css";
import AdoteButton from "./adoteButton";

export default function Banner({ url, name, description, breed, age, text }) {
  return (
    <div className={styles.banner}>
      <img src={url} alt={description} />
      <h1>{name}</h1>
      <p>{breed}</p>
      <p>{age}</p>
      <p className={styles.text}>{text}</p>
      <AdoteButton />
    </div>
  );
}
