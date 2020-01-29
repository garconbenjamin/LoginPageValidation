import React from "react";
import { upperFirst } from "./../utils/utils";
import CheckAnimeIcon from "./CheckAnimeIcon";
const AvatarCard = props => {
  const { info, selected, handleClick } = props;
  const { avatarImg, name } = info;

  return (
    <div
      className={`avt-card center ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img src={avatarImg} alt="avatar" />
      <div className="avt-name center">{upperFirst(name)}</div>
      <CheckAnimeIcon />
    </div>
  );
};
export default AvatarCard;
