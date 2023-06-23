import type { FC } from "react";
import FaqCard from "./FaqCard";

type IProps = {
  setCurrentPage: (page: string) => void;
};

const Faq: FC<IProps> = ({ setCurrentPage }) => {
  return (
    <div
      onMouseEnter={() => setCurrentPage("faq")}
      id="faq"
      className="pt-[15vh] pb-[10vh] flex justify-center w-full">
      <div className="w-[50vw] xl:w-[85vw] text-center">
        <h3 className="text-5xl font-bold">Lorem ipsum dolor sit.</h3>
        <p className="mt-5 text-xl">Lorem ipsum dolor sit amet.</p>
        <div className="mt-20">
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
          <FaqCard
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            question="Lorem ipsum dolor sit amet?"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
