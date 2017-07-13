import React, {Component} from 'react'
import LegoModel from '../models/Lego'
import { browserHistory } from 'react-router'
import Lego from './Lego'
import {auth} from '../utils/firebase'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/html/html';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';


class UpdateLego extends Component{
  constructor(props){
    super(props)

    this.state  = {
      title: '',
      language: '',
      type: '',
      description: '',
      content: ' ',
      tag: ''
    }
  }

  onFormSubmit(e){
      console.log('hello');
    e.preventDefault()
    let updatedLego = {
      title: this.state.title || this.props.Lego.title,
      language: this.state.language|| this.props.Lego.language,
      type: this.state.type|| this.props.Lego.type,
      description: this.state.description|| this.props.Lego.description,
      content: this.state.content|| this.props.Lego.content,
      tag: this.state.tag|| this.props.Lego.tag
    }


  }

  render() {
    return(

    )
  }
}

export default UpdateLego;
