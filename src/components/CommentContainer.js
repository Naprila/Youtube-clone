import React, { useState } from 'react'
import Comment from './Comment'

const CommentContainer = ({comments}) => {
    const [showReplies, setShowReplies] = useState({});

    const toggleReplies = (commentId) => {
      setShowReplies((prevShowReplies) => {
        const updatedShowReplies = {
          ...prevShowReplies,
          [commentId]: !prevShowReplies[commentId],
        };
        console.log("Updated showReplies:", updatedShowReplies);
        return updatedShowReplies;
      });
    };


    return (
        <div className="mt-5">
        {comments.map((comment) => {
            return (
            <div key={comment.id}>
                <Comment comment={comment} />
                <button className=' text-xs text-blue-600 font-medium' onClick={() => toggleReplies(comment.id)}>
                {showReplies[comment.id]
                    ? "Hide Replies"
                    : comment.replies.length > 0
                    ? "Show Replies"
                    : ""}
                </button>
                {showReplies[comment.id] && (
                <div className="pl-5 border-l-black border border-r-0 outline-none">
                    <CommentContainer comments={comment.replies} />
                </div>
                )}
            </div>
            );
        })}
        </div>
    );
    }

export default CommentContainer


//   return (
//     <div className="mt-5">
//       {comments.map((comment) => {
//         return (
//           <div key={comment.id}>
//             <Comment comment={comment} />
//             {/* <button onClick={() => toggleReplies(comment.id)}>
//               {showReplies[comment.id]
//                 ? "Hide Replies"
//                 : comment.replies.length > 0
//                 ? "Show Replies"
//                 : ""}
//             </button>
//             {showReplies[comment.id] && (
//               <div className="pl-5 border-l-black border border-r-0 outline-none">
//                 <CommentContainer comments={comment.replies} />
//               </div>
//             )} */}
//           </div>
//         );
//       })}
//     </div>
//   );
// }