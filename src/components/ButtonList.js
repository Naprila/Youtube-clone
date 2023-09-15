import React from 'react'

const ButtonList = () => {

   const category = [
     "All",
     "Music",
     "Mixes",
     "Gaming",
     "Live",
     "Live",
     "Live",
     "Live",
     "Sports",
     "Trailers",
     "Indian pop music",
     "Bollywood music",
     "Dramedy",
     "Movies",
     "Lo-fi",
     "News",
     "Recently Uploaded",
   ];

  return (
    <div className=" fixed bg-white justify-center pt-20 pr-11 overflow-x-scroll">
      <div className="flex p-2 space-x-3 ">
        {category.map((item) => (
            <span
              className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg whitespace-nowrap"
              key={item}
            >
              {item}
            </span>
        ))}
      </div>
    </div>
  );
}

export default ButtonList
// import React, { useRef } from "react";

// const ButtonList = () => {
//   const categories = [
//     "All",
//     "Music",
//     "Mixes",
//     "Gaming",
//     "Live",
//     "Sports",
//     "Trailers",
//     "Indian pop music",
//     "Indian pop music",
//     "Indian pop music",
//     "Bollywood music",
//     "Dramedy",
//     "Movies",
//     "Lo-fi",
//     "News",
//     "Recently Uploaded",
//   ];

//   const containerRef = useRef(null);

//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
//     }
//   };

//   return (
//     <div className="flex fixed bg-white justify-center pt-20 pr-11 overflow-x-auto">
//       <div
//         ref={containerRef}
//         className="flex p-2 space-x-3"
//         style={{
//           whiteSpace: "nowrap",
//         }}
//       >
//         {categories.map((item) => (
//           <span
//             className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg whitespace-nowrap"
//             key={item}
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//       <button
//         className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg"
//         onClick={scrollLeft}
//       >
//         &lt; {/* Left arrow */}
//       </button>
//       <button
//         className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg"
//         onClick={scrollRight}
//       >
//         &gt; {/* Right arrow */}
//       </button>
//     </div>
//   );
// };

// export default ButtonList;
