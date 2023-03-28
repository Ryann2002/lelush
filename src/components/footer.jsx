import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <div className="noisy-bg flex flex-col items-center pt-[40px] gap-[10px] pb-[20px]">
      <p className="text-white text-3xl font-bold">LELUSH.</p>
      <div className="flex">
        <a href="#" className="p-3">
          <img src={instagram} />
        </a>
        <a href="#" className="p-3">
          <img src={facebook} />
        </a>
      </div>
      <hr className="self-stretch" />
      <p className="text-white text-sm">
        © 2023 Lelush., Inc. Todos os direitos reservados.
      </p>
    </div>
  );
}
