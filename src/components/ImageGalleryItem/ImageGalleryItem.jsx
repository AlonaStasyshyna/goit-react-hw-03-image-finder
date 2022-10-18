import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    currentImage: null,
  };

  openModal = () => {
    this.setState({ currentImage: this.props.largeImg });
  };

  closeModal = () => {
    this.setState({
      currentImage: null,
    });
  };

  render() {
    const { img, largeImg, alt } = this.props;
    const { openModal, closeModal } = this;
    const { currentImage } = this.state;

    return (
      <>
        <li className="gallery-item">
          <img src={img} alt={alt} width="260px" onClick={openModal} />
        </li>

        {currentImage && <Modal img={largeImg} alt={alt} closeModal={closeModal} />}
      </>
    );
  }
}

ImageGalleryItem.protoTypes = {
  key: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
