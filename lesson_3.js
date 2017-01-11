const { DOM, PropTypes } = React;

const { assign, bind } = _;

const blogs = [
  {
    id: 1,
    img: {
      src: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
      width: 50, height: 50, alt: 'LZ'
    },
    text: 'Bright light is almost blinding',
    meta: {
      author: 'John Doe',
      created_at: '17.12.2016',
      updated_at: '17.12.2016',
      count: 555
    }
  },
  {
    id: 12,
    img: {
      src: "https://busites_www.s3.amazonaws.com/acdccom/content/discography/blackice_0.jpg",
      width: 50, height: 50, alt: 'AC/DC'
    },
    text: 'Back in Black, I hit the sack',
    meta: {
      author: 'Angus Young',
      count: 259
    }
  },
  {
    id: 18,
    img: {
      src: "http://fontmeme.com/images/Deep-Purple-Logo-600x259.png",
      width: 50, height: 50, alt: 'Deep Purple'
    },
    text: 'Smoke on the water, and fire in the sky',
    meta: {
      count: 11,
    },
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


const Span = (props) => (
  DOM.span(
    {
//       style: { border: '1px solid red' }
    },
    props.children
  )
);

Span.defaultProps = {
  children: React.createElement(Span, null)
};

Span.PropTypes = {
  children: PropTypes.instanceOf(Span)
};


const TextBox = (props) => (
  React.createElement(
    Span,
    {}
    , props.text
    , React.createElement(
        'div',
        null,
        `Author: ${props.author} |
         Created at: ${props.created_at || ''} |
         Updated at: ${props.updated_at || ''}`
      )
  )
);

TextBox.defaultProps = {
  author: 'Secret Person',
};

TextBox.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.numbers
  ]),
  updated_at: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.numbers
  ]),
};


const Like = ({blog, handlerLikes}) => (
  React.createElement(
    'div',
    null,
    `Likes ${blog.meta.count}`,
    React.createElement(
      'button'
      ,  { onClick: () => handlerLikes(blog.id) }
      , 'Click me!'
    )
  )
);

Like.defaultProps = {
  count: 0,
};

Like.propTypes = {
  count: PropTypes.number
};


const BlogItem = (props) => (
  React.createElement(
    'div',
    null,
    React.createElement(Image, assign({}, props.blog.img) ),
    React.createElement(TextBox, assign({}, props.blog.meta, { text: props.blog.text } )),
    React.createElement(Like, {blog: props.blog, handlerLikes: props.handlerLikes })
  )
);

BlogItem.defaultProps = {
  blog: {
    img:{},
    text: '',
    meta: {}
  },
};

BlogItem.propTypes = {
  blog: PropTypes.object,
};


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  };

  handleLikeClick(blogId) {
    const newBlogs = _.map(blogs, (blog) => {
      if (blog.id === blogId) ++blog.meta.count;
      return blog;
    });

    this.setState({ blogs: newBlogs });
  };

  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs: blogs, handlerLikes: this.handleLikeClick })
  };
};


const BlogList = ({blogs, handlerLikes}) => (
  DOM.ul(
    null,
    _.map(
      blogs,
      (blog) => (
        DOM.li(
          { key: blog.id },
          React.createElement(BlogItem, { blog: blog, handlerLikes: handlerLikes })
        )
      )
    )
  )
);

BlogList.defaultProps = {
  blogs: []
};

BlogList.PropTypes = {
  blogs: PropTypes.shape(
    BlogItem.PropTypes
  )
};

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);
