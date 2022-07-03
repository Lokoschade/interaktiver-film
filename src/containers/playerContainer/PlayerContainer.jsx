import React, { Component } from 'react'
import './playerContainer.css'
import ReactPlayer from 'react-player'

export default class PlayerContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            DataisLoaded: false,
            ShowButtons: false,
            LastTenSeconds: 0
        }
    }

    componentDidMount() {
        fetch("https://gruppe9.toni-barth.com/movies/" + this.props.movieId + "/" + this.props.clipId + "/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movies: json,
                    DataisLoaded: true
                });
            })
    }

    handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ LastTenSeconds: duration - 10}, () => {
            console.log('LastTenSeconds', this.state.LastTenSeconds)
        })
    }

    handleShowButtons = ({ playedSeconds }) => {
        if (playedSeconds >= this.state.LastTenSeconds && !this.state.ShowButtons) {
            this.setState({ ShowButtons: true }, () => {
                console.log(this.state.ShowButtons)
            })
            
        }
    }
    render() {
        const { DataisLoaded, movies } = this.state;
        if (!DataisLoaded) return <div><h1>Bitte warte kurz...</h1></div>;

        return (
            <div className='wum__playercontainer section__padding' id='player'>
                <ReactPlayer
                    className='react-player'
                    url={movies.link}
                    width='100%'
                    height='100%'
                    controls={true}
                    onDuration={this.handleDuration}
                    onProgress={this.handleShowButtons}
                />
                {this.state.ShowButtons
                    ? <div className='wum__playercontainer-button'>
                        <h3>Fortsetzung 1</h3>
                        <h3>Fortsetzung 2</h3>
                    </div>
                    : null}
            </div>
        )
    }
}

