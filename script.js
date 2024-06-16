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

        // Add toast classes for styling
        toast.classList.add("toast"); 
        //The line toast.classList.add("toast"); in JavaScript adds the CSS class "toast" to the HTML element represented by the toast object.

        // Add the message
        toast.textContent = "Submit button clicked!";

        // Add the toast notification to the body
        document.body.appendChild(toast);
        // document.getElementById("test").appendChild(toast);
// The two lines of code you've highlighted are both attempting to add the `toast` element to the DOM, but in different locations.
// The line `document.body.appendChild(toast);` is adding the `toast` element to the end of the `body` element. This means the `toast` will appear at the end of your webpage, after all other content.
// The line `document.getElementById("test").appendChild(toast);` is attempting to add the `toast` element to the end of an element with the id "test". This means the `toast` will appear at the end of that specific element, not necessarily at the end of the entire webpage.
// If `document.getElementById("test").appendChild(toast);` is not working, it could be because there is no element with the id "test" in your HTML. Make sure you have an element like `<div id="test"></div>` in your HTML. Also, ensure this line of code is running after the HTML element is loaded, otherwise `document.getElementById("test")` will return `null`.

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