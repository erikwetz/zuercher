import Head from 'next/head';
import LogoHeader from '../components/LogoHeader';
import SubNav from '../components/SubNav';
import content from '../content/home/content.json';
import HeroImage from '../components/HeroImage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming soon</title>
        <meta name="description" content="Zürcher Lares" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <div className="h-full sm:h-screen md:flex bg-primary">
        <div className="relative px-10 py-6 md:hidden">
          <LogoHeader />
        </div>
        <div className="relative h-64 sm:h-72 md:h-full md:w-1/2">
          <HeroImage />
        </div>
        <div className="relative h-full pt-8 pb-12 md:w-1/2">
          <div className="hidden pt-4 lg:pt-8 lg:pr-12 md:pr-6 xl:pr-20 md:block">
            <div className="relative flex justify-end">
              <LogoHeader />
            </div>
          </div>

          <div className="w-full px-10 xl:px-36 lg:px-16 md:pt-24 3xl:px-52 3xl:pt-72 4xl:px-72">
            <h1 className="text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-white md:mt-10 lg:text-md 3xl:text-xl 4xl:text-2xl">
              {content.description}
            </p>
            <div className="mt-10 mb-8 md:mt-12">
              <a
                href="mailto: info@zuercher-lares.de"
                className="items-center justify-center px-10 py-2 text-base bg-white border border-transparent rounded-md shadow-sm 3xl:text-xl 4xl:text-2xl text-primary hover:bg-gray-50">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
      <SubNav />
    </>
  );
}
