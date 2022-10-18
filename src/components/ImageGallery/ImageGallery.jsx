import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <ul className="gallery">
      {gallery.map(galleryItem => (
        <ImageGalleryItem
          key={galleryItem.id}
          img={galleryItem.img}
          largeImg={galleryItem.largeImg}
          alt={galleryItem.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.protoTypes = {
  gallery: PropTypes.array.isRequired,
};
