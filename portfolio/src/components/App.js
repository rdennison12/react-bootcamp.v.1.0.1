import React, {Component} from 'react';
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from '../assets/profile.png';
import Title from "./Title";

class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' style={{width: 200, height: 200, borderRadius: 100}}/>
                <h1>Hello!</h1>
                <p>My name is Rick</p>
                <Title/>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in New Jersey.</p>
                            <p>I like coding in most programming languages.</p>
                            <p>I also like to play video games, and go fishing!</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}


export default App;