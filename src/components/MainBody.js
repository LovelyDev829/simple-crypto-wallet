import React from 'react'
import { ReactComponent as TetherIcon } from '../assets/tetherUSDT.svg'
// import { ReactComponent as UsdCoinIcon } from '../assets/USDcoin.svg'

function MainBody({setRightBarId}) {
  return (
    <div className='MainBody' onClick={()=>setRightBarId(-1)}>
        <div className='line'>
            <div className='hello'>Hello, Nivasan!</div>
            <div className='buttons'>
                <div className='button' onClick={(e)=>{e.stopPropagation();setRightBarId(1);}}>WITHDRAW</div>
                <div className='button' onClick={(e)=>{e.stopPropagation();setRightBarId(1);}}>DEPOSIT</div>
            </div>
        </div>
        <div className='sub-title'>Account Balances</div>
        <div className='table'>
            <div className='line'>
                <div className='left'>
                    <TetherIcon/>
                    <div className='crypto-name'>Bitcoin</div>
                    <div className='crypto-unit'>BTC</div>
                </div>
                <div className='right'>
                    <div className='price-dollar'>$1.99</div>
                    <div className='price-crypto'>2.00000BTC</div>
                </div>
            </div>
            <div className='line'>
                <div className='left'>
                    <TetherIcon/>
                    <div className='crypto-name'>Tether</div>
                    <div className='crypto-unit'>USDT</div>
                </div>
                <div className='right'>
                    <div className='price-dollar'>$1.99</div>
                    <div className='price-crypto'>2.00000USDT</div>
                </div>
            </div>
            <div className='line'>
                <div className='left'>
                <TetherIcon/>
                    <div className='crypto-name'>USD Coin</div>
                    <div className='crypto-unit'>USDC</div>
                </div>
                <div className='right'>
                    <div className='price-dollar'>$0.58</div>
                    <div className='price-crypto'>0.5756USDC</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody