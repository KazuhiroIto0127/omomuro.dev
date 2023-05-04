import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export default function ResultEmojis({ emojiStack, challengeResults }) {

  const resultText = (result: boolean) => (result ? '◯' : 'X');

  return (
    <div>
      <AnimatePresence mode="popLayout">
        {emojiStack.map((emoji, index) => (
          <motion.div
            key={emojiStack.length - index}
            layout
            initial={{ opacity: 0, scale: 0, translateY: -100 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="touch-manipulation select-none">
              <span>{emojiStack.length - index}回目</span>
              <span
                className={clsx({
                  'mb-1 text-4xl': index === 0,
                  'text-xl': index !== 0,
                })}
              >
                {emoji}
              </span>
              <span>
                ・・・
                {resultText(challengeResults[emojiStack.length - 1 - index])}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
