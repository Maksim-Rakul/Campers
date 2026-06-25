import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../../services/campers";
import css from "./ReviewsList.module.css";

interface ReviewsListProps {
  camperId: string;
}

const ReviewsList = ({ camperId }: ReviewsListProps) => {
  const { data } = useQuery({
    queryKey: ["campers reviews", camperId],
    queryFn: () => {
      return fetchReviews(camperId);
    },
    enabled: camperId !== "",
  });

  return (
    <>
      {data && (
        <div>
          <h2 className={css.title}>Reviews</h2>
          <ul className={css.reviewsList}>
            {data.map((review) => {
              return (
                <li className={css.reviewItem} key={review.id}>
                  <div className={css.reviewTop}>
                    <div className={css.avatar}>
                      <p>{review.reviewer_name[0]}</p>
                    </div>
                    <div>
                      <h3 className={css.reviewName}>{review.reviewer_name}</h3>
                      <div className={css.review}>
                        <p>{review.reviewer_rating}</p>
                        <img
                          className={css.sub__icon}
                          src="/icons/rating.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <p className={css.comment}>{review.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ReviewsList;
