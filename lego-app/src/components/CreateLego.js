import React, {Component} from 'react'
import LegoModel from '../models/Lego'
import Lego from './Lego'
import {auth} from '../utils/firebase'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';


// const defaults = {
//   markdown: '# hello',
//   javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Vivienne";'
// };

class CreateLego extends Component {
  constructor(props){
    super(props)
// set initial state
    this.state = {
      title: '',
      language: '',
      type: '',
      content: '',
      tag: '',
    }
  }


  // getInitialState(){
  //   return {
  //     code: markdown,
  //     mode: 'markdown',
  //   }
  // }


  onFormSubmit(e){
      console.log('hello');
    e.preventDefault()
    let newLego = {
      title: this.state.title,
      language: this.state.language,
      type: this.state.type,
      content: this.state.type,
      tag: this.state.tag
    }

    this.props.createLego(newLego)
    this.setState({
      title: '',
      language: '',
      type: '',
      content: '',
      tag: ''
    })

  }


  createLego(newLego) {

    LegoModel.create(newLego).then( (res) => {
      let legos = this.state.legos
      let newLegoStacks = legos.push(res)
      this.setState({newLegoStacks})
    })

  }

  render(){
    let options = {
   lineNumbers: true,
   mode: 'javascript',
   theme: 'dracula'
 };
    return(

      <div className="container">
        <div className="row">
          <h1 className="create-title">Create Lego Stack</h1>
        </div>
        <div className="row">
          <form onSubmit={ e => this.onFormSubmit(e) } className="form create-form row">
            <div className="col-2 create-form-title">
              <p>Title</p>
              <input  onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                type="text" className="form-control" placeholder="Enter title..."></input>
            </div>
            <div className="col-3 create-form-language">
              <p>Language</p>
              <input onChange={ e => { this.setState({ language: e.target.value }) } }
                value={ this.state.language }
                type="text" className="form-control" placeholder="HTML, Javascript..."></input>
            </div>
            <div className="col-4 create-form-type">
              <p>Type</p>
              <input onChange={ e => { this.setState({ type: e.target.value }) } }
                value={ this.state.type }
                type="text" className="form-control" placeholder="Code Snippet..."></input>
            </div>
            <div className="row code-snippet">
              <p>Code Snippet</p>

              <Codemirror ref="editor" onChange={ e => { this.setState({ content: e.target.value }) } }
                value={ this.state.content } options={options} interact={this.interact} />
            </div>
            <div className="row button-div">
              <button type="submit" className="btn btn-primary pull-center create-lego-btn">Create</button>
            </div>

          </form>
        </div>
      </div>

    )
  }

}

export default CreateLego;
