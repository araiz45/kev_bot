const MentionsLegales = () => {
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
              Mentions Légales
            </h1>
            <p className="text-lg leading-normal dark:text-jacarta-200">
              Mentions Légales de l'agence KBCOM
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 dark:bg-jacarta-800 md:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <div className="article-content mx-auto max-w-[48.125rem]">
            <h2 className="text-base">Informations sur l'entreprise</h2>
            <p>
              Entreprise : KBCOM <br />
              Statut juridique : Auto-entreprise <br />
              SIRET : <br />
              Adresse du siège social : /<br />
              Adresse e-mail : contact@kb-com.fr
              <br />
              Téléphone : 0640631953
            </p>
            <h2 className="text-base">Responsable de la publication</h2>
            <p>
              Nom et prénom du responsable : BOUTANT Kevin
              <br />
              Adresse e-mail : contact@kb-com.fr
            </p>
            <h2 className="text-base">Hébergeur du site web</h2>
            <p>
              Nom de l'hébergeur : IONOS
              <br />
              Adresse : 7, place de la Gare, BP 70109, 57200 Sarreguemines
              Cedex.
              <br />
              Téléphone : 0970 808 911
            </p>
            <h2 className="text-base">Propriété intellectuelle</h2>
            <p>
              Le contenu de ce site web (textes, images, vidéos, logos, etc.)
              est la propriété exclusive de KBcom ou de ses partenaires. Toute
              reproduction, distribution ou utilisation sans autorisation
              préalable est strictement interdite et pourra faire l'objet de
              poursuites judiciaires.
            </p>
            <h2 className="text-base">Données personnelles</h2>
            <p>
              Les données personnelles collectées sur ce site web sont traitées
              conformément à notre politique de confidentialité. Pour en savoir
              plus, veuillez consulter notre politique de confidentialité.
            </p>
            <h2 className="text-base">Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes sur
              lesquels KBCOM n'exerce aucun contrôle. Nous déclinons toute
              responsabilité quant au contenu de ces sites externes.
            </p>
            <h2 className="text-base">
              Droit applicable et juridiction compétente
            </h2>
            <p>
              Tout litige relatif à l'utilisation de ce site web est soumis au
              droit français. En cas de litige, les tribunaux français seront
              compétents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentionsLegales;
