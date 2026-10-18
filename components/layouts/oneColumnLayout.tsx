import Footer from '@/components/layouts/Footer';
import SiteHeader from '@/components/layouts/SiteHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1080px] flex-1 px-5 pt-4 pb-16 md:px-6 md:pt-8">{children}</main>
      <Footer />
    </div>
  );
}
