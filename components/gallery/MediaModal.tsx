import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type MediaData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'image' | 'video' | 'graphic';
  poster?: string;
  category?: string;
  description?: string;
};

interface MediaModalProps {
  selectedImage: MediaData | null;
  onClose: () => void;
}

export default function MediaModal({ selectedImage, onClose }: MediaModalProps) {
  const handleBackgroundClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackgroundClick}
        >
          <div className="relative flex items-center justify-center p-4 max-h-screen max-w-screen">
            {selectedImage.type === 'image' || selectedImage.type === 'graphic' ? (
              <motion.div
                layoutId={`image-${selectedImage.src}`}
                className="rounded-2xl overflow-hidden shadow-2xl max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={handleContentClick}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="object-contain w-auto h-auto"
                  style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                  }}
                  unoptimized={selectedImage.src.toLowerCase().endsWith('.gif')}
                />
              </motion.div>
            ) : (
              <motion.div
                layoutId={`video-${selectedImage.src}`}
                className="rounded-2xl overflow-hidden shadow-2xl max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={handleContentClick}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <video
                  src={selectedImage.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="object-contain w-auto h-auto"
                  style={{ 
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    aspectRatio: `${selectedImage.width} / ${selectedImage.height}` 
                  }}
                  onClick={handleContentClick}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
            <motion.button
              className="absolute -top-2 -right-2 z-10 rounded-full bg-white p-2 text-black shadow-xl hover:bg-gray-100 touch-manipulation"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCloseClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}