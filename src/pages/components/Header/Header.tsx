/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import FeaturesCard from "./FeaturesCard";

type IProps = {
  setCurrentPage: (page: string) => void;
};

const Header: FC<IProps> = ({ setCurrentPage }) => {
  return (
    <div
      onMouseEnter={() => setCurrentPage("features")}
      id="features"
      className="mt-[25vh] flex justify-center w-full">
      <div className="w-[50vw] xl:w-[85vw] text-center">
        <span className="text-sm font-bold  p-2 bg bg-gray-100 border-gray-200 border-[1px] rounded-md">
          Lorem ipsum dolor sit amet consectetur.r
        </span>
        <h1 className="text-7xl font-bold mt-[8vh] xl:text-4xl">
          Lorem ipsum dolor sit,{" "}
          <span className="text-gray-400"> amet consectetur</span> adipisicing.
        </h1>
        <p className="text-gray-500 text-2xl mt-10 pl-[5vw] pr-[5vw] xl:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
          provident dignissimos! At unde numquam atque quae!
        </p>
        <button className="mt-20 px-7 py-2 bg-black text-white rounded-lg hover:bg-gray-800  border-2 border-transparent focus:border-white focus:outline-none focus:ring-2 focus:ring-black ">
          Start Free
        </button>
        <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet.</p>
        <div className="mt-20 p-2 rounded-xl bg-gray-200">
          <img
            src="https://pbs.twimg.com/profile_banners/1471054439507243009/1687363887/1500x500"
            alt="logo"
            className=" rounded-xl"
          />
        </div>
        <div className="mt-20 mb-20 w-full h-1 bg-gray-100" />
        <div className="flex flex-col text-center items-center w-full">
          <h2 className="text-4xl w-[30vw] xl:w-[80vw]">
            Lorem ipsum dolor sit amet adipisicing elit.
            <span className="text-gray-400">Minima</span>
          </h2>
          <p className="mt-10 text-xl text-gray-400 w-[25vw] xl:w-[70vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          </p>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-5 lg:grid-cols-1">
          <FeaturesCard
            cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            cardTitle="Lorem ipsum dolor sit amet."
            cardImage="https://avatars.githubusercontent.com/u/88425310?v=4"
          />
          <FeaturesCard
            cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            cardTitle="Lorem ipsum dolor sit amet."
            cardImage="https://avatars.githubusercontent.com/u/88425310?v=4"
          />
          <FeaturesCard
            cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            cardTitle="Lorem ipsum dolor sit amet."
            cardImage="https://avatars.githubusercontent.com/u/88425310?v=4"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
