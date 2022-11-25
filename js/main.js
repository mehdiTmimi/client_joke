const url="http://localhost:3000/";
const tbody=document.getElementById("tbody")
const addJokeToTable=(joke)=>{
    // creation des elements
    let tr= document.createElement("tr")
    let tdId= document.createElement("td")
    let tdJoke= document.createElement("td")
    let tdAuthor= document.createElement("td")
    let tdOptions= document.createElement("td")
    let button=document.createElement("button")
    //liaison
    tr.appendChild(tdId)
    tr.appendChild(tdJoke)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdOptions)
    tdOptions.appendChild(button)
    // content
    tdId.innerText=joke.id
    tdJoke.innerText=joke.joke
    tdAuthor.innerText=joke.author
    button.innerText="delete"
    button.addEventListener('click',(event)=>{
        // logic for delete
    })

    tbody.appendChild(tr)

}

/* to be added to routes.js
const handler = (request, response) => {
// allow cors policy
response.setHeader('Access-Control-Allow-Origin', '*');
response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
response.setHeader('Access-Control-Allow-Credentials', true);
*/
const load =()=>{
    fetch(url+"jokes")
  .then((response) => response.json())
  .then((data) => {console.table(data)
    data.forEach(element => {
        addJokeToTable(element)
    });
});
}
load();