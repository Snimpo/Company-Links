var numberOfTinButtons = document.querySelectorAll(".tinbtn").length;

for (var i = 0; i < numberOfTinButtons; i++) {
    document.querySelectorAll(".tinbtn")[i].addEventListener("click", function() {
/*
        var copyText = this.innerText;

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999);
*/        
        // Copy the text inside the text field
        navigator.clipboard.writeText(this.innerText);
        

        // Alert the copied text
        //alert("Copied the text: " + this.innerText);

    }
    );
}

var numberOfStatusButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfStatusButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var status = this.innerText;

        if (status == "Updated") {
            this.style.backgroundColor = "red";
            this.innerText = "Outdated";
            status = "Outdated";
        } else {
            this.style.backgroundColor = "rgb(45, 221, 39)";
            this.innerText = "Updated";
            status = "Updated";
        }
    }
    );
}

function showPopup() {
    const popup = document.getElementById("myPopup");
    popup.style.display = "block"; // Show the popup

    // Hide the popup after 2 seconds
    setTimeout(function() {
        popup.style.display = "none";
    }, 1000); // 2000 milliseconds = 2 seconds
}






