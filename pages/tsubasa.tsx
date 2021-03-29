import React from "react";
import ModuleCommand from "../components/Tsubasa/ModuleCommand";
import ModuleTable from "../components/Tsubasa/ModuleTable";

import tsubasaGif from "../assets/Tsubasa.gif";
import Link from "next/link";
import styles from "../styles/tsubasa.module.css";
import Head from "next/head";
interface TsubasaProps {}

const Tsubasa: React.FC<TsubasaProps> = ({}) => {
  return (
    <>
      {/* <Head>
        <title>Tsubasa「つばさ」</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="List of commands and information for the Tsubasa Discord bot
          by QuillDev."
        />
      </Head> */}
      <div className={styles.tsubasaBG}>
        {/* Heading */}
        <header>
          <div className="text-center ">
            <p className={styles.tsubasaText}>「つばさ」</p>
            <p className="text-xl italic">
              Tsubasa is a general purpose discord bot written in TypeScript.
            </p>
          </div>
          <div className="py-5">
            <img
              className="mx-auto w-5/12 border-gray-400 border-2"
              src={tsubasaGif}
            />
          </div>
        </header>
        {/* Key */}
        <div className="text-center text-x1">
          <div className="underline">Argument Key</div>
          <div className="inline-block px-2">
            Required <div className="w-3 h-3 bg-red-400 inline-block" />
          </div>
          <div className="inline-block">
            Optional <div className="w-3 h-3 bg-blue-400 inline-block" />
          </div>
        </div>

        {/* TODO: Change this to a flex grid */}
        <section className="basic-grid">
          <Link href="#animeModule">
            <div className="card">Anime</div>
          </Link>
          <Link href="#musicModule">
            <div className="card">Music</div>
          </Link>
          <Link href="#nsfwModule">
            <div className="card">Hentai</div>
          </Link>
          <Link href="#generalModule">
            <div className="card">General</div>
          </Link>
          <Link href="#languageModule">
            <div className="card">Language</div>
          </Link>
          <Link href="#gameModule">
            <div className="card">Games</div>
          </Link>
          <Link href="#gameToolsModule">
            <div className="card">GameTools</div>
          </Link>
        </section>
        <div>
          {/* General Table */}
          <ModuleTable name="General Module" id="generalModule">
            <ModuleCommand
              name="help"
              description="Brings you to the help website."
            />
            <ModuleCommand
              name="version"
              description="Get the current version of Tsubasa."
            />
            <ModuleCommand
              name="ping"
              description="Gets the current discord ping & bot delay.."
            />
            <ModuleCommand
              name="pfp"
              description="Gets the profile picture of the tagged user"
              params={[{ name: "@user" }]}
            />
            <ModuleCommand
              name="vote"
              description="Vote for Tsubasa on bot list sites."
            />
            <ModuleCommand
              name="donate"
              description="Brings up the donation URL for QuillDev (broke college student)."
            />
            <ModuleCommand
              name="roll"
              description="Roll a die between the given numbers."
              params={[{ name: "min|max" }, { name: "max" }]}
            />
            <ModuleCommand
              name="source"
              description="Get the source repository for Tsubasa."
            />
          </ModuleTable>

          {/* Music Table */}
          <ModuleTable name="Music Module" id="musicModule">
            <ModuleCommand
              name="play"
              description="Plays the given song in the guild Supported Platforms: Youtube."
              params={[{ name: "query", required: true }]}
            />
            <ModuleCommand name="skip" description="Skips the current track." />
            <ModuleCommand
              name="playing"
              description="Gets the currently playing track and it's progress"
            />
            <ModuleCommand
              name="queue"
              description="Gives the current song queue."
            />
            <ModuleCommand name="pause" description="Pauses the player." />
            <ModuleCommand name="resume" description="Resumes the player." />
            <ModuleCommand
              name="autoplay"
              description="Toggles whether to use autoplay."
            />
            <ModuleCommand
              name="seek"
              description="Seeks to the given point in the song"
              params={[{ name: "seconds", required: true }]}
            />
            <ModuleCommand
              name="stop"
              description="Completely stops the music player."
            />
          </ModuleTable>

          {/* Anime Module */}
          <ModuleTable name="Anime Module" id="animeModule">
            <ModuleCommand
              name="uwu"
              description="uwu-ifies the given text."
              params={[{ name: "message", required: true }]}
            />
            <ModuleCommand
              name="anime"
              description="Gets an anime image for the given query."
              params={[{ name: "query" }]}
            />
            <ModuleCommand
              name="sauce"
              description="Tries to find the author for the given image."
              params={[{ name: "query", required: true }]}
            />
            <ModuleCommand
              name="animesearch"
              description="Tries to find the given anime on MAL"
              params={[{ name: "query", required: true }]}
            />
          </ModuleTable>

          {/* Hentai Module */}
          <ModuleTable name="Hentai Module" id="nsfwModule">
            <ModuleCommand
              name="hentai"
              description="Gets a hentai image matching the query"
              params={[{ name: "query" }]}
              nsfw={true}
            />
            <ModuleCommand
              name="doujin"
              description="Finds a doujin matching the given tags"
              params={[{ name: "query" }]}
              nsfw={true}
            />
            <ModuleCommand
              name="doujintop"
              description="Gets the top 5 doujins today for the given query"
              params={[{ name: "query" }]}
              nsfw={true}
            />
          </ModuleTable>

          {/* Language Module */}
          <ModuleTable name="Language Module" id="languageModule">
            <ModuleCommand
              name="kanji"
              description="Gets a random kanji at the given JLPT level."
              params={[{ name: "level (1-5)" }]}
            />
          </ModuleTable>

          {/* Game Module */}
          <ModuleTable name="Game Module" id="gameModule">
            <ModuleCommand
              name="deathroll"
              description="Starts a deathroll game"
            />
          </ModuleTable>

          {/* GameTools Module */}
          <ModuleTable name="GameTools Module" id="gameToolsModule">
            <ModuleCommand
              name="csmarket"
              description="Gets CSGO Market price data."
              params={[{ name: "query" }]}
            />
          </ModuleTable>
        </div>
      </div>
    </>
  );
};
export default Tsubasa;
