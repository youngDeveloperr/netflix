"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GoogleIcon} alt="gmail" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleButton;
