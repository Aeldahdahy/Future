document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    const responseElement = document.querySelector('.response');

    if(!templateParams.name || !templateParams.email || !templateParams.subject || !templateParams.message) {
        responseElement.innerHTML = "Please fill in all fields!";
        responseElement.classList.add('text-danger');
        responseElement.classList.remove('text-success');
        return;
    }

    const serviceID = 'service_3ckhtjq'; 
    const templateID = 'template_73kev74';

    console.log('Form submission:', templateParams);
    emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
        responseElement.innerHTML = "Email successfully sent!";
        responseElement.classList.add('text-success');
        responseElement.classList.remove('text-danger');
    }, function(error) {
        responseElement.innerHTML = `Email sending failed: ${error.text || 'Unknown error'}`;
        responseElement.classList.add('text-danger');
        responseElement.classList.remove('text-success');
    });

});