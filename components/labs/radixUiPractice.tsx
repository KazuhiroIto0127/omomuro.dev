import Switch from '@/components/Switch';
import { useState } from 'react';

const RadixUiPractice = () => {
  const [bool, setBool] = useState(false);
  const clickFunc = () => {
    setBool(!bool);
  };

  return (
    <>
      <Switch bool={bool} checkedFunc={setBool} />
      <button onClick={clickFunc}>test</button>
      {bool === true ? <p>on</p> : <p>off</p>}
    </>
  );
};
export default RadixUiPractice;
