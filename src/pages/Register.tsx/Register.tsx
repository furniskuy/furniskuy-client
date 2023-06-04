import { FunctionComponent } from "react";
import { RegisterForm } from "./RegisterForm";

export const Register: FunctionComponent = () => {
  return (
    <div className="column" style={{ alignItems: "center", width: "100%" }}>
      <RegisterForm />
    </div>
  );
};
