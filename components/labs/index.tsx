import RandomEmojiChallenge from './randomEmojiChallenge';
import TypescriptPractice from './typescriptPractice';
import RadixUiPractice from './radixUiPractice';

export const labsLinks = [
  {
    title: '絵文字一致チャレンジ！',
    id: 'randomEmojiChallenge',
    emoji: '😀 ',
    component: RandomEmojiChallenge,
  },
  {
    title: 'typescriptの勉強！',
    id: 'typescriptPractice',
    emoji: 'typescript ',
    component: TypescriptPractice,
  },
  { title: 'RadixUIの練習', id: 'radixUiPractice', emoji: '🐶', component: RadixUiPractice },
];

export const labsLinkPattern = labsLinks.map((obj) => obj.id);

export const labTitleById = (id: string) => {
  return labsLinks.find((obj) => obj.id == id).title;
};

export const LabsComponent = ({ id }: { id: string }) => {
  const CustomTag = labsLinks.find((obj) => obj.id == id).component;
  return <CustomTag />;
};
