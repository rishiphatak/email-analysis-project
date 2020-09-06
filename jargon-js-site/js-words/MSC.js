'use strict';

const M = React.createElement;

class mscButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return M(
      'button',
      { onClick: () => addWord("MSC") },
      'MSC',
      
    );
  }
}
const domContainerM = document.querySelector('#msc_button_container');
ReactDOM.render(e(mscButton), domContainerM);