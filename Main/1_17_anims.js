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
const RH_2 = document.getElementById('RH_2');
const RH_6 = document.getElementById('RH_6');

const LH_Boxes = document.getElementById('LH_Boxes');
const LH_1 = document.getElementById('LH_1');
const LH_2 = document.getElementById('LH_2');
const LH_6 = document.getElementById('LH_6');

const TP_Boxes = document.getElementById('TP_Boxes');
const TP_1 = document.getElementById('TP_1');
const TP_2 = document.getElementById('TP_2');
const TP_3 = document.getElementById('TP_3');
const TP_4 = document.getElementById('TP_4');
const TP_5 = document.getElementById('TP_5');
const TP_6 = document.getElementById('TP_6');
const TP_7 = document.getElementById('TP_7');
const TP_8 = document.getElementById('TP_8');
const TP_9 = document.getElementById('TP_9');

/*-------------------------------------define const for audio files-------------------------------------*/

const audio = document.getElementById('audio');

/*----------------------------------------define const for boxes----------------------------------------*/

const RH_2_1_box = document.getElementById('RH_2_1_box');
const RH_6_2_box = document.getElementById('RH_6_2_box');
const RH_6_3_box = document.getElementById('RH_6_3_box');
const RH_6_4_box = document.getElementById('RH_6_4_box');

const LH_1_box = document.getElementById('LH_1_box');
const LH_2_1_box = document.getElementById('LH_2_1_box');
const LH_2_2_box = document.getElementById('LH_2_2_box');
const LH_6_1_box = document.getElementById('LH_6_1_box');
const LH_6_2_box = document.getElementById('LH_6_2_box');
const LH_6_3_box = document.getElementById('LH_6_3_box');
const LH_6_4_box = document.getElementById('LH_6_4_box');
const LH_6_5_box = document.getElementById('LH_6_5_box');

const TP_1_box = document.getElementById('TP_1_box');
const TP_2_1_box = document.getElementById('TP_2_1_box');
const TP_2_2_box = document.getElementById('TP_2_2_box');
const TP_3_box = document.getElementById('TP_3_box');
const TP_4_1_box = document.getElementById('TP_4_1_box');
const TP_4_2_box = document.getElementById('TP_4_2_box');
const TP_4_3_box = document.getElementById('TP_4_3_box');
const TP_4_4_box = document.getElementById('TP_4_4_box');
const TP_4_5_box = document.getElementById('TP_4_5_box');
const TP_4_6_box = document.getElementById('TP_4_6_box');
const TP_4_7_box = document.getElementById('TP_4_7_box');
const TP_5_box = document.getElementById('TP_5_box');
const TP_6_1_box = document.getElementById('TP_6_1_box');
const TP_6_2_box = document.getElementById('TP_6_2_box');
const TP_6_3_box = document.getElementById('TP_6_3_box');
const TP_6_4_box = document.getElementById('TP_6_4_box');
const TP_6_5_box = document.getElementById('TP_6_5_box');
const TP_7_box = document.getElementById('TP_7_box');
const TP_8_box = document.getElementById('TP_8_box');
const TP_9_box = document.getElementById('TP_9_box');

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
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
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
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
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
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);

lh.addEventListener('click', function(){
		if (LH_Boxes.style.visibility === 'visible') {
			LH_Boxes.style.visibility = 'hidden';
			lh.classList.remove("lhactive");
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
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
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);

rh.addEventListener('click', function(){
		if (RH_Boxes.style.visibility === 'visible') {
			RH_Boxes.style.visibility = 'hidden';
			rh.classList.remove("rhactive");
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
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
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
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
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
},false);

/*------------------------------------functions boxes display text--------------------------------------*/

RH_2_1_box.addEventListener('click', function(){
		if (RH_2.style.visibility === 'visible') {
			RH_2.style.visibility = 'hidden';} 
		else {
			RH_2.style.visibility = 'visible';
			RH_6.style.visibility = 'hidden';
		}
},false);
RH_6_2_box.addEventListener('click', function(){
		if (RH_6.style.visibility === 'visible') {
			RH_6.style.visibility = 'hidden';} 
		else {
			RH_6.style.visibility = 'visible';
			RH_2.style.visibility = 'hidden';
		}
},false);
RH_6_3_box.addEventListener('click', function(){
		if (RH_6.style.visibility === 'visible') {
			RH_6.style.visibility = 'hidden';} 
		else {
			RH_6.style.visibility = 'visible';
			RH_2.style.visibility = 'hidden';
		}
},false);
RH_6_4_box.addEventListener('click', function(){
		if (RH_6.style.visibility === 'visible') {
			RH_6.style.visibility = 'hidden';} 
		else {
			RH_6.style.visibility = 'visible';
			RH_2.style.visibility = 'hidden';
		}
},false);

LH_1_box.addEventListener('click', function(){
		if (LH_1.style.visibility === 'visible') {
			LH_1.style.visibility = 'hidden';} 
		else {
			LH_1.style.visibility = 'visible';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
		}
},false);
LH_2_1_box.addEventListener('click', function(){
		if (LH_2.style.visibility === 'visible') {
			LH_2.style.visibility = 'hidden';} 
		else {
			LH_2.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
		}
},false);
LH_2_2_box.addEventListener('click', function(){
		if (LH_2.style.visibility === 'visible') {
			LH_2.style.visibility = 'hidden';} 
		else {
			LH_2.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
		}
},false);
LH_6_1_box.addEventListener('click', function(){
		if (LH_6.style.visibility === 'visible') {
			LH_6.style.visibility = 'hidden';} 
		else {
			LH_6.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
		}
},false);
LH_6_2_box.addEventListener('click', function(){
		if (LH_6.style.visibility === 'visible') {
			LH_6.style.visibility = 'hidden';} 
		else {
			LH_6.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
		}
},false);
LH_6_3_box.addEventListener('click', function(){
		if (LH_6.style.visibility === 'visible') {
			LH_6.style.visibility = 'hidden';} 
		else {
			LH_6.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
		}
},false);
LH_6_4_box.addEventListener('click', function(){
		if (LH_6.style.visibility === 'visible') {
			LH_6.style.visibility = 'hidden';} 
		else {
			LH_6.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
		}
},false);
LH_6_5_box.addEventListener('click', function(){
		if (LH_6.style.visibility === 'visible') {
			LH_6.style.visibility = 'hidden';} 
		else {
			LH_6.style.visibility = 'visible';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
		}
},false);

TP_1_box.addEventListener('click', function(){
		if (TP_1.style.visibility === 'visible') {
			TP_1.style.visibility = 'hidden';} 
		else {
			TP_1.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_2_1_box.addEventListener('click', function(){
		if (TP_2.style.visibility === 'visible') {
			TP_2.style.visibility = 'hidden';} 
		else {
			TP_2.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_2_2_box.addEventListener('click', function(){
		if (TP_2.style.visibility === 'visible') {
			TP_2.style.visibility = 'hidden';} 
		else {
			TP_2.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
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
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_1_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_2_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_3_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_4_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_5_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_6_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_4_7_box.addEventListener('click', function(){
		if (TP_4.style.visibility === 'visible') {
			TP_4.style.visibility = 'hidden';} 
		else {
			TP_4.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_5_box.addEventListener('click', function(){
		if (TP_5.style.visibility === 'visible') {
			TP_5.style.visibility = 'hidden';} 
		else {
			TP_5.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_6_1_box.addEventListener('click', function(){
		if (TP_6.style.visibility === 'visible') {
			TP_6.style.visibility = 'hidden';} 
		else {
			TP_6.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_6_2_box.addEventListener('click', function(){
		if (TP_6.style.visibility === 'visible') {
			TP_6.style.visibility = 'hidden';} 
		else {
			TP_6.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_6_3_box.addEventListener('click', function(){
		if (TP_6.style.visibility === 'visible') {
			TP_6.style.visibility = 'hidden';} 
		else {
			TP_6.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_6_4_box.addEventListener('click', function(){
		if (TP_6.style.visibility === 'visible') {
			TP_6.style.visibility = 'hidden';} 
		else {
			TP_6.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_6_5_box.addEventListener('click', function(){
		if (TP_6.style.visibility === 'visible') {
			TP_6.style.visibility = 'hidden';} 
		else {
			TP_6.style.visibility = 'visible';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_7_box.addEventListener('click', function(){
		if (TP_7.style.visibility === 'visible') {
			TP_7.style.visibility = 'hidden';} 
		else {
			TP_7.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_8_box.addEventListener('click', function(){
		if (TP_8.style.visibility === 'visible') {
			TP_8.style.visibility = 'hidden';} 
		else {
			TP_8.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
		}
},false);
TP_9_box.addEventListener('click', function(){
		if (TP_9.style.visibility === 'visible') {
			TP_9.style.visibility = 'hidden';} 
		else {
			TP_9.style.visibility = 'visible';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
		}
},false);
/*--------------------------------just some quick edit help for hide------------------------------------*/
/*
			RH_2.style.visibility = 'hidden';
			RH_6.style.visibility = 'hidden';
			LH_1.style.visibility = 'hidden';
			LH_2.style.visibility = 'hidden';
			LH_6.style.visibility = 'hidden';
			TP_1.style.visibility = 'hidden';
			TP_2.style.visibility = 'hidden';
			TP_3.style.visibility = 'hidden';
			TP_4.style.visibility = 'hidden';
			TP_5.style.visibility = 'hidden';
			TP_6.style.visibility = 'hidden';
			TP_7.style.visibility = 'hidden';
			TP_8.style.visibility = 'hidden';
			TP_9.style.visibility = 'hidden';
*/

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