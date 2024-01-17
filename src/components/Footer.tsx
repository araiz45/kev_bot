import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="page-foote dark:bg-jacarta-900 bg-four">
      <div className="container">
        <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
          <div className="col-span-full sm:col-span-3 md:col-span-4">
            <Link href=".html" className="mb-6 inline-block">
              <img
                src="img/logofooter.png"
                height="43"
                width="200"
                className="hidden max-h-logo dark:block"
                alt="Xhibiter | NFT Marketplace"
              />
            </Link>
            <p className="mb-12 dark:text-jacarta-300 text-gray-400">
              Développement et conception de votre site internet avec un tarif
              imbattable.
            </p>
            <div className="flex space-x-5">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-400 group"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </Link>
              <Link
                href="https://g.page/r/CezVfsZjwEp1EAI/review"
                aria-label="Google"
                className="group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#5A5D79"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              Contact
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <li>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#e7e7e7",
                    marginTop: "5px",
                  }}
                >
                  Adresse:
                </span>
                <br />

                <p className="hover:text-accent dark:hover:text-white text-gray-400">
                  Agence basée à Tours
                </p>
              </li>
              <li>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#e7e7e7",
                    marginTop: "5px",
                  }}
                >
                  Téléphone:
                </span>
                <br />
                <Link
                  href="tel:+33 6 40 63 19 53"
                  className="hover:text-accent dark:hover:text-white text-gray-400"
                >
                  +33 6 40 63 19 53
                </Link>
              </li>
              <li>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#e7e7e7",
                    marginTop: "5px",
                  }}
                >
                  Email:
                </span>
                <br />
                <Link
                  href="mailto:contact@kb-com.fr"
                  className="hover:text-accent dark:hover:text-white"
                >
                  contact@kb-com.fr
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-full sm:col-span-3 md:col-span-2">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              Liens
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <li>
                <Link
                  href=""
                  className="hover:text-accent dark:hover:text-white"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="notre-agence"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Notre Agence
                </Link>
              </li>
              <li>
                <Link
                  href="nos-realisations"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="nos-actualites"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Nos Actualités
                </Link>
              </li>
              <li>
                <Link
                  href="nous-contacter"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-full sm:col-span-3 md:col-span-2">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              Mentions
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <li>
                <Link
                  href="mentions-legales"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="politique-de-confidentialite"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Politique de confidentialités
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  space-y-2 py-8  sm:space-y-0 text-center bg-light">
        <span className="text-sm dark:text-jacarta-400">
          &copy; Copyright <span style={{ color: "#8358ff" }}>KBCOM</span>,
          Agence web et référencement sur Tours - 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
