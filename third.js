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

const Span = (props) => (
  DOM.span(
    {
      style: { border: '1px solid red' }
    },
    props.children
  )
);

const TextBox = ({ text }) => (
  React.createElement(
    Span,
    {}
    , text
  )
);

// решил сделать с помощью костыля, а 4-е задание уже с массивом
const BlogItem = (props) => (
  DOM.ul(
    null,
    // не могу понять почему, такой же костыль но с циклом for не сработал
    _.map(
      [1,2,3],
      (elem, key) => (
        DOM.li(
          {key},
          React.createElement(Image, { src: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8", width: 50, height: 50, alt: 'LZ' }),
          React.createElement(TextBox, { text: 'Bright light is almost blinding' })
        )
      )
    )
  )
);

ReactDOM.render(
  React.createElement(BlogItem, {}),
  document.getElementById('app')
);
