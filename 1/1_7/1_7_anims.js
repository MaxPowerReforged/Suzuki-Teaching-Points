/*----------------------------------------define const for buttons--------------------------------------*/
const tp = document.getElementById('tp');
const st = document.getElementById('st');
const rh = document.getElementById('rh');
const lh = document.getElementById('lh');
const sbs = document.getElementById('sbs');
const ls = document.getElementById('ls');

/*----------------------------------------define const for ABx------------------------------------------*/

const ST = document.getElementById('ST');
const RH = document.getElementById('RH');
const LH = document.getElementById('LH');
const TP = document.getElementById('TP');

const RH_Boxes = document.getElementById('RH_Boxes');
const RH_1 = document.getElementById('RH_1');

const LH_Boxes = document.getElementById('LH_Boxes');
const LH_1 = document.getElementById('LH_1');

const TP_Boxes = document.getElementById('TP_Boxes');
const TP_1 = document.getElementById('TP_1');

/*-------------------------------------define const for audio files-------------------------------------*/

const audio = document.getElementById('audio');

/*----------------------------------------define const for boxes----------------------------------------*/

const RH_1_box = document.getElementById('RH_1_box');

const LH_1_box = document.getElementById('LH_1_box');

const TP_1_box = document.getElementById('TP_1_box');

/*------------------------------------functions buttons boxes display-----------------------------------*/

st.addEventListener('click', function(){
		if (ST.style.visibility === 'visible') {
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");} 
		else {
			ST.style.visibility = 'visible';
			st.classList.add("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			LH_Boxes.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			RH_Boxes.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			RH_1.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
		}
},false);

tp.addEventListener('click', function(){
		if (TP_Boxes.style.visibility === 'visible') {
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			TP_1.style.visibility = 'hidden';
		} 
		else {
			TP_Boxes.style.visibility = 'visible';
			tp.classList.add("tpactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			LH_Boxes.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			RH_Boxes.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			RH_1.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
		}
},false);

lh.addEventListener('click', function(){
		if (LH_Boxes.style.visibility === 'visible') {
			LH_Boxes.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			LH_1.style.visibility = 'hidden';
		} 
		else {
			LH_Boxes.style.visibility = 'visible';
			lh.classList.add("lhactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			RH_Boxes.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			RH_1.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
		}
},false);

rh.addEventListener('click', function(){
		if (RH_Boxes.style.visibility === 'visible') {
			RH_Boxes.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			RH_1.style.visibility = 'hidden';
		} 
		else {
			RH_Boxes.style.visibility = 'visible';
			rh.classList.add("rhactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			LH_Boxes.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			RH_1.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
		}
},false);

sbs.addEventListener('click', function(){
			RH_Boxes.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			LH_Boxes.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			RH_1.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
},false);

/*------------------------------------functions boxes display text--------------------------------------*/

RH_1_box.addEventListener('click', function(){
		if (RH_1.style.visibility === 'visible') {
			RH_1.style.visibility = 'hidden';} 
		else {
			RH_1.style.visibility = 'visible';
		}
},false);

LH_1_box.addEventListener('click', function(){
		if (LH_1.style.visibility === 'visible') {
			LH_1.style.visibility = 'hidden';} 
		else {
			LH_1.style.visibility = 'visible';
		}
},false);

TP_1_box.addEventListener('click', function(){
		if (TP_1.style.visibility === 'visible') {
			TP_1.style.visibility = 'hidden';} 
		else {
			TP_1.style.visibility = 'visible';
		}
},false);

/*--------------------------------just some quick edit help for hide------------------------------------*/
/*
			
			RH_1.style.visibility = 'hidden';
			RH_2.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';

/*-------------------------------------------audio playback---------------------------------------------*/

ls.addEventListener('click', function(){
		if(audio.paused) {
			audio.currentTime=0;
			audio.play()
			ls.classList.add("lsactive");
						 
		}
        else  {
			audio.pause();
			ls.classList.remove("lsactive");
		}
},false);