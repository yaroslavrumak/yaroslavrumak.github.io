"use strict"

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var grd1 = ctx.createLinearGradient(0, 0, document.body.clientWidth * 2, document.body.clientHeight * 2);
grd1.addColorStop(0, "#673AB7");
grd1.addColorStop(1, "#1A237E");

canvas.width = document.body.clientWidth * 2;
canvas.height = document.body.clientHeight * 2;

ctx.fillStyle = grd1;
ctx.fillRect(0, 0, document.body.clientWidth * 2, document.body.clientHeight * 2);

ctx.strokeStyle = "#fff";

var a = document.body.clientWidth * 2 * document.body.clientHeight * 2 / 10000;
var i;
var t;
var x;
var y;
var m;
var sx = [];
//x array
var sy = [];
//y array
var st = [];
//top parametr
var sr = [];
//right parametr
var sm = [];
//move direction
var tx;
var ty;
var twx;
var twy;

function count() {

    sx = [];
    //x array
    sy = [];
    //y array
    st = [];
    //top parametr
    sr = [];
    //right parametr
    sm = [];

    for (i = 0; i < a; i++) {
        x = Math.floor((Math.random() * document.body.clientWidth * 2) + 1);
        y = Math.floor((Math.random() * document.body.clientHeight * 2) + 1);
        ctx.beginPath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.lineWidth = .2;
        ctx.arc(x, y, .2, 0, Math.PI * 2, true);
        ctx.fill();
        sx.push(x);
        sy.push(y);
        st.push("1");
        sr.push("1");

        m = Math.floor((Math.random() * 4) + 1);
        sm.push(m);
    };
};

count();

setInterval(function () {
    for (i = 0; i < sy.length; i++) {
        if (sm[i] == 1) {
            if (sy[i] > document.body.clientHeight * 2) {
                st[i] = -st[i];
            };
            if (sy[i] < 0) {
                st[i] = -st[i];
            };
            if (st[i] > 0) {
                sy[i] = sy[i] + .1;
            };
            if (st[i] < 0) {
                sy[i] = sy[i] - .1;
            };
        }
        if (sm[i] == 4) {
            if (sy[i] > document.body.clientHeight * 2) {
                st[i] = -st[i];
            };
            if (sy[i] < 0) {
                st[i] = -st[i];
            };
            if (st[i] > 0) {
                sy[i] = sy[i] - .1;
            };
            if (st[i] < 0) {
                sy[i] = sy[i] + .1;
            };
        }
    };
}, .1);

setInterval(function () {
    for (i = 0; i < sy.length; i++) {
        if (sm[i] == 3) {
            if (sy[i] > document.body.clientHeight * 2) {
                st[i] = -st[i];
            };
            if (sy[i] < 0) {
                st[i] = -st[i];
            };
            if (st[i] > 0) {
                sy[i] = sy[i] - .1;
            };
            if (st[i] < 0) {
                sy[i] = sy[i] + .1;
            };
        }
    };
}, .1);

setInterval(function () {
    for (i = 0; i < sx.length; i++) {
        if (sm[i] == 2) {
            if (sx[i] > document.body.clientWidth * 2) {
                sr[i] = -sr[i];
            };
            if (sx[i] < 0) {
                sr[i] = -sr[i];
            };
            if (sr[i] > 0) {
                sx[i] = sx[i] + .1;
            };
            if (sr[i] < 0) {
                sx[i] = sx[i] - .1;
            };
        }
        if (sm[i] == 4) {
            if (sx[i] > document.body.clientWidth * 2) {
                sr[i] = -sr[i];
            };
            if (sx[i] < 0) {
                sr[i] = -sr[i];
            };
            if (sr[i] > 0) {
                sx[i] = sx[i] - .1;
            };
            if (sr[i] < 0) {
                sx[i] = sx[i] + .1;
            };
        }
        if (sm[i] == 3) {
            if (sx[i] > document.body.clientWidth * 2) {
                sr[i] = -sr[i];
            };
            if (sx[i] < 0) {
                sr[i] = -sr[i];
            };
            if (sr[i] > 0) {
                sx[i] = sx[i] + .1;
            };
            if (sr[i] < 0) {
                sx[i] = sx[i] - .1;
            };
        }
    };
}, .1);


function move() {

    ctx.fillStyle = grd1;
    ctx.fillRect(0, 0, document.body.clientWidth * 2, document.body.clientHeight * 2);

    for (i = 0; i < sx.length; i++) {

        ctx.beginPath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.lineWidth = .2;
        ctx.arc(sx[i], sy[i], .2, 0, Math.PI * 2, true);
        ctx.stroke();

    };

    for (var t = 0; t < sx.length; t++) {
        for (var tx = 0; tx < sx.length; tx++) {
            twx = sx[t] - sx[tx];
            twy = sy[t] - sy[tx];

            twx = twx * twx + twy * twy;
            twx = Math.sqrt(twx);

            if (twx < 125) {

                twx = 125 - twx;
                ctx.strokeStyle = "rgba(255,255,255," + twx / 125 + ")";

                ctx.beginPath();
                ctx.lineWidth = .25;
                ctx.moveTo(sx[t], sy[t]);
                ctx.lineTo(sx[tx], sy[tx]);
                ctx.closePath();
                ctx.stroke();
            }
        }
    };

};

setInterval(function () {
    requestAnimationFrame(move);
}, 1);

document.body.onresize = function () {
    canvas.width = document.body.clientWidth * 2;
    canvas.height = document.body.clientHeight * 2;
    a = document.body.clientWidth * 2 * document.body.clientHeight * 2 / 10000;
    count();
    requestAnimationFrame(move);
};