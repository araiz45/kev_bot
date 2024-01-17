const AliExpress: React.FC = () => {
  return (
    <main
      className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900"
      itemScope
      itemType="http://schema.org/WebPage"
    >
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
                Site e-commerce - Aliexprhess
              </h1>
            </div>
          </div>
        </section>

        <section className="relative ">
          <div className="container">
            <figure className="mb-4">
              <img
                src="img/all/alitop.png"
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
                      Aliexprhess
                    </span>
                  </div>
                  <div className="mb-7">
                    <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                      Type de réalisation
                    </h3>
                    <span className="text-2xs font-medium dark:text-jacarta-300">
                      Site e-commerce
                    </span>
                  </div>
                  <div className="mb-7">
                    <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                      Technologies utilisées
                    </h3>
                    <span className="text-2xs font-medium dark:text-jacarta-300">
                      {" "}
                      HTML, CSS, JS, Bootstrap, PHP, symfony
                    </span>
                  </div>
                </div>

                <div className="article-content lg:w-2/3">
                  <h2 className="text-3xl">Site e-commerce - Aliexprhess</h2>
                  <p className="text-lg leading-normal">
                    Le projet Aliexprhess un site e-commerce que KBCOM à
                    développé en utilisant les technologies HTML, CSS,
                    JavaScript et le framework Symfony 5 pour le back-office.
                  </p>
                  <p>
                    Nous avons également utilisé Bootstrap pour la mise en page.
                    Les utilisateurs peuvent sélectionner des produits, les
                    ajouter au panier et effectuer des achats en toute sécurité.
                  </p>
                  <p>
                    Le back-office permet au client de gérer facilement les
                    commandes, les produits et les utilisateurs du site
                  </p>
                  <h3 className="text-xl">
                    Une site ecommerce 100% fonctionnel
                  </h3>
                  <ul>
                    <li>
                      Ajout/modification/supression de produits dans le back
                      office
                    </li>
                    <li> Formulaire de contact</li>
                    <li>Newsletter Mail</li>
                    <li>Système de trie</li>
                    <li>Barre de recherche</li>
                  </ul>
                </div>
              </div>
            </article>{" "}
            {/* img/all/ali2.png */}
          </div>
        </section>

        <div className="flex justify-center items-center flex-wrap gap-3 mt-24 mb-4">
          <img src="img/all/ali2.png" alt="1" className="rounded-2xl" />
          <img src="img/all/ali3.png" alt="1" className="rounded-2xl" />
          <img src="img/all/ali4.png" alt="1" className="rounded-2xl" />
          {/* <img src="img/all/choco6.png" alt="1" className="rounded-2xl" /> */}
        </div>
        <section className="relative py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-sm text-center">
              <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                Voir nos <span style={{ color: "#7b50f8" }}>autres </span>{" "}
                réalisations
              </h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <article>
                <a href="esprit-choco">
                  <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                    <img
                      height="498"
                      width="561"
                      src="img/all/choco.png"
                      alt=""
                    />
                  </figure>
                </a>
                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                  <a href="esprit-choco" className="group-hover:text-accent">
                    Site Vitrine - Esprit Choco
                  </a>
                </h2>
                <p className="mb-5 dark:text-jacarta-300">
                  Création d&apos;un site vitrine sous le cms wordpress afin de
                  présenter les produits de la boutique.
                </p>
                <a
                  href="esprit-choco"
                  className="text-sm font-bold text-accent"
                >
                  Voir le projet
                </a>
              </article>
              <article>
                <a href="enable">
                  <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                    <img
                      height="498"
                      width="561"
                      src="img/all/enable.png"
                      alt=""
                    />
                  </figure>
                </a>
                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                  <a href="enable" className="group-hover:text-accent">
                    Maquette web - Enable
                  </a>
                </h2>
                <p className="mb-5 dark:text-jacarta-300">
                  Création d&apos;un site ecommerce sous le framwork symfony
                  afin de présenter et vendre les produits directement en ligne.
                </p>
                <a href="enable" className="text-sm font-bold text-accent">
                  Voir le projet
                </a>
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
                <source
                  media="(min-width: 992px)"
                  srcSet="img/darkfooter.png"
                />
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
                <a
                  href="nous-contacter"
                  className="inline-block self-center rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <script src="./js/app.bundle.js"></script> */}
    </main>
  );
};

export default AliExpress;
