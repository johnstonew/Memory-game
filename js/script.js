let tile1 = document.getElementById('tile-1');
let tile2 = document.getElementById('tile-2');
let tile3 = document.getElementById('tile-3');
let tile4 = document.getElementById('tile-4');
let tile5 = document.getElementById('tile-5');
let tile6 = document.getElementById('tile-6');
let tile7 = document.getElementById('tile-7');
let tile8 = document.getElementById('tile-8');
let tile9 = document.getElementById('tile-9');
let tile10 = document.getElementById('tile-10');
let tile11 = document.getElementById('tile-11');
let tile12 = document.getElementById('tile-12');
let tile13 = document.getElementById('tile-13');
let tile14 = document.getElementById('tile-14');
let tile15 = document.getElementById('tile-15');
let tile16 = document.getElementById('tile-16');
let tile17 = document.getElementById('tile-17');
let tile18 = document.getElementById('tile-18');
let tile19 = document.getElementById('tile-19');
let tile20 = document.getElementById('tile-20');
let win = document.getElementById('win');

const images =[];

function reloads () {
    if (images.length > 2) {
        window.location.reload()
    }

    checkwins();
}

function checkwins () {
 if ( images[0] == images[1]) {
     win.innerHTML = "You win";
 }
}

    tile1.addEventListener('click', function () {
        tile1.src = "././Images/hotdog.png"
        images.push(tile1.src);
        reloads()
    })

    tile2.addEventListener('click', function () {
        tile2.src = "././Images/berry.png"
        images.push(tile2.src);
        reloads()
    })

    tile3.addEventListener('click', function () {
        tile3.src = "././Images/burger.png"
        images.push(tile3.src);
        reloads()
    })

    tile4.addEventListener('click', function () {
        tile4.src = "././Images/chilli.png"
        images.push(tile4.src);
        reloads()
    })

    tile5.addEventListener('click', function () {
        tile5.src = "././Images/fire.png"
        images.push(tile5.src);
        reloads()
    })

    tile6.addEventListener('click', function () {
        tile6.src = "././Images/lovefruit.png"
        images.push(tile6.src);
        reloads()
    })

    tile7.addEventListener('click', function () {
        tile7.src = "././Images/marshmellow colored.png"
        images.push(tile7.src);
        reloads()
    })

    tile8.addEventListener('click', function () {
        tile8.src = "././Images/marshmellow.png"
        images.push(tile8.src);
        reloads()
    })

    tile9.addEventListener('click', function () {
        tile9.src = "././Images/sauce.png"
        images.push(tile9.src);
        reloads()
    })

    tile10.addEventListener('click', function () {
        tile10.src = "././Images/sausage.png"
        images.push(tile10.src);
        reloads()
    })

    tile11.addEventListener('click', function () {
        tile11.src = "././Images/sauce.png"
        images.push(tile11.src);
        reloads()
    })

    tile12.addEventListener('click', function () {
        tile12.src = "././Images/marshmellow.png"
        images.push(tile12.src);
        reloads()
    })

    tile13.addEventListener('click', function () {
        tile13.src = "././Images/chilli.png"
        images.push(tile13.src);
        reloads()
    })

    tile14.addEventListener('click', function () {
        tile14.src = "././Images/burger.png"
        images.push(tile14.src);
        reloads()
    })

    tile15.addEventListener('click', function () {
        tile15.src = "././Images/marshmellow colored.png"
        images.push(tile15.src);
        reloads()
    })

    tile16.addEventListener('click', function () {
        tile16.src = "././Images/lovefruit.png"
        images.push(tile16.src);
        reloads()
    })

    tile17.addEventListener('click', function () {
        tile17.src = "././Images/berry.png"
        images.push(tile17.src);
        reloads()
    })

    tile18.addEventListener('click', function () {
        tile18.src = "././Images/fire.png"
        images.push(tile18.src);
        reloads()
    })

    tile19.addEventListener('click', function () {
        tile19.src = "././Images/hotdog.png"
        images.push(tile19.src);
        reloads()
    })

    tile20.addEventListener('click', function () {
        tile20.src = "././Images/sausage.png"
        images.push(tile20.src);
        reloads()
    })