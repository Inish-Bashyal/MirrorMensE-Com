import React from "react";
import { ReactComponent as CricketBall } from "../../../Image/Loader-svg/LoaderBlack.svg";
import "./Loader.css";
import { CircularProgress } from "@material-ui/core";

const CricketBallLoader = () => (
  <div className="hand-craft-loader">
    <CircularProgress className="spinner" />
  </div>
);

export default CricketBallLoader;
