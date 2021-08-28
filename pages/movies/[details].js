import React from "react";
import requests from "../../utils/requests";

const details = ({ movie }) => {
    return <div>{movie.original_title}</div>;
};

export default details;

export async function getServerSideProps(context) {
    const id = context.params.details;

    const request = await fetch(
        `https://api.themoviedb.org/3/movie/${
            id + requests.fetchMovieDetails.url
        }`
    ).then((res) => res.json());

    return {
        props: {
            movie: request,
        },
    };
}
