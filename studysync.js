 const sendbtn = document.getElementById('sendbtn');
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzDMYS21hJfudpGPdoEofKiFAWnjNMusKCyONpjChBszHLy2obR2LDRkVtM7bvyjbdJMg/exec";
      const form = document.forms["submit-to-google-sheet"];

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            setTimeout(() => {
            }, 2000);
            form.reset();
          })

          .catch((error) => console.error("Error!", error.message));
      });
      sendbtn.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            setTimeout(() => {
            }, 2000);
            form.reset();
          })

          .catch((error) => console.error("Error!", error.message));
      });