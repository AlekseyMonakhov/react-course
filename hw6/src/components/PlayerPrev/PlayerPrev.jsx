import React from "react";

const PlayerPrev = ({ avatar, username, children }) => {
  return (
    <div className='userCart'>
      <img
        src={avatar}
        alt='userPhoto'
        width='200'
        height='200'
      />
      <h2>{username}</h2>
      {children}
    </div>
  );
};

export default PlayerPrev;
