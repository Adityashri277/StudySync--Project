 const sendbtn = document.getElementById('sendbtn');
      const scriptURL = "https://script.google.com/macros/s/AKfycbycDhrmxDLoO5ylWBl8snK0iXf9KHitnwE4iyjIhw7QFUiDLKMa0bnCP1Z6SGbYFGIZRg/exec";
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
