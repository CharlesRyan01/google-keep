const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=biceps';
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
    let output=document.getElementById("outputbi")
    data.forEach(element => {
        output.innerHTML =
        `
        <div id="outputbi">
         <p>Exercise:${element.Equipment}</p>
         <p>Equipment:${element.WorkOut}</p>
         <p>Equipment:${element.Explaination}</p>
        <div></div>
`
    });
}


