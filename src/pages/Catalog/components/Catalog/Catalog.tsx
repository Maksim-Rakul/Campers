import Container from "../../../../components/Container/Container";
import SideBar from "../SideBar/SideBar";
import css from "./Catalog.module.css";
import CampersList from "../CampersList/CampersList";

import { fetchCampers } from "../../../../services/campers";
import { useInfiniteQuery } from "@tanstack/react-query";

import type { FilterProps } from "../../../../types/campers";
import Loader from "../../../../components/Loader/Loader";
import Error from "../../../../components/Error/Error";
import { useState } from "react";
import NotFound from "../../../../components/NotFound/NotFound";

const Catalog = () => {
  const [searchFilters, setSearchFilters] = useState<FilterProps | null>(null);

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ["campers", searchFilters],
      queryFn: ({ pageParam }) =>
        fetchCampers({
          pageParam,
          filters: searchFilters,
        }),

      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });

  const campers = data?.pages.flatMap((page) => page.campers);

  const handleSubmit = async (filters: FilterProps) => {
    setSearchFilters(filters);
  };

  const handleNext = () => {
    fetchNextPage();
  };

  return (
    <Container>
      <div className={css.wrapper}>
        <SideBar
          onSubmit={handleSubmit}
          onClear={() => setSearchFilters(null)}
        />
        <div className={css.campersWrap}>
          {isLoading && <Loader />}
          {isError && <Error message={error.message} />}
          {}
          {campers && <CampersList campers={campers} />}
          {campers?.length === 0 && <NotFound />}
        </div>
      </div>
      {hasNextPage && (
        <button
          onClick={handleNext}
          className={css.loadmore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </Container>
  );
};

export default Catalog;
