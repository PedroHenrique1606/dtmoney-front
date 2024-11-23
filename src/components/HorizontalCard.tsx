import React from "react";

interface CardComponentProps {
  imageSrcOne: string;
  title: string;
  description: string;
  link: string;
  imageSrcTwo: string;
}

const HorizontalCard: React.FC<CardComponentProps> = ({
  imageSrcOne,
  title,
  description,
  link,
  imageSrcTwo,
}) => {
  return (
    <a
      href={link}
      className="flex flex-col items-center bg-gray3 border border-gray2 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray2 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {imageSrcOne && (
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-s-lg"
          src={imageSrcOne}
          alt={title}
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-light dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-200">{description}</p>
      </div>
      {imageSrcTwo && (
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-e-lg"
          src={imageSrcTwo}
          alt={title}
        />
      )}
    </a>
  );
};

export default HorizontalCard;
