import React, { PropTypes } from 'react';

const Image = ({ img }) => (
  < img
    src={img.src}
    style={{
      width: `${img.width}px`,
      heigth: `${img.height}px`,
    }}
    alt={img.alt}
  / >
);

Image.defaultProps = {
  src: 'https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-128.png',
  width: 50,
  height: 50,
  alt: 'There is no image',
};

Image.propTypes = {
  img: PropTypes.object,
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
