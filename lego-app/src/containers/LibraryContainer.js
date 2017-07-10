import React, {Component} from 'react'
import LegoModel from '../models/Lego'
import Timeline from '../components/Timeline'
import { auth } from '../utils/firebase'

class LibraryContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      legos: [],
      currentUser: auth.currentUser
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    LegoModel.all().then( (res) => {
      this.setState ({
      legos: res.legos,
      currentUser: auth.currentUser
      })
    })
  }


// create/delete/update lego here



}
