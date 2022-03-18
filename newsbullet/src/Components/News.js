import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    //variable array
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Brittney Griner: Russia extends arrest of US basketball star over drugs charge",
            "description": "Double Olympic champion Brittney Griner was arrested in February for alleged cannabis oil possession.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-60781704",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13A96/production/_123743508_gettyimages-1332965712.jpg",
            "publishedAt": "2022-03-18T14:37:30.9364602Z",
            "content": "Image source, Getty Images\r\nA Russian court has extended the detention of US basketball star Brittney Griner for another two months, reports state news agency Tass.\r\nThe 31-year-old has been held in … [+2120 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Sunny Balwani: Elizabeth Holmes' former partner goes on trial",
            "description": "Sunny Balwani was considered the \"enforcer\" at Theranos and was its enigmatic founder's lover.",
            "url": "http://www.bbc.co.uk/news/technology-60716448",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/211A/production/_123647480_balwani1.jpg",
            "publishedAt": "2022-03-18T00:37:23.8499574Z",
            "content": "By James ClaytonNorth America technology reporter\r\nImage source, Getty Images\r\nImage caption, Balwani was considered the \"enforcer\" at Theranos and oversaw day to day operations\r\nWhen Elizabeth Holme… [+5539 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine: Elegant Odesa is transformed by efforts to deter Russians",
            "description": "As Russian warships circle off the coast, Odesans face a difficult decision on whether to leave.",
            "url": "http://www.bbc.co.uk/news/world-europe-60785791",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/177C2/production/_123749169_gettyimages-1239242549.jpg",
            "publishedAt": "2022-03-18T14:37:28.8900946Z",
            "content": "By Andrew HardingBBC News\r\nImage source, Getty Images\r\nWhile Russian advances across Ukraine have slowed in recent days, people in the strategic port city of Odesa are preparing for an expected and i… [+5301 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Why Minnie Mouse's chill-out album actually makes sense",
            "description": "The cartoon character has \"curated\" an album of lo-fi hip-hop that's perfect for younger listeners.",
            "url": "http://www.bbc.co.uk/news/entertainment-arts-60785409",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0504/production/_123748210_screenshot2022-03-17at17.02.18.png",
            "publishedAt": "2022-03-18T14:37:21.6558127Z",
            "content": "By Mark SavageBBC Music Correspondent\r\nImage caption, The album is being promoted with stylised sketches of Minnie Mouse in relaxation mode\r\n\"Hi Mark, what if I was to tell you that Minnie Mouse is r… [+4155 chars]"
        }
    ]

    //used to set state in class based compo
    constructor(){
        super();
        console.log("constructor from news component");
        //setting the state
        this.state = {
            articles: this.articles,
            loading: false  // if data is being loaded => loading state
                            // can be used to set a loading spinner
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>News Bullet - Top Headlines</h2>
                
                <div className="row">
                    {/* News card will be fetched from Articles array. 
                        No of cards = no of elements  */}

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div> 
            </div>
        )
    }
}
export default News