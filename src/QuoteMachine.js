import React, {Component} from 'react';

// Get quotes from JSON link
let xml = new XMLHttpRequest();
xml.open('GET', 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', false);
xml.send(null);
let quotesData = JSON.parse(xml.responseText);
let quotes = quotesData.quotes;

// function for choosing a random quote
function getRandomQuote() {
    return quotes[
        Math.floor(Math.random() * quotes.length)
    ];
}

// background colors
let colors = [
    '#C9C1E7',
    '#BDD5EF',
    '#C7E3D0',
    '#F2D8CC',
    '#E9CCCE',
    '#E69B99',
    '#B26C6B',
    '#804040',
    '#50161A',
    '#2C0000',
    '#93AAA5',
    '#A3B79C',
    '#57466D'
  ];
  
  // function for choosing a random color
  function getColor() {
    return colors[
        Math.floor(Math.random() * colors.length)
    ];
  }

class QuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: 'Hello, there.',
            currentAuthor: 'Obi-Wan Kenobi',
            currentColor: '#50161A'
        }
        this.newQuote = this.newQuote.bind(this);
    }
    newQuote() {
        let randomQuote = getRandomQuote();
        let randomColor = getColor();
        this.setState({
            currentQuote: randomQuote.quote,
            currentAuthor: randomQuote.author,
            currentColor: randomColor
        });
    }
    render() {
        let styles = {
            color: this.state.currentColor
        }
        let docBody = document.querySelector("body");
        docBody.style.backgroundColor = this.state.currentColor;

        let uri = this.state.currentQuote + '  -  ' + this.state.currentAuthor;
        let shareQuote = encodeURIComponent(uri);
        return (
            <div style={styles}>
                <div className="card">
                    <h1 className="quote">{this.state.currentQuote}</h1>
                    <h3 className="author"> {this.state.currentAuthor}</h3>
                    <div class="quote-tweet">
                        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + shareQuote} target="_blank" rel="noreferrer"><span>tweet</span></a>
                        <a class="tumblr" href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + shareQuote} target="_blank" rel="noreferrer"><span>tumblr</span></a>
                    </div>
                </div>

                

                <div className="btn-container">
                    <button onClick={this.newQuote} className="btn">New Quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteMachine