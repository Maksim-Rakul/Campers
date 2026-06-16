import type { Camper } from "../../../../types/campers"
import css from "./CamperItem.module.css";

interface CamperItemProps {
    camper: Camper
}

const CamperItem = ({camper}: CamperItemProps) => {
    return <li className={css.item}>
        <img className={css.item__img} src={camper.coverImage} alt={camper.name} />
        <div>
            <div className={css.item__top_wrapper}>
                <h3 className={css.item__name}>{camper.name}</h3>
                <p className={css.item__price}>€{camper.price}</p>
            </div>

            <div className={css.item__sub_info}>
                <div className={css.item__sub_wrap}>
                    <img className={css.sub__icon} src="/icons/rating.svg" /><p className={css.item__reviews}>{camper.rating}({camper.totalReviews} Reviews)</p>
                </div>
                <div className={css.item__sub_wrap}>
                    <img className={css.sub__icon} src="/icons/map.svg" alt="" /><p>{camper.location}</p>
                </div>
            </div>

            <p className={css.item__desc}>{camper.description.slice(0, 60) + '...'}</p>

            <ul className={css.item__list}>
                <li className={css.item__param}><img className={css.item__icon} src="/icons/engine.svg" alt="" />{camper.engine}</li>
                <li className={css.item__param}><img className={css.item__icon} src="/icons/transmisson.svg" alt="" />{camper.transmission}</li>
                <li className={css.item__param}><img className={css.item__icon} src="/icons/form.svg" alt="" />{camper.form}</li>
            </ul>

            <button className={`${css.item__btn} btn`}>Show more</button>
        </div>
    </li>
}

export default CamperItem