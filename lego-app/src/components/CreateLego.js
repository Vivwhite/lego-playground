import React, {Component} from 'react'
import LegoModel from '../models/Lego'
import { browserHistory } from 'react-router'
import Lego from './Lego'
import {auth} from '../utils/firebase'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';


const defaults = {
  javascript: '//Write your JS code here',
  xml: '<!–– Write your HTML code here ––>'
};

class CreateLego extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      language: '',
      type: '',
      description: '',
      content: ' ',
      tag: '',
      mode: 'javascript',
    },
    this.changeMode = this.changeMode.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  updateCode (newCode) {
    this.setState({
      code: newCode
    });
  }

  changeMode (e) {
    console.log(e);
    var mode = e.target.value;
    this.setState({
      mode: mode,
      code: defaults[mode],
      content: defaults[mode]
    });
  }

  onFormSubmit(e){
      console.log('hello');
    e.preventDefault()
    let newLego = {
      title: this.state.title,
      language: this.state.language,
      type: this.state.type,
      description: this.state.description,
      content: this.state.content,
      tag: this.state.tag
    }

    LegoModel.create(newLego).then( (res) => {
      let legos = this.state.legos
      let newLegoStacks = legos.push(res)
      this.setState({newLegoStacks})
    })
    browserHistory.push('/lego-library')
  }

  render(){
    let options = {
   lineNumbers: true,
   mode: this.state.mode,
   theme: 'dracula'
 };
    return(

      <div className="container">
        <div className="row">
          <h1 className="create-title">Create Lego Stack</h1>
        </div>
        <div className="row formrow">
          <form onSubmit={ e => this.onFormSubmit(e) } className="form create-form row">
            <div className="col-2 create-form-title">
              <p>Title</p>
              <input  onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                type="text" className="form-control" placeholder="Enter title..." required></input>
            </div>
            <div className="col-4 create-form-type">
              <p>Type</p>
              <input onChange={ e => { this.setState({ type: e.target.value }) } }
                value={ this.state.type }
                type="text" className="form-control" placeholder="Code Snippet..." required></input>
            </div>
            <div className="col-3 create-form-language">
              <p>Language</p>
              <input onChange={ e => { this.setState({ language: e.target.value }) } }
                value={ this.state.language }
                type="text" className="form-control" placeholder="HTML, Javascript..." required></input>
            </div>
            <div className="col-4 create-form-description">
              <p>Description</p>
              <input onChange={ e => { this.setState({ description: e.target.value }) } }
                value={ this.state.description }
                type="text" className="form-control" placeholder="Description..." required></input>
            </div>
            <div className="row code-snippet">
              <p>Code Snippet</p>
              <Codemirror ref="editor"
                onChange={ e => { this.setState({ content: e }) } }
                value={ this.state.content }
                options={options}
                interact={this.interact} />
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
