import React from "react";
import ErrorImg from "../../assets/10-error-404-page-examples-for-UX-design.png.webp";
import { RiDoorOpenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div>
      <div className="text-center my-16 space-y-10">
        <Link to="/">
          <button className="btn btn-error w-1/4 mx-auto rounded-3xl">
            Go back to home <RiDoorOpenLine />
          </button>
        </Link>
        <h1 className="font-black text-7xl">OOPS...</h1>
        <p className="font-light text-5xl">Status Code: 404</p>
        <p className="font-extralight text-xl">
          The Page you are looking for is not available right now
        </p>
        <img className="mx-auto rounded-full h-96" src={ErrorImg} alt="" />
      </div>
    </div>
  );
};

export default Errorpage;
