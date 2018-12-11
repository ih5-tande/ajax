function addLoadEvent(func) {
    var oldOnload=window.onload;
    if(typeof window.onload=="function") {
        window.onload = function () {
            func();
            oldOnload();

        }
    }
    else {
        window.onload=func;

    }

}
