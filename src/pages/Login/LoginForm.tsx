import { ErrorMessage, Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";

import { useLogin } from "@/api/auth";
import { useAuth } from "@/context/AuthProvider";

import { LoginPayload } from "@/types/api";

const initialValues: LoginPayload = {
  email: "",
  password: "",
};

export const LoginForm: FunctionComponent = () => {
  const auth = useAuth();

  const login = useLogin({
    onSuccess: (data) => {
      auth?.login(data.access_token);
    },
  });

  const handleSubmit = (value: LoginPayload) => {
    login.mutate({
      email: value.email,
      password: value.password,
    });
  };

  const validateForm = (values: LoginPayload) => {
    const errors: { [key: string]: string } = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
