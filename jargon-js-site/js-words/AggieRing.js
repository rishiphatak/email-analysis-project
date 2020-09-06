'use strict';

const ar = React.createElement;

class arButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return ar(
      'button',
      { onClick: () => addWord("Aggie Ring") },
      'Aggie Ring',
      
    );
  }
}
const domContainerar = document.querySelector('#ar_button_container');
ReactDOM.render(e(arButton), domContainerar);