var url = 'https://api.currentsapi.services/v1/search?domain=247sports.com&keywords=SEC&football&aggiesjimbo=en' +
'country=us&' +
'apiKey=WLUi1c9JbYp7xKQf4Vf7_4M7XfNXDvUkSb9NcEhWC2UhYnHG';
var req = new Request(url);
fetch(req)
.then(function(response) {
//console.log(response.json())
response.json().then(data =>{

    document.getElementById("art1").innerHTML = data.news[12].title
    

    document.getElementById("art2").innerHTML = data.news[24].title
    document.getElementById("art3").innerHTML = data.news[13].title

})


})
