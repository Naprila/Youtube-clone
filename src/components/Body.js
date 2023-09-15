import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'

const Body = () => {

  const isMenuVisible = useSelector(store => store.app.isMenuOpen)

  return (
    <div className={`${isMenuVisible ? " ml-80" : ' ml-28' } flex`}>
      {/* {isMenuVisible ? (<div className='w-1/4'>
          <SlideBar />
        </div>): <SideNavBar /> } */}
        <div className=' flex-grow overflow-x-hidden'>
          <MainContainer />
        </div>
    </div>
  );
}

export default Body