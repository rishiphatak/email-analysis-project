'use strict';

const p = React.createElement;

class fishButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return p(
      'button',
      { onClick: () => addWord("Fish Camp") },
      'Fish Camp',
      
    );
  }
}
const domContainerf = document.querySelector('#fish_button_container');
ReactDOM.render(e(fishButton), domContainerf);
