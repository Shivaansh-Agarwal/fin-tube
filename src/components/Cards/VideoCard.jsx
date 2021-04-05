import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

export const VideoCard = ({
  id,
  name: videoName,
  categoryId,
  creator,
  playlists,
}) => {
  const { id: creatorId, name: creatorName, imgSrc: creatorImgSrc } = creator;
  return (
    <Link className="videocard" to={`/watch/${id}`}>
      <div className="vediocard__thumbnail">
        <img
          src={`http://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="thumbnail"
        />
      </div>
      <div className="videocard__details">
        <div className="videocard__details__left">
          <div className="videocard--creator-avatar">
            <img src={creatorImgSrc} alt="creator-img" />
          </div>
        </div>
        <div className="videoCard__details__center">
          <span className="videocard--videoname">{videoName}</span>
          <span className="videocard--creatorname">{creatorName}</span>
        </div>
        <div className="vedioCard__details__right">
          <span className="material-icons">more_vert</span>
        </div>
      </div>
    </Link>
  );
};
