import axios from "axios";
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChellengesContext";

interface RankigContextProps {
  list: Array<any>;
}

const TopRankingContext = createContext({} as RankigContextProps);

interface RankingProviderProps {
  children: ReactNode;
}

export function RankingProvider({ children }: RankingProviderProps) {

  const Router = useRouter();
  const [list, setList] = useState([]);
  const { level, currentExperience } = useContext(ChallengesContext);
  useEffect(() => {

    const user_id = Cookies.get("user_id");
    const user_access_token = Cookies.get("user_access_token");
    if (!user_id || !user_access_token) {
      Router.push("/auth");
    }
  }, []);

  useEffect(() => {
    axios.get("/api/top-ranking-get").then((resp) => {
      setList(resp.data);
    });
  }, [level, currentExperience]);

  return (
    <TopRankingContext.Provider value={{ list }}>
      {children}
    </TopRankingContext.Provider>
  );
}

export default TopRankingContext;
