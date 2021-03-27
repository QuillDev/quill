import React from "react";
import ModuleCommand from "../components/Tsubasa/ModuleCommand";
import ModuleTable from "../components/Tsubasa/ModuleTable";

import tsubasaGif from "../assets/Tsubasa.gif";
interface TsubasaProps {}

const Tsubasa: React.FC<TsubasaProps> = ({}) => {
  return (
    <div>
      <head>
        <title>Tsubasa「つばさ」</title>
      </head>
      {/* Heading */}
      <header>
        <div className="text-center ">
          <p className="font-bold text-8xl py-2">「つばさ」</p>
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
      <div className="text-center text-3xl">
        <div className="underline">Argument Key</div>
        <div className="inline-block px-2">
          Required <div className="w-6 h-6 bg-red-400 inline-block" />
        </div>
        <div className="inline-block">
          Optional <div className="w-6 h-6 bg-blue-400 inline-block" />
        </div>
      </div>

      {/* Music Table */}
      <ModuleTable name="Music Module" id="musicModule">
        <ModuleCommand
          name="play"
          description="Plays the given song in the guild Supported Platforms: Youtube."
          params={[{ name: "query", required: true }]}
        />
        <ModuleCommand name="skip" description="Skips the current track." />
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
    </div>
  );
};
export default Tsubasa;
