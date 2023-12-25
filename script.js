
// const userText = document.querySelector("#userText");
// const getTextBtn = document.querySelector("#getTextBtn");
// getTextBtn.addEventListener('click', function(){
//     console.log(userText.value);
//     ul.append(userText.value);
//     userText.value="";
// })

// const ul = document.querySelector("ul");
// // const li = document.createElement("li");
// console.log(li);


function addCountry(){
    let countryName= document.querySelector("#countryInput").value;
    if(countryName){
        let listItem=document.createElement("li");
        let countrySpan=document.createElement("span");
        countrySpan.textContent=countryName;
        // listItem.textContent=countryName;
        listItem.appendChild(countrySpan); 
        document.querySelector("#countryList").appendChild(listItem);

        // document.querySelector("#countryInput").value="";
        countryInput.value="";

        // create delete button
        let deleteButton =document.createElement("button");
        // create update button
        let updateButton =document.createElement("button");

        // delete button
        listItem.appendChild(deleteButton);
        deleteButton.textContent="Delete";
        deleteButton.className="deleteButton";
        deleteButton.addEventListener("click", function(){
            listItem.remove();
        });

        // update button
        listItem.appendChild(updateButton);
        updateButton.textContent="Update";
        updateButton.className="updateButton";
        updateButton.onclick=function(){
            let updatedCountry= prompt("Enter the updated Country name", countryName);
            if(updatedCountry !==null && updatedCountry.trim()!==""){
                countrySpan.textContent=updatedCountry;

            }

        };
    } 
}
// addCountryBtn.addEventListener('click', ()=> {
//     addCountry();
// })


// Take input using Enter key 
countryInput.addEventListener('keyup', (event)=> {
    if(event.which == 13){
        addCountry();
    }
})