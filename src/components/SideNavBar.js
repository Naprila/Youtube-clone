import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const SideNavBar = () => {
  return (
    <div className="ml-3 w-[110px] fixed">
      <div className="m-[0.5]  p-3 pr-8 hover:bg-gray-200 w-2/4 rounded-lg">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="m-[0.5] p-3 hover:bg-gray-200 w-2/4 rounded-lg">
        <FontAwesomeIcon icon={faPlay} />
      </div>
      <div className="m-[0.5] p-3 hover:bg-gray-200 w-2/4 rounded-lg">
        <FontAwesomeIcon icon={faFilm} />
      </div>
      <div className="m-[0.5] p-3 hover:bg-gray-200 w-2/4 rounded-lg">
        <FontAwesomeIcon icon={faSwatchbook} />
      </div>
      <div className="m-[0.5] p-3 hover:bg-gray-200 w-2/4 rounded-lg">
        <FontAwesomeIcon icon={faMusic} />
      </div>
      <div className="m-[0.5] p-3 hover:bg-gray-200 w-2/4 rounded-lg">
        <FontAwesomeIcon icon={faDownload} />
      </div>
    </div>
  );
}

export default SideNavBar