import Link from "next/link";
import React, { useState } from "react";

import dc from "../assets/discord.svg";
import styles from "./DiscordButton.module.css";
interface DiscordButtonProps {}

const discordButton = <img src={dc} className="w-14" alt="discord.png" />;

const discordWidget = (
  <iframe
    src="https://discord.com/widget?id=482948983061348367&theme=dark"
    className="h-96 w-80"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  ></iframe>
);

const DiscordButton: React.FC<DiscordButtonProps> = ({}) => {
  const [content, setContent] = useState(discordButton);

  const onMouseEnter = (_e) => {
    setContent(discordWidget);
  };
  const onMouseLeave = (_e) => {
    setContent(discordButton);
  };

  return (
    <div
      onMouseEnter={onMouseEnter.bind(this)}
      onMouseLeave={onMouseLeave.bind(this)}
    >
      <Link href="https://discord.gg/R7UwYe7">
        <div className="fixed right-4 bottom-4">
          <div className={styles.discordButton}>{content}</div>
        </div>
      </Link>
    </div>
  );
};
export default DiscordButton;
