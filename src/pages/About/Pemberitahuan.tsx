import styles from "./Pemberitahuan.module.css";

const Pemberitahuan = () => {
  return (
    <>
      <div className={styles["warning"]}>
        <p>
          Harap dicatat bahwa syarat dan ketentuan, kebijakan privasi, dan
          kebijakan pengembalian dapat berubah seiring waktu. Mohon periksa
          halaman ini secara berkala untuk memperbarui mengenai ketentuan
          terkini.
        </p>
      </div>
    </>
  );
};

export default Pemberitahuan;
