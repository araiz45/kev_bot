"use client";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { accessUrl } from "../../../url";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
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
const Post = () => {
  const path = usePathname();
  const [extData, setExtData] = useState<gettingData | null>();
  const [remData, setRemData] = useState<gettingData[] | null>();
  //   console.log(path);
  async function splitUrl() {
    const splitedUrl = path.split("/");
    if (splitedUrl[1]) {
      try {
        const response = await axios.get(
          accessUrl +
            `/api/blogs?filters[slug][$eq]=${splitedUrl[1]}&populate=*`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type":
                "bearer 6d1ccd7acd4df67e24e66b38d7f82362490c2ecc7d5ad9eb4da94601db023d0eb47e4254355eff3d48749e1e77f5a03fa9b9838442640aca4e9585f14742607193d7c5cf2e4bdf22a1096fe1023150a90c22e4427cbf44d8578f86ee919d59514f67ce89139fea1b0f479bda4a1ccbb5eaf1a7b6e09a03a06d2a22401c2f900d",
            },
          }
        );
        // console.log(response.data.data[0]);
        setExtData(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getRemainData() {
    try {
      const response = await axios.get(
        accessUrl +
          "/api/blogs?pagination[start]=0&pagination[limit]=2&sort[1]=createdAt:desc&populate=*"
      );
      setRemData(response.data.data);
      console.log(response);
    } catch (error) {}
  }
  useEffect(() => {
    getRemainData();
  }, []);
  useEffect(() => {
    splitUrl();
  }, []);
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative py-32">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={330}
              height={330}
              sizes="100%"
              src="/img/gradient.jpg"
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
                {extData?.attributes.Title}
              </h1>
              <p className="text-lg leading-normal dark:text-jacarta-200">
                Temps de lecture: 3 min
              </p>
            </div>
          </div>
        </section>

        <section className="relative ">
          <div className="container">
            <figure className="mb-16">
              <img
                src={accessUrl + extData?.attributes.cover.data.attributes.url}
                alt="post 1"
                className="w-full rounded-2.5xl"
              />
            </figure>

            <article className="mb-12">
              <div className="article-content">
                <p className="text-lg leading-normal">
                  {extData?.attributes.Description}
                </p>
              </div>
            </article>

            <div className="mx-auto max-w-[48.125rem]">
              <h2 className="mb-8 font-display text-3xl text-jacarta-700 dark:text-white">
                Nos autres <span style={{ color: "#7b50f8" }}>actualités</span>{" "}
                chez KBCOM
              </h2>
              <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
                {remData &&
                  remData?.map((info) => (
                    <BlogCard data={info} key={info.id} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script src="./js/app.bundle.js"></Script>
    </>
  );
};

export default Post;
