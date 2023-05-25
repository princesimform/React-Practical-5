import React from "react";
import loadingGif from "./../assets/loading.gif";
function Loading() {
  return (
    <div className="m-auto">
      <img src={loadingGif} alt="" className="w-50 h-40 m-auto" />
    </div>
  );
}

export default Loading;
