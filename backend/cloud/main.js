Parse.Cloud.define('search', function(request, response){
  var query = new Parse.Query("Person");
  query.contains("url", request.params.search);
  query.find().then(function(results) {
    response.success(results);
  }, function(error) {
    response.error(error);
  });
});
