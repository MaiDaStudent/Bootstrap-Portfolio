document.addEventListener("DOMContentLoaded", function () {
    const helloText = document.getElementById("hello-text");
    const languages = [
        "Hello and Welcome",
        "Hej og velkommen",
        "Bonjour et bienvenue",
        "Hallo und Willkommen",
        "안녕하세요, 환영합니다",
        "مرحبا و أهلا وسهلا",
        "Hola y bienvenidos",
        "Ciao e benvenuto",
        "こんにちは、ようこそ"
    ];
    let index = 0;

    function changeText() {
        helloText.classList.add("fade-out"); // Apply fade-out effect
        setTimeout(() => {
            index = (index + 1) % languages.length; // Cycle through languages
            helloText.textContent = languages[index];
            helloText.classList.remove("fade-out");
            helloText.classList.add("fade-in"); // Apply fade-in effect
        }, 1000); // Wait for fade-out before changing text
    }

    setInterval(changeText, 5000); // Change text every 5 seconds
});
