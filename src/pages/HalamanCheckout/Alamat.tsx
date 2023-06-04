import { useUser } from "@/api/auth";
import { Loading } from "@/components/Loading";
import { HiMapPin } from "react-icons/hi2";
import styles from "./Alamat.module.css";

const Alamat = () => {
  const user = useUser();

  if (user.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles["boxAlamat"]}>
        <div className={styles["mapPin"]}>
          <HiMapPin size="50" />
        </div>
        <div className={styles["boxnama-noTelp"]}>
          <div className={styles["nama-noTelp"]}>
            <div className={styles["nama"]}>
              <p>{user.data?.name}</p>
            </div>
            <div className={styles["noTelp"]}>
              <p>{user.data?.profile?.no_hp}</p>
            </div>
          </div>
          <div className={styles["alamat"]}>
            <p>{user.data?.profile?.alamat}</p>
            {!user.data?.profile?.alamat && (
              <p style={{ color: "red" }}>Alamat belum diisi</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alamat;
