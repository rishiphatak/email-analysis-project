'use strict';

const e = React.createElement;

class RevButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'button',
      { onClick: () => addWord("Reveille") },
      'Reveille',
      
    );
  }
}
const domContainer = document.querySelector('#Rev_button_container');
ReactDOM.render(e(RevButton), domContainer);
