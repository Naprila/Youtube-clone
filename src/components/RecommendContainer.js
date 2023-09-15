import React, { useEffect, useState } from 'react'
import { SEARCH_API } from '../utils/constants';
import RecommendVideo from './RecommendVideo';
import { Link } from 'react-router-dom';

const RecommendContainer = ({ tobeSearched }) => {
    const [recommendedVideos, setRecommendedVideos] = useState([]);
    const query = tobeSearched?.snippet.title;

    const getRecommendVideos = async () => {
        const data = await fetch(SEARCH_API + query);
        const json = await data.json();
        console.log(json.items);
        setRecommendedVideos(json.items);
    }

    useEffect(() => {
      getRecommendVideos();
    }, [query]);

// TODO : ADD SHIMMER here
  return (
    recommendedVideos && (
      <div className="pt-20 w-96 -ml-16">
        {recommendedVideos.map((video, index) => (
        <Link to={`/watch?v=${video.id.videoId}`} key={index}>
          <RecommendVideo videos={video} />
        </Link>
        ))}
      </div>
    )
  );
}

export default RecommendContainer