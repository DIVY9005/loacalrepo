let display=document.querySelector("#display")
function sinf(){
    display.value=Math.sin(display.value)
}
function cosf(){
    display.value=Math.cos(display.value)
}
function tanf(){
    display.value=Math.tan(display.value)
}
function sqrf(){
    display.value=Math.sqrt(display.value)
}
function setTheme(theme) {
    const body = document.body;

    // Remove all theme classes
    body.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'green-theme');

    // Add the selected theme class
    body.classList.add(`${theme}-theme`);
}
function setTheme(theme) {
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(theme + '-theme'); // Add the new theme class
}

