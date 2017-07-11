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


const defaults = {
  javascript: '//Write your JS code here',
  html: '<!–– Write your HTML code here ––>'
};

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
    var mode = e.target.value;
    this.setState({
      mode: mode,
      code: defaults[mode]
    });
  }


  onFormSubmit(e){
      console.log('hello');
    e.preventDefault()
    let newLego = {
      title: this.state.title,
      language: this.state.language,
      type: this.state.type,
      content: this.state.content,
      tag: this.state.tag
    }

    LegoModel.create(newLego).then( (res) => {
      let legos = this.state.legos
      let newLegoStacks = legos.push(res)
      this.setState({newLegoStacks})
    })
    this.setState({
      title: '',
      language: '',
      type: '',
      content: '',
      tag: ''
    })

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
        <div className="row">
          <form onSubmit={ e => this.onFormSubmit(e) } className="form create-form row">
            <div className="col-2 create-form-title">
              <p>Title</p>
              <input  onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                type="text" className="form-control" placeholder="Enter title..."></input>
            </div>

            <div className="col-3 create-form-language">
              <select  onChange={this.changeMode} value={this.state.mode} className="selectpicker">
                <option value="javascript">Javascript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
              </select>

              <input onChange={ e => { this.setState({ language: e.target.value }) } }
                value={ this.state.language }
                type="hidden" className="form-control" placeholder="HTML, Javascript..."></input>
            </div>
            <div className="col-4 create-form-type">
              <p>Type</p>
              <input onChange={ e => { this.setState({ type: e.target.value }) } }
                value={ this.state.type }
                type="text" className="form-control" placeholder="Code Snippet..."></input>
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
