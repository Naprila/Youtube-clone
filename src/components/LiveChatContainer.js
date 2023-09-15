import React from 'react'
import LiveChat from "./LiveChat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { addMessages } from "../utils/chatSlice";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";



const LiveChatContainer = () => {
    const [msg, setMsg] = useState();
    const hrRef = useRef(null);
    const contentEditableRef = useRef(null);
    const dispatch = useDispatch();


   const handleFocus = () => {
     if (hrRef.current) {
       hrRef.current.style.borderColor = "blue";
       hrRef.current.style.height = "2px";
     }
   };

   const handleBlur = () => {
     if (hrRef.current) {
       hrRef.current.style.borderColor = "";
       hrRef.current.style.height = "0px";
     }
   };

   const handleClick = (e) => {
     e.preventDefault();
     dispatch(
       addMessages({
         name: "ABC",
         text: msg,
       })
     );

     contentEditableRef.current.textContent = "";
   };

   const handleKeyDown = (e) => {
     if (e.key === "Enter") {
       e.preventDefault(); // Prevent the default line break
       dispatch(
         addMessages({
           name: "ABC",
           text: msg,
         })
       );

       contentEditableRef.current.textContent = "";
     }
   };



  return (
    <div className=" mt-24 border-2  mx-1 w-4/5 h-[500px] border-b-0 rounded-t-xl">
      <div className="p-2 text-lg">
        Live chat
        <hr className="mt-1"></hr>
        <div className="overflow-y-scroll h-[450px] flex flex-col-reverse">
          <LiveChat />
        </div>
      </div>
      <form
        className="border-2 rounded-top-none rounded-b-xl p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "ABC",
              text: msg,
            })
          );
          setMsg("");
        }}
      >
        <div className="flex ">
          <FontAwesomeIcon icon={faUserCircle} className=" text-2xl" />
          <div className="flex items-center">
            <p className=" text-sm font-semibold ml-3 text-gray-400">ABC</p>
          </div>
        </div>

        <div
          contentEditable
          className="outline-none text-xs mt-2 w-10/12 break-words "
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Chat..."
          value={msg}
          ref={contentEditableRef}
          onKeyDown={handleKeyDown}
          onInput={() => setMsg(contentEditableRef.current.textContent)}
        ></div>
        <div className="flex relative gap-9">
          <hr
            ref={hrRef}
            className="flex-grow border-solid border border-gray-200"
          ></hr>
          <button onClick={handleClick}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-blue-400 absolute bottom-1 right-2"
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default LiveChatContainer