let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumbnail = document.querySelector('.container .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.th-item');

thumbnail.appendChild(thumbnailItems[0]);

nextDom.onclick = function () {
    show('next');
}
prevDom.onclick = function () {
    show('prev');
}

let timeRunning = 2000;
let runTimeOut;

function show(type) {
    let listItem = list.querySelectorAll('.item');
    let thumbnailItems = thumbnail.querySelectorAll('.th-item');
    let myVideo = list.querySelector('.myVideo')

    if (type === 'next') {
        list.appendChild(listItem[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        container.classList.add('next');
        myVideo.pause();
    } else {
        list.prepend(listItem[listItem.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        container.classList.add('prev');
        myVideo.pause();
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('prev');
    }, timeRunning);
}

// ===== Trailer Popup Handling =====

let listItems = list.querySelectorAll('.item');
listItems.forEach(item => {
    let trailerBtn = item.querySelector('.trailer-btn');
    let popup = item.querySelector('.vid-box');
    let myVideo =item.querySelector('.myVideo')
    if (trailerBtn && popup) {
        trailerBtn.onclick = function () {
            popup.classList.add('active');
            myVideo.play();
            document.querySelector('.header').style.zIndex = '0';
            document.querySelector('.thumbnail').style.zIndex = '0';
            document.querySelector('.arrows').style.zIndex = '0'
        };
    }
});

let popups = document.querySelectorAll('.vid-box');
popups.forEach(popup => {
    let myVideo = popup.querySelector('.myVideo');
    let closeBtn = popup.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = function () {
            popup.classList.remove('active');
            myVideo.pause();
            document.querySelector('.header').style.zIndex = '999';
            document.querySelector('.thumbnail').style.zIndex = '999';
            document.querySelector('.arrows').style.zIndex = '600';
        };
    }
});

// ===== Character Panel Logic =====
listItems.forEach(item => {
    let charnextDom = item.querySelector('.char-next');
    let charprevDom = item.querySelector('.char-prev');
    let charcontainer = item.querySelector('.char-container');
    let charlist = charcontainer.querySelector('.character-list');
    let charthumbnail = item.querySelector('.char-thum');

    if (charnextDom && charprevDom && charcontainer && charlist && charthumbnail) {
        charnextDom.onclick = function () {
            charshow('char-next', charcontainer, charlist, charthumbnail);
        }
        charprevDom.onclick = function () {
            charshow('char-prev', charcontainer, charlist, charthumbnail);
        }
    }
});

function charshow(type, charcontainer, charlist, charthumbnail) {
    let charlistItem = charlist.querySelectorAll('.char-box');
    let charthumbnailItems = charthumbnail.querySelectorAll('.char-th-item');

    if (type === 'char-next') {
        charlist.appendChild(charlistItem[0]);
        charthumbnail.appendChild(charthumbnailItems[0]);
        charcontainer.classList.add('char-next');
    } else {
        charlist.prepend(charlistItem[charlistItem.length - 1]);
        charthumbnail.prepend(charthumbnailItems[charthumbnailItems.length - 1]);
        charcontainer.classList.add('char-prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        charcontainer.classList.remove('char-next');
        charcontainer.classList.remove('char-prev');
    }, timeRunning);
}

listItems.forEach(item => {
    let charBtn = item.querySelector('.character-list-btn')
    charBtn.onclick = function () {
        charactive();
    }
    function charactive() {
        let charcontainer = item.querySelector('.char-container');
        charcontainer.classList.add('charActive');
        document.querySelector('.header').style.zIndex = '0';
        document.querySelector('.thumbnail').style.zIndex = '0';
        document.querySelector('.arrows').style.zIndex = '0'
    }
})
listItems.forEach(item => {
    let close = item.querySelector('.charClose');
    close.onclick = function () {
        charClose()
    }
    function charClose() {
        let charcontainer = item.querySelector('.char-container');
        charcontainer.classList.remove('charActive')
        document.querySelector('.header').style.zIndex = '999';
        document.querySelector('.thumbnail').style.zIndex = '999';
        document.querySelector('.arrows').style.zIndex = '600';
    }
})

