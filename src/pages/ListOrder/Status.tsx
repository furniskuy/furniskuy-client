import { STATUS_MAPPING } from "@/types/misc";
import { Dispatch, SetStateAction } from "react";
import styles from "./Status.module.css";

const Status = ({
  status,
  setStatus,
}: {
  status: number;
  setStatus: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div className={styles["statusBar"]}>
        {STATUS_MAPPING.map((item, index) => (
          <div
            className={
              styles[status === index ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => {
              setStatus(index);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Status;
