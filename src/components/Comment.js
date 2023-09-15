import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, } from 'react';

const Comment = ({comment}) => {





  return (
    <div className="flex items-center bg-gray-100 rounded-md px-2 border-s-4">
      <FontAwesomeIcon icon={faUserCircle} className=" text-4xl" />
      <div className="ml-3">
        <p className=" text-sm font-medium">{comment.name}</p>
        <p className=" text-xs">{comment.text}</p>
      </div>
    </div>
  );
}

export default Comment


// const Comment = ({ comment }) => {
//   const [showReplies, setShowReplies] = useState(false);

//   const toggleReplies = () => {
//     setShowReplies(!showReplies);
//   };

//   return (
//     <div className="flex flex-col bg-gray-100 rounded-md mt-1 px-2 border-s-4">
//       <div className="ml-3">
//       <FontAwesomeIcon icon={faUserCircle} className=" text-4xl" />
//         <span className="text-sm font-medium">{comment.name}</span>
//         <p className="text-xs">{comment.text}</p>
//         <button onClick={toggleReplies}>
//           {showReplies ? "Hide Replies" : "Show Replies"}
//         </button>
//       </div>
//       {showReplies && (
//         <div className="replies">
//           {comment.replies.map((reply) => (
//             <Comment key={reply.id} comment={reply} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Comment;
