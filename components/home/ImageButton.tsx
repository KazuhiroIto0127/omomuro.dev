import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface ImageButtonProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({
  href,
  imageSrc,
  imageAlt,
  imageClassName = 'w-full transition-transform group-hover:scale-105',
}) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.3 } }} viewport={{ once: true }}>
      <Link
        href={href}
        className="group block overflow-hidden rounded-lg border border-gray-300 bg-sky-100 p-4 dark:border-gray-500 dark:bg-gray-600"
      >
        <div className="flex items-center justify-center">
          <Image priority src={imageSrc} alt={imageAlt} className={imageClassName} height={300} width={300} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ImageButton;
