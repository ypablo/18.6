var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
	
	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
	
	multiplication: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },
	
	division: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },
	
	reset: function() {
        this.setState({
            counter: 0
        });
    },
	

    render: function() {	
		return React.createElement('div', {className: 'main'},
		React.createElement('button', {className: 'licznik'}, 'Licznik ' + this.state.counter),
		React.createElement('div', {}),
        React.createElement('button', {className: 'button',onClick: this.increment}, 'Dodawanie'),
		React.createElement('button', {className: 'button',onClick: this.decrement}, 'Odejmowanie'),
		React.createElement('button', {className: 'button',onClick: this.multiplication}, 'Mnożenie'),
        React.createElement('button', {className: 'button',onClick: this.division}, 'Dzielenie'),
		React.createElement('div', {}),
		React.createElement('button', {className: 'button',onClick: this.reset}, 'Reset')
		
		);
    }
	
	
	
});

var app = React.createElement(Counter);
ReactDOM.render(app, document.getElementById('app'));