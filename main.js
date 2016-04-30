import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/About">About</Link></li>
               <li><Link to="/Contact">Contact</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>

           <p>The modularity of React is extremely powerful for building applications. </p>
         </div>
      )
   }
}

export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
            <p>This is about</p>
         </div>
      )
   }
}

export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
            <p>This is contact</p>
         </div>
      )
   }
}

export default Contact;

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))