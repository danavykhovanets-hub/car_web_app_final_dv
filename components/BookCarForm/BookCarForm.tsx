"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { createBookingRequest } from "@/lib/api";
import css from "./BookCarForm.module.css";

interface BookCarFormProps {
  carId: string;
}

interface BookFormValues {
  name: string;
  email: string;
  comment: string;
}

const initialValues: BookFormValues = {
  name: "",
  email: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  comment: Yup.string().max(500, "Comment is too long"),
});

export default function BookCarForm({ carId }: BookCarFormProps) {
  const handleSubmit = async (
    values: BookFormValues,
    actions: FormikHelpers<BookFormValues>
  ) => {
    try {
      await createBookingRequest(carId, values);
      toast.success("Your booking request has been sent!");
      actions.resetForm();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <Field
              type="text"
              name="email"
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <Field
              as="textarea"
              name="comment"
              rows={5}
              placeholder="Comment"
              className={css.textarea}
            />
            <ErrorMessage name="comment" component="span" className={css.error} />
          </div>

          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}