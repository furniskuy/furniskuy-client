import { useUser } from "@/api/auth";
import { dateTimeFull } from "@/util/date";
import { FunctionComponent } from "react";
import styles from "./Alamat.module.css";

type Props = {
  tanggalTransaksi: string;
};

const Alamat: FunctionComponent<Props> = ({ tanggalTransaksi }) => {
  const user = useUser();
  if (!user) return <></>;

  return (
    <>
      <div className={styles.Alamat}>
        <table>
          <tr>
            <td className={styles.Untuk}>UNTUK</td>
            <td></td>
          </tr>
          <tr>
            <td>Pembeli</td>
            <td>: {user.data?.profile?.nama}</td>
          </tr>
          <tr>
            <td>Tanggal Beli</td>
            <td>: {dateTimeFull(tanggalTransaksi)}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>: {user.data?.profile?.alamat}</td>
          </tr>
          <tr>
            <td>Telepon</td>
            <td>: {user.data?.profile?.no_hp}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: {user.data?.email}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Alamat;
