import React from "react";

function Button({
  width,
  text,
  background,
  hoverBgColor,
  version,
  versionColor,
}) {
  return (
    <button
      className={`w-[${width}] h-[58px] rounded-[29px] ${background} ${hoverBgColor} text-white font-bold`}
    >
      {text} {version ? <span className={`${versionColor}`}>v1.3</span> : ""}
    </button>
  );
}

export default Button;
