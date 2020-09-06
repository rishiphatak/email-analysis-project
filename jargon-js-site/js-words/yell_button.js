'use strict';

const g = React.createElement;

class YellButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return g(
      'button',
      { onClick: () => addWord("Yell Leader") },
      'Yell Leader',
      
    );
  }
}
const domContainerY = document.querySelector('#Yell_button_container');
ReactDOM.render(e(YellButton), domContainerY);
