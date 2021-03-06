import React, {Component} from 'react'
import {auth} from '../utils/firebase'
import { browserHistory } from 'react-router'
import LegoModel from '../models/Lego'
import  Lego from './Lego'
import Highlight from 'react-highlight'

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

  deleteLego() {

    let id = this.props.params['id']
    LegoModel.delete(id).then( (res) => {
      console.log(res);
    })
    browserHistory.push('/lego-library')
 }

  render(){
    return(
      <div className="container show-lego">
        <div className="row">
          <div className="col-lg-12 display-code">

            <h1 className="lego-title">{this.state.lego.title}</h1>
            <span className="type-language">
              <h4 className="lego-language">Language: {this.state.lego.language}</h4>
              <h4 className="lego-type">Type: {this.state.lego.type}</h4>
            </span>
              <h4 className="lego-description" >Description: {this.state.lego.description}</h4>
            <button className='btn btn-danger pull-right'
                onClick={(e) => this.deleteLego()}><i className="fa fa-trash-o fa-2x pull-right" ></i>
            </button>

            <Highlight className='language-name-of-snippet'>
              {this.state.lego.content}
            </Highlight>
          </div>
        </div>
      </div>
    )
  }
}


export default OneLego;
