import React from 'react'
import { ReactComponent as XIcon } from '../../assets/x.svg'

function Exchange({rightBarId, setRightBarId}) {
  return (
    <div className={rightBarId===3 ? 'RightBar show':'RightBar hide'}>
      <div className='line'>
          <div className='title'>Make an exchange</div>
          <XIcon onClick={()=>setRightBarId(-1)}/>
      </div>
      <div className='sub-title'>Exchange</div>
      <div className='description'>Select the currency $ source of funds you'd like to transfer. Then select the currency & destination of the transfer</div>
      <div className='handle-box'></div>
      <div className='button'>CONTINUE</div>
    </div>
  )
}

export default Exchange