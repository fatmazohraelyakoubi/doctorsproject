import React from 'react';

const Card = ({ type, phrase }) => {
  return (
    <div className="widget flex justify-between p-4 shadow-md rounded-lg h-24 bg-white">
      <div className="lft flex flex-col justify-between">
        <span className="trt font-bold text-sm text-gray-400">RECOMMENDED FOR YOU</span>
        <span className="counter text-2xl font-light">{phrase}</span>
        <span className="lik border-b text-xs"> </span>
      </div>
    </div>
  );
};

export default Card;
