
(function () {
    emailjs.init('dJVtZ2oRwhmsS0GQV');
    
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        emailjs.send('SB_1234','template_shm4336', formData)
            .then(function (response) {
                alert('Message sent successfully!');
            }, function (error) {
                console.error('Error sending email:', error);
                alert('There was an error sending the message.');
            });
    });
})();


