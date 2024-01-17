"use client";

import Link from "next/link";

const MarchauCreation = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="relative py-32">
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
              Carte de visite - Marchau Création
            </h1>
          </div>
        </div>
      </section>
      <section className="relative ">
        <div className="container">
          <figure className="mb-4">
            <img
              src="img/all/marchaucrea2.png"
              alt="post 1"
              className="w-full rounded-2.5xl"
            />
          </figure>

          <article>
            <div className="lg:flex lg:space-x-8">
              <div className="mt-12 lg:w-1/3">
                <div className="mb-7">
                  <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                    Clients
                  </h3>
                  <span className="text-2xs font-medium dark:text-jacarta-300">
                    Marchau Création
                  </span>
                </div>
                <div className="mb-7">
                  <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                    Type de réalisation
                  </h3>
                  <span className="text-2xs font-medium dark:text-jacarta-300">
                    Carte de visite / Panneau de chantier
                  </span>
                </div>
                <div className="mb-7">
                  <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                    Technologies utilisées
                  </h3>
                  <span className="text-2xs font-medium dark:text-jacarta-300">
                    Adobe Photoshop / Illustrator / Canva
                  </span>
                </div>
              </div>

              <div className="article-content lg:w-2/3">
                <h2 className="text-3xl">
                  Identité Visuelle - Marchau création
                </h2>
                <p className="text-lg leading-normal">
                  Création d&apos;une identité visuelle pour l&apos;entreprise
                  marchaud création dont le domaine d&apos;activité est
                  l&apos;aménagement extérieur. Notre agence KBCOM à réaliser un
                  panneau de chantier ainsi que les carte de visite de
                  l&apos;entreprise
                </p>
                <h3 className="text-xl">
                  Aucune perte de qualité lors de l&ldquo;impression
                </h3>
                <ul>
                  <li>
                    Format PDF avec 100 % des éléments en SVG pour ne pas perdre
                    en qualité
                  </li>
                  <li>
                    Création de l&apos;identité visuelle de l&apos;entreprise.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* img/all/marchaucrea4.png */}
      <div className="flex justify-center items-center flex-wrap gap-3 mt-24 mb-4">
        <div className="">
          <img
            src="img/all/MEEmarchaucrea3.png"
            alt="1"
            className="rounded-2xl w-[100%]"
          />
        </div>
        <div>
          <img
            src="img/all/MEEmarchaucrea4.png"
            alt="1"
            className="rounded-2xl"
          />
        </div>
        <div>
          <img
            src="img/all/MEmarchaucrea5.png"
            alt="1"
            className="rounded-2xl"
          />
        </div>
      </div>
      <section className="relative py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Voir nos <span style={{ color: "#7b50f8" }}>autres </span>
              réalisations
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <article>
              <Link href="aliexprhess">
                <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                  <img
                    height="498"
                    width="561"
                    src="img/all/aliexprhess.png"
                    alt=""
                  />
                </figure>
              </Link>
              <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                <Link href="aliexprhess" className="group-hover:text-accent">
                  Site Ecommerce - Aliexprhess
                </Link>
              </h2>
              <p className="mb-5 dark:text-jacarta-300">
                Création d&apos;un site ecommerce sous le framwork symfony afin
                de présenter et vendre les produits directement en ligne.
              </p>
              <Link
                href="aliexprhess"
                className="text-sm font-bold text-accent"
              >
                Voir le projet
              </Link>
            </article>
            <article>
              <Link href="enable">
                <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                  <img
                    height="498"
                    width="561"
                    src="img/all/enable.png"
                    alt=""
                  />
                </figure>
              </Link>
              <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                <Link href="enable" className="group-hover:text-accent">
                  Maquette web - Enable
                </Link>
              </h2>
              <p className="mb-5 dark:text-jacarta-300">
                Création d&apos;un site ecommerce sous le framwork symfony afin
                de présenter et vendre les produits directement en ligne.
              </p>
              <Link href="enable" className="text-sm font-bold text-accent">
                Voir le projet
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-12 dark:bg-jacarta-800 bg-light">
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
      {/* <script src="./js/app.bundle.js"></script> */}
    </main>
  );
};

export default MarchauCreation;
