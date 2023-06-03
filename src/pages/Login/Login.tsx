import { FunctionComponent } from "react";
import { LoginForm } from "./LoginForm";

export const Login: FunctionComponent = () => {
  return (
    <div className="column" style={{ alignItems: "center", width: "100%" }}>
      <h1>LOGIN</h1>

      <LoginForm />
    </div>
  );
};
