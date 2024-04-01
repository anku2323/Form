document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let managerFirstName = document.getElementById('managerFirstName').value.trim();
    let managerLastName = document.getElementById('managerLastName').value.trim();
    let taskId = document.getElementById('taskIdInput').value.trim();
    let task = document.getElementById('task').value.trim();
    let status = document.querySelector('input[name="status"]:checked');
    let notes = document.getElementById('notes').value.trim();
    let instructions = document.getElementById('instructions').value.trim();

    // Reset error messages
    document.querySelectorAll('.errorMessage').forEach(function(errorMsg) {
        errorMsg.style.display = 'none';
    });

    let flag = true;

    if (firstName === '') {
        document.getElementById('firstNameError').style.display = 'block';
        flag = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').style.display = 'block';
        flag = false;
    }

    if (managerFirstName === '') {
        document.getElementById('managerFirstNameError').style.display = 'block';
        flag = false;
    }

    if (managerLastName === '') {
        document.getElementById('managerLastNameError').style.display = 'block';
        flag = false;
    }

    if (taskId === '') {
        document.getElementById('taskIdError').style.display = 'block';
        flag = false;
    }

    if (task === '') {
        alert('Task should not be empty');
        flag = false;
    }

    if (!status) {
        document.getElementById('statusError').style.display = 'block';
        flag = false;
    }

    if (notes === '') {
        document.getElementById('notesError').style.display = 'block';
        flag = false;
    }

    if (instructions === '') {
        document.getElementById('instructionsError').style.display = 'block';
        flag = false;
    }

    if (flag) {
        // Display submitted data below the form
        let submittedData = document.getElementById('submittedData');
        submittedData.innerHTML = `
            <h2>Submitted Data</h2>
            <p><strong>Employee Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Manager Name:</strong> ${managerFirstName} ${managerLastName}</p>
            <p><strong>Task ID:</strong> ${taskId}</p>
            <p><strong>Task:</strong> ${task}</p>
            <p><strong>Status:</strong> ${status.value}</p>
            <p><strong>Additional Notes:</strong> ${notes}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
        `;
    }
});
