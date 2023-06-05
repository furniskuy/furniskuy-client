import { useProfile, useUser } from "@/api/auth";
import { ProfileUser } from "@/types/api";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import React from "react";
import { toast } from "react-toastify";

export const ProfilePage: React.FC = () => {
  const user = useUser();
  const profile = useProfile({
    onSuccess: () => {
      toast.success("Profile updated");
    },
  });

  const handleSubmit = (value: ProfileUser) => {
    value.tanggal_lahir = moment(value.tanggal_lahir).format("YYYY-MM-DD");
    profile.mutate(value);
  };

  if (user.isLoading || !user.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <Formik
        initialValues={
          {
            nama: user.data.profile?.nama ?? user.data.name,
            email: user.data.email,
            alamat: user.data.profile?.alamat ?? "",
            no_hp: user.data.profile?.no_hp ?? "",
            jenis_kelamin: user.data.profile?.jenis_kelamin ?? "L",
            tanggal_lahir: user.data.profile?.tanggal_lahir
              ? moment(user.data.profile?.tanggal_lahir).format("YYYY-MM-DD")
              : "",
            pembeli_baru: user.data.profile?.pembeli_baru ?? false,
          } as ProfileUser
        }
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <Field
              type="text"
              id="nama"
              name="nama"
              className="w-full border border-gray-300 rounded px-3 py-2"
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
              disabled
            />
          </div>

          <div className="mb-4">
            <label htmlFor="jenis_kelamin" className="block font-semibold mb-1">
              Jenis Kelamin
            </label>
            <Field
              as="select"
              id="jenis_kelamin"
              name="jenis_kelamin"
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </Field>
          </div>

          <div className="mb-4">
            <label htmlFor="no_hp" className="block font-semibold mb-1">
              No HP
            </label>
            <Field
              type="text"
              id="no_hp"
              name="no_hp"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="alamat" className="block font-semibold mb-1">
              Alamat
            </label>
            <Field
              as="textarea"
              id="alamat"
              name="alamat"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tanggal_lahir" className="block font-semibold mb-1">
              Tanggal Lahir
            </label>
            <Field
              type="date"
              id="tanggal_lahir"
              name="tanggal_lahir"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            disabled={profile.isLoading}
          >
            {profile.isLoading ? "Loading" : "Save"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
