import React from 'react'

function LeftBar({newTab, setNowTab, setRightBarId}) {
  return (
    <div className='LeftBar'>
      <div className='top-title'>
        <p>Lightning Transfers</p>
      </div>
      <div className='tabs'>
        <div className={ newTab===0? 'tab selected':'tab'} onClick={()=>{setNowTab(0); setRightBarId(0);}}>DEPOSIT</div>
        <div className={ newTab===1? 'tab selected':'tab'} onClick={()=>{setNowTab(1); setRightBarId(1);}}>WITHDRAWAL</div>
        <div className={ newTab===2? 'tab selected':'tab'} onClick={()=>{setNowTab(2); setRightBarId(2);}}>TRANSFER</div>
        <div className={ newTab===3? 'tab selected':'tab'} onClick={()=>{setNowTab(3); setRightBarId(3);}}>EXCHANGE</div>
        <div className={ newTab===4? 'tab selected':'tab'} onClick={()=>{setNowTab(4); setRightBarId(-1);}}>SUPPORT</div>
      </div>
      <div className='contact'>+1(253)336-5355</div>
      <div className='contact'>lovelydeveloper829@gmail.com</div>
      <div className='contact'>@LovelyDev829(telegram)</div>
    </div>
  )
}

export default LeftBar