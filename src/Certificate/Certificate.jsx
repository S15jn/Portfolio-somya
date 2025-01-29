import React, { useState } from "react";
import Certificateset from "./Certificateset";
import "./Certificate.css";
import python from "./Cert-assest/python.jpeg";
import iot from "./Cert-assest/iot.jpeg";
import iet from "./Cert-assest/ietCSS.jpeg";
import hackerrank from "./Cert-assest/hackCSS.jpeg";

export default function Certificate() {
  const certificates = [
    { Cimg: python, Cname: "Python", Cdes: "i recceived a certificate from IIIT jabalpur for attending a 3-day workshop held at DAVV , enchancing my skills in python programming" },
    {  Cname: "IoT", Cdes: "Our Team developed on IOT-based project named 'Fuel Guard' during a 20-day course in college .It helps detect impurities in petrol , ensuring better fuel quality and engine performance" },
    { Cimg: iet, Cname: "IET CSS", Cdes: "I received a certificate from IET DAVV for participating in the CSS Challenge held at IET DAVV , highlighting my involvement in the event." },
    { Cimg: hackerrank, Cname: "Hackerrank css", Cdes: "I received a certificate for passing the CSS test on HackerRank , showcasing my skills in CSS and front end design" },
  ];
  
  return (
    <div className="certificate-slider p-10 pt-18 mt-10">
      <Certificateset certificates={certificates} />

    </div>
  );
}
