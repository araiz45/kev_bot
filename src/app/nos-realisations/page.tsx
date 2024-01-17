import Hero from "@/components/Hero";
import Link from "next/link";

const Achievements = () => {
  return (
    <>
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
                Nos réalisations
              </h1>
              <p className="text-lg leading-normal dark:text-jacarta-200">
                Quelque réalisations de notre agence web témoignant de notre
                expertise et de notre engagement envers nos clients.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <article>
                <Link aria-label="lien vers réalisation" href={"/esprit-choco"}>
                  <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                    <img
                      height="498"
                      width="561"
                      src="img/all/choco.webp"
                      alt=""
                    />
                  </figure>
                </Link>
                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                  <Link
                    aria-label="lien vers réalisation"
                    href={"/esprit-choco"}
                    className="group-hover:text-accent"
                  >
                    Site Vitrine - Esprit Choco
                  </Link>
                </h2>
                <p className="mb-5 dark:text-jacarta-300">
                  Création d'un site vitrine sous le cms wordpress afin de
                  présenter les produits de la boutique.
                </p>
                <Link
                  href={"/esprit-choco"}
                  className="text-sm font-bold text-accent"
                >
                  Voir le projet
                </Link>
              </article>
              <article>
                <Link aria-label="lien vers réalisation" href="aliexprhess">
                  <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                    <img
                      height="498"
                      width="561"
                      src="img/all/aliexprhess.webp"
                      alt=""
                    />
                  </figure>
                </Link>
                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                  <Link
                    aria-label="lien vers réalisation"
                    href="aliexprhess"
                    className="group-hover:text-accent"
                  >
                    Site Ecommerce - Aliexprhess
                  </Link>
                </h2>
                <p className="mb-5 dark:text-jacarta-300">
                  Création d'un site ecommerce sous le framwork symfony afin de
                  présenter et vendre les produits directement en ligne.
                </p>
                <Link
                  href="aliexprhess"
                  className="text-sm font-bold text-accent"
                >
                  Voir le projet
                </Link>
              </article>
              <article>
                <Link aria-label="lien vers réalisation" href="enable">
                  <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                    <img
                      height="498"
                      width="561"
                      src="img/all/enable.webp"
                      alt=""
                    />
                  </figure>
                </Link>
                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                  <Link
                    aria-label="lien vers réalisation"
                    href="enable"
                    className="group-hover:text-accent"
                  >
                    Maquette web - Enable
                  </Link>
                </h2>
                <p className="mb-5 dark:text-jacarta-300">
                  Création d'un site ecommerce sous le framwork symfony afin de
                  présenter et vendre les produits directement en ligne.
                </p>
                <Link href="enable" className="text-sm font-bold text-accent">
                  Voir le projet
                </Link>
              </article>
              <article>
                <Link
                  aria-label="lien vers réalisation"
                  href="marchau-creation"
                >
                  <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                    <img
                      height="498"
                      width="561"
                      src="img/all/marchaucreatop.webp"
                      alt=""
                    />
                  </figure>
                </Link>
                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                  <Link
                    aria-label="lien vers réalisation"
                    href="marchau-creation"
                    className="group-hover:text-accent"
                  >
                    Identité visuelle - Marchaud Création
                  </Link>
                </h2>
                <p className="mb-5 dark:text-jacarta-300">
                  Création complète de l'identité visuelle de l'entreprise
                  marchau création
                </p>
                <Link
                  href="marchau-creation"
                  className="text-sm font-bold text-accent"
                >
                  Voir le projet
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
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
                  Besoin de plus d'information ?
                </h2>
                <p className="text-lg leading-normal dark:text-jacarta-300">
                  Notre équipe s'occupe de de vous et de toutes vos questions.
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

      <script src="./js/app.bundle.js"></script>
    </>
  );
};

export default Achievements;

// <div>
//   <Hero
//     heading="Nos réalisations"
//     para="Quelque réalisations de notre agence web témoignant de<br />notre expertise et de notre engagement envers nos clients."
//   />
// </div>
