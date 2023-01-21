import Head from '@/components/Head';
import Footer from '@/components/layouts/Footer';
import HomeHeader from '@/components/layouts/HomeHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="dark:bg-gray-700 dark:text-white">
        <HomeHeader />
        <main className="container mx-auto px-4 py-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
