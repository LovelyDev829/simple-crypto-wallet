import React from 'react'
import { ReactComponent as XIcon } from '../../assets/x.svg'

function Withdraw({rightBarId, setRightBarId}) {
  return (
    <div className={rightBarId===1 ? 'RightBar show':'RightBar hide'}>
      <div className='line'>
          <div className='title'>Make a Withdraw</div>
          <XIcon onClick={()=>setRightBarId(-1)}/>
      </div>
      <div className='sub-title'>Select withdraw amount</div>
      <div className='description'></div>
      <div className='handle-box'></div>
      <div className='button'>CONTINUE</div>
    </div>
  )
}

export default Withdraw