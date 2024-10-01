const boxes = document.querySelectorAll('.box');

// Function to check if boxes should be shown
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        // Add 'show' class when box reaches trigger point
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Event listener for scroll event
window.addEventListener("scroll", checkBoxes);

// Initial call to display boxes on page load if they are already in view
checkBoxes();
