import React from 'react'
import { ReactComponent as XIcon } from '../../assets/x.svg'

function Transfer({rightBarId, setRightBarId}) {
  return (
    <div className={rightBarId===2 ? 'RightBar show':'RightBar hide'}>
      <div className='line'>
          <div className='title'>Make a Fransfer</div>
          <XIcon onClick={()=>setRightBarId(-1)}/>
      </div>
      <div className='sub-title'>Transfer</div>
      <div className='description'>Transfer Transfer Transfer Transfer Transfer Transfer Transfer Transfer</div>
      <div className='handle-box'></div>
      <div className='button'>CONTINUE</div>
    </div>
  )
}

export default Transfer