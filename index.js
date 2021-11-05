// Replacing Copy
document.addEventListener(
    "copy",
    event => {
        event.clipboardData.setData("text/plain", "");
        event.preventDefault();
    },
    false
);

// Disabling right click
document.addEventListener(
    "contextmenu",
    event => {
        event.preventDefault();
    },
    false
);
