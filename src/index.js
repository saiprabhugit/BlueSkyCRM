document.addEventListener("DOMContentLoaded", () => {
  const newCustomerBtn = document.getElementById("newCustomerBtn");
  const newCustomerFormContainer = document.getElementById("newCustomerFormContainer");
  const saveCustomerBtn = document.getElementById("saveCustomerBtn");

  // Show the form when "New Customer" button is clicked
  newCustomerBtn.addEventListener("click", () => {
    newCustomerFormContainer.style.display = "block";
  });

  // Handle form submission (for now, just log the input values)
  saveCustomerBtn.addEventListener("click", () => {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;

    if (name && email && phone) {
      console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
      alert("Customer saved successfully!");

      // Clear the form and hide it
      document.getElementById("newCustomerForm").reset();
      newCustomerFormContainer.style.display = "none";
    } else {
      alert("Please fill out all fields.");
    }
  });
});
