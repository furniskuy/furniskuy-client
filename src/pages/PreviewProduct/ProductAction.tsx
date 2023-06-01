export const ProductAction = () => {
  return (
    <div className="column">
      <div className="row" style={{ gap: 32 }}>
        <p>Kuantitas</p>
        <div className="row" style={{ gap: 16 }}>
          <button color="accent" className="btn btn-add-count">
            -
          </button>
          <p className="countText">1</p>
          <button color="accent" className="btn btn-add-count">
            +
          </button>
        </div>
        <p>tersisa 3 buah</p>
      </div>

      <button
        color="primary"
        className="btn btn-outline"
        style={{ marginTop: 46 }}
      >
        Masukan Keranjang
      </button>
    </div>
  );
};
