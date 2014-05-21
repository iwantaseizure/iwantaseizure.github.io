var seizureTime = false, restartTime = false;
var colours = ["red", "green", "blue", "yellow", "orange", "pink"];

function startSeizure(){
    if(restartTime){
        document.getElementById('stopwatch').innerHTML = '0';
        restartTime = false;
    };
    seizureTime = true;
};

function endSeizure(){
    seizureTime = false;
    restartTime = true;
};

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32){
        startSeizure();
        e.preventDefault();
    }
});

window.addEventListener('mousedown', function(e){
    startSeizure();
    e.preventDefault();
});

window.addEventListener('touchstart', function(e){
    startSeizure();
    e.preventDefault();
});

window.addEventListener('keyup', function(e) {
    if(e.keyCode == 32) {
        endSeizure();
        e.preventDefault();
    }
});

window.addEventListener('mouseup', function(e){
    seizureTime = false;
    restartTime = true;
    e.preventDefault();
});

window.addEventListener('touchend', function(e){
    seizureTime = false;
    restartTime = true;
    e.preventDefault();
});

var i = 0;
setInterval(function(){
    if (seizureTime){
        document.getElementById('seizure').style.backgroundColor = colours[i];
        if(i != colours.length){
            i++
        }
        else{
            i = 0;
        };
    }
}, 10);

var val;
setInterval(function(){
    if(seizureTime){
        val = document.getElementById('stopwatch').innerHTML;
        val = parseFloat(val);
        val += 0.1;
        val = val.toFixed(1);
        document.getElementById('stopwatch').innerHTML = val;
    }
}, 100)
