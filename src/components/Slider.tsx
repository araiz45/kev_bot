"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const Slider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-3 mt-24 mb-4">
        <img src="img/all/choco3.png" alt="1" className="rounded-2xl" />
        <img src="img/all/choco4.png" alt="1" className="rounded-2xl" />
        <img src="img/all/choco5.png" alt="1" className="rounded-2xl" />
        {/* <img src="img/all/choco6.png" alt="1" className="rounded-2xl" /> */}
      </div>
    </>
  );
};

export default Slider;

/*
Right
<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 group-hover:fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>

Left


          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 group-hover:fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
*/
