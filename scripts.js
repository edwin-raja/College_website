document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            // Add your login logic here
            console.log("Login email:", email);
            console.log("Login password:", password);
            alert("Login submitted!");
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("registerName").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const program = document.getElementById("registerProgram").value;
            const dob = document.getElementById("registerDOB").value;
            const address = document.getElementById("registerAddress").value;
            const phone = document.getElementById("registerPhone").value;

            // Add your registration logic here
            console.log("Register name:", name);
            console.log("Register email:", email);
            console.log("Register password:", password);
            console.log("Register program:", program);
            console.log("Register DOB:", dob);
            console.log("Register address:", address);
            console.log("Register phone:", phone);
            alert("Registration submitted!");
        });
    }
});
