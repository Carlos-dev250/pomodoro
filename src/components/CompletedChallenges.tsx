import Cookies from "js-cookie";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChellengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { challengesComplited } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesComplited}</span>
    </div>
  );
}
