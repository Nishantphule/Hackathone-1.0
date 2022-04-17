"use strict";

// creating a element for header and icon 
let header = document.createElement("h1")
header.id="header"
header.innerHTML="TOP 10 BOOKS"
document.body.appendChild(header)

let icon = document.createElement("img")
icon.src="/img/iconbook.jpg"
document.getElementById("header").appendChild(icon)


// creating element for searchbar
let search = document.createElement('div')
search.id="search"
search.className='searchbar'
document.body.appendChild(search)

// creating an input element for search

// 1. to search book by their names

let searchbar = document.createElement('input')
searchbar.type="text"
searchbar.id="searchbar"
searchbar.placeholder="Search by Book name..."
searchbar.setAttribute("onkeyup","searchFun()")
document.getElementById("search").appendChild(searchbar)

// creating a function for searchbar input element to get the books in the table when you type the name in input by using onkeyup attributte
const searchFun = () =>{
  var input, filter, tablerow, tr, td, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  tablerow = document.getElementById("data");
  tr = tablerow.getElementsByTagName("tr");
  for(i=0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td")[0]
    if(td){
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}


// 2. to search book by isbn

let searchbar1 = document.createElement('input')
searchbar1.type="text"
searchbar1.id="searchbar1"
searchbar1.placeholder="Search by ISBN..."
searchbar1.setAttribute("onkeyup","searchFun1()")
document.getElementById("search").appendChild(searchbar1)

// creating a function for searchbar1 input element to get the books in the table when you type the isbn in input by using onkeyup attributte
const searchFun1 = () =>{
  var input, filter, tablerow, tr, td, i, txtValue;
  input = document.getElementById("searchbar1");
  filter = input.value.toUpperCase();
  tablerow = document.getElementById("data");
  tr = tablerow.getElementsByTagName("tr");
  for(i=0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td")[2]
    if(td){
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}

// CREATING ELEMENTS OF TABLE HEAD AND TABLE BODY BU USING THEAD AND TBODY ELEMENTS

let main = document.createElement("div")
main.className="container-fluid";
main.id="main"
document.body.appendChild(main)

let table = document.createElement('table')
table.id="table"
table.className='table'
document.getElementById('main').appendChild(table)

let head  = document.createElement('thead')
head.id="head"
document.getElementById("table").appendChild(head)

let row1 = document.createElement("tr")
row1.id="r1"
document.getElementById("head").appendChild(row1)

let th1 = document.createElement("th")
th1.innerHTML="Book Name"
document.getElementById("r1").appendChild(th1)

let th2 = document.createElement("th")
th2.innerHTML="Pages"
document.getElementById("r1").appendChild(th2)

let th3 = document.createElement("th")
th3.innerHTML="ISBN"
document.getElementById("r1").appendChild(th3)

let th4 = document.createElement("th")
th4.innerHTML="Author"
document.getElementById("r1").appendChild(th4)

let th5 = document.createElement("th")
th5.innerHTML="Publishers"
document.getElementById("r1").appendChild(th5)

let th6 = document.createElement("th")
th6.innerHTML="Release Date"
document.getElementById("r1").appendChild(th6)

let th7 = document.createElement("th")
th7.innerHTML="Characters"
document.getElementById("r1").appendChild(th7)

let body = document.createElement("tbody")
body.id="data"
document.getElementById('table').appendChild(body)


// FETCHING THE API AND STORING THE DATA IN TABLE CREATED ABOVE
// THE TABLE WILL CONTAINER - NAME OF BOOK , ISBN , NO. OF PAGES , AUTHORS NAME , PUBLISHERS NAME , RELEASED DATE OF THE BOOK AND  CHARACTERS API DETAILS

const url = "https://www.anapioficeandfire.com/api/books";

async function nishant(url){
  let data = await fetch(url);
  if (data.ok){
    return data.json()
  } else {
    return data.status;
  }
}

let nishant_object = nishant(url);

nishant_object.then(function(value){
  console.log(JSON.stringify(value))
})
// CATCHING ERROR IF ANY
.catch(function(error){
  console.log(error)
})
.finally(function(){
  console.log("fetch was successful")
})

// CREATING A TBODY CONTENT BY FETCHING THE API DATA AND STORING A ROW FORMAT USING TR AND TD ELEMENTS

fetch("https://www.anapioficeandfire.com/api/books").then(res => {res.json()
    .then(data => {       
        if (data.length > 0) {
          let create = "";
          data.forEach((itemData) => {
            create += "<tr>";
            create += "<td>" + itemData.name + "</td>";
            create += "<td>" + itemData.numberOfPages + "</td>";
            create += "<td>" + itemData.isbn + "</td>";
            create += "<td>" + itemData.authors + "</td>";
            create += "<td>" + itemData.publisher + "</td>";
            create += "<td>"+ itemData.released + "</td>";
            create += "<td><ol><li>Character1 - "+ '<a href="'+ itemData.characters[0]+'">Info</a>' + "<li>Character2 - "+'<a href="'+ itemData.characters[1]+'">Info</a>'+"<li>Character3 - "+'<a href="'+ itemData.characters[2]+'">Info</a>' + "<li>Character4 - "+'<a href="'+ itemData.characters[3]+'">Info</a>' + "<li>Character5 - "+ '<a href="'+ itemData.characters[4]+'">Info</a>'
          });
          document.getElementById('data').innerHTML = create;
        }})})

// CREATING A FOOTER ELEMENT
let footer = document.createElement("footer")
footer.innerHTML= "©️ Nishant Phule (2022), All Rights Reserved"
document.body.appendChild(footer)