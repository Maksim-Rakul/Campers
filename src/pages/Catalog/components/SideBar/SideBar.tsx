import type { FilterProps } from "../../../../types/campers";
import { Field, Form, Formik, type FormikHelpers } from "formik";
import css from "./SideBar.module.css";

interface SideBarProps {
  onSubmit: (filter: FilterProps) => void;
}

const initialValues: FilterProps = {
  form: "",
  engine: "",
  tranmision: "",
};

const SideBar = ({ onSubmit }: SideBarProps) => {
  const handleSubmit = (
    values: FilterProps,
    actions: FormikHelpers<FilterProps>,
  ) => {
    onSubmit(values);
    actions.resetForm();
  };

  const handleClick = () => {
    
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div>LOCATION</div>
        <h2 className={css.title}>Filters</h2>
        <fieldset className={css.fieldset}>
          <legend className={css.subtitle}>Camper form</legend>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="alcove" />
            Alcove
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="panel" />
            Panel Van
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="integrated" />
            Integrated
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="form" value="semiIntegrated" />
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
            <Field type="radio" name="tranmision" value="automatic" />
            Automatic
          </label>

          <label className={css.form__name}>
            <Field type="radio" name="tranmision" value="manual" />
            Manual
          </label>
        </fieldset>

        <button className={`btn ${css.search__btn}`} type="submit">
          Search
        </button>
        <button className={`btn ${css.clear__btn}`} type="button" onClick={handleClick}>
          Clear filters
        </button>
      </Form>
    </Formik>
  );
};

export default SideBar;
