import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

const EspritChoco = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative py-32 fixbanner">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              src="/img/gradient.jpg"
              alt="gradient"
              width={0}
              height={0}
              className="h-full w-full"
              sizes={"100%"}
            />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
            <Image
              width={0}
              height={0}
              sizes={"100%"}
              src="/img/normalgradient.png"
              alt="gradient dark"
              className="h-full w-full fixImagetop"
            />
          </picture>
          <div className="container relative z-10">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="mb-6 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                Site Vitrine - Esprit Choco
              </h1>
            </div>
          </div>
        </section>

        <section className="relative ">
          <div className="container">
            <figure className="mb-4">
              <Image
                src="/img/all/choco2.png"
                alt="post 1"
                className="w-full rounded-2.5xl"
                width={0}
                height={0}
                sizes="100%"
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
                      Esprit Choco
                    </span>
                  </div>
                  <div className="mb-7">
                    <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                      Type de réalisation
                    </h3>
                    <span className="text-2xs font-medium dark:text-jacarta-300">
                      Site vitrine
                    </span>
                  </div>
                  <div className="mb-7">
                    <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                      Technologies utilisées
                    </h3>
                    <span className="text-2xs font-medium dark:text-jacarta-300">
                      Wordpress, HTML, CSS, JS, Elementor, Bootstrap, PHP
                    </span>
                  </div>
                </div>

                <div className="article-content lg:w-2/3">
                  <h2 className="text-3xl">Site Vitrine - Esprit Choco</h2>
                  <p className="text-lg leading-normal">
                    Nous avons réalisé un site web vitrine pour la boutique de
                    chocolat &ldquo;Esprit Choco&ldquo;en utilisant WordPress et
                    le plugin Elementor.
                  </p>
                  <p>
                    Notre agence KBCOM a utilisé les fonctionnalités avancées
                    d&apos;Elementor pour créer une présentation visuellement
                    attrayante et intuitive pour les produits de chocolat de la
                    boutique.
                  </p>
                  <p>
                    Nous avons également utilisé des widgets pour rendre la
                    navigation sur le site aussi simple et fluide que possible.
                    Nous sommes satisfaits du résultat final et espérons que
                    vous apprécierez naviguer sur le site autant que nous avons
                    apprécié le créer.
                  </p>
                  <h3 className="text-xl">Un site vitrine gourmand</h3>
                  <ul>
                    <li>
                      Notre agence KBCOM a mis en œuvre des stratégies de
                      conception web créatives et efficaces pour refléter
                      l&apos;essence gourmande et séduisante des produits
                      chocolatés proposés par &ldquo; Choco&ldquo;.
                    </li>
                    <li>
                      En mettant l&apos;accent sur l&apos;esthétique et
                      l&apos;ergonomie, nous avons veillé à ce que chaque
                      visiteur du site ait une expérience agréable tout en
                      explorant les délices chocolatés présentés. Nous avons
                      intégré des éléments visuels attrayants et des
                      descriptions engageantes pour mettre en valeur la qualité
                      et la diversité des chocolats disponibles.
                    </li>
                    <li>
                      La navigation fluide et intuitive permet aux utilisateurs
                      de parcourir facilement les différentes catégories de
                      produits, de découvrir les promotions en cours et
                      d&apos;en apprendre davantage sur l&apos;histoire et les
                      valeurs de &ldquo;Esprit Choco&ldquo;
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Slider />

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
                    <Image
                      height="498"
                      width="561"
                      src="/img/all/aliexprhess.png"
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
                  Création d&apos;un site ecommerce sous le framwork symfony
                  afin de présenter et vendre les produits directement en ligne.
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
                    <Image
                      height="498"
                      width="561"
                      src="/img/all/enable.png"
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
                  Création d&apos;un site ecommerce sous le framwork symfony
                  afin de présenter et vendre les produits directement en ligne.
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
                <Image
                  src="/img/gradient.jpg"
                  alt="gradient"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-full"
                />
              </picture>
              <picture className="pointer-events-none absolute inset-0 -z-10 hidden h-[150%] dark:block">
                <source
                  media="(max-width: 991px)"
                  srcSet="/img/darkmobilefooter.png"
                />
                <source
                  media="(min-width: 992px)"
                  srcSet="/img/darkfooter.png"
                />
                <Image
                  src="/img/darkfooter.png"
                  alt="gradient dark"
                  width={0}
                  height={0}
                  sizes="100%"
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
      </main>
    </>
  );
};

export default EspritChoco;
