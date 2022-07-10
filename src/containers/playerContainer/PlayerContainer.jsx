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
        fetch("https://gruppe9.toni-barth.com/movies/" + this.props.movieId + "/1/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movies: json,
                    DataisLoaded: true
                });
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.movieId !== this.props.movieId) {
            fetch("https://gruppe9.toni-barth.com/movies/" + this.props.movieId + "/1/")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        movies: json,
                        ShowButtons: false
                    });
                })
        }
    }

    handleDuration = (duration) => {
        //console.log('onDuration', duration)
        this.setState({ LastTenSeconds: duration - 10 }, () => {
            //console.log('LastTenSeconds', this.state.LastTenSeconds)
        })
    }

    handleShowButtons = ({ playedSeconds }) => {
        if (playedSeconds >= this.state.LastTenSeconds && !this.state.ShowButtons) {
            this.setState({ ShowButtons: true }, () => {
                //console.log(this.state.ShowButtons)
            })

        }
    }

    loadNewClip = (number) => {
        fetch("https://gruppe9.toni-barth.com/movies/" + this.props.movieId + "/" + number + "/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movies: json,
                    DataisLoaded: true
                });
            })
        this.setState({ ShowButtons: false })
    }

    render() {
        const { DataisLoaded, movies } = this.state;
        const options = movies.options;
        return (
            <div className='wum__playercontainer section__padding' id='player' >
                {!DataisLoaded
                    ? <h1>Bitte warte kurz...</h1>
                    : <ReactPlayer
                        className='react-player'
                        url={movies.link}
                        width='100%'
                        height='100%'
                        controls={true}
                        onDuration={this.handleDuration}
                        onProgress={this.handleShowButtons}
                    />}

                {this.state.ShowButtons && options.length > 0
                    ? <div className='wum__playercontainer-button'>
                        {options.map((number, i) => <h3 key={i} onClick={() => this.loadNewClip(number)}>Clip {number}</h3>)}
                    </div>
                    : null}
            </div>
        )
    }
}

