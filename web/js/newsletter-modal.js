document.addEventListener('DOMContentLoaded', function () {
    var modalBtn = document.getElementById('signup-modal-btn');
    var form = document.getElementById('newsletterForm');
    var modal = document.getElementById('signup-modal');
    var closeButton = document.getElementsByClassName('close')[0];
    var messageContainer = document.querySelector('#signup-modal .message');

    // Common event listeners
    modalBtn.addEventListener('click', showModal);
    form.addEventListener('submit', handleSubmit);

    function showModal() {
        document.body.classList.add('modal-open');
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleFormRequest();
    }

    function handleFormRequest() {
        var formData = new FormData(form);
        var name = formData.get('name');
        var email = formData.get('mail');

        var payload = {
            firstName: name,
            email: email
        };

        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        }).then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }).then(data => {
            showMessage('Subscription successful!');
            form.reset();
        }).catch(error => {
            console.error('Error:', error);
            showMessage('There was an error processing your subscription.');
        });
    }

    function showMessage(messageText) {
        var messageElement = document.createElement('p');
        messageElement.textContent = messageText;
        if (messageContainer) {
            messageContainer.appendChild(messageElement);
        } else {
            console.error('Message container not found');
        }
    }

    // Event listeners for modal interaction
    closeButton.onclick = closeModal;
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});