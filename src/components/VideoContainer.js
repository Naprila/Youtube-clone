import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/videoSlice';
import store from '../utils/store';

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videos);

  const getVideos = async () => {
    console.log("INSDIE: ", videos.length);

    // if (loading) {
    //   return;
    // }

    try {
      // setLoading(true);
      const response = await fetch(YOUTUBE_VIDEO_API);
      const json = await response.json();
      dispatch(addVideos(json.items));
      console.log("CALLED ONLY ONCE");

      // console.log(json.items);
      // setLoading(false);
      // setVideos((prevVideos) => [...prevVideos, ...json.items]);
      // setVideos([Object.assign(videos, json.items)]);
    } catch (error) {
      console.error("Error fetching videos:", error);
      // setLoading(false);
    }
  };

  function handleUserScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    // check if user is near to the bottom of the body
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleUserScroll);
    return () => window.removeEventListener("scroll", handleUserScroll);
  }, []);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (isBottom) {
      // dispatch(addVideos());
      getVideos();
      setIsBottom(false);
    }
  }, [isBottom]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.scrollHeight - 200
  //     ) {
  //       getVideos(); // Load more videos when user scrolls near the bottom
  //       console.log("reach bottom");
  //     }
  //   };
  //   console.log("first call");
  //   getVideos();
  // }, []);

  return (
    <div className="flex mt-32">
      <div className="w-full max-w-screen-xl py-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {console.log(videos)}
          {videos &&
            videos.map((video, index) => (
              <Link to={"/watch?v=" + video.id} key={index}>
                <div className="flex items-stretch cursor-pointer">
                  <VideoCard video={video} />{" "}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;


//  FIX INFINTE SCROLLL -> ONLY one iteration of API should be added 

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const getVideos = async () => {
//     try {
//       setIsLoading(true); 
//       const response = await fetch(YOUTUBE_VIDEO_API);
//       const json = await response.json();
//       setVideos((prevVideos) => [...prevVideos, ...json.items]);
//     } catch (error) {
//         console.error("Error fetching videos:", error);
//     } finally {
//         setIsLoading(false); 
//     }
// };

// const handleScroll = async () => {
//     const container = document.getElementById("scroll");
    
//     if (
//         container?.scrollTop + container?.clientHeight >=
//         container?.scrollHeight - 200 &&
//         !isLoading 
//         ) {
//       getVideos();
//     }
//   };

//   useEffect(() => {
//     const container = document.getElementById("scroll");
//     getVideos();
//     container.addEventListener("scroll", handleScroll);
//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, [])

//   return (
//     <div
//       className="flex mt-32"
//       //   onScroll={handleScroll}
//       id="scroll"
//     >
//       <div className="w-full max-w-screen-xl py-4">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {videos.map((video, index) => (
//               <Link to={"/watch?v="+video.id}>
//                 <div className="flex items-stretch cursor-pointer" key={index}>
//                     <VideoCard video={video} />{" "}
//                 </div>
//               </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoContainer;





// FIX THE VIDEO CONTAINER FIRST -> INFINTE SCROLLING and then the RECOMMENDATION VIDEO
// before that implement comment