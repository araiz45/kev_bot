"use client";
import axios from "axios";
import Link from "next/link";
import { accessUrl } from "../../url";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
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

export default function Home() {
  const [data, setData] = useState<gettingData[]>([]);
  const getBlog = async () => {
    try {
      const resp = await axios.get(
        accessUrl +
          "/api/blogs?pagination[page]=1&pagination[pageSize]=3&sort[1]=createdAt:desc&populate=*",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization:
              "bearer 6d1ccd7acd4df67e24e66b38d7f82362490c2ecc7d5ad9eb4da94601db023d0eb47e4254355eff3d48749e1e77f5a03fa9b9838442640aca4e9585f14742607193d7c5cf2e4bdf22a1096fe1023150a90c22e4427cbf44d8578f86ee919d59514f67ce89139fea1b0f479bda4a1ccbb5eaf1a7b6e09a03a06d2a22401c2f900d",
          },
        }
      );
      setData(resp.data.data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <main className="overflow-x-hidden">
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-0 -z-10">
          <source
            media="(max-width: 991px)"
            src="../../public/img/darkmobile.png"
          />
          <source media="(min-width: 992px)" src="../../public/img/dark2.png" />
          <img
            src="/img/gradient_dark.jpg"
            alt="gradient dark"
            className="h-full w-full"
          />
        </picture>

        <img
          src="img/patterns/pattern_donut.png"
          alt="pattern donut"
          className="absolute right-0 top-0 -z-10"
        />

        <div className="container">
          <div className="mx-auto max-w-2xl pt-24 text-center">
            <h1 className="mb-6 font-display text-5xl text-white lg:text-6xl">
              KBCOM, Agence de{" "}
              <span style={{ color: "#7b50f8" }}>création web </span>basée à
              tours
            </h1>
            <p className="text-gray-400 mx-auto mb-8  text-lg leading-normal text-jacarta-50">
              KBCOM vous offre son expertise pour la conception de votre site
              web, le développement de votre identité visuelle en ligne, ainsi
              que l&apos;optimisation de votre visibilité sur les moteurs de
              recherche.
            </p>
            <Link
              href="#offer"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Voir nos offres
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 dark:bg-jacarta-800">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>

        <div className="container">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[55%]">
              <div className="relative">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mt-8 w-[80%]"
                >
                  <defs>
                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                      <path
                        d="
                    M 0, 100
                    C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                    S 200, 17.000000000000004 200, 100
                        183, 200 100, 200
                        0, 183 0, 100
                "
                        fill="#9446ED"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clipping)">
                    <image
                      href="img/all/about2home.webp"
                      width="236"
                      height="236"
                      clip-path="url(#clipping)"
                    />
                  </g>
                </svg>
                <img
                  src="img/hero/3D_elements.webp"
                  alt=""
                  className="absolute top-0 animate-fly"
                />
              </div>
            </div>

            <div className="py-20 lg:w-[45%] lg:pl-16">
              <h2 className="mb-6 font-display text-2xl text-jacarta-700 dark:text-white">
                Une agence web{" "}
                <span style={{ color: "#7b50f8" }}>créative</span> avec des
                idées innovantes
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-normal dark:text-jacarta-300">
                Découvrez une agence web à Tours qui va au-delà des conventions.
                Chez KBCOM notre équipe dévouée et créative est là pour donner
                vie à vos idées les plus innovantes.
              </p>
              <p className="text-gray-400 mb-10 dark:text-jacarta-300">
                Avec une approche unique, nous nous efforçons de créer des
                expériences en ligne captivantes qui laissent une empreinte
                durable. Que vous cherchiez à lancer un nouveau site web, à
                améliorer votre présence sur les réseaux sociaux ou à créer une
                identité visuelle mémorable, notre expertise combinée à notre
                passion nous permettent de transformer vos objectifs en
                réalisations concrètes.
                <br />
                <br />
                Faites le premier pas vers une présence numérique remarquable
                avec KBCOM.
              </p>
              <Link
                href="notre-agence"
                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-light-base dark:bg-jacarta-800 bg-dark">
        <div className="container">
          <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
            <img
              height="116"
              width="195"
              src="img/all/wordpress.webp"
              alt="partner 1"
            />
            <img
              height="103"
              width="173"
              src="img/all/html.webp"
              alt="partner 1"
            />
            <img
              height="103"
              width="173"
              src="img/all/boostrap.webp"
              alt="partner 1"
            />
            <img
              height="103"
              width="173"
              src="img/all/css.webp"
              alt="partner 1"
            />
            <img
              height="103"
              width="173"
              src="img/all/shopify.webp"
              alt="partner 1"
            />
          </div>
        </div>
      </div>

      <section className="relative py-24 dark:bg-jacarta-800">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            Des <span style={{ color: "#7b50f8" }}>domaines</span> de <br />
            compétences maîtrisés
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-left">
              <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Conception de site web
              </h3>
              <p className="text-gray-400 dark:text-jacarta-300">
                Découvrez notre expertise inégalée en conception de sites web.
                Nous créons des plateformes uniques et fonctionnelles qui
                captivent votre public cible. Grâce à notre savoir-faire, votre
                site web deviendra la vitrine numérique de votre entreprise,
                alliant esthétique et efficacité pour vous démarquer dans
                l&apos;univers en ligne.
              </p>
            </div>
            <div className="text-left">
              <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Communication sur les réseaux
              </h3>
              <p className="text-gray-400 dark:text-jacarta-300">
                Plongez dans le monde dynamique de la communication sur les
                réseaux. Notre équipe d&apos;experts vous guide à travers des
                stratégies digitales percutantes pour maximiser votre présence
                en ligne. De la gestion des médias sociaux à l&apos;optimisation
                de votre visibilité, nous vous aidons à établir des connexions
                authentiques avec votre audience.
              </p>
            </div>
            <div className="text-left">
              <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Création de votre identité visuelle
              </h3>
              <p className="text-gray-400 dark:text-jacarta-300">
                Chaque entreprise a une histoire unique à raconter. Nous
                travaillons avec passion pour traduire cette histoire en une
                identité visuelle distinctive. Des logos mémorables aux palettes
                de couleurs harmonieuses, nous façonnons une image de marque qui
                résonne avec votre vision et crée une connexion émotionnelle
                avec votre public cible.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="notre-agence#competences"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-28 dark:bg-jacarta-900">
        <div className="container">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-16">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                Création de votre{" "}
                <span style={{ color: "#7b50f8" }}>site internet</span> par
                notre agence web à Tours
              </h2>
              <p className="text-gray-400 mb-8 dark:text-jacarta-300">
                Vous souhaitez donner vie à votre présence en ligne? Faites
                confiance à notre agence web basée à Tours pour la création sur
                mesure de votre site internet. Forts d&apos;une expertise solide
                dans le domaine, nous nous engageons à concevoir un site web
                professionnel qui répond à vos besoins et attentes, tout en
                respectant les dernières normes de conception et de
                référencement.
              </p>
              <p className="text-gray-400 mb-8 dark:text-jacarta-300">
                Notre équipe expérimentée maîtrise les dernières technologies et
                les meilleures pratiques pour garantir que votre site internet
                soit non seulement esthétiquement attrayant, mais également
                performant. Nous mettons un point d&apos;honneur à optimiser
                chaque aspect de votre site, de l&apos;architecture aux
                contenus, en passant par l&apos;expérience utilisateur, afin de
                maximiser votre visibilité en ligne et d&apos;attirer un trafic
                qualifié.
                <br />
                <br />
                Grâce à notre approche personnalisée, nous concevons des
                solutions adaptées à votre secteur d&apos;activité et à votre
                public cible. Nous sommes également spécialisés dans
                l&apos;optimisation du référencement (SEO), assurant ainsi une
                meilleure visibilité sur les moteurs de recherche tels que
                Google. Votre site internet sera conçu pour être convivial,
                intuitif et parfaitement fonctionnel sur tous les appareils,
                offrant ainsi une expérience optimale à vos visiteurs.
                <br />
                <br />{" "}
                <span style={{ fontSize: "10px" }}>
                  *dans le cadre d&apos;une offre sur mesure
                </span>
              </p>
            </div>
            <div className="lg:w-[45%]">
              <div className="md:flex md:space-x-6 xl:space-x-12">
                <div className="md:w-1/2">
                  <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                    <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                      40 %
                    </span>
                    <p className="text-gray-400 text-md text-jacarta-700 dark:text-white">
                      moins cher que la concurrence
                    </p>
                  </div>
                  <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                    <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                      100 %
                    </span>
                    <p className="text-gray-400 text-md text-jacarta-700 dark:text-white">
                      à votre écoute
                    </p>
                  </div>
                </div>
                <div className="mt-6 md:w-1/2">
                  <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                    <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                      3 x
                    </span>
                    <p className="text-gray-400 text-md text-jacarta-700 dark:text-white">
                      paiement en 3 fois sans frais
                    </p>
                  </div>
                  <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                    <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                      100 %
                    </span>
                    <p className="text-gray-400 text-md text-jacarta-700 dark:text-white">
                      personnalisable*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="relative py-24 dark:bg-jacarta-800">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container price">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Tarifs <span style={{ color: "#7b50f8" }}>imbattables</span> sur
              la <br />
              création de site internet
            </h2>
            <p className="text-gray-400 text-lg dark:text-jacarta-300">
              Découvrez nos diverses offres de sites internet pour votre projet,
              avec la possibilité de paiement en 3x sans frais.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=" relative rounded-2.5xl border border-jacarta-100 p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
              </svg>
              <div className="mb-6 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                OFFRE SITE INTERNET BASIQUE
              </h3>
              <div className="tarifs" style={{ color: "#8358ff;" }}>
                à partir de 370 €
              </div>
              <p className="text-gray-400 dark:text-jacarta-300">
                Création de votre premier site web? Cette offre est faite pour
                vous. KBCOM vous propose la création d&apos;un site internet 1
                page avec l&apos;essentiel pour lancer votre activité
              </p>
              <div className="list">Site vitrine basique 1 page</div>
              <div className="list">Optimisation SEO</div>
              <div className="list">Site Responsive</div>
              <div className="list">Création fiche: Google business</div>
              <div className="list">
                Option supplémentaire: <br />
                Logo, Flyer, Carte de visite
              </div>
            </div>
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#10b981] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(16,185,129,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
              </svg>
              <div className="mb-6 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-green"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                OFFRE SITE INTERNET AVANCÉ
              </h3>
              <div className="tarifs" style={{ color: "#10b981;" }}>
                à partir de 980 €
              </div>
              <p className="text-gray-400 dark:text-jacarta-300">
                Envie d&apos;une refonte ? ou bien d&apos;un site web avec
                plusieurs pages pour un meilleur référencement sur les
                navigateurs web? Alors cette offre vous convient le mieux.
              </p>
              <div className="list">Site vitrine basique 4 pages</div>
              <div className="list">Optimisation SEO</div>
              <div className="list">Site Responsive</div>
              <div className="list">Création fiche : Google business</div>
              <div className="list">
                Option supplémentaire : <br />
                Logo, Flyer, Carte de visite
              </div>
            </div>
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#ef4444] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(239,68,68,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
              </svg>
              <div className="mb-6 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-red"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                OFFRE SITE INTERNET SUR-MESURE
              </h3>
              <div className="tarifs" style={{ color: "#ef4444" }}>
                à partir de 1550 €
              </div>
              <p className="text-gray-400 dark:text-jacarta-300">
                Vous avez une idée bien précise de ce que vous voulez ? Vous
                voulez vous différenciez de la concurrence ? Alors un site
                internet sur mesure est fait pour vous !
              </p>
              <div className="list">
                Site vitrine/e-commerce sur mesure (minimum 4 pages)
              </div>
              <div className="list">Optimisation SEO</div>
              <div className="list">Site Responsive</div>
              <div className="list">Module Blog Intégré</div>
              <div className="list">Formulaire de contact Intégré</div>
              <div className="list">Création fiche : Google business</div>
              <div className="list">
                Option supplémentaire : <br />
                Logo, Flyer, Carte de visite
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="nos-realisations"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-light-base py-24 dark:bg-jacarta-800 bg-dark">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              FAQ <span style={{ color: "#7b50f8" }}>KBCOM</span>
            </h2>
            <p className="text-gray-400 text-lg dark:text-jacarta-300">
              Des questions ? Des réponses. Retrouvez la FAQ <br />
              de l&apos;agence KBCOM
            </p>
          </div>
          <div className="lg:flex lg:flex-nowrap">
            <div className="lg:w-[59%]">
              <img src="img/all/faq.webp" height="500" width="550" alt="" />
            </div>
            <div className="lg:w-[41%] lg:pl-24">
              <p className="text-gray-400 mb-6 dark:text-jacarta-300">
                Si vous ne trouvez pas de réponse à vos questions, laissez-nous
                un message sur le formulaire, l&apos;équipe KBCOM sera ravie
                d&apos;y répondre.
              </p>
              <Link
                href="nous-contacter"
                className="mb-8 inline-block text-sm font-bold text-accent"
              >
                Nous contacter
              </Link>
              <div
                className="accordion mx-auto max-w-[35rem]"
                id="accordionFAQ"
              >
                <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                  <h2 className="accordion-header" id="faq-heading-1">
                    <button
                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1"
                      aria-expanded="false"
                      aria-controls="faq-1"
                    >
                      <span>
                        Comment pouvez-vous m&apos;aider à améliorer ma présence
                        sur les réseaux sociaux ?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="faq-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-1"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <p className="text-gray-400 dark:text-jacarta-200">
                        Nous intégrons les médias sociaux dans notre approche
                        marketing en ligne. KBCOM optimise votre présence sur
                        les plateformes sociales en utilisant des stratégies de
                        marketing de contenu, des analyses et des campagnes
                        ciblées, ce qui contribue à améliorer votre visibilité
                        et à augmenter l&apos;engagement de votre audience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                  <h2 className="accordion-header" id="faq-heading-2">
                    <button
                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2"
                      aria-expanded="false"
                      aria-controls="faq-2"
                    >
                      <span>
                        Comment assurez-vous une visibilité en ligne optimale
                        pour mes services ?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="faq-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-2"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <p className="text-gray-400 dark:text-jacarta-200">
                        Chez KBCOM, nous nous spécialisons dans
                        l&apos;optimisation du référencement (SEO) pour
                        maximiser la visibilité de votre site web. Nous
                        utilisons des stratégies efficaces telles que
                        l&apos;optimisation du contenu, la gestion des mots clés
                        et l&apos;amélioration de la structure du site pour vous
                        aider à atteindre un classement élevé dans les moteurs
                        de recherche.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                  <h2 className="accordion-header" id="faq-heading-3">
                    <button
                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-3"
                      aria-expanded="false"
                      aria-controls="faq-3"
                    >
                      <span>
                        Quelles sont vos méthodes pour garantir une expérience
                        utilisateur optimale sur mon site ?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="faq-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-3"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <p className="text-gray-400 dark:text-jacarta-200">
                        Nous concevons des sites web en mettant l&apos;accent
                        sur une excellente expérience utilisateur (UX). Cela
                        comprend une navigation intuitive, des temps de
                        chargement rapides, une conception responsive, et une
                        mise en page bien pensée pour offrir à vos visiteurs une
                        expérience fluide et engageante.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                  <h2 className="accordion-header" id="faq-heading-4">
                    <button
                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-4"
                      aria-expanded="false"
                      aria-controls="faq-4"
                    >
                      <span>
                        Quels sont vos conseils pour maintenir la pertinence et
                        la fraîcheur de mon site dans le temps ?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="faq-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-4"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <p className="text-gray-400 dark:text-jacarta-200">
                        Nous recommandons d&apos;actualiser régulièrement votre
                        contenu, d&apos;ajouter de nouvelles fonctionnalités, de
                        surveiller les performances, et d&apos;adapter votre
                        stratégie en fonction des évolutions du marché. Notre
                        équipe propose des solutions évolutives pour garantir
                        que votre site reste pertinent et performant au fil du
                        temps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                  <h2 className="accordion-header" id="faq-heading-5">
                    <button
                      className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-5"
                      aria-expanded="false"
                      aria-controls="faq-5"
                    >
                      <span>
                        Comment puis-je demander un devis pour mes besoins
                        spécifiques ?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="faq-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-5"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                      <p className="text-gray-400 dark:text-jacarta-200">
                        C&apos;est simple ! Vous pouvez nous contacter via le
                        formulaire notre site web ou par téléphone au
                        06.40.63.19.53 pour discuter de votre projet. Nous
                        prendrons en considération vos besoins uniques et vous
                        fournirons un devis personnalisé basé sur ces exigences.
                        Nous sommes là pour vous accompagner tout au long du
                        processus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-light">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            Les dernières <span style={{ color: "#7b50f8" }}>actualités </span>{" "}
            chez KBCOM
          </h2>
          <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
            {data && data.map((ev) => <BlogCard key={ev.id} data={ev} />)}
          </div>
          <div className="text-center mt-10">
            <Link
              href="nos-actualites"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Voir toutes nos actualités
            </Link>
          </div>
        </div>
      </section>

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
                src="img/darkmobilefooter.png"
              />
              <source media="(min-width: 992px)" src="img/darkfooter.png" />
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
                <p className="text-gray-400 text-lg leading-normal dark:text-jacarta-300">
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
    </main>
  );
}
