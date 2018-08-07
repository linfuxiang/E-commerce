(function(win, doc) {
    let isAndroid = win.navigator.appVersion.match(/android/gi);
    let isIPhone = win.navigator.appVersion.match(/iphone/gi);
    let devicePixelRatio = win.devicePixelRatio;
    let dpr, scale;
    if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
            dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
            dpr = 2;
        } else {
            dpr = 1;
        }
    } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
    }
    scale = 1 / dpr;

    function setFontSize() {
        let htmlFontSize = doc.documentElement.clientWidth / 10;
        console.log(htmlFontSize)
        doc.documentElement.style.fontSize = htmlFontSize * dpr + 'px';
    }

    function setViewport() {
        // 设置viewport
        let meta;
        let content = `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`;
        if (doc.querySelector('meta[name="viewport"]')) {
            meta = doc.querySelector('meta[name="viewport"]');
            meta.setAttribute('content', content);
        } else {
            meta = doc.createElement('meta');
            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', content);
            doc.head.appendChild(meta);
        }
    }

    win.addEventListener('resize', function() {
        setFontSize();
        setViewport();
    });
    setFontSize();
    setViewport();
})(window, document);