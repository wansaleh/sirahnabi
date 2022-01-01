import MuhammadSeal from '@/components/MuhammadSeal';

import Nav from '../components/Nav';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo />

      <Nav />

      <div className="layout py-28">
        <MuhammadSeal className="invert dark:invert-0 mx-auto mb-10 w-60 rounded-full border-8" />

        <div className="flex flex-col min-h-screen">
          <h1 className="lg:text-7xl mb-4 text-5xl font-light tracking-tighter leading-none text-center">
            <span className="font-bold">Sirah Nabi</span>
          </h1>

          <p className="text-2xl font-normal text-center text-gray-500">
            Sirah kehidupan Nabi Muhammad{' '}
            <span className="text-[1.25em]">ﷺ</span>
          </p>

          <div className="mt-10"></div>
        </div>
      </div>
    </>
  );
}
