import type { FilterProps } from "../../../../types/campers";
import { Field, Form, Formik } from "formik";
import css from "./SideBar.module.css";
import * as Yup from "yup";

const SideBarFormSchema = Yup.object().shape({
  form: Yup.string()
    .oneOf(["alcove", "panel_van", "integrated", "semi_integrated"])
    .required(),
  engine: Yup.string()
    .oneOf(["diesel", "petrol", "hybrid", "electric"])
    .required(),
  transmission: Yup.string().oneOf(["automatic", "manual"]).required(),
});

interface SideBarProps {
  onSubmit: (filter: FilterProps) => void;
  onClear: () => void;
}

const initialValues: FilterProps = {
  form: "alcove",
  engine: "diesel",
  transmission: "automatic",
};

const SideBar = ({ onSubmit, onClear }: SideBarProps) => {
  const handleSubmit = (values: FilterProps) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SideBarFormSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Filters</h2>
        <fieldset className={css.fieldset}>
          <legend className={css.subtitle}>Camper form</legend>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="alcove" />
            Alcove
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="panel_van" />
            Panel Van
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="integrated" />
            Integrated
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="semi_integrated" />
            Semi Integrated
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.subtitle}>Engine</legend>

          <label className={css.form__name}>
            <Field type="radio" name="engine" value="diesel" />
            Diesel
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="engine" value="petrol" />
            Petrol
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="engine" value="hybrid" />
            Hybrid
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="engine" value="electric" />
            Electric
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.subtitle}>Engine</legend>

          <label className={css.form__name}>
            <Field type="radio" name="transmission" value="automatic" />
            Automatic
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="transmission" value="manual" />
            Manual
          </label>
        </fieldset>

        <button className={`btn ${css.search__btn}`} type="submit">
          Search
        </button>

        <button
          className={`btn ${css.clear__btn}`}
          type="button"
          onClick={onClear}
        >
          Clear
        </button>
      </Form>
    </Formik>
  );
};

export default SideBar;
