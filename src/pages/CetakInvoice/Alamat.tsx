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
        <p className={styles.Untuk}>UNTUK</p>
       
        <table>
          
          <tr>
            <td>Pembeli</td>
            <td className={styles.titikDua}>: </td>
            <td>{user.data?.profile?.nama}</td>
          </tr>
          <tr>
            <td>Tanggal Beli</td>
            <td className={styles.titikDua}>: </td>
            <td>{dateTimeFull(tanggalTransaksi)}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td className={styles.titikDua}>: </td>
            <td>{user.data?.profile?.alamat}</td>
          </tr>
          <tr>
            <td>Telepon</td>
            <td className={styles.titikDua}>: </td>
            <td>{user.data?.profile?.no_hp}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td className={styles.titikDua}>: </td>
            <td>{user.data?.email}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Alamat;
