import React, { useEffect, useState } from 'react'
import { CHANNEL_ID_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const ResultContainer = ({ searchResult }) => {
    // console.log(" GOT HERE");
    console.log(searchResult)
    // const channelId = searchResult?.snippet?.channelId
    // const [channelDetails, setChannelDetails] = useState([]);
    // let channelDetails = [];


    // const getChannelDetails = async ( channelId ) => {
    //   try {
    //     const data = await fetch(CHANNEL_ID_API + channelId);
    //     const json = await data.json();
    //     // console.log(json.items[0]);
    //     // setChannelDetails(json.items[0]);
    //     // channelDetails = json.items[0]
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // useEffect(() => {
    //   getChannelDetails();
    // }, []);

    const decodeHTML = (html) => {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };

    useEffect(() => {

    }, [])


  return (
    // channelDetails &&
    <div className=" pt-40">
      {searchResult.map((item) => {
        // {getChannelDetails(item?.snippet?.channelId)}
        return (
          <Link to={"/watch?v=" + item.id.videoId}>
            <ul className="">
              <div className="flex flex-row  ">
                <div className="w-72 h-40 m-3 ">
                  <div
                    className={`overflow-hidden w-72 h-40${
                      item?.snippet.liveBroadcastContent === "live"
                        ? " border-blue-500 border-4 rounded-xl"
                        : ""
                    }`}
                  >
                    {/* <Link to={"/watch?v=" + item.id.videoId}> */}
                    <img
                      src={item.snippet?.thumbnails?.medium?.url}
                      className=" rounded-lg cursor-pointer   object-cover"
                    />
                    {/* </Link> */}
                  </div>
                </div>

                <div className="ml-5">
                  <li className=" font-normal text-lg">
                    {decodeHTML(item.snippet?.title)}
                  </li>
                  {/* <li className=' text-xs font-medium text-gray-400'>
                {channelDetails.statistics?.viewCount} views ▪{" "}
                {item.snippet?.publishedAt}
                </li>
                <div className='flex my-4'>
                    <img src={channelDetails.snippet?.thumbnails?.default?.url} className='rounded-full w-6 h-6' />
                    <li className=' text-sm text-gray-500 mx-2'>{channelDetails.snippet?.title}</li>
                </div> */}
                </div>
              </div>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default ResultContainer

