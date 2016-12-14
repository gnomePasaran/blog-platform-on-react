const DOM = React.DOM;

const phones = [
  {
    name: 'LZ',
    phone: '78965441223'
  },

  {
    name: 'DP',
    phone: '11111111111'
  }
];

class PhonesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { phones };
  }

  render() {
    const { phones } = this.state;

    return React.createElement(PhonesList, { phones })
  }
}

ReactDOM.render(
  React.createElement(PhonesContainer),
  document.getElementById('app')
);

