document.addEventListener("DOMContentLoaded", function () {
    var languageSelector = document.getElementById("languageSelector");

    languageSelector.addEventListener("change", function () {
        changeLanguage();
    });

    function changeLanguage() {
        var selectedLanguage = languageSelector.value;

        // Ẩn tất cả các phần tử và hiển thị chỉ những phần tử của ngôn ngữ được chọn
        var viContent = document.querySelectorAll('[lang="vi"]');
        var enContent = document.querySelectorAll('[lang="en"]');

        if (selectedLanguage === "vi") {
            showContent(viContent);
            hideContent(enContent);
        } else {
            showContent(enContent);
            hideContent(viContent);
        }
    }

    function showContent(elements) {
        elements.forEach(function (element) {
            element.style.display = "block";
        });
    }

    function hideContent(elements) {
        elements.forEach(function (element) {
            element.style.display = "none";
        });
    }
});

function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetimes').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);