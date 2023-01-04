import React from "react";

const Divider = ({ sectionText }) => (
  <div className="flex flex-col items-center">
    <div>
      <span className="h-[84px] border-l-[2px] block"></span>
    </div>
    <span className="block w-[56px] h-[56px] border-2 rounded-full flex items-center justify-center">
      <span className="font-black font-redHat text-secondary text-[16px]">
        {sectionText}
      </span>
    </span>
  </div>
);

export default Divider;
