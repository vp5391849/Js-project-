
showNotes();
//if user adds a note,add it to the locaL STORAGE

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById("addTxt")
    let addtitle = document.getElementById("titleinput")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }
let myobj  = {
title: addtitle.value,
text: addtxt.value
 

}
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = ""
    console.log(notesobj);
    showNotes();
}
)

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = ""
    notesobj.forEach(function (element, index) {
        html += `  <div class="notecard my-2 mx-2" style="width: 18rem;">  
        <div class="card-body">
          <h5 class="card-title">Notes ${element.title}  </h5>
        <p class="card-text"> ${element.text}</p>
          <button id= "${index}"onclick=  "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>  
    `
    });

    let notesElm = document.getElementById("notes")
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {

        notesElm.innerHTML = `Nothing to show right now`
    }
}


function deleteNote(index) {
    console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes()
}
let search = document.getElementById('searchTxt')
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log('input event fired', inputVal);
    let noteCards = document.getElementsByClassName('noteCard')

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"

        }
        else {
            element.style.display = "none"

        }
        console.log(cardTxt);

    })



})






