import React from "react";
import kento from "./image/Kento_Nanami.jpg";
import megumi from "./image/Megumi_Fushiguro.jpg";
import kugisaki from "./image/Nobara_Kugisaki.jpg";
import ryomen from "./image/Ryomen_Sukuna.jpg";
import satoru from "./image/Satoru_Gojo.jpg";
import yuji from "./image/Yuji_Itadori.jpg";
import yuta from "./image/Yuta_Okkotsu.jpg";


function Character() {
  return (
  <div id="scrollContainer" className="mt-10 mb-10 h-[25vh]  flex overflow-hidden">
    <div id="scroll" className="flex items-center gap-10 p-2 min-w-full anime">
      <img className="h-45 w-[13%] rounded-full" src={kento} />
      <img className="h-45 w-[13%] rounded-full" src={megumi} />
      <img className="h-45 w-[13%] rounded-full" src={kugisaki} />
      <img className="h-45 w-[13%] rounded-full" src={ryomen} />
      <img className="h-45 w-[13%] rounded-full" src={satoru} />
      <img className="h-45 w-[13%] rounded-full" src={yuji} />
      <img className="h-45 w-[13%] rounded-full" src={yuta} />
    </div>

  
    <div id="scroll" aria-hidden="true" className="flex items-center gap-10 p-2 min-w-full anime">
      <img className="h-45 w-[13%] rounded-full" src={kento} />
      <img className="h-45 w-[13%] rounded-full" src={megumi} />
      <img className="h-45 w-[13%] rounded-full" src={kugisaki} />
      <img className="h-45 w-[13%] rounded-full" src={ryomen} />
      <img className="h-45 w-[13%] rounded-full" src={satoru} />
      <img className="h-45 w-[13%] rounded-full" src={yuji} />
      <img className="h-45 w-[13%] rounded-full" src={yuta} />
    </div>
  </div>
);

}

export default Character;
