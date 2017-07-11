import $ from 'jquery'

class LegoModel {
  static all(){
    let request = $.ajax({
      url:"http://sample-env.zxn5myc69x.us-east-2.elasticbeanstalk.com/legos",
      method: 'GET'
    })
    return request
  }


  static getOne(id){
    let request = $.ajax({
      url: "http://sample-env.zxn5myc69x.us-east-2.elasticbeanstalk.com/legos/" + id,
      method:'GET'
    })
    return request
  }

  static create(newLego){
    let request = $.ajax({
      url: "http://sample-env.zxn5myc69x.us-east-2.elasticbeanstalk.com/legos/",
      method: 'POST',
      data: newLego
    })
    return request
  }

}

export default LegoModel
