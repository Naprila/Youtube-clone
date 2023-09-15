import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ChatMessage = ({name, text}) => {
  return (
    <div className="flex p-2">
      <FontAwesomeIcon icon={faUserCircle} className=" text-2xl" />
      <div className="flex items-center">
        <p className=" text-sm font-semibold ml-3 text-red-300">{name}</p>
        <p className="ml-2 text-xs ">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage