import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";


const Explore = () => {
     const [isShowDown, setIsShowDown] = useState(true);
     const randomData = [
       "BB ki Vines",
       "CarryisLive",
       "SetMAX",
       "MANJULIKA COOKS",
     ];

  return (
    <div className="mt-2 mb-20">
      <h3 className="ml-3 ">Explore</h3>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-lg w-3/4 duration-200">
        <FontAwesomeIcon icon={faFire} />
        <span className="ml-5">Trending</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="ml-5">Shopping</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faMusic} />
        <span className="ml-5">Music</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faSwatchbook} />
        <span className="ml-5">Movies</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faStream} />
        <span className="ml-5">Live</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faGamepad} />
        <span className="ml-5">Gaming</span>
      </div>
      <div>
        {isShowDown ? (
          <div
            className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200"
            onClick={() => setIsShowDown(false)}
          >
            <FontAwesomeIcon icon={faChevronDown} />
            <span className="ml-5">Show more</span>
          </div>
        ) : (
          <div>
            {randomData.map((data) => {
              return (
                <p className="ml-5 hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
                  {data}
                </p>
              );
            })}
            <div
              className="hover:bg-gray-200  p-3 rounded-md w-3/4 duration-200"
              onClick={() => setIsShowDown(true)}
            >
              <FontAwesomeIcon icon={faChevronUp} />
              <span className="ml-5 ">Show less</span>
            </div>
          </div>
        )}
      </div>
      <hr></hr>
    </div>
  );
};

export default Explore;
