// agar langsung membuat nya tag style ketika pertama kali browser tampil

if (document.querySelector('body')) {
    let css = document.createElement('style');
    css.type = 'text/css';

    let styles = ` 
        body { 
            padding: 0;
            margin: 0;
        }`;


    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}


// pengkondisian

if (document.querySelector('body').classList.contains('position')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/position.min.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('component')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/component.min.js',
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/DOMnavbar.min.js'
    ]

    for (var i = 0; i < js.length; i++) {
        script = document.createElement('script'),
            body = document.getElementsByTagName('body')[0],
            tmp;

        tmp = script;
        tmp.src = js[i];
        body.appendChild(tmp);

    }
}

if (document.querySelector('body').classList.contains('text-color')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/textColor.min.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('text-transform')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/textTransform.min.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('cursor')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/cursor.min.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-color')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundColor.min.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('text-align')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/textAlign.min.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('margin')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/margin.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('font')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/font.min.js',
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/fontFamily.min.js'
    ]

    for (var i = 0; i < js.length; i++) {
        script = document.createElement('script'),
            body = document.getElementsByTagName('body')[0],
            tmp;

        tmp = script;
        tmp.src = js[i];
        body.appendChild(tmp);

    }
}

if (document.querySelector('body').classList.contains('tlrb')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/tlrb.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('padding')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/padding.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('display')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/display.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('opacity')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/opacity.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('border')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/border.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('outline')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/outline.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('transition')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/transition.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('transform')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/transform.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('box-shadow')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/boxShadow.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('text-shadow')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/textShadow.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('z-index')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/zIndex.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('width-height')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/widthHeight.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('decoration')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/decoration.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('overflow')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/overflow.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('float')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/float.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('justify-content')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/justifyContent.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('justify-items')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/justifyItems.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('justify-self')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/justifySelf.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('align-content')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/alignContent.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('align-items')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/alignItems.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('align-self')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/alignSelf.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-position')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundPosition.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-origin')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundOrigin.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-repeat')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundRepeat.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-size')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundSize.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('line-height')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/lineHeight.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('list-style')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/listStyle.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-clip')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundClip.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-attachment')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundAttachment.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-blend-mode')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backgroundBlendMode.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word-break')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/wordBreak.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word-wrap')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/wordWrap.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word-spacing')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/wordSpacing.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('letter-spacing')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/letterSpacing.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('animation')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/animation.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('vertical')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/vertical.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('visibility')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/visibility.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('white-space')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/whiteSpace.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('page-break')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/page.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('flex')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/flex.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('counter')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/counter.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('perspective')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/perspective.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('hover')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/hover.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('focus')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/focus.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('active')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/active.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('empty-cell')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/emptyCell.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('zoom')) {

    var js = 'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/zoom.min.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('grid')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/grid.min.js',
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/columnCustom.min.js'
    ]

    for (var i = 0; i < js.length; i++) {
        script = document.createElement('script'),
            body = document.getElementsByTagName('body')[0],
            tmp;

        tmp = script;
        tmp.src = js[i];
        body.appendChild(tmp);
    }

}

if (document.querySelector('body').classList.contains('increment')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/increment.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('excel')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/officeExcel.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/officeWord.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('pdf')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/officePdf.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('sosmed')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/sosmed.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('reload')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/reload.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('result')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/result.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('time')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/time.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('back-to-top')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/backToTop.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('icon')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/icons.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('box-sizing')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/boxSizing.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('mode')) {

    var js = [
        'https://cdn.jsdelivr.net/gh/valclassdevelop/valclassFramework1/property/darkMode.min.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}