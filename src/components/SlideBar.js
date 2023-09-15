import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import SlideBarSection from './SlideBarSection';
import Explore from './Explore';
import SideNavBar from './SideNavBar';

const SlideBar = () => {
  const isMenuVisible = useSelector((store) => store.app.isMenuOpen);

  // console.log(isMenuVisible)

  return (
    <div
      className={`flex pt-20 fixed  bg-white transition-all duration-300 ease-in-out`}
    >
      {isMenuVisible ? (
        <div className="flex ml-3 h-screen  ">
          <div className="w-[240px] overflow-y-scroll   text-sm font-normal">
            <div className="m-[0.5] bg-gray-100 hover:bg-gray-200 p-3 rounded-lg w-3/4 duration-200">
              <FontAwesomeIcon icon={faHouse} />
              <span className="ml-5">Home</span>
            </div>
            <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
              <FontAwesomeIcon icon={faPlay} />
              <span className="ml-5">Shorts</span>
            </div>
            <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
              <FontAwesomeIcon icon={faFilm} />
              <span className="ml-5">Subscriptions</span>
            </div>
            <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
              <FontAwesomeIcon icon={faRadio} />
              <span className="ml-5">Youtube Music</span>
            </div>
            <hr className=" mx-3"></hr>
            <SlideBarSection />
            <Explore />
          </div>
        </div>
      ) : (
        <SideNavBar />
      )}
    </div>
  );
}

export default SlideBar