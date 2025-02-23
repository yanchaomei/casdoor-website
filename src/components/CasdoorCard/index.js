import React from "react";
import {useEffect, useState} from "react";

export default function CasdoorCard(props) {
  const [link, setLink] = useState("https://door.casdoor.org/");
  useEffect(() => {
    setLink(localStorage.getItem("CasdoorLink"));
  }, []);
  return (
    <iframe
      src={link + props.src}
      width={props.width}
      height={props.height}
      style={{borderRadius: "20px"}}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}

CasdoorCard.defaultProps = {
  src: "",
  width: "600",
  height: "700",
};
