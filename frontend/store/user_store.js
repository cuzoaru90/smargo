var _users = [], _handlers = [];

var UserStore = {
  fetch: function(){
      debugger
      $.ajax({
        method:"GET"
        url:"/current_user"
        dataType: 'json',
        success: function(response) {
          console.log(response)
        }

      })
  }
}

module.exports = UserStore;
