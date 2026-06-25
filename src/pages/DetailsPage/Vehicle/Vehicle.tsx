import css from "./Vehicle.module.css";

interface Params {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
}

interface VehicleProps {
  vehicle: string[];
  params: Params;
}

const Vehicle = ({ vehicle, params }: VehicleProps) => {
  return (
    <div>
      <h2 className={css.title}>Vehicle details</h2>
      <ul className={css.detailsList}>
        {vehicle.map((item) => {
          return (
            <li key={item} className={css.detailsItem}>
              {item}
            </li>
          );
        })}
      </ul>
      <ul className={css.paramsList}>
        <li className={css.paramsItem}>
          Form <span>{params.form}</span>
        </li>
        <li className={css.paramsItem}>
          Length <span>{params.length}</span>
        </li>
        <li className={css.paramsItem}>
          Width <span>{params.width}</span>
        </li>
        <li className={css.paramsItem}>
          Height <span>{params.height}</span>
        </li>
        <li className={css.paramsItem}>
          Tank <span>{params.tank}</span>
        </li>
        <li className={css.paramsItem}>
          Consumption <span>{params.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Vehicle;
