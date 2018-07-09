"use strict"

var tl = new TimelineLite();

tl.from($('.info_main_1'), 2, {
  x: -20,
  y: 20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);


tl.from($('.info_main_2'), 2, {
  x: -20,
  y: -20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);

tl.from($('.info_main_3'), 2, {
  x: 20,
  y: -20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);

tl.from($('.info_main_4'), 2, {
  x: 20,
  y: -20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);

tl.from($('.info_main_5'), 2, {
  x: 20,
  y: -20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);
tl.from($('.st1198'), 2, {
  x: 20,
  y: -20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);
tl.from($('.st1197'), 2, {
  x: 20,
  y: -20,
  opacity: 0.5,
  yoyo: true,
  repeat: -1
}, 0);
//tl.fromTo($('.st1066'), 2, {
//  x: 20,
//  y: 10,
//  opacity: 0.5,
//  delay: 2
//}, {
//  x: 0,
//  y: 0,
//  opacity: 1
//}, 0);
tl.fromTo($('.info_main_6'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1
}, 0);
tl.fromTo($('.info_main_7'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1
}, 0);

tl.fromTo($('.info_main_check'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1
}, 0);
tl.fromTo($('.info_main_7'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1  
}, 0);
tl.fromTo($('.info_main_8'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1  
}, 0);
tl.fromTo($('.info_main_9'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1  
}, 0);
tl.fromTo($('.info_main_10'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1  
}, 0);
tl.fromTo($('.info_main_11'), 2, {
  y: 10,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  yoyo: true,
  repeat: -1  
}, 0);
tl.fromTo($('.info_main_cube1'), 2, {
  y: -15,
  x: -15
}, {
  y: 0,
  x: 0,
  yoyo: true,
  repeat: -1
}, 0);
tl.fromTo($('.info_main_cube2'), 2, {
  y: 15,
  x: 15
}, {
  y: 0,
  x: 0,
  yoyo: true,
  repeat: -1
}, 0);
tl.fromTo($('.info_main_cube3'), 2, {
  y: 0,
  x: 0
}, {
  y: 15,
  x: 15,
  yoyo: true,
  repeat: -1
}, 0);

tl.fromTo($('.info_main_cube4'), 2, {
  y: -15,
  x: 15
}, {
  y: 0,
  x: 0,
  yoyo: true,
  repeat: -1
}, 0);
tl.fromTo($('.info_main_cube5'), 2, {
  y: -15,
  x: 15
}, {
  y: 0,
  x: 0,
  yoyo: true,
  repeat: -1
}, 0);

tl.fromTo($('.info_main_cube6'), 2, {
  y: 0,
  x: 0
}, {
  y: 15,
  x: 15,
  yoyo: true,
  repeat: -1
}, 0);
tl.fromTo($('.info_main_cube7'), 2, {
  y: 0,
  x: 0
}, {
  y: 15,
  x: 15,
  yoyo: true,
  repeat: -1
}, 0);
