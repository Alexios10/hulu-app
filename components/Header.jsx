import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="Top-Rated" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        alt="hulu"
        src="https://1000logos.net/wp-content/uploads/2021/04/Hulu-logo.png"
        width={80}
        height={100}
      />
    </header>
  );
};

export default Header;
