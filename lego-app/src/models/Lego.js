import $ from 'jquery'

class LegoModel {
  static all(){
    let request = $.ajax({
      url:"http://sample-env.zxn5myc69x.us-east-2.elasticbeanstalk.com/legos",
      method: 'GET'
    })
    return request
  }
}
