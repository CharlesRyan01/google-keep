const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=legs';
const options = {
     method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b091b39942mshb10ac1343871dbep1e2980jsn6c01f58b6e75',
		    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
        }
    };

fetch(url, options)
.then(response=>response.json())
.then((result)=>displayresults(result))

function displayresults(data){
    let outputlegs=document.getElementById("outputlegs")
    data.forEach(element => {
        outputlegs.innerHTML=
        outputlegs.innerHTML+
        `
        <div id="outputlegs">
         <h1>${element.WorkOut}</h1>
         <h2>Equipment</h2>
         <h3>${element.Equipment}</h3>
         <h4>${element.Explaination}</h4>
        </div>
`
    });
}