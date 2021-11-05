import { RankingProvider } from "../contexts/TopRankingContext";
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <RankingProvider>
      <Component {...pageProps} />
    </RankingProvider>
  )
}

export default MyApp
