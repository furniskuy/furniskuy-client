import React from "react";
import KisahKita from "./KisahKita";
import TentangKami from "./TentangKami";
import DeskripsiAturan from "./DeskripsiAturan";
import Pemberitahuan from "./Pemberitahuan";

export const About = () => {
  return (
    <>
      <div>
        <KisahKita />
        <TentangKami />
        <DeskripsiAturan />
        <Pemberitahuan />
      </div>
    </>
  );
};
