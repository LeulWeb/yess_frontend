import React from 'react';

const Video = () => {
  return (
    <div>
      <p className="text-[40px] font-bold pb-2">Reduces Stress</p>
      <div>
        <iframe
          width="869"
          height="463"
          src="https://www.youtube.com/embed/KPUUCS4z7TE"
          title="The best scholarship, job and business experience sharing forum Session 46"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded w-full h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
