const url="http://localhost:3000/";
const tbody=document.getElementById("tbody")
const addBtn=document.getElementById("addBtn")
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


// traitement d'ajout
addBtn.addEventListener('click',(event)=>{
    //recuperation des donnes sasies
    let authorInput=document.getElementById("authorInput")
    let jokeInput=document.getElementById("jokeInput")
    let author=authorInput.value
    let joke=jokeInput.value
    //verification
    if(!(author!="" && author.length>3 && 
    joke!="" && joke.length>10))
    {
        alert("veuillez verifier vos champs")
        return;
    }
    // envoi des donnees
    let obj={joke:joke,author:author};
    fetch(url+"jokes",
    {
        method:'POST',
        body:JSON.stringify(obj)
    }
    ).then((response) => response.json())
    .then(
        data=>{
            console.log(data)
            addJokeToTable(data)}
    ).catch(e=> alert(e))
})