import { Link } from "react-router-dom";
import type { Camper } from "../../../../types/campers";
import css from "./CamperItem.module.css";
import CamperInfo from "../../../../components/CamperInfo/CamperInfo";

interface CamperItemProps {
  camper: Camper;
}

const CamperItem = ({ camper }: CamperItemProps) => {
  return (
    <li className={css.item}>
      <img
        className={css.item__img}
        src={camper.coverImage}
        alt={camper.name}
      />
      <div>
        <CamperInfo
          name={camper.name}
          price={camper.price}
          rating={camper.rating}
          totalReviews={camper.totalReviews}
          location={camper.location}
          description={camper.description.slice(0, 60) + "..."}
        />

        <ul className={css.item__list}>
          <li className={css.item__param}>
            <img className={css.item__icon} src="/icons/engine.svg" alt="" />
            {camper.engine}
          </li>
          <li className={css.item__param}>
            <img
              className={css.item__icon}
              src="/icons/transmisson.svg"
              alt=""
            />
            {camper.transmission}
          </li>
          <li className={css.item__param}>
            <img className={css.item__icon} src="/icons/form.svg" alt="" />
            {camper.form}
          </li>
        </ul>
        <Link className={`${css.item__btn} btn`} to={`/details/${camper.id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperItem;
