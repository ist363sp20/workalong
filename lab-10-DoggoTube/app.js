// You will have 4 Total Components one for each section
// You will also need and API from your google account!

const apiKey = 'AIzaSyCqOC0D_QtQbJhJdKUQOJ-vcqEiObkK7KQ';
const url = "https://www.googleapis.com/youtube/v3/search";


class DachshundComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
    componentDidMount() {
        axios.get(url, {
            params: {
                key: apiKey,
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'dachshund dog'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({videos: response.data.items})
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.videos.map(video => {
                        return (
                            <div className="col-md-3" key={video.id.videoId}>
                                <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                <p><a href={'https://www.youtube.com/watch?v=' + video.id.videoId} target="_blank" 
                                dangerouslySetInnerHTML={{ __html: video.snippet.title }}></a></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <DachshundComponent />,
    document.getElementById("dachshundComponent")
)

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            query: ''
        }
    }
    updateSearch = (evt) => {
        evt.preventDefault();
        this.setState({query: evt.target.value})
    }
    searchVideos = (evt) => {
        evt.preventDefault();
        axios.get(url, {
            params: {
                key: apiKey,
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: this.state.query + ' dog'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({videos: response.data.items})
        })
    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.searchVideos}>
                        <label>Search Videos</label>
                        <input className="form-control" value={this.state.query} type="text" onChange={this.updateSearch} />
                    </form>
                </div>
                <div className="row">
                    {this.state.videos.map(video => {
                        return (
                            <div className="col-md-3" key={video.id.videoId}>
                                <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                <p><a href={'https://www.youtube.com/watch?v=' + video.id.videoId} target="_blank" 
                                dangerouslySetInnerHTML={{ __html: video.snippet.title }}></a></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <SearchComponent />,
    document.getElementById("searchComponent")
)
