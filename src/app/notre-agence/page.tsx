import Hero from "@/components/Hero";
import Link from "next/link";
import Script from "next/script";

const Agency = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="relative py-32 fixbanner">
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
              Notre agence
            </h1>
            <p className="text-lg leading-normal dark:text-jacarta-200">
              Découvrez notre agence web basée à tours entièrement dévouée à la
              satisfaction de ses clients.
            </p>
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
                  className="mx-auto mt-8 w-[100%]"
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
                      href="img/all/abouthome.png"
                      width="200"
                      height="200"
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
                Découvrez{" "}
                <span style={{ color: "#7b50f8" }}>notre agence web</span> à
                tours
              </h2>
              <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                Chez KBCOM, notre équipe passionnée et créative donne vie à vos
                idées les plus novatrices, apportant une approche unique à
                chaque projet.
              </p>
              <p className="mb-10 dark:text-jacarta-300">
                Notre engagement est de créer des expériences en ligne
                captivantes et mémorables, laissant une empreinte indélébile.
                Que vous ayez besoin de lancer un nouveau site web,
                d&apos;améliorer votre visibilité sur les réseaux sociaux ou de
                forger une identité visuelle marquante, notre expertise combinée
                à notre passion nous permet de concrétiser vos objectifs.
                <br />
                <br />
                Dans notre agence web la collaboration et la compréhension
                approfondie de vos besoins sont au cœur de notre démarche. Nous
                croyons en une relation étroite avec nos clients, où chaque idée
                est valorisée, chaque vision est respectée, et chaque projet est
                traité avec soin et professionnalisme.
                <br />
                <br />
                Faites le premier pas vers une présence numérique remarquable
                avec KBCOM, une agence web créative aux idées innovantes.
              </p>
              <Link
                href="#competences"
                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Nos savoir-faire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="py-24 dark:bg-jacarta-900">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Les différents{" "}
              <span style={{ color: "#7b50f8" }}>savoir-faire</span> de notre
              agence web
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              KBCOM incarne une véritable palette de compétences et de
              savoir-faire diversifiés, véritable pilier dans l&apos;univers
              digital. Notre agence excelle dans plusieurs domaines clés de la
              création et de l&apos;optimisation en ligne.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
              <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
              <svg
                className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 500 500"
                id="website"
              >
                <path
                  fill="#fff"
                  d="M104.086,397.385C104.2,397.504 104.317,397.619 104.437,397.731C141.893,434.644 193.306,457.437 250,457.437L250,457.437C306.694,457.437 358.107,434.644 395.572,397.722C395.685,397.616 395.796,397.506 395.905,397.393C433.892,359.788 457.437,307.622 457.437,250.001L457.437,249.999C457.437,192.378 433.892,140.213 395.908,102.609L395.325,102.035C385.676,92.585 375.149,84.052 363.868,76.624C345.413,64.472 325.023,55.298 303.676,49.587C286.179,44.906 268.108,42.592 250,42.563C193.306,42.563 141.893,65.356 104.428,102.278C104.311,102.387 104.197,102.5 104.086,102.615C66.108,140.213 42.563,192.378 42.563,250C42.563,307.622 66.108,359.787 104.086,397.385ZM169.342,368.622C155.119,374.378 140.614,381.99 125.975,391.824C152.91,415.405 186.624,431.447 223.795,436.626C200.431,413.665 182.603,390.908 169.342,368.622ZM330.101,369.554C316.899,391.542 299.244,413.984 276.206,436.626C313.352,431.448 347.045,415.425 373.984,391.858C365.014,386.061 349.851,377.27 330.101,369.554ZM259.5,353.724L259.5,426.367C281.725,405.013 298.853,383.883 311.714,363.182C296.14,358.467 278.555,354.852 259.5,353.724ZM240.5,353.461C223.691,353.994 205.963,356.616 187.652,362.156C200.583,383.186 217.909,404.66 240.5,426.366L240.5,353.461ZM387.937,378.329C417.248,346.842 435.921,305.314 438.201,259.5L363.561,259.5C363.452,263.977 363.196,268.493 362.783,273.05C360.472,298.491 353.293,325.256 339.344,352.834C362.137,362.003 379.063,372.352 387.937,378.329ZM160.131,351.791C146.525,324.575 139.498,298.167 137.217,273.05C136.804,268.494 136.548,263.978 136.439,259.5L61.799,259.5C64.079,305.307 82.746,346.829 112.053,378.319C128.267,367.08 144.342,358.38 160.131,351.791ZM321.321,346.311C334.736,320.414 341.685,295.287 343.86,271.331C344.222,267.351 344.453,263.405 344.562,259.5L259.5,259.5L259.5,334.617C282.277,335.889 303.149,340.453 321.321,346.311ZM240.5,334.348L240.5,259.5L155.438,259.5C155.547,263.411 155.778,267.354 156.14,271.331C158.282,294.926 165.056,319.658 178.078,345.143C199.76,338.114 220.722,334.9 240.5,334.348ZM438.201,240.5C435.921,194.689 417.251,153.165 387.937,121.671C378.733,127.871 360.87,138.771 336.785,148.18C350.356,175.161 360.841,206.371 363.147,240.5L438.201,240.5ZM344.144,240.5C341.864,208.626 331.877,179.528 319.026,154.417C301.394,159.923 281.322,164.163 259.5,165.383L259.5,240.5L344.144,240.5ZM240.5,240.5L240.5,165.652C221.414,165.118 201.236,162.109 180.378,155.59C167.817,180.423 158.1,209.115 155.855,240.5L240.5,240.5ZM136.854,240.5C139.129,206.829 149.366,176 162.677,149.255C146.087,142.554 129.147,133.528 112.054,121.681C82.748,153.166 64.079,194.689 61.799,240.5L136.854,240.5ZM240.5,73.748C227.028,87.189 207.028,109.542 189.795,138.479C207.349,143.584 224.346,146.025 240.5,146.539L240.5,73.748ZM259.5,73.747L259.5,146.275C277.693,145.199 294.547,141.855 309.589,137.45C292.5,109.016 272.815,87.032 259.5,73.747ZM224.324,63.301C186.952,68.4 153.05,84.477 125.976,108.177C141.45,118.571 156.775,126.483 171.779,132.347C189.252,102.18 209.668,78.424 224.324,63.301ZM275.676,63.301C290.178,78.267 310.315,101.677 327.662,131.385C348.603,123.451 364.645,114.177 373.984,108.142C346.92,84.465 313.032,68.4 275.676,63.301Z"
                ></path>
              </svg>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Création de site internet
              </h3>
              <p className="dark:text-jacarta-300">
                Notre agence web développe des sites internet, qu&apos;ils
                soient vitrines ou marchands, en fonction de vos besoins. Nous
                concevons des sites sur mesure afin qu’ils correspondent
                parfaitement à vos attentes et répondent adéquatement à vos
                besoins. Les sites que nous proposons sont responsives, assurant
                ainsi une adaptabilité optimale aux périphériques utilisés par
                les visiteurs.
              </p>
            </div>

            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
              <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
              <svg
                className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="art"
              >
                <path
                  d="M10.5117,19.2837l0.001-0.0005c0.2935-0.2944,0.5244-0.5605,0.7173-0.8252c0.5756-0.7641,0.8915-1.6657,0.9235-2.5442
			l0.8568-0.6853c1.5088-1.2153,2.9858-2.5435,4.3901-3.9482c1.4048-1.4043,2.7329-2.8813,3.9478-4.3896
			c1.0068-1.2485,0.9878-2.9688-0.0449-4.0015c-1.0332-1.0337-2.7534-1.0532-4.0005-0.0454
			c-3.0654,2.4678-5.8711,5.2734-8.3408,8.3408l-0.6855,0.8568c-0.8886,0.041-1.7834,0.3493-2.5391,0.9191
			c-1.7109,1.2788-2.8208,3.2437-2.9683,5.2563l-0.2554,3.4619l3.4609-0.2554C7.6436,21.3008,9.2549,20.5405,10.5117,19.2837z
			 M10.5215,12.4365c2.3784-2.9531,5.082-5.6567,8.0361-8.0356c0.4429-0.3579,1.0278-0.4004,1.3315-0.0977
			c0.3032,0.3032,0.2603,0.8882-0.0981,1.332c-1.1704,1.4531-2.4507,2.877-3.8047,4.231s-2.7773,2.6343-4.228,3.8027l-0.1221,0.0977
			c-0.0156-0.0256-0.0399-0.046-0.0561-0.0713c-0.1382-0.2151-0.2921-0.4211-0.4771-0.6064
			c-0.1866-0.1866-0.394-0.3412-0.6099-0.4801c-0.0237-0.0152-0.0428-0.038-0.0668-0.0526L10.5215,12.4365z M4.6787,19.5137
			l0.0845-1.1499c0.1064-1.4434,0.918-2.8647,2.1748-3.8042c0.4595-0.3462,0.9907-0.5361,1.5229-0.5361
			c0.0103,0,0.0205,0.0005,0.0308,0.0005c0.0108-0.0011,0.0225,0.0004,0.0334,0.0005l0.1453,0.0127
			c0.396,0.0347,0.7485,0.1958,1.0181,0.4653c0.2696,0.2701,0.4299,0.6217,0.4697,1.0586l0.0023,0.0256
			c0.0048,0.0408,0.0084,0.0798,0.008,0.1385c0.0073,0.5176-0.1831,1.061-0.5454,1.542c-0.1396,0.1919-0.3066,0.3833-0.5259,0.603
			c-0.918,0.9175-2.0791,1.4712-3.2695,1.5591L4.6787,19.5137z"
                ></path>
              </svg>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Identité visuelle / Logo
              </h3>
              <p className="dark:text-jacarta-300">
                Nous proposons d&apos;identité visuelle et de création de logo
                sur mesure. Découvrez nos solutions pour renforcer votre
                présence en ligne avec des designs uniques et impactant, conçus
                pour optimiser votre visibilité sur le web et renforcer la
                reconnaissance de votre marque.
              </p>
            </div>

            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
              <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
              <svg
                className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 64 64"
                viewBox="0 0 64 64"
                id="seo"
              >
                <path
                  d="M59.1,54.4l-5-5c-0.9-0.9-2.3-1.1-3.4-0.6l-1.3-1.3c1.6-1.9,2.6-4.4,2.6-7c0-6.1-4.9-11-11-11c-0.8,0-1.6,0.1-2.3,0.3
		c-3.6-5.2-9.4-8.3-15.7-8.3c-10.5,0-19,8.5-19,19s8.5,19,19,19c6.3,0,12.1-3.1,15.7-8.3c0.8,0.2,1.5,0.3,2.3,0.3c2.7,0,5.1-1,7-2.6
		l1.3,1.3c-0.5,1.1-0.3,2.5,0.6,3.4l5,5c0.6,0.6,1.4,0.9,2.1,0.9c0.8,0,1.5-0.3,2.1-0.9c0,0,0,0,0,0C60.3,57.5,60.3,55.6,59.1,54.4z
		 M6.1,41.5h7c0.1,2.1,0.3,4,0.6,5.9c-1.9,0.5-3.7,1.1-5.2,1.8C7.1,46.9,6.2,44.3,6.1,41.5z M8.6,31.6c1.6,0.7,3.3,1.3,5.2,1.8
		c-0.4,1.9-0.6,4-0.7,6.2h-7C6.2,36.6,7.1,33.9,8.6,31.6z M30.1,39.5H24v-5.1c2.2-0.1,4.3-0.3,6.3-0.6c0.2,0.9,0.3,1.8,0.4,2.7
		C30.4,37.4,30.1,38.4,30.1,39.5z M24,32.4v-8.7c2.4,0.7,4.6,3.7,5.8,8.2C28,32.1,26,32.3,24,32.4z M22,23.7v8.7
		c-2-0.1-4-0.2-5.8-0.6C17.4,27.5,19.6,24.3,22,23.7z M22,34.4v5.1h-7c0.1-2,0.3-4,0.7-5.7C17.7,34.1,19.8,34.3,22,34.4z M15,41.5h7
		v4.8c-2.2,0.1-4.3,0.3-6.4,0.7C15.3,45.2,15.1,43.4,15,41.5z M22,48.3v9.1c-2.5-0.7-4.7-4-5.9-8.5C18,48.5,20,48.3,22,48.3z
		 M24,57.3v-9.1c2,0.1,4,0.3,5.9,0.6C28.7,53.5,26.5,56.7,24,57.3z M24,46.3v-4.8h6.1c0.1,1.1,0.3,2.1,0.7,3
		c-0.1,0.8-0.2,1.6-0.4,2.4C28.3,46.6,26.2,46.3,24,46.3z M32.4,47.3c0,0,0.1,0.1,0.1,0.1C32.4,47.4,32.4,47.4,32.4,47.3
		C32.3,47.3,32.3,47.3,32.4,47.3z M32.4,33.7c0-0.1,0-0.3-0.1-0.4c0.2,0,0.3-0.1,0.5-0.1C32.6,33.4,32.5,33.5,32.4,33.7z M36.3,29.9
		c-1.4,0.6-2.9,1.1-4.5,1.5c-0.8-2.9-2-5.3-3.5-7C31.4,25.4,34.2,27.3,36.3,29.9z M17.7,24.4c-1.5,1.7-2.7,4.1-3.5,7
		c-1.6-0.4-3.1-0.9-4.4-1.5C11.8,27.4,14.5,25.4,17.7,24.4z M9.6,50.9c1.4-0.6,2.9-1.1,4.6-1.6c0.8,3,2,5.5,3.6,7.3
		C14.4,55.5,11.6,53.5,9.6,50.9z M28.3,56.6c1.5-1.8,2.8-4.3,3.6-7.3c1.6,0.4,3.2,0.9,4.6,1.6C34.4,53.6,31.5,55.6,28.3,56.6z
		 M32,40.5c0-5,4-9,9-9s9,4,9,9s-4,9-9,9S32,45.5,32,40.5z M57.7,57.2c-0.4,0.4-1,0.4-1.4,0l-5-5c-0.4-0.4-0.4-1,0-1.4
		c0.2-0.2,0.5-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l5,5C58.1,56.2,58.1,56.8,57.7,57.2z"
                ></path>
                <path d="M47 39.5c-.6 0-1 .4-1 1 0 2.8-2.2 5-5 5-.6 0-1 .4-1 1s.4 1 1 1c3.9 0 7-3.1 7-7C48 39.9 47.6 39.5 47 39.5zM27 10.5h21c.6 0 1-.4 1-1s-.4-1-1-1H27c-.6 0-1 .4-1 1S26.4 10.5 27 10.5zM54 10.5h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1 .4-1 1S53.4 10.5 54 10.5zM51 10.5c.3 0 .5-.1.7-.3C51.9 10 52 9.8 52 9.5c0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0C50.1 9 50 9.2 50 9.5c0 .3.1.5.3.7C50.5 10.4 50.7 10.5 51 10.5z"></path>
                <path
                  d="M14,20.5c0.6,0,1-0.4,1-1v-7c0-1.8,1.5-2,2-2h5.1c0.5,2.3,2.5,4,4.9,4h7v5c0,0.4,0.2,0.8,0.6,0.9c0.1,0.1,0.3,0.1,0.4,0.1
		c0.3,0,0.5-0.1,0.7-0.3l5.7-5.7H52v5c0,1.8-1.5,2-2,2h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c1.6,0,4-1.1,4-4v-5h1c2.8,0,5-2.2,5-5
		s-2.2-5-5-5H27c-2.4,0-4.4,1.7-4.9,4H17c-1.6,0-4,1.1-4,4v7C13,20.1,13.4,20.5,14,20.5z M27,6.5h28c1.7,0,3,1.3,3,3s-1.3,3-3,3H41
		c-0.3,0-0.5,0.1-0.7,0.3L36,17.1v-3.6c0-0.6-0.4-1-1-1h-8c-1.7,0-3-1.3-3-3S25.3,6.5,27,6.5z"
                ></path>
              </svg>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Référencement Web (SEO/SEA)
              </h3>
              <p className="dark:text-jacarta-300">
                Dans l&apos;océan du digital, émergez au sommet avec notre
                expertise en référencement web. Notre agence web est votre
                boussole, vous guidant à travers les vagues du SEO (Search
                Engine Optimization) et du SEA (Search Engine Advertising) pour
                que votre entreprise soit remarquée, reconnue et recherchée.
              </p>
            </div>

            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
              <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
              <svg
                className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 512 512"
                id="communication"
              >
                <path d="M230.454,277,216.1,225H163.49c-.466,0-.927-.019-1.389-.035L176.117,277.1c.19,0,.379-.1.568-.1Z"></path>
                <polygon points="412 31.616 256 94.179 256 213.358 412 275.921 412 31.616"></polygon>
                <path d="M152.93 209.01a7.862 7.862 0 0 1 3.21 1.016 26.963 26.963 0 0 0 7.35.974H242V96H163.49A27.843 27.843 0 0 0 136 123.521v60.495A27.271 27.271 0 0 0 152.93 209.01zM122 182.045V123.521c0-.777.128-1.548.171-2.315a32.5 32.5 0 0 0-20.9 30.427A33.239 33.239 0 0 0 122 182.045z"></path>
                <rect width="48" height="196" x="46" y="284"></rect>
                <path d="M108 310.245V461.438l8.07 3.965A131.493 131.493 0 0 0 176.685 480H268.74a18.5 18.5 0 0 0 0-37H245.5a7 7 0 0 1 0-14h32.675a18.5 18.5 0 0 0 0-37H252.765a7 7 0 0 1 0-14h31.948a18 18 0 1 0 0-36H260.026a7 7 0 0 1 0-14h34.852a18.5 18.5 0 0 0 0-37h-55.09c-.049 0-.1.01-.146.01s-.078-.01-.118-.01H176.685a131.821 131.821 0 0 0-60.614 14.938zM465.78 151a38.067 38.067 0 0 0-38.158-38H426v76h1.622A38.067 38.067 0 0 0 465.78 151z"></path>
              </svg>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Communication sur les réseaux
              </h3>
              <p className="dark:text-jacarta-300">
                Notre service de communication sur les réseaux est conçu pour
                donner vie à votre vision, amplifiant votre message à travers
                les plateformes digitales les plus pertinentes pour votre
                industrie. Nous façonnons des stratégies de communication
                ciblées, centrées sur votre identité et vos objectifs, pour
                maximiser votre impact et engager votre audience de manière
                significative.
              </p>
            </div>

            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
              <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
              <svg
                className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                id="video"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
                xmlSpace="preserve"
              >
                <path d="M17 21.5H4a2 2 0 01-2-2v-10a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2zM21 11.5v6l4.445 2.964A1 1 0 0027 19.631V9.369a1 1 0 00-1.555-.832L21 11.5z"></path>
              </svg>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Video / Motion Design
              </h3>
              <p className="dark:text-jacarta-300">
                Dans ce monde dynamique, la vidéo et le motion design sont des
                catalyseurs qui propulsent votre marque vers de nouveaux
                horizons. Dans notre agence web, nous mettons en lumière votre
                histoire à travers des créations visuelles percutantes, en
                alliant l&apos;art à la technologie pour créer des expériences
                inoubliables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-24 pb-10 dark:bg-jacarta-800">
        <div className="container">
          <div className="lg:flex lg:flex-nowrap">
            <div className="mb-16 lg:w-1/2 lg:pl-5">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                La <span style={{ color: "#7b50f8" }}>méthode </span>made in
                KBCOM
              </h2>
              <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
                Notre équipe dynamique et passionnée utilise les CMS WordPress
                et Shopify pour concevoir des sites vitrines et des boutiques en
                ligne qui dépassent vos attentes.
              </p>
              <div className="mb-6 flex space-x-6">
                <div>
                  <p className="dark:text-jacarta-300">
                    Avec WordPress, nous façonnons des sites vitrines qui
                    captivent votre audience dès la première visite. Notre
                    équipe créative et technique travaille de concert pour
                    personnaliser chaque aspect de votre site, offrant ainsi une
                    expérience utilisateur fluide et esthétiquement plaisante.
                    Que vous soyez une entreprise à la recherche d&apos;une
                    présence en ligne élégante ou un professionnel cherchant à
                    exposer votre portefeuille, nous avons l&apos;expertise
                    nécessaire pour concrétiser votre vision.
                    <br />
                    <br />
                    Pour les projets axés sur le commerce électronique, nous
                    faisons confiance à Shopify, la plateforme de référence dans
                    le domaine. Avec notre savoir-faire approfondi dans la mise
                    en place de boutiques en ligne performantes, nous vous
                    aidons à créer un espace de vente en ligne qui séduit vos
                    clients et stimule les ventes. Chez KBCOM, nous intégrons
                    des fonctionnalités avancées, des designs attrayants et une
                    navigation intuitive pour optimiser votre boutique en ligne
                    et améliorer l&apos;expérience d&apos;achat.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="nos-realisations"
                  className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>

            <div className="mb-16 lg:w-1/2 lg:pl-20">
              <img
                src="img/all/aboutmethode.png"
                alt=""
                loading="lazy"
                className="rounded-2.5xl"
              />
            </div>
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
                <p className="text-lg leading-normal dark:text-jacarta-300">
                  Notre équipe s&apos;occupe de vous et de toutes vos questions.
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
      <Script src="../../../public/js/app.bundle.js"></Script>
    </main>
  );
};

export default Agency;
