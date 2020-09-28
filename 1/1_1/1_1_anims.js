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

const TP_Boxes = document.getElementById('TP_Boxes');
const TP_1 = document.getElementById('TP_1');
const TP_2 = document.getElementById('TP_2');
const TP_3 = document.getElementById('TP_3');
const TP_4 = document.getElementById('TP_4');

/*-------------------------------------define const for audio files-------------------------------------*/

const audio = document.getElementById('audio');

/*----------------------------------------define const for boxes----------------------------------------*/

const TP_1_box = document.getElementById('TP_1_box');
const TP_2_box = document.getElementById('TP_2_box');
const TP_3_box = document.getElementById('TP_3_box');
const TP_4_box = document.getElementById('TP_4_box');

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
			LH.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			RH.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);

tp.addEventListener('click', function(){
		if (TP_Boxes.style.visibility === 'visible') {
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		} 
		else {
			TP_Boxes.style.visibility = 'visible';
			tp.classList.add("tpactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			LH.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			RH.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);

lh.addEventListener('click', function(){
		if (LH.style.visibility === 'visible') {
			LH.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
		} 
		else {
			LH.style.visibility = 'visible';
			lh.classList.add("lhactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			RH.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);

rh.addEventListener('click', function(){
		if (RH.style.visibility === 'visible') {
			RH.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
		} 
		else {
			RH.style.visibility = 'visible';
			rh.classList.add("rhactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			LH.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);

sbs.addEventListener('click', function(){
			RH.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			ST.style.visibility = 'hidden';
			st.classList.remove("stactive");
			TP_Boxes.style.visibility = 'hidden';
			tp.classList.remove("tpactive");
			LH.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
},false);

/*------------------------------------functions boxes display text--------------------------------------*/

TP_1_box.addEventListener('click', function(){
		if (TP_1.style.visibility === 'visible') {
			TP_1.style.visibility = 'hidden';} 
		else {
			TP_1.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);
TP_2_box.addEventListener('click', function(){
		if (TP_2.style.visibility === 'visible') {
			TP_2.style.visibility = 'hidden';} 
		else {
			TP_2.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);
TP_3_box.addEventListener('click', function(){
		if (TP_3.style.visibility === 'visible') {
			TP_3.style.visibility = 'hidden';} 
		else {
			TP_3.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
		}
},false);

TP_4_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
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