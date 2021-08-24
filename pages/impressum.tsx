import Head from 'next/head';
import Link from 'next/link';
import LogoHeader from '../components/LogoHeader';
import SubNav from '../components/SubNav';
import content from '../content/impressum/content.json';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Coming soon</title>
        <meta name="description" content="Impressum" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <div className="h-full sm:h-screen md:flex bg-primary sm:pb-16">
        <div className="relative px-10 py-6 md:hidden">
          <LogoHeader />
        </div>
        <div className="relative flex pt-12 pb-6 pl-8 lg:justify-end lg:pt-60 md:w-1/4">
          <span className="mr-1 font-semibold text-white">‹</span>
          <Link href="/home">
            <a className="font-medium text-white underline hover:text-gray-200">zurück</a>
          </Link>
        </div>
        <div className="relative h-full pt-8 pb-12 md:w-3/4">
          <div className="hidden pt-4 lg:pt-8 lg:pr-12 md:pr-6 xl:pr-20 md:block">
            <div className="relative flex justify-end">
              <LogoHeader />
            </div>
          </div>

          <div className="w-full px-10 xl:px-48 lg:px-16 xl:pt-26 md:pt-24">
            <h1 className="pt-1 text-4xl font-extrabold tracking-wide text-white sm:text-5xl xl:text-6xl">
              {content.title}
            </h1>
            <p className="uppercase font-bold mt-6 md:mt-10 text-white lg:text-lg md:w-3/5">
            ANSCHRIFT
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Zürcher Lares GmbH
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Nachtigallenweg 27
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            22926 Ahrensburg
            </p>
            <p className="block text-white lg:text-lg md:w-3/5 lg:pb-5">
            Deutschland
            </p>

            <p className="uppercase font-bold mt-6 text-white lg:text-lg md:w-3/5">
            Kontakt
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            W zürcher-lares.de
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            F 04102 - 82 40 30 1
            </p>
            <p className="block text-white lg:text-lg md:w-3/5 lg:pb-5">
            E info@zuercher-lares.de
            </p>

            <p className="uppercase font-bold mt-6 text-white lg:text-lg md:w-3/5">
            Inhaltlich Verantwortliche/R
            </p>
            <p className="uppercase font-bold text-white lg:text-lg md:w-3/5">
            nach § 55 ABS. 2 RSTV
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Sven Hildebrandt und Ariane Molitor
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Zürcher Lares GmbH
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Nachtigallenweg 27
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            22926 Ahrensburg
            </p>
            <p className="block text-white lg:text-lg md:w-3/5 lg:pb-5">
            Deutschland
            </p>

            <p className="uppercase font-bold mt-6 text-white lg:text-lg md:w-3/5">
            Zusatz
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Rechtsform Gesellschaft mit beschränkter Haftung
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Registergericht Amtsgericht Lübeck
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Handelsregisternummer HRB 21543
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Steuernummer 30/291/09374
            </p>
            <p className="block text-white lg:text-lg md:w-3/5 lg:pb-5">
            USt-ID-Nr. nach §27a UStG DE 34 47 16 691
            </p>

            <p className="uppercase font-bold mt-6 text-white lg:text-lg md:w-3/5">
            UNTERNEHMEN VERTRETEN DURCH
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Sven Hildebrandt und Ariane Molitor
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Zürcher Lares GmbH
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            Nachtigallenweg 27
            </p>
            <p className="block text-white lg:text-lg md:w-3/5">
            22926 Ahrensburg
            </p>
            <p className="block text-white lg:text-lg md:w-3/5 lg:pb-36">
            Deutschland
            </p>
            
          </div>
        </div>
      </div>
     
    </>
  );
}
