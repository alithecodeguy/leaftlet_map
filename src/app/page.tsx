// libraries
import dynamic from 'next/dynamic';

// types
import type { MapSizeInterface } from './types/commonTypes';

// dynamic import
const LeaftletMap = dynamic(() => import('./components/LeaftletMap'), {
  ssr: false,
});

export default function Home() {
  const mapSize: MapSizeInterface = {
    width: 400,
    height: 450,
  };

  return (
    <main className="grid h-screen w-screen place-content-center">
      <section className="flex h-fit w-fit flex-col items-center justify-center gap-6 rounded-md bg-white p-8 shadow-xl">
        <header className="text-center">
          <h1>پیاده‌سازی یک نقشه با قابلیت‌های پایه</h1>
          <h3>
            مستندات کتابخانه:{' '}
            <a className="underline" href="https://leafletjs.com/">
              Leaftlet
            </a>
          </h3>
          <h3>سرویس‌ها و دیتاها ماک هستند.</h3>
        </header>
        <article className="flex " style={{ width: mapSize.width, height: mapSize.height }}>
          <LeaftletMap mapSize={mapSize} />
        </article>
        <footer dir="ltr" className="flex w-full flex-col gap-2 text-center">
          <span>Telegram Channel:</span>
          <a href="https://t.me/+6qj3zj0u8bw5M2I0">@AliTheCodeGuy</a>
        </footer>
      </section>
    </main>
  );
}
