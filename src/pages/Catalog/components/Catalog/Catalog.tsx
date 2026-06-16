import { useEffect, useState } from "react";
import Container from "../../../../components/Container/Container";
import SideBar from "../SideBar/SideBar";
import css from "./Catalog.module.css";
import type { Camper, FilterProps } from "../../../../types/campers";
import CampersList from "../CampersList/CampersList";
import { fetchCampers } from "../../../../services/campers";

const Catalog = () => {
  const [filter, setFilter] = useState<FilterProps | null>(null);
  const [campers, setCampers] = useState<Camper[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const res = await fetchCampers()
        
        setCampers(res.campers)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }

    }
    fetchData()
  }, [])

  const handleSubmit = (filter: FilterProps) => {
    console.log(filter);

    setFilter(filter);
  };

  return (
    <Container>
      <div className={css.wrapper}>
        <SideBar onSubmit={handleSubmit} />
        {isLoading && <p>Loading, please wait...</p>}
        {isError && <p>Some error, please try again later</p>}
        {campers.length > 0 && <CampersList campers={campers}/>}
        {filter && <p></p>}
      </div>
    </Container>
  );
};

export default Catalog;
