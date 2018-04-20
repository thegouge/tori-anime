window.onload = function() {
    var header = document.getElementById('top');
    var footer = document.getElementById('bot');
    var desiredHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight;

    document.getElementById('page').style.height = desiredHeight + "px";
};