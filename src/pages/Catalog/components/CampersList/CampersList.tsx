import type { Camper } from "../../../../types/campers";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

interface CamperListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CamperListProps) => {
  return (
    <div className={css.campers__list_wrap}>
      <ul className={css.campers__list}>
        {campers.map((camper) => {
          return <CamperItem key={camper.id} camper={camper} />;
        })}
      </ul>
    </div>
  );
};

export default CampersList;
