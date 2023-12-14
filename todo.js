const input = document.getElementById("input");
const listContainer = document.getElementById("ListContainer");

function AddList(){
    if(input.value  == ""){
        alert("The input box should not be empty");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        li.appendChild(span);
    }
    input.value = " ";
    saveData();
    
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        
    }else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();