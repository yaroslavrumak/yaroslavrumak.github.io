$(document).on('click', '.nav_link', function (e) {
    e.preventDefault();
    var i = $('.nav_link').index(this);
    $('.nav_link').removeClass('active');
    $('.nav_link').eq(i).addClass('active');
    $('.table').removeClass('active');
    $('.table').eq(i).addClass('active');
    $('.title').removeClass('active');
    $('.title').eq(i).addClass('active');
    $('.title_hscore').removeClass('active');
    $('.title_hscore').eq(i).addClass('active');
})
var b = [];
//var b2 = [];

$(document).on({

    mouseenter: function () {
        var c = $('.time').index(this);
        var p = $('.title_hscore').index();
        var s = $('.score').index();
        i = 0;
        
        for (a = 0; a < $('.home').length / $('.table').length; a++) {
            b.push(+($('.home').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()) + +($('.away').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()));
        }
        
//        b2.push(+($('.home').eq(c).text()) + +($('.away').eq(c).text()));

        $('.time').eq(c).css({
            color: '#62D58A',
            fontWeight: 'bold'
        });
        $('.shts').eq(c).css({
            color: '#62D58A',
            fontWeight: 'bold'
        });
        $('.title_hscore').eq(p).text('Current 10 min score:');
//        $('.score1').eq(p).text(Math.max.apply(Math, b2));
    },
    mouseleave: function () {
        $('.time').css({
            color: '#707070',
            fontWeight: 'normal'
        });
        $('.shts').css({
            color: '#707070',
            fontWeight: 'normal'
        });
        $('.title_hscore').text('Highest attack score:');
        $('.score1').eq(i).text(Math.max.apply(Math, b));
    }
}, '.time');

$(document).ready(function () {
    for (i = 0; i < $('.table').length; i++) {
        var sum = 0;
        for (a = 0; a < $('.home').length / $('.table').length; a++) {
            sum = sum + +($('.home').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()) + +($('.away').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text());

            console.log(+($('.home').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()) + +($('.away').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()))
        }
        $('.score2').eq(i).text(sum);

        var b = [];
        for (a = 0; a < $('.home').length / $('.table').length; a++) {
            b.push(+($('.home').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()) + +($('.away').eq((a + 1) + $('.home').length / $('.table').length * i - 1).text()));
        }
        $('.score1').eq(i).text(Math.max.apply(Math, b));
    }

})