import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const Login: FunctionComponent = () => {
  return (
    <div className="column" style={{ alignItems: "center", width: "100%" }}>
      <LoginForm />

      <div className="row" style={{ marginTop: "1rem" }}>
        <p>Belum punya akun?</p>
        <Link to="/register" style={{ marginLeft: "0.5rem" }}>
          Daftar
        </Link>
      </div>
    </div>
  );
};
