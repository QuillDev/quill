import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import Head from "next/head";
import TypeScriptSVG from "../assets/typescript.svg";
import CSharpSVG from "../assets/csharp.svg";
import JavaSVG from "../assets/java.svg";
import StratumLogo from "../assets/stratum.png";
import MinecraftSVG from "../assets/minecraft.svg";
import Link from "next/link";
interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  const [style, setStyle] = useState(styles.fadeIn);
  useEffect(() => {
    setStyle(`${style} ${styles.loaded}`);
  }, []);

  return (
    <div>
      <Head>
        <title>QuillDev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information about the software developer Quill aka QuillDev
          and his projects."
        />
      </Head>

      <div className={styles.quillText}>{"<Quilldev/>"}</div>

      {/* Create the grid system */}
      <div className={style + " p-2"}>
        <section className={styles.basicGrid}>
          {/* Card for Tsubasa */}
          <article className={styles.card + " bg-dark-red"}>
            <div className="flex text-5xl items-center">
              <span className="pr-2">Tsubasa</span>
              <img
                className="align-middle w-16"
                src={TypeScriptSVG}
                alt="TypeScript"
              />
            </div>
            <div className="text-lg pt-2">
              Tsubasa is a multi-purpose discord bot written in typescript,
              Tsubasa is my main primary project and I am constantly looking to
              add new features to the bot.
            </div>
            <div className="pt-2">
              <div className="inline-block pr-2">
                <Link href="/tsubasa">
                  <div className="bg-red-700 p-2 rounded-sm">Learn More</div>
                </Link>
              </div>
              <div className="inline-block">
                <Link href="https://github.com/quilldev/tsubasajs">
                  <div className="bg-red-700 p-2 rounded-sm">Source Code</div>
                </Link>
              </div>
            </div>
          </article>
          {/* Card for NetJoy */}
          <article className={styles.card + " bg-dark-blue"}>
            <div className="flex text-5xl items-center">
              <span className="pr-2">NetJoy</span>
              <img className="align-middle w-20" src={CSharpSVG} alt="CSharp" />
            </div>
            <div className="text-lg pt-2">
              NetJoy is a peer to peer CLI controller input sharing application.
              NetJoy is primarily used for remote controlling First Robotics
              Robots combined with FRC Driver Station
            </div>
            <div className="inline-block pt-2">
              <Link href="https://github.com/quilldev/netjoy">
                <div className="bg-blue-700 p-2 rounded-sm">Source Code</div>
              </Link>
            </div>
          </article>
          {/* Card for NetJoy */}
          <article className={styles.card + " bg-dark-yellow"}>
            <div className="flex text-5xl items-center">
              <span className="pr-2">QuillKanji</span>
              <img className="align-middle w-18" src={JavaSVG} alt="java.svg" />
            </div>
            <div className="text-lg pt-2">
              QuillKanji is a Java based desktop application that uses OCR
              scanning in order to read Kanji and gives common meanings.
            </div>
            <div className="inline-block pt-2">
              <Link href="https://github.com/quilldev/quillkanji">
                <div className="bg-yellow-700 p-2 rounded-sm">Source Code</div>
              </Link>
            </div>
          </article>
          {/* Car for Strautm */}
          <article className={styles.card + " bg-dark-blue"}>
            <div className="flex text-5xl items-center">
              <span className="pr-2">Stratum</span>
              <img className="align-middle w-18" src={StratumLogo} alt="stratum.svg" />
            </div>
            <div className="text-lg pt-2">
              Stratum is a group of Minecraft plugins written using PaperMC for Bukkit servers.
              Stratum has custom economy systems, enemies, weapons, crafting, upgrades, bosses, and
              much more!
            </div>
            <div className="inline-block pt-2">
              <Link href="https://github.com/quilldev/stratumsurvival">
                <div className="bg-blue-700 p-2 rounded-sm">Source Code</div>
              </Link>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Index;
