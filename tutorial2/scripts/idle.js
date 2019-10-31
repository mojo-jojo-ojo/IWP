var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer; // touchscreen presses
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;     // touchpad clicks
    document.onscroll = resetTimer;    // scrolling with arrow keys
    document.onkeypress = resetTimer;


    function logout() {
        alert("You are now logged out.")
        //location.href = 'logout.html'
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 10000)
        // 1000 milliseconds = 1 second
    }
};
