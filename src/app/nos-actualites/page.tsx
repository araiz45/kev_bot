"use client";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { accessUrl } from "../../../url";
import BigBlogCard from "@/components/BigBlogCard";
import Script from "next/script";

interface gettingData {
  attributes: innerData;
  id: number;
}

interface innerData {
  Description: string;
  tag: string;
  Title: string;
  cover: coverUrl;
  createdAt: string;
  publishAt: string;
  slug: string;
  updateAt: string;
}

interface coverUrl {
  data: dataUrl;
}

interface dataUrl {
  attributes: getPic;
  id: number;
}

interface getPic {
  url: string;
}

const News: React.FC = () => {
  const [data, setData] = useState<gettingData[] | null>();
  const [remainData, setRemainData] = useState<gettingData[] | null>();
  const [oneData, setOneData] = useState<gettingData | null>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [innerArr, setInnerArr] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const getBlog = async () => {
    try {
      const response = await axios.get(
        accessUrl +
          `/api/blogs?pagination[page]=${page}&pagination[pageSize]=7&sort[1]=createdAt:desc&populate=*`
      );
      console.log(response);
      setData(response.data.data);
      setOneData(response.data.data[0]);
      setTotalPages(response.data.meta.pagination.pageCount);
      if (response.status === 200) {
        // scrollToTop();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  useEffect(() => {
    const dataTwo = data?.filter((_, index) => index !== 0);
    setRemainData(dataTwo);
  }, [data]);

  function Pagination() {
    if (totalPages > 0) {
      for (let i: number = 1; i <= totalPages; i++) {
        innerArr.push(i);
      }
    }
  }
  useEffect(() => {
    Pagination();
  }, [totalPages]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className="overflow-x-hidden ">
        <section className="relative py-32 fixbanner">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="img/gradient.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
            <img
              src="img/normalgradient.png"
              alt="gradient dark"
              className="h-full w-full fiximgtop"
            />
          </picture>
          <div className="container relative z-10">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="mb-6 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                Nos Actualités
              </h1>
              <p className="text-lg leading-normal dark:text-jacarta-200">
                Actualité site internet et référencement
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="img/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <BigBlogCard data={oneData} />
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                {remainData &&
                  remainData.map((info) => (
                    <BlogCard data={info} key={info.id} />
                  ))}
              </div>
              <div className="flex gap-3">
                {innerArr.map((i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPage(i);
                      getBlog();
                    }}
                    className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="pt-24 dark:bg-jacarta-800 bg-dark">
        <div className="container">
          <div className="relative z-10 overflow-hidden rounded-2.5xl px-16 py-24 lg:px-24">
            <picture className="pointer-events-none absolute inset-0 -z-10 h-[150%] dark:hidden">
              <img
                src="img/gradient.jpg"
                alt="gradient"
                className="h-full w-full"
              />
            </picture>
            <picture className="pointer-events-none absolute inset-0 -z-10 hidden h-[150%] dark:block">
              <source
                media="(max-width: 991px)"
                srcSet="img/darkmobilefooter.png"
              />
              <source media="(min-width: 992px)" srcSet="img/darkfooter.png" />
              <img
                src="img/darkfooter.png"
                alt="gradient dark"
                className="h-full w-full"
              />
            </picture>
            <div className="lg:flex lg:justify-between">
              <div className="mb-6 max-w-lg lg:mb-0">
                <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                  Besoin de plus d&apos;information ?
                </h2>
                <p className="text-lg leading-normal dark:text-jacarta-300">
                  Notre équipe s&apos;occupe de de vous et de toutes vos
                  questions.
                </p>
              </div>
              <Link
                href="nous-contacter"
                className="inline-block self-center rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Script src="js/app.bundle.js"></Script>
      <Script src="js/charts.bundle.js"></Script>
      <Script src="js/countdown.bundle.js"></Script>
    </>
  );
};

export default News;

// <div className="bg-two">
//   <Hero
//     heading="Nos Actualités"
//     para="Actualité site internet et référencement"
//   />
//   <div className="contact-div flex justify-around items-center">
//     <div className="flex flex-col gap-5 ">
//       <h1 className="text-3xl font-bold text-white">
//         Besoin de plus d&apos;information ?
//       </h1>
//       <p className="text-lg font-semibold text-gray-400">
//         Notre équipe s&apos;occupe de de vous et de toutes vos <br />
//         questions.
//       </p>
//     </div>
//     <div>
//       <button className="bg-one px-8 py-3 rounded-full font-semibold text-white hover:bg-[#604e99] transition-colors duration-200 shadow-md shadow-[#dddcdc57]">
//         Nous contacter
//       </button>
//     </div>
//   </div>
// </div>
