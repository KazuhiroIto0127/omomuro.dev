import RandomEmojiChallenge from './randomEmojiChallenge';
import TypescriptPractice from './typescriptPractice';

export const labsLinkPattern = ['randomEmojiChallenge', 'typescriptPractice'];
export const labTitles = {
  randomEmojiChallenge: '絵文字一致チャレンジ！',
  typescriptPractice: 'typescriptの勉強！',
};

export const LabsComponent = ({ id }: { id: string }) => {
  const labComponent = {
    randomEmojiChallenge: RandomEmojiChallenge,
    typescriptPractice: TypescriptPractice,
  };
  const CustomTag = labComponent[id];

  return <CustomTag />;
};
