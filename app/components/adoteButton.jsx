"use client";
import styles from "./adoteButton.module.css";
import { useState } from "react";

export default function AdoteButton() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={
        selected
          ? styles.adoteButton + " " + styles.selected
          : styles.adoteButton
      }
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <img
        src={selected ? "./images/icon-laranja.png" : "./images/icon-white.png"} // renderização condicional
      />
      <p>Quero Adotar</p>
    </div>
  );
}
