var _users = [], _handlers = [];

var UserStore = {
  fetch: function(){
      $.ajax({
        method:"GET",
        url:"/current_user",
        dataType: 'json',
        success: function(response) {
          return response;
        }
      })
  }
}

module.exports = UserStore;
