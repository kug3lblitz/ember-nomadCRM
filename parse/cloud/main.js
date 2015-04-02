Parse.Cloud.define('search', function(request, response){
  var nameQuery = new Parse.Query("name");
  nameQuery.matches("session.currentuser.person.model.name", new RegExp(request.params.search, 'i'));

  var companyQuery = new Parse.Query("company");
  companyQuery.matches("session.currentuser.person.model.company", new RegExp(request.params.search, 'i'));

  var addressQuery = new Parse.Query("address");
  addressQuery.matches("session.currentuser.person.model.address", new RegExp(request.params.search, 'i'));
  
  var phoneQuery = new Parse.Query("phone");
  phoneQuery.matches("session.currentuser.person.model.phone", new RegExp(request.params.search, 'i'));
  
  var websiteQuery = new Parse.Query("website");
  websiteQuery.matches("session.currentuser.person.model.website", new RegExp(request.params.search, 'i'));
  
  var industryQuery = new Parse.Query("industry");
  industryQuery.matches("session.currentuser.person.model.industry", new RegExp(request.params.search, 'i'));

  var query = Parse.Query.or(nameQuery, companyQuery, addressQuery, phoneQuery, websiteQuery, industryQuery);
  query.find().then(function(results) {
    response.success(results);
  }, function(error) {
    response.error(error);
  });
});


//Parse.Cloud.define('search', function(request, response){
  //var query = new Parse.Query("Person");
  //query.contains("url", request.params.search);
  //query.find().then(function(results) {
    //response.success(results);
  //}, function(error) {
    //response.error(error);
  //});
//});
