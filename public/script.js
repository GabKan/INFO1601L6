function drawTable(records){
  let result = document.querySelector('#result');
  let html = '';
  for(let record of records){
      html += `<tr>
        <td>${record.id}</td>
        <td>${record.name}</td>
        <td>${record.brewery_type}</td>
        <td>${record.website_url}</td>    
      </tr>`;
  }
  result.innerHTML = html;
}

drawTable([{
 id: 1,
 name: "bob's",
 brewery_type: "fire",
 website_url:"https://bobs.com"
}]);

async function getData(url){
  try{
    let response = await fetch(url);
    let result = await response.json();
    drawTable(result);
 }catch(e){
     console.log(e);
 }
}
getData("https://api.openbrewerydb.org/breweries/search?query=harry")