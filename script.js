var Counter = React.createClass({
  getInitialState: function() {
    console.log("Metoda inicjalizacji - getInitialState");
    return {
      counter: 0,
      int: 100,
      num: 25
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1,
      int: this.state.int + 1,
      num: this.state.num + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1,
      int: this.state.int - 1,
      num: this.state.num - 1
    });
  },

  multiplication: function() {
    this.setState({
      counter: this.state.counter * 2,
      int: this.state.int * 2,
      num: this.state.num * 2
    });
  },

  division: function() {
    this.setState({
      counter: this.state.counter / 2,
      int: this.state.int / 2,
      num: this.state.num / 2
    });
  },

  reset: function() {
    this.setState({
      counter: 0,
      int: 100,
      num: 25
    });
  },

  componentWillMount() {
    console.log("Faza inicjalizacji - componentWillMount");
  },
  componentDidMount() {
    console.log("Faza inicjalizacji - componentDidMount");
  },

  componentDidUpdate() {
    console.log("Faza aktualizacji - componentDidUpdate");
  },

  render: function() {
    console.log("Faza inicjalizacji i aktualizacji - render");
    return React.createElement(
      "div",
      { className: "main" },
      React.createElement(
        "button",
        { className: "licznik" },
        "Licznik " + this.state.counter
      ),
      React.createElement(
        "button",
        { className: "licznik" },
        "Licznik " + this.state.int
      ),
      React.createElement(
        "button",
        { className: "licznik" },
        "Licznik " + this.state.num
      ),
      React.createElement("div", {}),
      React.createElement(
        "button",
        { className: "button", onClick: this.increment },
        "Dodawanie"
      ),
      React.createElement(
        "button",
        { className: "button", onClick: this.decrement },
        "Odejmowanie"
      ),
      React.createElement(
        "button",
        { className: "button", onClick: this.multiplication },
        "Mnożenie"
      ),
      React.createElement(
        "button",
        { className: "button", onClick: this.division },
        "Dzielenie"
      ),
      React.createElement("div", {}),
      React.createElement(
        "button",
        { className: "button", onClick: this.reset },
        "Reset"
      )
    );
  }
});

var app = React.createElement(Counter);
ReactDOM.render(app, document.getElementById("app"));
