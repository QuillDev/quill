import DiscordButton from "../components/DiscordButton";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/table.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <DiscordButton />
    </div>
  );
};
export default MyApp;
