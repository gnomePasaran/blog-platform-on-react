const DOM = React.DOM;

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

ReactDOM.render(
  React.createElement(
    Image, { src: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
    width: 200, height: 200, alt: 'LZ' }
  ),
  document.getElementById('app')
);
