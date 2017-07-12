import React, {Component} from 'react'
import {auth} from '../utils/firebase'
import LegoModel from '../models/Lego'
import  Lego from './Lego'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';


class OneLego extends Component{
  constructor(props){
    super(props);
    this.state = {
      lego: {},
      currentUser: ''
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    let id = this.props.params['id']
    LegoModel.getOne(id).then( (res) => {
      this.setState ({
        lego: res,
        currentUser: auth.currentUser
      })
    })
  }

  render(){
    let options = {
   lineNumbers: true,
   mode: this.state.mode,
   theme: 'dracula'
 };
    return(
      <div className="container show-lego">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="lego-title">{this.state.lego.title}</h1>
            <h4 className="lego-language">{this.state.lego.language}</h4>
            <h4 className="lego-type">{this.state.lego.type}</h4>
            <p>{this.state.lego.content}</p>
            <pre>{this.state.lego.content}</pre>

            <p>Tag: {this.state.lego.language}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default OneLego;
