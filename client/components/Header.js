import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../Assets/eth.png'
import uniswapLogo from '../Assets/uniswap.png'
import { TransactionContext } from '../context/TransactionContext'


const style = {
  wrapper: 'p-4 w-screen flex justify-between items-center',
  headerLogo: 'flex w-1/4 items-center justify-start',
  nav: 'flex-1 flex justify-center items-center w-1/8',
  navItemsContainer: 'flex bg-[#191b1F] justify-between rounded-3xl',
  navItem:
    'px-4 py-2 m1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl',
  activeNavItem: 'bg-[#20242a]',
  buttonsContainer: 'flex w-1/4 items-center justify-end',
  buttonPadding: 'p-2',
  button:
    'flex items-center bg-[#191b1f] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer',
  buttonTextContainer: 'h-8 flex items-center',
  buttonIconContainer: 'flex items-center justify-center w-8 h-8',
  buttonAccent:
    'bg-[#172a42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-#[4f90ae]',
}

const Header = () => {
  const {connectWallet, currentAccount} = useContext(TransactionContext)
  const [selectedNav, setSelectedNav] = useState('swap')
  const [userName, setUserName] = useState('userName')

  
  console.log({connectWallet, currentAccount})
  useEffect(()=>{

    if(!currentAccount) return
    
    setUserName(`${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`)
  }, [currentAccount])

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>

      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav == 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav == 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav == 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>

          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
              <AiOutlineDown />
          </div>
        </div>
        {currentAccount ? (
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>
              {userName}
            </div>
          </div>
        ) : (
        <div        
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        >
            <div className={`${style.buttonTextContainer} ${style.buttonAccent}`}>
            Connect Wallet
            </div>        
            </div>        
            )
        }
        
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
