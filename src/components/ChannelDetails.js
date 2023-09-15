import React, { useState, useEffect } from 'react'
import { CHANNEL_ID_API } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEllipsisH, faShare, faThumbsDown, faThumbsUp, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { formatViewsCount } from '../utils/helper';


const ChannelDetails = ({videoDetail, searchParams}) => {
    // console.log(videoDetails)
    const [channelDetails, setChannelDetails] = useState([]);
    const title = videoDetail?.snippet?.title
    const channelId = videoDetail?.snippet?.channelId

    const getChannelDetails = async () => {
      try {
        const data = await fetch(
          CHANNEL_ID_API + channelId
        );
        const json = await data.json();
        // console.log(json.items[0]);
        setChannelDetails(json.items[0]);
        window.scrollTo({ top: 0, behavior: "smooth" });

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getChannelDetails();
    }, [channelId]);


  return (
    <div className=" w-full">
      <p className="mt-2 text-xl font-semibold">{title}</p>
      <div className="mt-2 flex justify-between py-2">
        {channelDetails && (
          <div className="flex">
            <img
              src={channelDetails?.snippet?.thumbnails?.default?.url}
              className="rounded-full h-10 w-10 m-auto"
            />
            <div className="flex flex-col ml-3">
              <p className=" font-semibold">{channelDetails?.snippet?.title}</p>
              <p className=" text-xs text-gray-400">
                {formatViewsCount(channelDetails?.statistics?.subscriberCount)}{" "}
                subscribers
              </p>
            </div>
            <button className="ml-3 px-4 bg-black text-white rounded-3xl">
              Subscribe
            </button>
          </div>
        )}

        <div className="flex gap-1">
          <div className="m-[0.5] bg-gray-100 hover:bg-gray-200 p-3 rounded-l-3xl duration-200 ">
            <FontAwesomeIcon icon={faThumbsUp} className="ml-2" />
            <span className="ml-3">{formatViewsCount(videoDetail?.statistics?.likeCount)}</span>
          </div>

          <div className="m-[0.5] bg-gray-100 hover:bg-gray-200 p-3 rounded-r-3xl duration-200">
            <FontAwesomeIcon icon={faThumbsDown} className="ml-2" />
            <span className="ml-1"></span>
          </div>
          <div className="m-[0.5] bg-gray-100 hover:bg-gray-200 p-3 rounded-full duration-200">
            <FontAwesomeIcon icon={faShare} className="ml-2" />
            <span className="ml-3">Share</span>
          </div>
          <div className="m-[0.5] bg-gray-100 hover:bg-gray-200 p-3 rounded-full duration-200">
            <FontAwesomeIcon icon={faDownload} className="ml-2" />
            <span className="ml-3">Download</span>
          </div>
          <div className="m-[0.5] bg-gray-100 hover:bg-gray-200 p-3 rounded-full duration-200 mr-2">
            <FontAwesomeIcon icon={faEllipsisH} className="" />
          </div>
        </div>
      </div>

      <div className="">({videoDetail?.statistics?.commentCount}) Comments</div>
    </div>
  );
}

export default ChannelDetails