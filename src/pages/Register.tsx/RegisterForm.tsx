import { useRegister } from "@/api/auth";
import { useAuth } from "@/context/AuthProvider";
import { RegisterPayload } from "@/types/api";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues: RegisterPayload = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export const RegisterForm: React.FC = () => {
  const auth = useAuth();

  const register = useRegister({
    onSuccess: (data) => {
      auth?.login(data.access_token);
    },
  });

  const handleSubmit = (values: RegisterPayload) => {
    register.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    });
  };

  const validateForm = (values: RegisterPayload) => {
    const errors: { [key: string]: string } = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

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

    if (!values.password_confirmation) {
      errors.password_confirmation = "Confirm password is required";
    } else if (values.password !== values.password_confirmation) {
      errors.password_confirmation = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

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

          <div className="mb-4">
            <label
              htmlFor="password_confirmation"
              className="block font-semibold mb-1"
            >
              Confirm Password
            </label>
            <Field
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <ErrorMessage
              name="password_confirmation"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            disabled={register.isLoading}
          >
            {register.isLoading ? "Loading" : "Register"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
