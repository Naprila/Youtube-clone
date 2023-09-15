import React from 'react'
import { formatPublishedDate, formatViewsCount } from '../utils/helper';

const VideoCard = ({video}) => {
    // console.log(video)
    const MAX_TITLE_LENGTH = 50; // Define a maximum length for the title

    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    };

    const titleText= video?.snippet.title;
    const title = truncateText(titleText, MAX_TITLE_LENGTH);
    // const originalTitle = video?.snippet.title;
    // const titleWords = originalTitle.split(" ");
    // const title =
    //   titleWords.length > 8
    //     ? titleWords.slice(0, 8).join(" ") + "..."
    //     : originalTitle;
    const channelTitle = video?.snippet.channelTitle;
    const liveContent = video?.snippet.liveBroadcastContent;
    const publishedAt = video?.snippet.publishedAt
    const views = video.statistics.viewCount;

    // if(views > 1000){
    //     views = (views/1000).toFixed(1) + 'k'
    // }

  return (
    <div
      className={`p-2 m-2 w-80 shadow-lg ${
        liveContent === "live" ? "border-red-500" : ""
      }`}
    >
      <img
        className="rounded-md"
        src={video?.snippet?.thumbnails.medium.url}
        alt="thumbnail"
      ></img>

      <div className=''>
        <h1 className=" font-semibold text-lg mt-1 py-2 overflow-hidden overflow-ellipsis">{title}</h1>
      </div>
      <h1 className=" text-gray-400 font-medium">{channelTitle}</h1>
      <div className="flex items-center text-sm font-medium">
        <span className="text-gray-400">{formatViewsCount(views)} views</span>
        <span className="text-gray-400 rounded-md ml-2">
          ▪ {formatPublishedDate(publishedAt)}
        </span>
      </div>
    </div>
  );
}

export default VideoCard