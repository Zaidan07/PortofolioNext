"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: 'https://www.youtube.com/@masdan7/featured',
    name: <RiYoutubeFill/>
  },
  {
    path: 'https://www.linkedin.com/in/muhammad-zaidan-nabih-5b0170265/',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/Zaidan07',
    name: <RiGithubFill/>
  },
  {
    path: 'https://web.facebook.com/JidanNPCII/',
    name: <RiFacebookFill/>
  },
  {
    path: 'https://www.instagram.com/mas.dan0/?hl=id',
    name: <RiInstagramFill/>
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  );
};

export default Socials;
