const sendbtn = document.getElementById("sendbtn");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzDMYS21hJfudpGPdoEofKiFAWnjNMusKCyONpjChBszHLy2obR2LDRkVtM7bvyjbdJMg/exec";
const form = document.forms["submit-to-google-sheet"];
const emailInput = form.querySelector("input[name='UserEmail']"); 
  const emailValue = emailInput.value.trim(); 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  sendbtn.disabled = true;
  sendbtn.style.cursor= "not-allowed";
  sendbtn.innerText = "Sending";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(() => {
        sendbtn.disabled = false;
        sendbtn.style.cursor= "pointer";
        sendbtn.innerText = "Submit";
         form.reset();
      }, 2000);

     
    })

    .catch((error) => console.error("Error!", error.message));
});
sendbtn.addEventListener("click", (e) => {
  e.preventDefault();


  sendbtn.disabled = true;
  sendbtn.innerText = "Sending";
  sendbtn.style.cursor= "not-allowed";
  

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(() => {
        sendbtn.disabled = false;
         sendbtn.style.cursor= "pointer";
        sendbtn.innerText = "Submit";
        form.reset();
      }, 2000);
      
    })

    .catch((error) => console.error("Error!", error.message));
});



