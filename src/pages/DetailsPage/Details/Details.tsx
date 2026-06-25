import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../../services/campers";
import Container from "../../../components/Container/Container";
import DetailsGallery from "../DetailsGallery/DetailsGallery";
import CamperInfo from "../../../components/CamperInfo/CamperInfo";
import css from "./Details.module.css";
import Vehicle from "../Vehicle/Vehicle";
import ReviewsList from "../ReviewsList/ReviewsList";
import BookForm from "../BookForm/BookForm";
import Error from "../../../components/Error/Error";

const Details = () => {
  const { id } = useParams<string>();

  const { data, isError, error } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => {
      if (!id) return;

      return fetchCamperById(id);
    },
  });

  if (!data) {
    return;
  }

  const params = {
    form: data?.form,
    length: data?.length,
    width: data?.width,
    height: data?.height,
    tank: data?.tank,
    consumption: data?.consumption,
  };

  return (
    <Container>
      {isError && <Error message={error.message} />}
      {data && (
        <div>
          <div className={css.topWrapper}>
            <DetailsGallery gallery={data?.gallery} />
            <div className={css.camperInfoWrap}>
              <div className={css.InfoWrap}>
                <CamperInfo
                  name={data.name}
                  price={data.price}
                  rating={data.rating}
                  totalReviews={data.totalReviews}
                  location={data.location}
                  description={data.description}
                />
              </div>
              <div className={css.InfoWrap}>
                <Vehicle vehicle={data.amenities} params={params} />
              </div>
            </div>
          </div>
          <div className={css.bottomWrap}>
            <ReviewsList camperId={data.id} />
            <BookForm />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Details;
