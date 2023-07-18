import type { FC } from "react";
import PricingCard from "./PricingCard";

type IProps = {
  setCurrentPage: (page: string) => void;
};

const Pricing: FC<IProps> = ({ setCurrentPage }) => {
  return (
    <div
      id="pricing"
      onMouseEnter={() => setCurrentPage("pricing")}
      className="pt-[15vh] flex justify-center w-full">
      <div className="flex flex-col items-center w-[50vw] xl:w-[85vw] text-center">
        <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p className="text-gray-500 text-2xl mt-10 pl-[5vw] pr-[5vw] xl:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
        </p>
        <div className="mt-20 grid grid-cols-3 gap-5 lg:grid-cols-1">
          <PricingCard
            planName="Basic"
            planPrice="$0"
            planDescriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            suggested={true}
            buttonHref="#"
            planFeatures={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ]}
          />
          <PricingCard
            planName="Basic"
            planPrice="$0"
            planDescriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            suggested={false}
            buttonHref="#"
            planFeatures={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ]}
          />
          <PricingCard
            planName="Basic"
            planPrice="$0"
            planDescriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            suggested={false}
            buttonHref="#"
            planFeatures={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            ]}
          />
        </div>
        <div className="mt-20 mb-20 w-full h-1 bg-gray-100" />
      </div>
    </div>
  );
};

export default Pricing;
