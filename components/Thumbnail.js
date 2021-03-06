import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
   const [loading, setLoading] = useState(false);
   const BASE_URL = "https://image.tmdb.org/t/p/original/";
   return (
      <>
         <Link href={`/movies/${result.id}`} passHref>
            <a>
               <div
                  ref={ref}
                  className={`p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ${
                     loading && "animate-pulse"
                  }`}
                  onClick={() => setLoading((prev) => !prev)}
               >
                  <Image
                     src={
                        `${BASE_URL}${
                           result.backdrop_path || result.poster_path
                        }` || `${BASE_URL}${result.backdrop_path}`
                     }
                     className="object-contain"
                     layout="responsive"
                     height={1080}
                     width={1920}
                  />
                  <div className="p-2">
                     <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-medium">
                        {result.title || result.original_name}
                     </h2>
                     <p className="truncate max-w-md">{result.overview}</p>

                     <p className="flex items-center opacity-100 sm:opacity-0 group-hover:opacity-100">
                        {result.release_date || result.first_air_date}
                        {""}
                        <ThumbUpIcon className="h-5 mx-2" />
                        {result.vote_count}
                     </p>
                  </div>
               </div>
            </a>
         </Link>
      </>
   );
});

export default Thumbnail;
