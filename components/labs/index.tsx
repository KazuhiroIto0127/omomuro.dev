import RandomEmojiChallenge from './randomEmojiChallenge/randomEmojiChallenge';
import TypescriptPractice from './typescriptPractice';
import RadixUiPractice from './radixUiPractice';
import GridCssPractice from './gridCssPractice';

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
  { title: 'gridCSSの練習', id: 'gridCssPractice', emoji: '👔', component: GridCssPractice },
];

export const labsLinkPattern = labsLinks.map((obj) => obj.id);

export const labTitleById = (id: string) => {
  return labsLinks.find((obj) => obj.id == id).title;
};

export const LabsComponent = ({ id }: { id: string }) => {
  const CustomTag = labsLinks.find((obj) => obj.id == id).component;
  return <CustomTag />;
};
