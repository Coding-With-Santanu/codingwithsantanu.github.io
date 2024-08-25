function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const model_selector = document.getElementById("choose-model")

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

const basic_model = document.getElementById("basic-model");
const general_model = document.getElementById("general-model");

// Add click event listeners to each button
basic_model.addEventListener('click', function() {
    // Redirect to another page when Button 1 is clicked
    window.location.href = 'basic-model/index.html';
});

general_model.addEventListener('click', function() {
    // Redirect to another page when Button 2 is clicked
    window.location.href = 'general-model/index.html';
});

model_selector.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 2);
});

link4.addEventListener('click', () => {
    scrollToElement('.column');
});