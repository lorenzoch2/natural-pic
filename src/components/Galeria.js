import "../assets/css/galeria.css";
import Heart from "./Heart";
import React, { useContext } from "react";
import Context from "../Context";

export default function Home() {
  const { pics, setPics } = useContext(Context);

  const favPics = (id) => {
    const picIndex = pics.findIndex((pic) => pic.id === id);
    pics[picIndex].liked = !pics[picIndex].liked;
    setPics([...pics]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {pics.map(pic => (
        <div key={pic.id} className="foto" style={{backgroundImage: `url(${pic.src.tiny})`}}>
          <Heart filled={(pic.liked)} onClick={() => favPics(pic.id)} />
          <p>{pic.alt}</p>
        </div>
      ))}
    </div>
  );
}
