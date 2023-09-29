function showLoginForm(type) {
    const studentForm = document.getElementById('studentLoginForm');
    const teacherForm = document.getElementById('teacherLoginForm');

    if (type === 'student') {
        studentForm.classList.add('active');
        console.log("Hii Student");
        teacherForm.classList.remove('active');
    } else if (type === 'teacher') {
        console.log("Hii Teacher");
        teacherForm.classList.add('active');
        studentForm.classList.remove('active');
    }
}

// function validateForm(formId) {
//     const form = document.getElementById(formId);
//     const inputs = form.getElementsByTagName('input');
//     document.write(inputs);
//     let isValid = true;

//     for (let i = 0; i < inputs.length; i++) {
//         const input = inputs[i];
//         console.log(input);

//         if (!input.checkValidity()) {
//             isValid = false;
//             showError(input, input.validationMessage);
//         } else {
//             hideError(input);
            
//         }
//     }
 
   
//     return isValid;
// }

// function showError(input, message) {
//     const errorContainer = input.nextElementSibling;
//     if (errorContainer && errorContainer.classList.contains('error-message')) {
//         errorContainer.textContent = message;
//     } else {
//         const newErrorContainer = document.createElement('div');
//         newErrorContainer.className = 'error-message';
//         newErrorContainer.textContent = message;
//         input.insertAdjacentElement('afterend', newErrorContainer);
//     }
// }

// function hideError(input) {
//     const errorContainer = input.nextElementSibling;
//     if (errorContainer && errorContainer.classList.contains('error-message')) {
//         errorContainer.textContent = '';
//     }
// }
