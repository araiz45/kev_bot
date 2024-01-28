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

const BigBlogCard = ({ data }: props) => {
  return (
    <article className="mb-[1.875rem] md:mb-16">
      <div className="flex flex-col overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg md:flex-row">
        <figure className="group overflow-hidden md:w-1/2">
          <a href={"/" + data?.attributes.slug}>
            <img
              src={accessUrl + data?.attributes.cover.data.attributes.url}
              alt="post 1"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>

        <div className="rounded-b-[1.25rem] border border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <p
              style={{ color: "slateblue" }}
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              {data?.attributes.tag}
            </p>
          </div>

          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent sm:text-3xl">
            <Link href={"/" + data?.attributes.slug}>
              {data?.attributes.Title}
            </Link>
          </h2>

          <Markdown
            markdown={data?.attributes.Description.slice(0, 100) || ""}
            className="mb-8 dark:text-jacarta-200"
          />
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">
                {data && new Date(data?.attributes.createdAt).toLocaleString()}
              </time>
            </span>
            <span>•</span>
            <span>Lecture 2 min </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BigBlogCard;
