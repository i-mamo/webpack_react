import React  from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "../pages/page1"
import Home2 from "../pages/page2"



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      path:''
    }
  }

  componentDidMount(){
  
  }
  


  render(){
    return (
    <div className="App">
      <Router>
        <Link to="/page1"> テストページ </Link><br/>
        <Link to="/"> タイトル</Link><br />
        <Routes>
          <Route path="/" exact element={<Home name="dsa"/>}/>
          <Route path="/page1" element={<Home2/>}/>
        </Routes>
      </Router>
    </div>
    )  
  }
}
  