import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChellengesContext";
import styles from "../styles/components/Profile.module.css";
import Cookies from "js-cookie";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const userName = Cookies.get("user_name").split(" ", 3).join(" ");
  const user_avatar = Cookies.get("user_avatar");

  return (
    <div className={styles.profileConteiner}>
      <img src={user_avatar} alt="Carlos" />
      <div>
        <strong>{userName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
