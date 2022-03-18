import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    //variable array
    // articles = [
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Brittney Griner: Russia extends arrest of US basketball star over drugs charge",
    //         "description": "Double Olympic champion Brittney Griner was arrested in February for alleged cannabis oil possession.",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-60781704",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13A96/production/_123743508_gettyimages-1332965712.jpg",
    //         "publishedAt": "2022-03-18T14:37:30.9364602Z",
    //         "content": "Image source, Getty Images\r\nA Russian court has extended the detention of US basketball star Brittney Griner for another two months, reports state news agency Tass.\r\nThe 31-year-old has been held in … [+2120 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Sunny Balwani: Elizabeth Holmes' former partner goes on trial",
    //         "description": "Sunny Balwani was considered the \"enforcer\" at Theranos and was its enigmatic founder's lover.",
    //         "url": "http://www.bbc.co.uk/news/technology-60716448",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/211A/production/_123647480_balwani1.jpg",
    //         "publishedAt": "2022-03-18T00:37:23.8499574Z",
    //         "content": "By James ClaytonNorth America technology reporter\r\nImage source, Getty Images\r\nImage caption, Balwani was considered the \"enforcer\" at Theranos and oversaw day to day operations\r\nWhen Elizabeth Holme… [+5539 chars]"
    //     }
    // ]

    constructor(){                      //used to set state in class based compo
        super();
        this.state = {                  //setting the state & initializing "articles"
            // articles: this.articles,
            articles: [],
            loading: false,             // if data is being loaded => loading state
                                        // can be used to set a loading spinner
        }
    }


    //Runs after rendering
    // and will fetch articles from API and fill the articles Array
    async componentDidMount() {
        // async-await is fun type. Used to waits for promises to resolve(here waits for api to be fetched)
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=96317f42ab2442fdb411d6a85f8007bf";
        let data = await fetch(url);            // fetching url
        let parsedData = await  data.json()     //parsing data
        this.setState({articles: parsedData.articles})  //updating article array with parsed articles
    }

    render() {
        return (
            <div className="container my-3">
                <h2>News Bullet - Top Headlines</h2>
                
                <div className="row">
                    {/* News card will be fetched from Articles array. No of cards = no of elements  */}
                    {/* Like a loop: for each element in articles Array, return the news card filled with corresponding element_variables */}

                    {this.state.articles.map((element) => {
                        return <div className="col-sm-12 col-md-6 col-lg-3" key={element.url} >
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div> 
            </div>
        )
    }
}
export default News