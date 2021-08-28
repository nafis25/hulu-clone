import Link from "next/link";
import React from "react";

const HeaderItem = ({ title, Icon }) => {
   return (
      <>
         <Link href={title === "HOME" ? "/" : "/search"}>
            <a>
               <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
                  <Icon className="h-6 mb-1 group-hover:animate-bounce" />
                  <p className="tracking-widest opacity-0 group-hover:opacity-100 text-xs mt-1">
                     {title}
                  </p>
               </div>
            </a>
         </Link>
      </>
   );
};

export default HeaderItem;
