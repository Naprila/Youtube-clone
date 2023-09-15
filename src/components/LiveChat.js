import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import store from '../utils/store';
import { generate } from '../utils/constants';

const LiveChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
          // call the API which will give u chat msgs two or three at a time
          // console.log("sad");
          const author = generate(); // Assuming generate() returns the name value
          dispatch(
            addMessages({
              name: author,
              text: `msg from ${author}`,
            })
          );
        }, 1500)

        return () => clearInterval(interval)
    }, []);
 

  return (
    <div className="flex flex-col-reverse">
      <div className="flex flex-col-reverse">
        {messages.map((msg) => {
          return <ChatMessage name={msg.name} text={msg.text} />;
        })}
        {/* <ChatMessage name="Rasdasd" text="just a test"/> */}
        {/* <ChatMessage name="Rasdasd" text="just a test"/> */}
      </div>
      
    </div>
  );
}

export default LiveChat