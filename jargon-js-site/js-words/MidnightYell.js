'use strict';

const I = React.createElement;

class midButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return I(
      'button',
      { onClick: () => addWord("Midnight Yell") },
      'Midnight Yell',
      
    );
  }
}
const domContainerMid = document.querySelector('#mid_button_container');
ReactDOM.render(e(midButton), domContainerMid);