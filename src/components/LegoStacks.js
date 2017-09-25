import React, {Component} from 'react'
import Lego from './Lego'

class LegoStacks extends Component {
  render(){
    let legosArray = this.props.legos.map(lego => {
      return <Lego
        key={ lego._id }
        data={ lego }
      />
    });

    return (
      <div>
        <h2 className="library-title">My Library</h2>
        <hr/>
        <div className="LegoStack row">{legosArray}</div>
    </div>
    );
  }
}

export default LegoStacks;
