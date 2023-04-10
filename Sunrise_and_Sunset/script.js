function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "handleChange",
  
  
  
  
      () => {
        if (this.state.checked === false) {
          this.setState({ checked: true });
          this.setState({ time: "dusk" });
        } else
        {
          this.setState({ checked: false });
          this.setState({ time: "dawn" });
        }
      });this.state = { checked: false, time: "waiting" };this.handleChange = this.handleChange.bind(this);}
  
    render() {
      return /*#__PURE__*/React.createElement("div", { className: this.state.time }, /*#__PURE__*/
      React.createElement("label", { className: "switch" }, /*#__PURE__*/
      React.createElement("input", { type: "checkbox", onChange: this.handleChange }), /*#__PURE__*/
      React.createElement("span", { className: "slider" })));
  
  
  
    }}
  ;
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));