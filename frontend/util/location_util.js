module.exports = {
  getLocations: function (callback) {
    $.ajax({
      url: '/api/locations',
      dataType: 'json',
      success: function (forms) {
        callback(forms)
      }
    });
  },

  getLocation: function (id) {
    $.ajax({
      url: '/api/locations/' + id,
      dataType: 'json',
      success: function (forms) {
        return(forms)
      }
    });
  },

  createLocation: function (formData) {
    $.ajax({
      url: '/api/locations',
      type: 'POST',
      dataType: 'json',
      data: { location: formData },
      success: function (form) {
        console.log(form)
      }
    });
  }
}
