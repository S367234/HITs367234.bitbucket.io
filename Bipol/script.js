document.addEventListener("DOMContentLoaded", function() {
    // Selecting the form element
    const form = document.getElementById("restaurantForm");

    // Adding event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Preventing default form submission behavior

        // Getting form values
        const name = form.elements["Name"].value.trim();
        const address = form.elements["address"].value.trim();
        const cuisineType = form.elements["cuisineType"].value.trim();
        const numberOfPeople = form.elements["Number of people"].value.trim();
        const phoneNumber = form.elements["phoneNumber"].value.trim();
        const email = form.elements["Email"].value.trim();
        const reservationsTime = form.elements["reservations"].value.trim();
        const outdoorSeating = form.elements["outdoorSeating"].checked;

        // Basic validation
        if (name === "" || address === "" || phoneNumber === "" || email === "" || reservationsTime === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Validation for phone number
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Validation for email
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare data for submission
        const formData = {
            name: name,
            address: address,
            cuisineType: cuisineType,
            numberOfPeople: numberOfPeople,
            phoneNumber: phoneNumber,
            email: email,
            reservationsTime: reservationsTime,
            outdoorSeating: outdoorSeating
        };
        console.log(formData);
    });
});
