"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name is too short").required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    comment: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      bookingDate: null,
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        toast.success("Booking request sent!", {
          position: "top-right",
          duration: 3000,
        });

        resetForm();
      } catch {
        toast.error("Please fill required fields", {
          position: "top-right",
          duration: 3500,
        });
      }
    },
  });

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name*"
            className={`${styles.input} ${
              formik.touched.name && formik.errors.name ? styles.inputError : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.errorText}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className={styles.inputWrapper}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            className={`${styles.input} ${
              formik.touched.email && formik.errors.email
                ? styles.inputError
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errorText}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={styles.inputWrapper}>
          <DatePicker
            selected={formik.values.bookingDate}
            onChange={(date: Date | null) => {
              formik.setFieldValue("bookingDate", date);
            }}
            onBlur={formik.handleBlur}
            placeholderText="Booking date*"
            className={`${styles.input} ${
              formik.touched.bookingDate && formik.errors.bookingDate
                ? styles.inputError
                : ""
            }`}
            dateFormat="yyyy-MM-dd"
          />
          <div className={styles.errorText}>
            {formik.touched.bookingDate && formik.errors.bookingDate
              ? formik.errors.bookingDate
              : ""}
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
            className={styles.textarea}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}