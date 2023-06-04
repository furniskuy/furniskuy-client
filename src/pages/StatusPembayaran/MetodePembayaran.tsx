import { MetodePembayaran } from "@/types/api";
import { DEFAULT_BANKS_GUIDE, MetodeDetail } from "@/types/misc";
import { FunctionComponent, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import styles from "./MetodePembayaran.module.css";

type MetodeCollapseProps = {
  metodeGuide: MetodeDetail;
};

const MetodeCollapse: FunctionComponent<MetodeCollapseProps> = ({
  metodeGuide,
}) => {
  const [showTataCara, setShowTataCara] = useState(false);

  return (
    <div className={styles["metodeContainer"]}>
      <div
        className={styles["metodeOuter"]}
        onClick={() => setShowTataCara((prev) => !prev)}
      >
        <span className={styles["metodeName"]}>{metodeGuide.namaMetode}</span>
        <SlArrowRight />
      </div>
      {showTataCara && (
        <div className={styles["metodeTataCara"]}>
          <pre>{metodeGuide.tataCara}</pre>
        </div>
      )}
    </div>
  );
};

type Props = {
  metode: MetodePembayaran;
};

const MetodePembayaran: FunctionComponent<Props> = ({ metode }) => {
  return (
    <>
      <div className={styles["metodeHeader"]}>
        <h2>Cara Melakukan Pembayaran</h2>
      </div>
      {DEFAULT_BANKS_GUIDE[metode.nama_bank].map((item, index) => (
        <MetodeCollapse key={index} metodeGuide={item} />
      ))}
    </>
  );
};

export default MetodePembayaran;
