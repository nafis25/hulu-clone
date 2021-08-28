import React, { useState } from "react";
import requests from "../utils/requests";
import { useRouter } from "next/dist/client/router";

const Nav = () => {
    const router = useRouter();
    const [activeGenre, setActiveGenre] = useState("fetchTrending");
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-1xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        key={key}
                        onClick={() => {
                            router.push(`/?genre=${key}`);
                            setActiveGenre(key);
                        }}
                        className={`last:pr-10 cursor-pointer transition duration-100 transform ${
                            key === activeGenre
                                ? "scale-125 text-white"
                                : "hover:scale-125 hover:text-white"
                        } active:text-red-500 text-lg`}
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    );
};

export default Nav;