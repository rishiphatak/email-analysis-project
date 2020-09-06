'use strict';

const f = React.createElement;

class JimboButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return f(
      'button',
      { onClick: () => addWord("Jimbo Fisher") },
      'Jimbo Fisher',
      
    );
  }
}
const domContainerJ = document.querySelector('#Jimbo_button_container');
ReactDOM.render(e(JimboButton), domContainerJ);
