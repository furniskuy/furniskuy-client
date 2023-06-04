import { useState } from "react";

import { PageTitle } from "@/components/PageTitle";
import Status from "./Status";
import { TransaksiList } from "./TransaksiList";

export const ListOrder = () => {
  const [statusTransaksi, setStatusTransaksi] = useState(0);

  return (
    <div>
      <PageTitle>Pesanan Saya</PageTitle>
      <Status status={statusTransaksi} setStatus={setStatusTransaksi} />
      <TransaksiList status={statusTransaksi} />
    </div>
  );
};
