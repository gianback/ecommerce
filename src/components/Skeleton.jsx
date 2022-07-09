import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="animate-pulse">
        <div className="w-full h-36 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
      </div>
      <div className="animate-pulse">
        <div className="w-full h-36 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
      </div>
      <div className="animate-pulse hidden md:block">
        <div className="w-full h-36 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
      </div>
      <div className="animate-pulse hidden md:block">
        <div className="w-full h-36 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
        <div className="w-full my-2 h-6 bg-gray-100 rounded-md"></div>
      </div>
    </>
  );
};

export default Skeleton;
