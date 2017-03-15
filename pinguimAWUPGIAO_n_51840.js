/*    
        @licstart  The following is the entire license notice for this page.

        Copyright (C) 2015  Carlos J. Costa

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

    var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo, pontos;
    var pontos=0;    
    var audio = new Audio("ost.mp3");
        audio.play();
MaxHeight=-834;
function xiu(){
        audio.pause();
}
function unxiu(){
        audio.play();
}

function init(){
	YPos = 0;
	XPos = -607;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
}
function pontuacao(){
	pontos++;
        var maravilha = new Array("És bom nisto do teleporte!","Tu voas como o vento CARAMBA!!!","Está visto ... és MÁGICO!!","Isso é que é Pinguinar com força!","O meu voto vai para o teu Pinguim!");
	var n= Math.round(Math.random()*4);
        if(pontos>1){
	document.getElementById("contador").innerHTML="Tens "+pontos+" pontos! "+ maravilha[n]}
        else{document.getElementById("contador").innerHTML="Tens "+pontos+" ponto! Vai em busca de mais! "+maravilha[n] };
}	
function move(){
	if ((YPos >= 79)||(YPos <= -700)||(XPos >= 0)||(XPos <= MaxHeight)) {
	    stop();
	}
	if ((YPos<=-30)&&(YPos>=-59)&&(XPos<=-388)&&(XPos>=-455)) {
			YPos = -377;
	                XPos = -330;
                        stop();
                        pontuacao();};
        if ((YPos<=-167)&&(YPos>=-220)&&(XPos<=-10)&&(XPos>=-66)) {
			YPos = -608;
	                XPos = -643;
                        stop();
                        pontuacao();};
        if ((YPos<=-195)&&(YPos>=-246)&&(XPos<=-554)&&(XPos>=-632)) {
			YPos = -68;
	                XPos = -501;
                        stop();
                        pontuacao();};
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
    if (e.keyCode===83) stop();    
}