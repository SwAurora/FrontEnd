$(document).ready(function()
{
    $('#tabUI > ul li').click(function()
    {
        let idx = $(this).index();
        let li = $('#tabUI > ul li');
        let div = $('#tabContents > div');
        li.removeClass('on');
        li.eq(idx).addClass('on');
        div.removeClass('on');
        div.eq(idx).addClass('on');
    })

    $('#prev').click(function()
    {
        let idx = $('.on').index() - 1;

        if(idx >= 0)
        {
            let li = $('#tabUI > ul li');
            let div = $('#tabContents > div');
            li.removeClass('on');
            li.eq(idx).addClass('on');
            div.removeClass('on');
            div.eq(idx).addClass('on');
        }
    })
    $('#next').click(function()
    {
        let idx = $('.on').index() + 1;
        let end = $('#tabUI> ul li').length - 1;
        if(idx <= end)
        {
            let li = $('#tabUI > ul li');
            let div = $('#tabContents > div');
            li.removeClass('on');
            li.eq(idx).addClass('on');
            div.removeClass('on');
            div.eq(idx).addClass('on');
        }
    })
})