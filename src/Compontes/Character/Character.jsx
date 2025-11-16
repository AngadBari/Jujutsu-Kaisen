import React from "react";
import kento from "./Image/Kento_Nanami.jpg";
import megumi from "./Image/Megumi_Fushiguro.jpg";
import kugisaki from "./Image/Nobara_Kugisaki.jpg";
import ryomen from "./Image/Ryomen_Sukuna.jpg";
import satoru from "./Image/Satoru_Gojo.jpg";
import yuji from "./Image/Yuji_Itadori.jpg";
import yuta from "./Image/Yuta_Okkotsu.jpg";


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
