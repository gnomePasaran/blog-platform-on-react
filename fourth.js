const DOM = React.DOM;

const blogs = [
  {
    img: {
      src: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
      width: 50, height: 50, alt: 'LZ'
    },
    text: 'Bright light is almost blinding'
  },
  {
    img: {
      src: "https://busites_www.s3.amazonaws.com/acdccom/content/discography/blackice_0.jpg",
      width: 50, height: 50, alt: 'AC/DC'
    },
    text: 'Back in Black, I hit the sack'
  },
  {
    img: {
      src: "http://fontmeme.com/images/Deep-Purple-Logo-600x259.png",
      width: 50, height: 50, alt: 'Deep Purple'
    },
    text: 'Smoke on the water, and fire in the sky'
  }
];

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

const BlogItem = (props) => (
  DOM.ul(
    null,
    _.map(
      props.blogs,
      (blog, key) => (
        DOM.li(
          { key },
          React.createElement(
            'div',
             null,
             React.createElement(Image, blog.img ),
             React.createElement(TextBox, { text: blog.text })
            )
          )
        )
      )
    )
);

ReactDOM.render(
  React.createElement(BlogItem, { blogs: blogs }),
  document.getElementById('app')
);
