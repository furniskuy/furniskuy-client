import * as Form from "@radix-ui/react-form";
import { FunctionComponent } from "react";

import { useLogin } from "@/api/auth";
import { useAuth } from "@/context/AuthProvider";

import styles from "./LoginForm.module.css";

export const LoginForm: FunctionComponent = () => {
  const auth = useAuth();

  const login = useLogin({
    onSuccess: (data) => {
      auth?.login(data.access_token);
    },
  });

  const handleSubmit = (event: React.SyntheticEvent) => {
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    login.mutate({
      email: target.email.value,
      password: target.password.value,
    });
    event.preventDefault();
  };

  return (
    <Form.Root className={styles["FormRoot"]} onSubmit={handleSubmit}>
      <Form.Field className={styles["FormField"]} name="email">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Label className={styles["FormLabel"]}>Email</Form.Label>
          <Form.Message className={styles["FormMessage"]} match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className={styles["FormMessage"]} match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className={styles["Input"]} type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className={styles["FormField"]} name="password">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Label className={styles["FormLabel"]}>Password</Form.Label>
          <Form.Message className={styles["FormMessage"]} match="valueMissing">
            Please enter a password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className={styles["Input"]} type="password" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className="btn btn-primary"
          style={{ marginTop: 10 }}
          disabled={login.isLoading}
        >
          {login.isLoading ? "Loading" : "Masuk"}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
