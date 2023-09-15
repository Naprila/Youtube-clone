import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toogleMenu } from '../utils/menuSlice';
import { useSearchParams } from 'react-router-dom';
import { CHANNEL_ID_API, COMMENTS, YOUTUBE_VIDEO_ID_API } from '../utils/constants';
import ChannelDetails from './ChannelDetails';
import CommentContainer from './CommentContainer';
import LiveChatContainer from './LiveChatContainer';
import RecommendContainer from './RecommendContainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const isMenuVisible = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  
  // const channelID = channelDetails.snippet.channelId;
  // const channelLogo = channelDetails.snippet.thumbnails.default.url;
  // const subscriberCount = channelDetails.statistics.subscriberCount;
  
  //  const getChannelDetails = async ( ) => {
  //   if(videoDetails){
  //     const data = await fetch(CHANNEL_ID_API + videoDetails.snippet.channelId);
  //     const json = await data.json();
  //     console.log(json)
  //     setChannelDetails(json.items[0]);
  //   }
  //  };

 

  const getVideoById = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_ID_API + searchParams.get("v"));
      const json = await data.json();
      // console.log(json.items);
      setVideoDetails(json.items);
    } catch (error) {
      console.error(error);
    }
    // getChannelDetails();
  }
  
  
  
  useEffect(() => {
    // console.log(searchParams.get("v"));
    dispatch(toogleMenu(false));
    getVideoById();

    return () => {};
    
  }, [searchParams])
  
  
  return (
    videoDetails && (
      <>
        {/* {console.log("SADJASJD -> ", videoDetails.length)} */}
        <div className="flex">
          <div
            className={`${
              isMenuVisible ? "" : " ml-24"
            } flex flex-col  ml-10 overflow-x-hidden`}
          >
            <div className="flex  w-full ml-10">
              <div className="w-[1000px] mt-24">
                <iframe
                  width="900"
                  height="500"
                  src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="max-w-4xl ml-10 mt-2">
              <ChannelDetails videoDetail={videoDetails[0]}/>
              <CommentContainer comments={COMMENTS} />
            </div>
          </div>
          <div className="flex-grow -ml-10">
            {videoDetails[0]?.snippet?.liveBroadcastContent === "live" ? (
              <LiveChatContainer />
            ) : (
              <RecommendContainer tobeSearched={videoDetails[0]} />
            )}
          </div>
        </div>
      </>
    )
  );
}

export default WatchPage;

