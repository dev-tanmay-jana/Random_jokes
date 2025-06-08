const url = "https://official-joke-api.appspot.com/random_joke"
const para = document.querySelector("#para")
const btn = document.querySelector("#btn")

const getdata = async()=>{
    console.log("fetching data ....");
    let respose = await fetch(url);
    console.log(respose)
    let data = await respose.json();
    para.innerText = `${data.setup}\n\n${data.punchline}`;
};
btn.addEventListener("click",getdata)