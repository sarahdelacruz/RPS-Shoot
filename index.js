//for Player 1
var randomPic1 = Math.floor(Math.random() * 3) + 1;
var randomImg1 = "rsp" + randomPic1 + ".png"
var randomImgsrc1 = "images/" + randomImg1;
var img1 = document.querySelector('.img1');
img1.setAttribute('src', randomImgsrc1);//random image for player1

//for Player 2
var randomPic2 = Math.floor(Math.random() * 3) + 1;
var randomImg2 = "rsp" + randomPic2 + ".png"
var randomImgsrc2 = "images/" + randomImg2;
var img2 = document.querySelector('.img2');
img2.setAttribute('src', randomImgsrc2);//random image for player2


var title = document.querySelector('h1'); 
var player1 = document.querySelector('.p1');
var player2 = document.querySelector('.p2');

//winners
if (randomPic1 == 2 & randomPic2 == 1 | randomPic1 == 1 & randomPic2 == 2 ){
		 title.textContent = 'Paper Wins!'};
if (randomPic1 == 3 & randomPic2 == 1 | randomPic1 == 1 & randomPic2 == 3 ){
		 title.textContent = 'Rock Wins!'};
if (randomPic1 == 2 & randomPic2 == 3 | randomPic1 == 3 & randomPic2 == 2 ){
		 title.textContent = 'Scissor Wins!'};

//player winners and losers
if (randomPic1 == 2 & randomPic2 == 1 | randomPic1 == 1 & randomPic2 == 3 | randomPic1 == 3 & randomPic2 == 2){
	player1.innerHTML = '&#127942; <b>Player 1 Wins</b>'};
if (randomPic2 == 2 & randomPic1 == 1 | randomPic1 == 3 & randomPic2 == 1 | randomPic1 == 2 & randomPic2 == 3){
	player2.innerHTML = '&#127942; <b>Player 2 Wins</b>'};
if (randomPic1 == 1 & randomPic2 == 2 | randomPic1 == 3 & randomPic2 == 1 | randomPic1 == 2 & randomPic2 == 3){
	player1.innerHTML = '&#10060; <strike>Player 1</strike>'}
if (randomPic1 == 2 & randomPic2 == 1 | randomPic1 == 1 & randomPic2 == 3 | randomPic1 == 3 & randomPic2 == 2){
	player2.innerHTML = '&#10060; <strike>Player 2</strike>'}

//for identical image
if (randomPic1 == 1 & randomPic2 == 1 | randomPic1 == 2 & randomPic2 == 2 | randomPic1 == 3 & randomPic2 == 3){
		 title.textContent = 'Try Again.'};
//this is the end of this code 
