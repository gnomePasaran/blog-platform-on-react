import { DOM, PropTypes } from 'react';

const Image = (props) => (
  DOM.img({
    src: props.src,
    style: {
      width: `${props.width}px`,
      heigth: `${props.height}px`,
    },
    alt: props.alt
  })
);

Image.defaultProps = {
  src: 'https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-128.png',
  width: 50,
  height: 50,
  alt: 'There is no image',
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  alt: PropTypes.string
};

export default Image;
