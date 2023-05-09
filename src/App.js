import './App.scss';
import { useState } from 'react';
import LeftBar from './components/LeftBar'
import MainBody from './components/MainBody';
import Deposit from './components/rightbars/Deposit';
import Exchange from './components/rightbars/Exchange';
import Transfer from './components/rightbars/Transfer';
import Withdraw from './components/rightbars/Withdraw';

function App() {
  const [newTab, setNowTab] = useState(0)
  const [rightBarId, setRightBarId] = useState(0)
  return (
    <div className="App">
      <LeftBar newTab={newTab} setNowTab={setNowTab} setRightBarId={setRightBarId}/>
      <MainBody setRightBarId={setRightBarId}/>
      {/* {RightBar()} */}
      <Deposit  rightBarId={rightBarId} setRightBarId={setRightBarId}/>
      <Exchange rightBarId={rightBarId} setRightBarId={setRightBarId}/>
      <Transfer rightBarId={rightBarId} setRightBarId={setRightBarId}/>
      <Withdraw rightBarId={rightBarId} setRightBarId={setRightBarId}/>
    </div>
  );
}

export default App;
