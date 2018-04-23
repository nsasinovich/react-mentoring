import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const HelloWorldFunctional = () => (
  <div>Hello World! by Functional Conponent</div>
);

const CreatedElement = React.createElement('div', null, 'Hello World! by createElement');

class HelloWorldComponent extends React.Component {
  render() {
    return <div>Hello World! by React.Component</div>;
  }
}

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <HelloWorldComponent />
        <HelloWorldFunctional />
        {CreatedElement}
      </React.Fragment>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);