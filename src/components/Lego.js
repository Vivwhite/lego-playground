import React, {Component} from 'react'
import {auth} from '../utils/firebase'
import { Link } from 'react-router'

class Lego extends Component {
  render(){
    let url = '/legos/' + this.props.data._id;
    const content = this.props.data.content;
    const language = this.props.data.language;
    const title = this.props.data.title;
    const description = this.props.data.description;

    return (
        <div className="col-md-4 card-area">
            <div className="card">
              <div className="thumbnail">
                <div className="edit-circle"> <a href="#0">
                  <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
                  <Link to={url}><pre className="preview">{ content }</pre></Link>
              </div>
                <div className="post-content">
                  <div className="category">{ language }</div>
                  <Link to={url}><h1 className="title">{ title }</h1></Link>
                  <p className="post-description">{ description }</p>

                </div>
            </div>
        </div>
    );
  }
}

export default Lego;
