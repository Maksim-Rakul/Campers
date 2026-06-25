import { useState } from "react";
import type { CamperPicture } from "../../../types/campers";
import css from "./DetailsGallery.module.css";

interface DetailsGalleryProps {
  gallery: CamperPicture[];
}

const DetailsGallery = ({ gallery }: DetailsGalleryProps) => {
  const [sellectedPicture, setSelectedPicture] = useState(0);

  return (
    <div className={css.gallery}>
      <img
        src={gallery[sellectedPicture].original}
        alt=""
        className={css.originalImg}
      />
      <ul className={css.pictureList}>
        {gallery.map((picture, index) => {
          return (
            <li key={picture.id} onClick={() => setSelectedPicture(index)}>
              <img
                src={picture.thumb}
                alt=""
                className={`${css.thumbImg} ${index === sellectedPicture && css.active}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsGallery;
