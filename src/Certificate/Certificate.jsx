import React, { useState } from "react";
import Certificateset from "./Certificateset";
import "./Certificate.css";
import python from "./Cert-assest/python.jpeg";
import iot from "./Cert-assest/iot.jpeg";
import iet from "./Cert-assest/ietCSS.jpeg";
import hackerrank from "./Cert-assest/hackCSS.jpeg";

export default function Certificate() {
  const certificates = [
    { Cimg: python, Cname: "Python", Cdes: "Description 1" },
    {  Cname: "Iot", Cdes: "Description 2" },
    { Cimg: iet, Cname: "IET CSS", Cdes: "Description 3" },
    { Cimg: hackerrank, Cname: "Hackerrank css", Cdes: "Description 4" },
  ];
  
  return (
    <div className="certificate-slider p-10 pt-18 mt-10">
      <Certificateset certificates={certificates} />

    </div>
  );
}
