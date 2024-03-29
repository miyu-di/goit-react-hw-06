import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label>Number</label>
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
