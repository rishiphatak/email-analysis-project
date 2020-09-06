'use strict';

const ky = React.createElement;

class kyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return ky(
      'button',
      { onClick: () => addWord("Kyle Field") },
      'Kyle Field',
      
    );
  }
}
const domContainerky = document.querySelector('#ky_button_container');
ReactDOM.render(e(kyButton), domContainerky);