import { FunctionComponent, PropsWithChildren } from "react";

import styles from "./PageTitle.module.css";

export const PageTitle: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={styles["pageTitleText"]}>
      <h1>{children}</h1>
    </div>
  );
};
