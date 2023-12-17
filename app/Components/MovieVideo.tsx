import React from "react";
import prisma from "../utils/db";
import Image from "next/image";
import { Button } from "@/components/ui/button";

async function getData() {
  const data = prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      age: true,
      id: true,
    },
  });
  return data;
}

async function MovieVideo() {
  const data = await getData();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        src={data?.videoSource}
        autoPlay
        muted
        loop
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white mt-5 text-lg line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <Button>See more</Button>
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieVideo;
