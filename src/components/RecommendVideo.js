import React from 'react'

const RecommendVideo = ({ videos }) => {
    // console.log(videos);
    const title = videos.snippet.title;
    const channelTitle = videos.snippet.channelTitle;
    const publishedTime = videos.snippet.publishedTime;
    const thumbnail = videos.snippet.thumbnails.medium.url;

  return (
    <div className="flex my-4">
      <div className="w-44 h-24">

        <div className="relative rounded-lg cursor-pointer w-44 h-24 overflow-hidden">
          <img
            src={thumbnail}
            className=" absolute  w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="ml-2">
        <p className=" font-semibold">
          {title.length > 60 ? title.slice(0, 50) + "..." : title}
        </p>
        <span className=" text-xs text-gray-500">{channelTitle}</span>
      </div>
    </div>
  );
}

export default RecommendVideo