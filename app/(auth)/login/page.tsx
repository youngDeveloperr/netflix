import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "../../../public/google.svg";
import React from "react";

function login() {
  return (
    <div className="mt-24 rounded bg-black/60 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="signUp">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          ></Input>
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Create an account?{" "}
        <Link className="text-white hover:underline" href="/sign-up">
          Sign up now!
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline">
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant="outline">
          <Image src={GoogleIcon} alt="gmail" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

export default login;
