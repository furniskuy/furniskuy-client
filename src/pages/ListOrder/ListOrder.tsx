import { useState } from "react";

import { PageTitle } from "@/components/PageTitle";
import Content from "./Content";
import Status from "./Status";

export const ListOrder = () => {
  const [halaman, setHalaman] = useState(1);

  return (
    <div>
      <PageTitle>Pesanan Saya</PageTitle>
      <Status halaman={halaman} setHalaman={setHalaman} />
      <Content halaman={halaman} />
    </div>
  );
};
