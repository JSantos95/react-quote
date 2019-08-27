import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            text: '',
            author: '',
            color: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
      let x = Math.floor(Math.random() * 255);
      let y = Math.floor(Math.random() * 255);
      let z = Math.floor(Math.random() * 255);
      fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
        .then(response => response.json())
        .then(response =>{
          const quote = response;
          console.log(quote);
          this.setState({
            text: quote.en,
            author: quote.author,
            color: 'rgb(' + x.toString() + ',' + y.toString() + ',' + z.toString() + ')'
          })
        })
    }

    handleClick(){
      let x = Math.floor(Math.random() * 255);
      let y = Math.floor(Math.random() * 255);
      let z = Math.floor(Math.random() * 255);
      fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
        .then(response => response.json())
        .then(response =>{
          const quote = response;
          console.log(quote);
          this.setState({
            text: quote.en,
            author: quote.author,
            color: 'rgb(' + x.toString() + ',' + y.toString() + ',' + z.toString() + ')'
          })
        })
    }

    render(){
        return(
            <div
              className="bodyy"
              style={{backgroundColor: this.state.color}}>
                <div className='content' id="quote-box">
                    <h1 id="text">{this.state.text}</h1>
                    <h5 id="author">- {this.state.author}</h5>
                    <button
                        id="tweet-quote"
                        className='lbutton'>
                        <a
                          href={"twitter.com/intent/tweet?text=" + this.state.text}
                          target="_blank"
                          rel = "noopener noreferrer"
                          style={{color: this.state.color, fontSize: '32px' }}>
                          <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </button>
                    <button
                        id="new-quote"
                        className='rbutton'
                        onClick={this.handleClick}
                        style={{backgroundColor: this.state.color}}>
                        New Quote
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
