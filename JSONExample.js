var json = '{ "Companies":[ { "company": "Github", "age": 7, "categories": "Services,Internet,Software"},{ "company": "Airbnb", "age": 6, "categories": "Hotels,Travel"},{ "company": "Square", "age": 7, "categories": "FinTech,Hardware + Software,Finance"},{ "company": "Dropbox", "age": 11, "categories": "Cloud Data Services,Storage,Web Hosting"}]}'
var companiesObj = JSON.parse(json)
companiesObj.Companies.forEach(function(comp) {console.log(comp.company + "-" comp.age);});
