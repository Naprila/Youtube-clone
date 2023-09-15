import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const SlideBarSection = () => {
    const [isShowDown, setIsShowDown] = useState(true)
    const randomData = ["BB ki Vines", "CarryisLive", "SetMAX", "MANJULIKA COOKS"]

  return (
    <div className="mt-2">
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-lg w-3/4 duration-200">
        <FontAwesomeIcon icon={faBookAtlas} />
        <span className="ml-5">Library</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faHistory} />
        <span className="ml-5">History</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faVideoCamera} />
        <span className="ml-5">Your Videos</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faSwatchbook} />
        <span className="ml-5">Watch Later</span>
      </div>
      <div className="m-[0.5] hover:bg-gray-200 p-3 rounded-md w-3/4 duration-200">
        <FontAwesomeIcon icon={faDownload} />
        <span className="ml-5">Downloads</span>
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
      <hr className=" mx-3"></hr>
    </div>
  );
}

export default SlideBarSection