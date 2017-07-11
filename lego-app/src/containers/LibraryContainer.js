import React, {Component} from 'react'
import LegoModel from '../models/Lego'
import { auth } from '../utils/firebase'
import LegoStacks from '../components/LegoStacks'

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

  render(){
    let output = null;
    if (this.state.currentUser != null)  {
      output = <div>
              <LegoStacks
                currentUser= {this.state.currentUser}
                legos={this.state.legos}/>
              </div>
    } else {
      output = <section className="col-md-4 col-sm-12 add-event">Log in to see your library.</section>
    }
    return (
      <div>
        { output }
      </div>
    )
  }
}
export default LibraryContainer;
