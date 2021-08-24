import Link from 'next/link';





export default function SubNav( ) {
  
    return (
      <div className="flex px-10 pt-20 pb-8 -mt-20 text-sm sm:justify-end sm:pt-0 sm:pb-0 xl:pr-16 lg:pr-12 md:pr-6 sm:text-base">

        <Link href="/impressum">
          <a className="z-10 mt-2 font-medium text-white hover:text-gray-200">Impressum</a>
        </Link>
      </div>
    );

}
