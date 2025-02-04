import React from "react";
// import Header from "./header";
import { useParams } from "react-router-dom";

export default function Contact() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>CONTACT US BIDU!</h1>
    </>
  );
}
