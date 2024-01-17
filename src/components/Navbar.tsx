"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Navbar = () => {
  let firstClass, secondClass, thirdClass, fourthClass;
  const [isSticky, setSticky] = useState(false);

  const path = usePathname();
  console.log(path);
  if (path === "/") {
    firstClass = "addingColor";
    secondClass = "removeColor";
    thirdClass = "removeColor";
    fourthClass = "removeColor";
  } else if (path === "/notre-agence") {
    firstClass = "removeColor";
    secondClass = "addingColor";
    thirdClass = "removeColor";
    fourthClass = "removeColor";
  } else if (path === "/nos-realisations") {
    firstClass = "removeColor";
    secondClass = "removeColor";
    thirdClass = "addingColor";
    fourthClass = "removeColor";
  } else if (path === "/nos-actualites") {
    firstClass = "removeColor";
    secondClass = "removeColor";
    thirdClass = "removeColor";
    fourthClass = "addingColor";
  } else {
    firstClass = "removeColor";
    secondClass = "removeColor";
    thirdClass = "removeColor";
    fourthClass = "removeColor";
  }
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 50px or more
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex justify-between items-center px-12 py-6 fixed w-full ${
        isSticky ? "navbar-bg " : "bg-transparent"
      }`}
    >
      <div className="">
        <Link href={"/"}>
          <Image src={"/img/kbcomv2.png"} width={150} height={150} alt="logo" />
        </Link>
      </div>
      <div className="flex list-none gap-8 items-center font-bold">
        <li>
          <Link href={"/"} className={`${firstClass}`}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href={"/notre-agence"} className={`${secondClass}`}>
            Notre Agence
          </Link>
        </li>
        <li>
          <Link href={"/nos-realisations"} className={`${thirdClass}`}>
            Nos Réalisations
          </Link>
        </li>
        <li>
          <Link href={"/nos-actualites"} className={`${fourthClass}`}>
            Nos Actualités
          </Link>
        </li>
      </div>
      <div className="">
        <Link
          href={"/nous-contacter"}
          className="bg-white text-one px-5 py-4 font-bold rounded-full hover:text-white transition-colors delay-200 hover:bg-one "
        >
          Commencer un projet
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
