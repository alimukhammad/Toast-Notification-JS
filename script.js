function myFunction() {
    let submit = document.getElementById("submitId");
    let failed = document.getElementById("failedId");
    let info = document.getElementById("infoId");
    let warning = document.getElementById("warningId");


    submit.addEventListener('click', mySub);
    // function() {
    //     mySub();
    //     myFail();

    function mySub() {
        // Create the toast notification element
        var toast = document.createElement("div");

        // Add classes for styling
        toast.classList.add("toast"); //The line toast.classList.add("toast"); in JavaScript adds the CSS class "toast" to the HTML element represented by the toast object.

        // Add the message
        toast.textContent = "Submit button clicked!";

        // Add the toast notification to the body
        document.body.appendChild(toast);

        // Remove the toast notification after 3 seconds
        setTimeout(function() {
            document.body.removeChild(toast);
        }, 3000);
    }

    function myFail(){
        let toast = document.createElement("div");
        toast.classList.add("toast");
    }
}

window.onload = myFunction;