import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  name: string;
  price: string;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
}

const CamperInfo = ({
  name,
  price,
  rating,
  totalReviews,
  location,
  description,
}: CamperInfoProps) => {
  return (
    <div>
      <div className={css.item__top_wrapper}>
        <h3 className={css.item__name}>{name}</h3>
        <p className={css.item__price}>€{price}</p>
      </div>

      <div className={css.item__sub_info}>
        <div className={css.item__sub_wrap}>
          <img className={css.sub__icon} src="/icons/rating.svg" />
          <p className={css.item__reviews}>
            {rating}({totalReviews} Reviews)
          </p>
        </div>
        <div className={css.item__sub_wrap}>
          <img className={css.sub__icon} src="/icons/map.svg" alt="" />
          <p>{location}</p>
        </div>
      </div>

      <p className={css.item__desc}>{description}</p>
    </div>
  );
};

export default CamperInfo;
