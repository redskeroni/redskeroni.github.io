document.getElementById('toggleButton').addEventListener('click', function() {
    var body = document.body;
    var mode = body.classList.toggle('dark-mode');
    if (mode) {
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
    }
});
