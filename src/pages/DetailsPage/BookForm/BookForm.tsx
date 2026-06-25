import { Field, Formik, Form, type FormikHelpers, ErrorMessage } from "formik";
import css from "./BookForm.module.css";
import * as Yup from "yup";

const BookFormSchema = Yup.object().shape({
  username: Yup.string().min(3, "Min 3 letters").required(),
  email: Yup.string().email().required(),
});

interface BookForm {
  username: string;
  email: string;
}

const initialValues: BookForm = {
  username: "",
  email: "",
};

const BookForm = () => {
  const handleSubmit = (values: BookForm, actions: FormikHelpers<BookForm>) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookFormSchema}
      >
        <Form className={css.form}>
          <label>
            <Field
              type="text"
              name="username"
              placeholder="Name*"
              className={css.input}
            />
          </label>
          <ErrorMessage component="span" name="username" />

          <label>
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.input}
            />
          </label>
          <ErrorMessage component="span" name="email" />

          <button type="submit" className={`${css.send} btn`}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
