import { useUser } from "@/api/auth";
import styles from "./AlamatPengiriman.module.css";

const AlamatPengiriman = () => {
  const user = useUser();

  if (user.isLoading || !user.data) {
    return <></>;
  }

  return (
    <>
      <div className={styles["outerAlamat"]}>
        <p className={styles["header"]}>Alamat Pengiriman</p>
        <div className={styles["nama-noTelp"]}>
          <p>{user.data.name}</p>
          <p className={styles["noTelp"]}>{user.data.profile?.no_hp}</p>
        </div>
        <div className={styles["alamat"]}>
          <span>{user.data.profile?.alamat}</span>
        </div>
      </div>
    </>
  );
};

export default AlamatPengiriman;
