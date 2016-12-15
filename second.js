Skip welcome & menu and move to editor
Close welcome panelWelcome to JS Bin
New bin

Textarea editor mode
JS Bin features
Getting started
Keyboard Shortcuts
Exporting/importing gist

Pro features
Private bins
const DOM = React.DOM;
​
const Span = (props) => (
  DOM.span(
    {
      style: { border: '1px solid red' }
    },
    props.children
  )
);
​
const TextBox = ({ text }) => (
  React.createElement(
    Span,
    {}
    , text
  )
);
​
ReactDOM.render(
  React.createElement(TextBox, { text: 'Bright light is almost blinding' }),
  document.getElementById('app')
);
​