const URL = "https://cat-fact.herokuapp.com/facts";
const facts = document.querySelector("#facts")
const btn = document.querySelector("#btn");


//Using Async and Await
const getFacts = async () => {
    console.log("Getting data..............");
    let response = await(fetch(URL));
    console.log(response);
    let data = await response.json();
    facts.innerText = data[1].text
    
   
}


//Using promise chain
// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         facts.innerText = data[1].text
        
//     });
// }

btn.addEventListener("click", getFacts);
