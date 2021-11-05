import { useContext, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import Head from "next/head";
import styles from "../styles/pages/Ranking.module.css";
import TopRankingContext from "../contexts/TopRankingContext";
import profileStyles from "../styles/components/Profile.module.css";

export default function Ranking() {
  const { list } = useContext(TopRankingContext);

  return (
    <>
      <Head>
        <title>Ranking | move.it</title>
      </Head>
      <Sidebar active={"ranking"} />

      <div className={styles.conteiner}>
        <div className={styles.content}>
          <h3>Top 10 | Ranking</h3>

          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Desafios</th>
                <th>Experiência</th>
              </tr>
            </thead>
            <tbody>
              {list.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className={profileStyles.profileConteinerRanking}>
                      <img src={row.user_avatar} alt="Profile" />
                      <div>
                        <strong>{row.user_name.split(" ", 3).join(" ")}</strong>
                        <p>
                          <img src="icons/level.svg" alt="Level" />
                          Level {row.level}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={styles.numero}>
                      {row.challengesComplited}
                    </span>
                    completados
                  </td>
                  <td>
                    <span className={styles.numero}>
                      {row.currentExperience}
                    </span>
                    xp
                  </td>
                </tr>
              ))}

              {!list.length && (
                <tr>
                  <td colSpan={3}>
                    <p>carregando ranking...</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
