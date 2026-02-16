

var siteNameInput= document.getElementById("siteName");
var siteURLInput= document.getElementById("siteURL");
var allsite = []

if(localStorage.getItem("all") != null){
    allsite = JSON.parse(localStorage.getItem("all"))
    display()
}

function addSite(){
   if (validName()== true){
    var site = {
    name : siteNameInput.value,
    url : siteURLInput.value,
}
allsite.push(site);

localStorage.setItem("all",JSON.stringify(allsite) );
console.log(allsite);
display()
ClearInputs()
   }

}

function ClearInputs(){

     siteNameInput.value ="";
     siteURLInput.value ="";
}
function display(){
    var cartoona = ""
    for ( var i = 0; i < allsite.length ; i++ ){
cartoona +=`<tr>
<td>${i+ 1}</td>
<td>${allsite[i].name}</td>
<td>${allsite[i].url}</td>
<td>
<button onclick="deleteSite(${i})" class="btn btn-danger">delete</button>
</td>
    </tr>`;
}

 document.getElementById("tableBody").innerHTML=cartoona
}


 function deleteSite(index){
    allsite.splice(index , 1)
    localStorage.setItem("all",JSON.stringify(allsite) );
    display()
 }

 function validName() {

var regex = 
/^(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}(\.[a-z]{2,})?$/;
if (regex.test(siteURLInput.value)){
document.getElementById("alertName").classList.replace("d-block","d-none");

    return true
}
document.getElementById("alertName").classList.replace("d-none","d-block");
return false;
 }