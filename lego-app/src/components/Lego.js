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
                  <pre className="preview">{ this.props.data.content }</pre>
              </div>
                <div className="post-content">
                  <div className="category">{ this.props.data.language }</div>
                  <Link to={url}><h1 className="title">{ this.props.data.title }</h1></Link>
                  <p className="sub_title">{ this.props.data.description }</p>
                  <div className="post-meta"><span className="timestamp">6 mins ago</span></div>
                </div>
            </div>
        </div>

    );
  }
}

export default Lego;
//<Link to="/lego/{this.props.data._id}"><h1 className="title">{ this.props.data.title }</h1></Link>
