$(function () {
    $.get('./songs.json').then(function (response) {
        //console.log(response)
        let items = response
        items.forEach(i => {
            let $li = $(
                `
                 <li>
                        <a href="./play.html?id=${i.id}">
                            <div class="information">
                                <div class="name">${i.name}</div>
                                <div class="singer">${i.singer}</div>
                            </div>
                            <div class="play">
                                <svg t="1498480686912" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2549"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                    <defs>
                                        <style type="text/css"></style>
                                    </defs>
                                    <path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 838.4c-179.2 0-326.4-147.2-326.4-326.4 0-179.2 147.2-326.4 326.4-326.4 179.2 0 326.4 147.2 326.4 326.4C838.4 691.2 691.2 838.4 512 838.4z"
                                        p-id="2550" fill="#bfbfbf"></path>
                                    <path d="M665.6 486.4 467.2 371.2C454.4 364.8 448 364.8 435.2 371.2 422.4 377.6 416 390.4 416 396.8l0 224c0 12.8 6.4 19.2 19.2 25.6 12.8 6.4 19.2 6.4 32 0l198.4-115.2c12.8-6.4 12.8-19.2 12.8-25.6C678.4 499.2 672 486.4 665.6 486.4z"
                                        p-id="2551" fill="#bfbfbf"></path>
                                </svg>
                            </div>
                        </a>
                    </li>
                `
            )
            $('#lastestMusic').append($li)
        })
        $('#lastestMusicLoading').remove()
    })
    $('.siteNav').on('click', 'ol.tabItems>li', function (e) {
        let $li = $(e.currentTarget).addClass('active')
        $li.siblings().removeClass('active')
        let index = $li.index()
        $li.trigger('tabChange', index)
        $('.tabContent > li').eq(index).addClass('active').siblings().removeClass('active')
    })
    $('.siteNav').on('tabChange', function (e, index) {
        let $li = $('.tabContent > li').eq(index)
        if ($li.attr('data-downloaded') === 'yes') {
            return
        }
    })
    $.get('./songs.json').then(function (response) {
        //console.log(response)
        let items = response
        items.forEach(i => {
            let $li = $(
                `
                 <li>
                        <a href="./play.html?id=${i.id}">
                            <div class="number">${i.id >= 10 ? i.id + '' : '0' + i.id}</div>
                            <div class="information">
                                <div class="name">${i.name}</div>
                                <div class="singer">${i.singer}</div>
                            </div>
                            <div class="play">
                                <svg t="1498480686912" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2549"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                    <defs>
                                        <style type="text/css"></style>
                                    </defs>
                                    <path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 838.4c-179.2 0-326.4-147.2-326.4-326.4 0-179.2 147.2-326.4 326.4-326.4 179.2 0 326.4 147.2 326.4 326.4C838.4 691.2 691.2 838.4 512 838.4z"
                                        p-id="2550" fill="#bfbfbf"></path>
                                    <path d="M665.6 486.4 467.2 371.2C454.4 364.8 448 364.8 435.2 371.2 422.4 377.6 416 390.4 416 396.8l0 224c0 12.8 6.4 19.2 19.2 25.6 12.8 6.4 19.2 6.4 32 0l198.4-115.2c12.8-6.4 12.8-19.2 12.8-25.6C678.4 499.2 672 486.4 665.6 486.4z"
                                        p-id="2551" fill="#bfbfbf"></path>
                                </svg>
                            </div>
                        </a>
                    </li>
                `
            )
            $('.hotMusic').append($li)
        })
        $('.hotMusicLoading').remove()
    })
    
    $.get('./songs.json').then(function (response) {
        //console.log(response)
        let items = response
        items.forEach(i => {
            let $li = $(
                `
                 <li>
                        <a href="./play.html?id=${i.id}">
                            <div class="name">${i.name}</div>
                        </a>
                    </li>
                `
            )
            $('.hotSearch>ul').append($li)
        })
    })

    let timer = undefined
    $('#searchinput').on('input', function (e) {
        let $input = $(e.currentTarget)
        let value = $input.val().trim()
        if (value !== '') {
            $('.placeholder').css('display','none')
        }else if (value === '') {
            $('.placeholder').css('display','block')
        }

        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(function () {
            search(value).then((result) => {
                timer = undefined
                if (result.length !== 0) {
                    $('#output').text(result.map((r) => r.name).join(','))
                } else {
                    $('#output').text('没有结果')
                }
            })
        }, 300)


    })

    function search(keyword) {
        console.log('搜索' + keyword)
        return new Promise((resolve, reject) => {
            var database = [
                { "id": 1, "name": "那些花儿", },
                { "id": 2, "name": "情非得已", },
                { "id": 3, "name": "找自己", },
            ]
            let result = database.filter(function (item) {
                return item.name.indexOf(keyword) >= 0
            })
            setTimeout(function () {
                console.log('搜到' + keyword + '的结果')
                resolve(result)
            }, (Math.random() * 200 + 1000))
        })
    }
    window.search = search
})