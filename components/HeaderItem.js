import { useRouter } from "next/dist/client/router";
import React from "react";

const HeaderItem = ({ title, Icon }) => {
    const router = useRouter();
    return (
        <div
            className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group"
            onClick={() =>
                title === "HOME" ? router.push("/") : router.push("/search")
            }
        >
            <Icon className="h-6 mb-1 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100 text-xs mt-1">
                {title}
            </p>
        </div>
    );
};

export default HeaderItem;
