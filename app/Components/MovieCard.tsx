'use client'

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { PlayVideoModal } from "./PlayVideoModal";
import { useState } from "react";

interface IAppProps {
  title: string;
  overView: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

export function MovieCard({
  movieId,
  overView,
  title,
  watchList,
  watchListId,
  youtubeUrl,
  age,
  time,
  year,
}: IAppProps) {

    const [open,setOpen] = useState(false)
  return (
    <>
      <button onClick={()=>setOpen(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 bottom-0 left-0 absolute">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-green-200 rounde text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className=" line-clamp-1 text-sm text-gray-200">{overView}</p>
      </div>
      <PlayVideoModal
        title={title}
        overView={overView}
        youtubeUrl={youtubeUrl}
        state={open}
        changeState={setOpen}
      />
    </>
  );
}
