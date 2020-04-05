const apiKey = 'e3a94a62b7e04ef4b3fd98ded600405c';
const bitcoinUrl = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-05&sortBy=publishedAt&apiKey=e3a94a62b7e04ef4b3fd98ded600405c";
const bizUrl = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3a94a62b7e04ef4b3fd98ded600405c"

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        axios.get(this.props.url).then(res => {
            this.setState({news: res.data.articles});
        });
    }
    render() {
        return(
            <div>
                {this.state.news.map((item, index) => {
                    return (
                        <div key={index}>
                            <NewsItem item={item} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

class NewsItem extends React.Component {
    render() {
        return (
            <div>
                <h2><a href={this.props.item.url} target="_blank">{this.props.item.title}</a></h2>
                <p>{this.props.item.description}</p>
                <img src={this.props.item.urlToImage} />
            </div>
        )
    }
}

ReactDOM.render(
    <NewsList url={bitcoinUrl} />,
    document.getElementById('myApp')
  );


  ReactDOM.render(
    <NewsList url={bizUrl} />,
    document.getElementById('businessNews')
  );