import React from "react";

const videos = [
  "/VID_20250620_220711_471.mp4",
  "/VID_20250620_220717_798.mp4",
  "/VID_20250620_220721_454.mp4",
];

export default function App() {
  return (
    <div className="h-screen w-full overflow-auto snap-y snap-mandatory">
      {videos.map((src, i) => (
        <div key={i} className="h-screen w-full snap-start flex items-center justify-center bg-black">
          <video
            src={src}
            className="h-full w-full object-cover"
            controls
            autoPlay
            loop
            muted
          />
        </div>
      ))}
    </div>
  );
}