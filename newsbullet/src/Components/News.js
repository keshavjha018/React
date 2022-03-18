import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    //variable array
    articles = [
        {
            "status": "ok",
            "totalResults": 10,
            "articles": [
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
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukrainian ballet star Artem Datsyshyn dies after Russian shelling",
            "description": "Artem Datsyshyn, a former soloist at the National Opera of Ukraine, died in hospital, reports say.",
            "url": "http://www.bbc.co.uk/news/entertainment-arts-60794419",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AF19/production/_123752844_tv074478493.jpg",
            "publishedAt": "2022-03-18T13:52:21.8128958Z",
            "content": "Image caption, Barricades have been built around the home of the National Opera of Ukraine in Kyiv\r\nLeading Ukrainian ballet dancer Artem Datsyshyn has died, almost three weeks after being injured in… [+1223 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Airline giant Delta warns oil increases mean higher ticket prices",
            "description": "The jump in oil prices since Russia invaded Ukraine is set to lead to higher airfares.",
            "url": "http://www.bbc.co.uk/news/business-60781625",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/73D6/production/_123745692_gettyimages-1237412925.jpg",
            "publishedAt": "2022-03-18T02:07:24.8362859Z",
            "content": "By Jonathan JosephsBusiness reporter, BBC News\r\nHigher oil prices are set to lead to a 10% increase in air fares, according to the boss of one of the world's biggest airlines.\r\nDelta Air Lines head E… [+6507 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Young brothers found in Amazon after nearly four weeks",
            "description": "The brothers, eight and six, are being treated for malnourishment but are due to make a full recovery.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-60789542",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1482F/production/_123751048_gettyimages-473384700.jpg",
            "publishedAt": "2022-03-18T01:22:28.8194996Z",
            "content": "Image source, Getty Images\r\nImage caption, The brothers were lost in the Amazon during its rainy season, when moving in the jungle is even more difficult than usual\r\nTwo young indigenous boys rescued… [+2068 chars]"
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
            "title": "Nasa's giant new SLS Moon rocket makes its debut",
            "description": "The Space Launch System vehicle rolls out for a practice countdown ahead of a flight this summer.",
            "url": "http://www.bbc.co.uk/news/science-environment-60788761",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14B45/production/_123750848_rocket1.jpg",
            "publishedAt": "2022-03-17T23:52:25.1486195Z",
            "content": "Jonathan AmosScience correspondent@BBCAmoson Twitter\r\nImage caption, It's the most powerful rocket ever developed by the US space agency\r\nThe American space agency is rolling out its new giant Moon r… [+3417 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Child, 13, driving pickup in deadly Texas crash that killed nine",
            "description": "A 13-year-old was driving a truck that collided with a van carrying student athletes, officials say.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-60789022",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/165D3/production/_123730619_crash.jpg",
            "publishedAt": "2022-03-17T22:22:21.6473744Z",
            "content": "A 13-year-old was behind the wheel of a pickup truck that slammed head on into a van carrying university athletes in a collision that killed nine on Tuesday. \r\nIn a Thursday news conference, federal … [+2396 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Will US really stop changing its clocks twice a year?",
            "description": "With the Sunshine Protection Act, the clock may be ticking on clock switching in the US every year.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-60787377",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11930/production/_123748917_gettyimages-1239221000.jpg",
            "publishedAt": "2022-03-17T18:37:23.5279559Z",
            "content": "Anthony ZurcherNorth America reporter@awzurcheron Twitter\r\nImage source, Getty Images\r\nImage caption, A clock and phone showing the time in Los Angeles after daylight savings was implemented on 15 Ma… [+3312 chars]"
            }
            ]
            }
    ]

    //used to set state in class based compo
    constructor(){
        super();
        console.log('constructor from news component');
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
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imgUrl="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div> 
                </div> 
            </div>
        )
    }
}
export default News