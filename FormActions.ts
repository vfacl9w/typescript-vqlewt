const form = document.getElementById('VehicleRegistrationForm')as HTMLFormElement;
form.addEventListener('submit', (event) => {
     event.preventDefault(); // Prevent the form from submitting
   Window.alert("hi");
});