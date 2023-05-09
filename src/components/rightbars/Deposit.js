import React from 'react'
import { ReactComponent as XIcon } from '../../assets/x.svg'

function Deposit({rightBarId, setRightBarId}) {
  return (
    <div className={rightBarId===0 ? 'RightBar show':'RightBar hide'}>
      <div className='line'>
          <div className='title'>Make a Deposit</div>
          <XIcon onClick={()=>setRightBarId(-1)}/>
      </div>
      <div className='sub-title'>Select deposit amount</div>
      <div className='description'>Enter the amount you'd like to deposit into your account balance.
                                    To deposit crypto currency, tap "View wallet address" below.</div>
      <div className='handle-box'></div>
      <div className='button'>CONTINUE</div>
    </div>
  )
}

export default Deposit