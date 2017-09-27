module.exports = {
  getJourneys: function (callback) {
    $.ajax({
      url: '/api/journeys',
      dataType: 'json',
      success: function (journeys) {
        callback(journeys)
      }
    });
  },

  getJourney: function (id, callback) {
    $.ajax({
      url: '/api/journeys/' + id,
      dataType: 'json',
      success: function (journey) {
        callback(journey)
      }
    });
  },

  createJourney: function (formData, callback) {
    $.ajax({
      url: '/api/journeys',
      type: 'POST',
      dataType: 'json',
      data: { journey: formData },
      success: function (form) {
        callback(form)
      }
    });
  }
}
