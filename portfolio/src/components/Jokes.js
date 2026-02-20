import React, {Component} from 'react';

const Joke = ({joke: {setup, punchline}}) => (
    <p style={{margin: 20}}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = {joke: {}, jokes: []};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke: json}));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({jokes: json}))
            .catch(error => alert(error.message));
    }

    closeJokes = () => {
        this.setState({jokes: []});
    }

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr/>
                <h3>Want ten new jokes?</h3>
                {this.state.jokes.length === 0 && <button onClick={this.fetchJokes}>Click Me!</button>}
                {this.state.jokes.length > 0 && this.state.jokes.map(joke => <Joke joke={joke} key={joke.id}/>)}
                {this.state.jokes.length > 0 && <div>
                    <button onClick={this.closeJokes}>Close</button>
                </div>}
            </div>

        )
    }
}

export default Jokes;