import Link from "next/link";
import { accessUrl } from "../../url";
import { Markdown } from "react-showdown";

interface props {
  data: gettingData | null | undefined;
}

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

const BlogCard = ({ data }: props) => {
  return (
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden">
          <Link href={"/" + data?.attributes.slug}>
            <img
              src={accessUrl + data?.attributes.cover.data?.attributes.url}
              alt="post 2"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </Link>
        </figure>

        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <Link
              href={"/" + data?.attributes.slug}
              style={{ color: "slateblue" }}
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              {data?.attributes.tag}
            </Link>
          </div>

          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <Link href={"/" + data?.attributes.slug}>
              {" "}
              {data?.attributes.Title}{" "}
            </Link>
          </h2>
          <Markdown
            markdown={data?.attributes.Description.slice(0, 150) || ""}
            className="mb-8 dark:text-jacarta-200"
          />

          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">
                {data && new Date(data?.attributes.createdAt).toLocaleString()}
              </time>
            </span>
            <span>•</span>
            <span>Lecture 3min</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
