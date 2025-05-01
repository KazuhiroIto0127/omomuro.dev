import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface LinkCardProps {
  href: string;
  title: string;
  description: React.ReactNode; // Allow complex descriptions
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  reverseLayout?: boolean; // To handle alternating layouts
}

const LinkCard: React.FC<LinkCardProps> = ({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName = 'w-full transition-transform group-hover:scale-150',
  reverseLayout = false,
}) => {
  const DescriptionContent = (
    <div className="col-span-1">
      {description}
      <p className="block py-2 text-sky-400">＞もっと知りたい</p>
    </div>
  );

  const ImageContent = (
    <div className="col-span-1 flex items-center justify-center">
      <Image priority src={imageSrc} alt={imageAlt} className={imageClassName} height={300} width={300} />
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.3 } }} viewport={{ once: true }}>
      <Link
        href={href}
        className="group grid grid-cols-2 place-items-center gap-4 overflow-hidden rounded-lg border bg-sky-100 py-5 px-8 dark:border-gray-500 dark:bg-gray-600"
      >
        <div className="col-span-2 mb-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
        {reverseLayout ? (
          <>
            {ImageContent}
            {DescriptionContent}
          </>
        ) : (
          <>
            {DescriptionContent}
            {ImageContent}
          </>
        )}
      </Link>
    </motion.div>
  );
};

export default LinkCard;
