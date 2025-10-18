import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Find Us</h3>
      <div className="join join-vertical w-full mt-4">
        <button className="btn bg-base-100 justify-start join-item"> <FaFacebook></FaFacebook> FaceBook</button>
        <button className="btn bg-base-100 justify-start join-item"> <FaTwitter></FaTwitter> Twitter </button>
        <button className="btn bg-base-100 justify-start join-item"> <FaInstagram></FaInstagram> Instagram </button>
      </div>
    </div>
  );
};

export default FindUs;
