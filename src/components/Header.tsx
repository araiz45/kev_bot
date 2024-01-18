import Link from "next/link";
import Script from "next/script";

const Header = () => {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TTDXTC62"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <header className="js-page-header page-header--transparent fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div className="flex items-center px-6 py-6 xl:px-24">
          <Link href="/" className="flex-1 shrink-0">
            <img
              src="img/kbcom.svg"
              height="60"
              width="195"
              className="max-h-logo"
              alt="Logo KBCOM"
            />
          </Link>

          <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 flex-[3_3_0%] items-center bg-jacarta-800 opacity-0 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100">
            <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-jacarta-800 p-6 lg:hidden">
              <Link href="/" className="shrink-0">
                <img
                  src="img/kbcomv2.png"
                  height="27"
                  width="100"
                  className="max-h-7"
                  alt="Logo KBCOM Mobile"
                />
              </Link>

              <button
                className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 border-transparent bg-white/[.15] transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent"
                aria-label="close mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-white transition-colors group-hover:fill-white group-focus:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            <nav className="navbar mt-24 w-full lg:mt-0">
              <ul className="flex flex-col justify-center lg:flex-row">
                <li className="js-nav-dropdown group relative ">
                  <Link
                    href="/"
                    className="flex items-center justify-between py-3.5 font-display text-base 
                      text-white hover:text-accent focus:text-accent lg:px-5 lg:text-white lg:hover:text-white"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="js-nav-dropdown group relative ">
                  <Link
                    href="/notre-agence"
                    className=" <?php if ($_SERVER['PHP_SELF'] === '/notre-agence.php') echo 'menuactive'; ?>  flex items-center justify-between py-3.5 font-display text-base text-white hover:text-accent focus:text-accent lg:px-5 lg:text-white lg:hover:text-white"
                  >
                    Notre Agence
                  </Link>
                </li>
                <li className="js-nav-dropdown group relative">
                  <Link
                    href="/nos-realisations"
                    className="<?php if ($_SERVER['PHP_SELF'] === '/nos-realisations.php') echo 'menuactive'; ?> flex items-center justify-between py-3.5 font-display text-base text-white hover:text-accent focus:text-accent lg:px-5 lg:text-white lg:hover:text-white"
                  >
                    Nos Réalisations
                  </Link>
                </li>
                <li className="js-nav-dropdown group relative">
                  <Link
                    href="/nos-actualites"
                    className="<?php if ($_SERVER['PHP_SELF'] === '/nos-actualites.php') echo 'menuactive'; ?> flex items-center justify-between py-3.5 font-display text-base text-white hover:text-accent focus:text-accent lg:px-5 lg:text-white lg:hover:text-white"
                  >
                    Nos Actualités
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-10 w-full lg:hidden">
              <Link
                href="nous-contacter"
                className="mb-8 block rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
              >
                Commencer un projet
              </Link>
              <hr className="my-5 h-px border-0 bg-jacarta-600" />

              <div className="flex items-center justify-center space-x-5">
                <Link href="#" className="group">
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
          </div>

          <div className="hidden flex-1 justify-end lg:flex">
            <Link
              href="nous-contacter"
              className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
            >
              Commencer un projet
            </Link>
          </div>

          <div className="ml-auto flex lg:hidden">
            <button
              className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
              aria-label="open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Script src="js/app.bundle.js"></Script>
      <Script src="js/charts.bundle.js"></Script>
      <Script src="js/countdown.bundle.js"></Script>
    </>
  );
};

export default Header;
