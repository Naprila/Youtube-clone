import React, { useEffect } from 'react'
import hamburgerImage from "../images/hamburger.jpg";
import utubeLogo from "../images/utube-logo.jpg"
import SearchBar from './SearchBar';
import Profile from './Profile';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { toogleMenu } from '../utils/menuSlice';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const isMenuVisible = useSelector((store) => store.app.isMenuOpen);

    function handleMenu() {
        // console.log("sndjak")
        if(isMenuVisible){
          dispatch(toogleMenu(false))
        }else{
          dispatch(toogleMenu(true))
        }
    }

    const handleWindowResize = () =>{
      if(window.innerWidth < 768){
        dispatch(toogleMenu(false))
      }
      
      // if(window.innerWidth > 768){
      //   dispatch(toogleMenu(true))
      // }
    }

    useEffect(() => {
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, [])



  return (
    <>
      <div className="grid grid-flow-col shadow-md h-[4rem] w-full fixed z-50 bg-white">
        <div className="flex ml-3 col-span-3">
          {/* <FontAwesomeIcon
            icon={faHamburger}
            className="h-6 w-6 mt-0 mr-4 mb-0 ml-0 p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
            onClick={handleMenu}
          /> */}
          <img
            className="h-12 w-18 mt-0 mr-4 mb-0 ml-0 p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
            src={hamburgerImage}
            alt="youtube-logo"
            onClick={handleMenu}
          ></img>
          <Link to="/">
            <img
              className="h-12 w-18 cursor-pointer"
              src={utubeLogo}
              alt="youtube-logo"
            />
          </Link>
        </div>

        <div className="col-span-6">
          <SearchBar />
        </div>
        <div className="col-span-3">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Header