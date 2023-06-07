import DeskripsiAturan from "./DeskripsiAturan";
import KisahKita from "./KisahKita";
import Pemberitahuan from "./Pemberitahuan";
import TentangKami from "./TentangKami";

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
