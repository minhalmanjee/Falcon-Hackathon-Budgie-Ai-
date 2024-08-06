"use client";

import { useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import { FaMicrophone } from "react-icons/fa";
import Chatbot from "./components/Chatbot";
import Personalities from './components/Personality';

export default function Home() {
  const [personality, setPersonality] = useState("");
  return (
    <main className={styles.container}>
      <nav className={styles.logo}>
        <h1>Budgie</h1>
      </nav>
      <Personalities setPersonality={setPersonality} />
    </main>
  );
}
