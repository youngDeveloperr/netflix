import React from "react";
import prisma from "../utils/db";
import Image from "next/image";
import { MovieCard } from "./MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      youtubeString: true,
      age:true,
      duration:true,
      release:true
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

async function RecentlyAdded() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            width={500}
            height={400}
            src={movie.imageString}
            alt="Movie"
            className=" rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className=" border bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                width={800}
                height={800}
                src={movie.imageString}
                alt="movie"
                className="w-full h-full absolute rounded-lg object-cover -z-10"
              />
              <MovieCard
                movieId={movie.id}
                overView={movie.overview}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0 ? true : false}
                youtubeUrl={movie.youtubeString}
                key={movie.id}
                age={movie.age}
                year={movie.release}
                time={movie.duration}

              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentlyAdded;
