import { useState } from "react";

import Content from "./Content";
import Header from "./Header";
import Status from "./Status";

export const ListOrder = () => {
  const [halaman, setHalaman] = useState(1);

  return (
    <div>
      <Header />
      <Status halaman={halaman} setHalaman={setHalaman} />
      <Content halaman={halaman} />
    </div>
  );
};
