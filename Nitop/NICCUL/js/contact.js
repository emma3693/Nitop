document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch form values
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // You can perform further actions here, like sending the data to a server or displaying a confirmation message.
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Subject:", subject);
    console.log("Message:", message);
  });
  