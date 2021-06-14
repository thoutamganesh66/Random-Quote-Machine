function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [],
      index: 0 });_defineProperty(this, "getRandomIndex",












    () => {
      const { quotes } = this.state;

      if (quotes.length > 0)
      {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {//     to call the API and update state
    fetch(API).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    return /*#__PURE__*/(

      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 box p-4 rounded", id: "quote-box" },
      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-3" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, quote.quote), /*#__PURE__*/
      React.createElement("cite", { className: "d-block text-right", id: "author" }, "-", quote.author)), /*#__PURE__*/



      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}", className: "twitter-share-button", id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), "Tweet"), /*#__PURE__*/
      React.createElement("button", { className: "btn btn-sm btn-primary quote", onClick: this.getRandomIndex, id: "new-quote" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-random" }), "Get Quote")))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("App"));