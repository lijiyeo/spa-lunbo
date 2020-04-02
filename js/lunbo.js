var $carouse=(function lbt() {
    var body = '<div class="slider" id="slider">'
        + '<div class="slide"><img src="img/b5.png" alt=""></div>'
        + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '<div class="slide"><img src="img/b2.png" alt=""></div>'
        + '<div class="slide"><img src="img/b3.png" alt=""></div>'
        + '<div class="slide"><img src="img/b4.png" alt=""></div>'
        + '<div class="slide"><img src="img/b5.png" alt=""></div>'
        + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '</div>'
        + '<span id="left"><</span>'
        + '<span id="right">></span>'
        + '<ul class="nav" id="navs">'
        + '<li>1</li>'
        + '<li>2</li>'
        + '<li>3</li>'
        + '<li>4</li>'
        + '<li>5</li>'
        + '</ul>';
    var $box = $('#box')
    $box.append(body);

    var img = document.getElementsByClassName('slide');
        imgNum = img.length - 2;

    var navs = document.getElementById('navs').children;
    function navsActive(idx) {
        for (var i = 0; i < navs.length; i++) {
            navs[i].removeAttribute("class", "active");
        }
        navs[idx].setAttribute("class", "active");
    }
    navsActive(0);

    for (var i = 0; i < imgNum; i++) {
        (function (j) {
            navs[j].onclick = function () {
                if (j - imgId > 0) {
                    $('#slider').animate({ left: '-=' + 1200 * (j - imgId) }, 1000);
                }
                else if (j - imgId < 0) {
                    $('#slider').animate({ left: '+=' + 1200 * (imgId - j) }, 1000);
                }
                else {
                    return true;
                }
                navsActive(j);
                imgId = j;
            }
        })(i)
    }

    var imgId = 0;

    var timer = setInterval(nextPage, 2000);

    $box.mouseover(function () {
        $('#left').css('opacity', 0.6);
        $('#right').css('opacity', 0.6);
        clearInterval(timer);
    })

    $box.mouseout(function () {
        $('#left').css('opacity', 0);
        $('#right').css('opacity', 0);
        timer = setInterval(nextPage, 2000);
    })

    $('#left').click(lastPage);
    $('#right').click(nextPage);

    function lastPage() {
        if (imgId == 0) {
            $('#slider').animate({ left: '+=' + 1200 }, 1000, function () {
                $('#slider').css('left', -1200 * imgNum);
            })
            navsActive(imgNum - 1);//此时显示的是第五张图片，他的索引值是imgNum-1=4
            imgId = imgNum - 1;
        }
        else {
            $('#slider').animate({ left: '+=' + 1200 }, 1000);
            navsActive(imgId - 1);
            imgId--;
        }
    }

    function nextPage() {
        if (imgId == imgNum - 1) {
            $('#slider').animate({ left: '-=' + 1200 }, 1000, function () {
                $('#slider').css('left', -1200);
            })
            navsActive(0);
            imgId = 0;
        }
        else {
            $('#slider').animate({ left: '-=' + 1200 }, 1000);
            navsActive(imgId + 1);
            imgId++;
        }
    }
})();