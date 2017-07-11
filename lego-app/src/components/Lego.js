import React, {Component} from 'react'
import {auth} from '../utils/firebase'
import { Link } from 'react-router'

class Lego extends Component {
  render(){
    let url = '/legos/' + this.props.data._id;
    return (

        <div className="col-md-4">
            <div className="card">
              <div className="thumbnail">
                <div className="edit-circle"> <a href="#0">
                  <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                  </a>

                </div>
                  <img src="https://i.github-camo.com/cf9f43d679627c7f305936a3e1539b3201417f78/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f67696761706978656c2f61746f6d2d6c616e67756167652d676865726b696e2f6d61737465722f73637265656e73686f74732f666561747572652d73796e7461782e706e67" className="img-responsive"></img>
              </div>
                <div className="post-content">
                  <div className="category">{ this.props.data.language }</div>
                  <Link to={url}><h1 className="title">{ this.props.data.title }</h1></Link>
                  <p className="sub_title">{ this.props.data.content }</p>
                  <div className="post-meta"><span className="timestamp">6 mins ago</span></div>
                </div>
            </div>
        </div>

    );
  }
}

export default Lego;
//<Link to="/lego/{this.props.data._id}"><h1 className="title">{ this.props.data.title }</h1></Link>
