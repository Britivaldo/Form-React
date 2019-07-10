import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*
const obj = {
    author: {
        avatarUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        name:"google"
    },
    text: "image do google",
    date: "07-02-2019"
}

function Avatar(props){
    console.log('Avatar', props);
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    )
}

function UserIfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  console.log(props);
  return (
    <div className="Comment">
      <UserIfo user={ props.author }/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

function App(){
    return (
        <div>
           
        </div>
    );
}



ReactDOM.render(<App/>, document.getElementById('root'));



class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    
    this.timerID = setInterval(()=> this.tick(), 1000);
  }
  componentWillMount(){
    clearInterval(this.timerID);
  }

  tick(){
    //console.log('oi');

    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world! </h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

*/
ReactDOM.render(<App/>, document.getElementById('root'));

