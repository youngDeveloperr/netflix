"use client";
import Image from "next/image";
import Logo from "../../public/netflix_logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface links {
  name: string;
  href: string;
}

const links: links[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently", href: "/home/recently" },
  { name: "My List", href: "/home/users/list" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full flex items-center justify-between px-5 py-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="logo" priority />
        </Link>
        <ul className="hidden lg:flex gap-x-4 ml-14">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link href={link.href} className="text-white font-semibold underline text-sm">
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={link.href} className="text-gray-400 font-normal text-sm"> {link.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer"/>
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer"/> 
        <UserNav/>
      </div>

    </div>
  );
}
