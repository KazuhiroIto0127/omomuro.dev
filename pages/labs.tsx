import HeadMeta from '@/components/Head';
import LabsLink from '@/components/LabsLink';
import Layout from '@/components/layouts/oneColumnLayout';
import { labsLinks } from '@/components/labs';

export default function Labs() {
  return (
    <>
      <HeadMeta type="website" title="実験室" />

      <Layout>
        <h1 className="mb-8 text-3xl font-bold">実験室</h1>

        <div className="grid gap-4 md:grid-cols-4">
          {labsLinks.map((link) => (
            <LabsLink title={link.title} id={link.id} emoji={link.emoji} key={link.id} />
          ))}
        </div>
      </Layout>
    </>
  );
}
