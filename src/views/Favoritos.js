import { useContext } from "react";
import Context from "../Context";

import Heart from "../components/Heart";


export default function Favoritos() {
  const { pics, setPics } = useContext(Context);

  const deleteFav = (id) => {
    const picIndex = pics.findIndex((p) => p.id === id);
    pics[picIndex].liked = !pics[picIndex].liked
    setPics([...pics])
  }
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        {pics.filter((pic) => pic.liked).map((pic) => (
          <div key={pic.id} className="foto" style={{backgroundImage: `url(${pic.src.tiny})`}}>
            <Heart filled={(pic.liked).toString()} onClick={() => deleteFav(pic.id)} />
            <p>{pic.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
