/* إنجاز · SAJED STUDIO — شهادة إتمام ثنائية اللغة بطابع جامعي رسمي (Canvas) */
(function(){
const INK='#16161a',RED='#9e0f1c',GRAY='#5d5f66';
window.VERIFY_URL='https://injaz-sajedstudio.netlify.app/verify';
const gold=(c,x0,y0,x1,y1)=>{const g=c.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,'#8a6a1f');g.addColorStop(.35,'#e9d283');g.addColorStop(.55,'#b8902f');g.addColorStop(.8,'#f1df9b');g.addColorStop(1,'#8a6a1f');return g};
const AR=n=>Number(n).toLocaleString('ar-EG',{maximumFractionDigits:1});
function T(c,s,x,y,font,color,dir='ltr',align='center'){c.font=font;c.fillStyle=color;c.direction=dir;c.textAlign=align;c.fillText(s,x,y)}
function fit(c,s,font,size,max){let f=size;c.font=font.replace('$',f);while(c.measureText(s).width>max&&f>22){f-=2;c.font=font.replace('$',f)}return font.replace('$',f)}
function rosette(c,x,y,R,A,n,lines,color,alpha,w){c.save();c.globalAlpha=alpha;c.strokeStyle=color;c.lineWidth=w;for(let k=0;k<lines;k++){const ph=k*Math.PI*2/lines/n;c.beginPath();for(let t=0;t<=360;t++){const a=t*Math.PI/180,r=R+A*Math.sin(n*(a+ph));const px=x+r*Math.cos(a),py=y+r*Math.sin(a);t?c.lineTo(px,py):c.moveTo(px,py)}c.closePath();c.stroke()}c.restore()}
function frieze(c,W,H,m){c.save();c.lineWidth=1;const edge=(len,fn)=>{for(let k=0;k<4;k++){c.strokeStyle=k%2?'rgba(140,108,35,.55)':'rgba(158,15,28,.35)';for(const d of [1,-1]){c.beginPath();for(let s=0;s<=len;s+=3){const o=9*Math.sin(d*s/14+k*Math.PI/2);const [px,py]=fn(s,o);s?c.lineTo(px,py):c.moveTo(px,py)}c.stroke()}}};
 edge(W-2*m,(s,o)=>[m+s,m+o]);edge(W-2*m,(s,o)=>[m+s,H-m+o]);edge(H-2*m,(s,o)=>[m+o,m+s]);edge(H-2*m,(s,o)=>[W-m+o,m+s]);c.restore();
 for(const [x,y] of [[m,m],[W-m,m],[m,H-m],[W-m,H-m]]){c.fillStyle='#fbf7ec';c.beginPath();c.arc(x,y,34,0,7);c.fill();rosette(c,x,y,20,8,8,6,'#8a6a1f',.9,1);c.strokeStyle=gold(c,x-34,y-34,x+34,y+34);c.lineWidth=3;c.beginPath();c.arc(x,y,34,0,7);c.stroke()}}
function laurel(c,cx,cy,R,a0s,a1s){c.save();for(const side of [-1,1]){const a0=side<0?a0s:180-a0s,a1=side<0?a1s:180-a1s,N=12;
 c.strokeStyle='#8a6a1f';c.lineWidth=2.4;c.beginPath();for(let i=0;i<=40;i++){const th=(a0+(a1-a0)*i/40)*Math.PI/180;const px=cx+R*Math.cos(th),py=cy+R*Math.sin(th);i?c.lineTo(px,py):c.moveTo(px,py)}c.stroke();
 for(let i=0;i<N;i++){const th=(a0+(a1-a0)*(i+.5)/N)*Math.PI/180,px=cx+R*Math.cos(th),py=cy+R*Math.sin(th),tang=th+(side<0?Math.PI/2:-Math.PI/2),sz=1-i*.03;
  for(const tilt of [.6,-.6]){c.save();c.translate(px,py);c.rotate(tang+tilt);c.fillStyle=gold(c,0,-6,26,6);c.beginPath();c.ellipse(14*sz,0,14*sz,5.5*sz,0,0,7);c.fill();c.restore()}}}c.restore()}
function shield(c,cx,top,w,h){const l=cx-w/2,r=cx+w/2;const path=()=>{c.beginPath();c.moveTo(l,top+12);c.quadraticCurveTo(cx,top-14,r,top+12);c.lineTo(r,top+h*.55);c.quadraticCurveTo(r,top+h*.86,cx,top+h);c.quadraticCurveTo(l,top+h*.86,l,top+h*.55);c.closePath()};
 c.save();c.shadowColor='rgba(0,0,0,.25)';c.shadowBlur=14;c.shadowOffsetY=5;path();const g=c.createLinearGradient(l,top,r,top+h);g.addColorStop(0,'#45454b');g.addColorStop(.5,'#0c0c0e');g.addColorStop(1,'#2b2b30');c.fillStyle=g;c.fill();c.restore();
 path();c.strokeStyle=gold(c,l,top,r,top+h);c.lineWidth=6;c.stroke();
 const t=c.createLinearGradient(0,top+20,0,top+h*.8);t.addColorStop(0,'#ffffff');t.addColorStop(1,'#a7a7ad');c.fillStyle=t;c.font=`700 ${w*.56}px Syncopate`;c.textAlign='center';c.direction='ltr';c.fillText('S',cx,top+h*.66);
 c.strokeStyle='#d0142a';c.lineWidth=w*.045;c.lineCap='round';c.beginPath();c.moveTo(cx-w*.3,top+h*.76);c.lineTo(cx+w*.3,top+h*.22);c.stroke()}
function seal(c,x,y,r,year,silver){c.save();
 c.fillStyle=RED;for(const s of [-1,1]){c.beginPath();c.moveTo(x+s*22,y+r*.4);c.lineTo(x+s*58,y+r+26);c.lineTo(x+s*42,y+r+14);c.lineTo(x+s*24,y+r+30);c.lineTo(x+s*2,y+r*.5);c.closePath();c.fill()}
 c.beginPath();const n=36;for(let i=0;i<=n*2;i++){const a=i*Math.PI/n,rad=i%2?r:r*.94;c.lineTo(x+rad*Math.cos(a),y+rad*Math.sin(a))}c.closePath();
 const g=c.createRadialGradient(x-r*.35,y-r*.4,r*.05,x,y,r*1.05);if(silver){g.addColorStop(0,'#ffffff');g.addColorStop(.35,'#d9dce1');g.addColorStop(.75,'#9ea3ab');g.addColorStop(1,'#646a73')}else{g.addColorStop(0,'#fff3c4');g.addColorStop(.35,'#e2c56d');g.addColorStop(.75,'#b08a2c');g.addColorStop(1,'#7d5f1a')}c.fillStyle=g;c.shadowColor='rgba(0,0,0,.3)';c.shadowBlur=16;c.shadowOffsetY=5;c.fill();c.shadowColor='transparent';
 c.strokeStyle=silver?'rgba(70,75,85,.8)':'rgba(110,82,20,.8)';c.lineWidth=2;for(const k of [.84,.6]){c.beginPath();c.arc(x,y,r*k,0,7);c.stroke()}
 rosette(c,x,y,r*.4,r*.08,10,6,silver?'#4a4f58':'#6e5214',.55,1);
 c.fillStyle=silver?'#3d424a':'#5e450f';c.font=`700 ${Math.round(r*.105)}px Cinzel`;c.textAlign='center';c.direction='ltr';const ring=(silver?'SAJED STUDIO • UNIT • ACHIEVEMENT • ':'SAJED STUDIO • INJAZ • CERTIFIED • ')+year+' • ';for(let i=0;i<ring.length;i++){c.save();c.translate(x,y);c.rotate(i/ring.length*Math.PI*2);c.fillText(ring[i],0,-r*.67);c.restore()}
 c.font=`700 ${Math.round(r*.42)}px Cinzel`;c.fillText('S',x,y+r*.15);c.restore()}
function oak(c,x,y,s,rot){c.save();c.translate(x,y);c.rotate(rot);c.scale(s,s);c.beginPath();c.moveTo(0,0);
 for(let t=0;t<=1.0001;t+=.02){const w=26*Math.sin(Math.PI*t)*(.72+.28*Math.cos(t*Math.PI*8));c.lineTo(t*110,-w)}for(let t=1;t>=-.0001;t-=.02){const w=26*Math.sin(Math.PI*t)*(.72+.28*Math.cos(t*Math.PI*8));c.lineTo(t*110,w)}c.closePath();
 const g=c.createLinearGradient(0,-20,110,20);g.addColorStop(0,'#6e2417');g.addColorStop(1,'#a5432c');c.fillStyle=g;c.globalAlpha=.85;c.fill();c.globalAlpha=1;c.strokeStyle='rgba(255,230,210,.45)';c.lineWidth=1.4;c.beginPath();c.moveTo(-14,0);c.lineTo(104,0);for(const t of [.25,.45,.65,.82]){c.moveTo(t*110,0);c.lineTo(t*110+14,-16);c.moveTo(t*110,0);c.lineTo(t*110+14,16)}c.stroke();c.restore()}
function acorn(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#8a5a2b';c.beginPath();c.ellipse(0,10,11,15,0,0,7);c.fill();c.fillStyle='#5a3417';c.beginPath();c.ellipse(0,-2,14,8,0,Math.PI,0);c.fill();c.fillRect(-1.5,-14,3,7);c.restore()}
function oakCluster(c,x,y){oak(c,x,y,1,-1.25);oak(c,x+6,y+4,.9,-.55);oak(c,x-4,y+8,.85,-2.05);oak(c,x+4,y+10,.75,.35);acorn(c,x-8,y+30,1);acorn(c,x+14,y+36,.9)}
function ornament(c,x,y,w){c.save();c.strokeStyle=gold(c,x-w,y,x+w,y);c.lineWidth=1.6;c.beginPath();c.moveTo(x-w,y);c.lineTo(x-12,y);c.moveTo(x+12,y);c.lineTo(x+w,y);c.stroke();c.translate(x,y);c.rotate(Math.PI/4);c.fillStyle=RED;c.fillRect(-6,-6,12,12);c.restore()}
function qr(c,text,x,y,size){if(typeof window.qrcode!=='function')return false;try{const q=window.qrcode(0,'M');q.addData(unescape(encodeURIComponent(text)));q.make();const n=q.getModuleCount(),cell=size/(n+2);c.fillStyle='#fffdf7';c.fillRect(x,y,size,size);c.fillStyle=INK;for(let r=0;r<n;r++)for(let k=0;k<n;k++)if(q.isDark(r,k))c.fillRect(x+(k+1)*cell,y+(r+1)*cell,Math.ceil(cell),Math.ceil(cell));return true}catch(e){return false}}
window.verifyLink=o=>window.VERIFY_URL+'?'+new URLSearchParams({id:o.serial,n:o.name}).toString();
async function drawUnit(o){
 const W=2000,H=1414,cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');const NAVY='#141b2d';
 c.fillStyle='#fffefb';c.fillRect(0,0,W,H);
 c.strokeStyle=NAVY;c.lineWidth=2.5;c.strokeRect(70,70,W-140,H-140);c.strokeStyle='#b8902f';c.lineWidth=1.2;c.strokeRect(84,84,W-168,H-168);
 shield(c,W/2,120,78,106);
 T(c,'Sajed Studio',W/2,312,'400 52px UnifrakturMaguntia',NAVY);
 T(c,'INJAZ  LEARNING  PLATFORM   ·   منصّة إنجاز للتعلّم',W/2,350,'700 15px Cinzel',GRAY);
 T(c,'شهادة إنجاز وحدة',W/2,450,'700 52px Amiri',NAVY,'rtl');
 T(c,'Certificate of Unit Achievement',W/2,502,'italic 400 36px "EB Garamond"',RED);
 c.strokeStyle='#b8902f';c.lineWidth=1.2;c.beginPath();c.moveTo(W/2-200,530);c.lineTo(W/2+200,530);c.stroke();
 T(c,'This certifies that',W/2,596,'italic 400 30px "EB Garamond"',GRAY);
 const en=o.nameEn||o.name;T(c,en,W/2,672,fit(c,en,'italic 600 $px "EB Garamond"',66,1300),NAVY,/[\u0600-\u06FF]/.test(en)?'rtl':'ltr');
 const y0=o.nameEn?0:-48;if(o.nameEn)T(c,o.name,W/2,734,fit(c,o.name,'700 $px Amiri',50,1200),NAVY,'rtl');
 T(c,'has successfully completed',W/2,794+y0,'400 29px "EB Garamond"','#2a2a2e');
 T(c,o.courseEn,W/2,846+y0,fit(c,o.courseEn,'600 $px "EB Garamond"',38,1300),RED);
 T(c,`of the course “${o.parentEn}”`,W/2,888+y0,fit(c,`of the course “${o.parentEn}”`,'italic 400 $px "EB Garamond"',27,1300),'#3a3a40');
 T(c,'تقديراً لإتمام '+o.course,W/2,946+y0,fit(c,'تقديراً لإتمام '+o.course,'700 $px Amiri',34,1300),RED,'rtl');
 T(c,'من كورس '+o.parent,W/2,990+y0,fit(c,'من كورس '+o.parent,'400 $px Amiri',28,1300),'#3a3a40','rtl');
 const d=new Date(o.date+'T12:00:00');
 T(c,d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})+'  ·  '+d.toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'}),W/2,1050+y0,'400 24px "EB Garamond"',GRAY);
 const L=520,R=1480;T(c,'ساجد سعد',L,1170,'700 62px "Aref Ruqaa"','#0f1a3a','rtl');c.strokeStyle=NAVY;c.lineWidth=1;c.beginPath();c.moveTo(L-180,1190);c.lineTo(L+180,1190);c.stroke();
 T(c,'Sajed Saad · Founder, SAJED STUDIO',L,1224,'italic 400 22px "EB Garamond"',GRAY);
 T(c,'No. '+o.serial,W/2,1180,'700 14px Syncopate',RED);T(c,'Verify: injaz-sajedstudio.netlify.app/verify',W/2,1214,'400 19px "EB Garamond"',GRAY);
 seal(c,R,1170,62,d.getFullYear(),true);
 return cv}
window.drawCertificate=async function(o){
 const fonts=['700 40px Amiri','400 40px Amiri','700 40px "Aref Ruqaa"','400 40px UnifrakturMaguntia','700 40px Cinzel','400 40px Cinzel','400 40px "EB Garamond"','italic 400 40px "EB Garamond"','600 40px "EB Garamond"','italic 600 40px "EB Garamond"','700 20px Syncopate'];
 try{await Promise.all(fonts.map(f=>document.fonts.load(f,'شهادة Aa')))}catch(e){}
 if(o.kind==='unit')return drawUnit(o);
 const W=2000,H=1414,cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');const NAVY='#141b2d';
 /* paper */
 const bg=c.createRadialGradient(W/2,H*.45,200,W/2,H/2,1300);bg.addColorStop(0,'#fffdf6');bg.addColorStop(1,'#efe5cc');c.fillStyle=bg;c.fillRect(0,0,W,H);
 c.save();for(let i=0;i<9000;i++){c.fillStyle=`rgba(120,95,40,${Math.random()*.035})`;c.fillRect(Math.random()*W,Math.random()*H,1.4,1.4)}c.restore();
 /* watermark crest */
 rosette(c,W/2,770,300,40,14,12,'#a8842c',.05,1.2);
 (function(){const x=W/2,top=520,w=420,h=560,l=x-w/2,r=x+w/2;const path=(dx,dy)=>{c.beginPath();c.moveTo(l+dx,top+30+dy);c.quadraticCurveTo(x+dx,top-30+dy,r+dx,top+30+dy);c.lineTo(r+dx,top+h*.55+dy);c.quadraticCurveTo(r+dx,top+h*.86+dy,x+dx,top+h+dy);c.quadraticCurveTo(l+dx,top+h*.86+dy,l+dx,top+h*.55+dy);c.closePath()};
  c.save();c.globalAlpha=.09;path(3,3);c.fillStyle='#8a6a1f';c.fill();path(-2,-2);c.fillStyle='#ffffff';c.fill();path(0,0);c.fillStyle='#efe3c2';c.fill();c.globalAlpha=.16;c.strokeStyle='#a8842c';c.lineWidth=3;path(0,0);c.stroke();
  c.globalAlpha=.07;c.fillStyle='#7d5f1a';c.font='700 330px Syncopate';c.textAlign='center';c.direction='ltr';c.fillText('S',x,top+h*.68);c.restore();
  c.save();c.globalAlpha=.1;laurel(c,x,top+h*.45,330,100,255);c.restore()})();
 (function(){c.save();c.fillStyle='rgba(138,106,31,.55)';c.font='600 9px Cinzel';c.direction='ltr';c.textAlign='left';const unit='SAJED STUDIO · INJAZ · CERTIFIED · ';let str='';while(str.length<520)str+=unit;c.fillText(str.slice(0,330),96,101);c.fillText(str.slice(0,330),96,H-95);c.restore()})();
 /* restrained frame: double rule + corner flourishes */
 c.strokeStyle=NAVY;c.lineWidth=3;c.strokeRect(60,60,W-120,H-120);c.lineWidth=1;c.strokeRect(74,74,W-148,H-148);
 c.strokeStyle=gold(c,0,0,W,H);c.lineWidth=2;c.strokeRect(84,84,W-168,H-168);
 for(const [x,y,sx,sy] of [[84,84,1,1],[W-84,84,-1,1],[84,H-84,1,-1],[W-84,H-84,-1,-1]]){c.save();c.translate(x,y);c.scale(sx,sy);c.strokeStyle=gold(c,0,0,90,90);c.lineWidth=2;c.beginPath();c.moveTo(14,60);c.bezierCurveTo(14,26,26,14,60,14);c.moveTo(24,90);c.bezierCurveTo(28,40,40,28,90,24);c.stroke();c.fillStyle=RED;c.beginPath();c.arc(26,26,5,0,7);c.fill();c.restore()}
 /* crest + motto ribbon */
 laurel(c,W/2,196,92,105,250);shield(c,W/2,108,112,150);
 (function(){const y=262,w=150;c.save();c.fillStyle='#7d5f1a';for(const s of [-1,1]){c.beginPath();c.moveTo(W/2+s*w,y-6);c.lineTo(W/2+s*(w+34),y-6);c.lineTo(W/2+s*(w+22),y+9);c.lineTo(W/2+s*(w+34),y+24);c.lineTo(W/2+s*w,y+24);c.closePath();c.fill()}
  c.beginPath();c.moveTo(W/2-w,y-12);c.quadraticCurveTo(W/2,y+2,W/2+w,y-12);c.lineTo(W/2+w,y+18);c.quadraticCurveTo(W/2,y+32,W/2-w,y+18);c.closePath();c.fillStyle=gold(c,W/2-w,0,W/2+w,0);c.shadowColor='rgba(0,0,0,.2)';c.shadowBlur=6;c.fill();c.restore();
  T(c,'ARS  ET  SCIENTIA',W/2,y+13,'700 15px Cinzel','#3d2c06')})();
 /* institution & title */
 T(c,'Sajed Studio',W/2,360,'400 70px UnifrakturMaguntia',NAVY);
 T(c,'INJAZ  LEARNING  PLATFORM   ·   منصّة إنجاز للتعلّم',W/2,398,'700 17px Cinzel',GRAY);
 const U=o.kind==='unit';
 T(c,U?'شَهَادَةُ إِنْجَازِ وَحْدَة':'شَهَادَةُ إِتْمَام',W/2,488,'700 54px Amiri',NAVY,'rtl');
 T(c,U?'C E R T I F I C A T E   O F   U N I T   A C H I E V E M E N T':'C E R T I F I C A T E   O F   C O M P L E T I O N',W/2,532,'700 20px Cinzel',RED);
 oakCluster(c,228,700);
 ornament(c,W/2,558,230);
 const g=o.score>=90?['with Distinction','بتقدير امتياز']:o.score>=80?['with Merit','بتقدير جيد جداً']:['with Pass','بتقدير جيد'];
 const d=new Date(o.date+'T12:00:00'),day=d.getDate(),suf=(day%10===1&&day!==11)?'st':(day%10===2&&day!==12)?'nd':(day%10===3&&day!==13)?'rd':'th';
 const h=Math.max(1,Math.round(+o.hours)),arH=h===1?'ساعة تعليمية واحدة':h===2?'ساعتان تعليميتان':h<=10?`${AR(h)} ساعات تعليمية`:`${AR(h)} ساعة تعليمية`,enH=h===1?'1 learning hour':`${h} learning hours`;
 T(c,'This is to certify that',W/2,606,'italic 400 32px "EB Garamond"',GRAY);
 T(c,'تُمنح هذه الشهادة إلى',W/2,644,'400 31px Amiri',GRAY,'rtl');
 const en=o.nameEn||o.name;T(c,en,W/2,720,fit(c,en,'italic 600 $px "EB Garamond"',78,1400),NAVY,/[؀-ۿ]/.test(en)?'rtl':'ltr');
 const y0=o.nameEn?0:-46;if(o.nameEn)T(c,o.name,W/2,782,fit(c,o.name,'700 $px Amiri',58,1300),NAVY,'rtl');
 T(c,U?`having satisfied all the requirements prescribed, has completed a unit of the course “${o.parentEn}”`:'having satisfied all the requirements prescribed, has completed the course of study in',W/2,836+y0,fit(c,U?`having satisfied all the requirements prescribed, has completed a unit of the course “${o.parentEn}”`:'x','400 $px "EB Garamond"',30,1400),'#2a2a2e');
 T(c,U?`بعد استيفاء جميع المتطلبات المقرّرة لإتمام وحدة دراسية من كورس ${o.parent}`:'بعد استيفاء جميع المتطلبات المقرّرة لإتمام البرنامج التعليمي في',W/2,874+y0,fit(c,U?`بعد استيفاء جميع المتطلبات المقرّرة لإتمام وحدة دراسية من كورس ${o.parent}`:'x','400 $px Amiri',31,1400),'#2a2a2e','rtl');
 T(c,o.courseEn,W/2,932+y0,fit(c,o.courseEn,'700 $px Cinzel',40,1400),RED);
 T(c,'«'+o.course+'»',W/2,980+y0,fit(c,'«'+o.course+'»','700 $px Amiri',44,1400),RED,'rtl');
 T(c,`${g[0]} (${o.score}%)  ·  ${enH}  ·  given this ${day}${suf} day of ${d.toLocaleDateString('en-GB',{month:'long'})}, ${d.getFullYear()}`,W/2,1026+y0,'italic 400 26px "EB Garamond"','#3a3a40');
 T(c,`${g[1]} (${AR(o.score)}٪)  ·  ${arH}  ·  حُرّرت في ${d.toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'})}`,W/2,1062+y0,'400 27px Amiri','#3a3a40','rtl');
 /* signature */
 const L=470,R=1530;
 T(c,'ساجد سعد',L,1176,'700 72px "Aref Ruqaa"','#0f1a3a','rtl');
 c.strokeStyle=NAVY;c.lineWidth=1.2;c.beginPath();c.moveTo(L-200,1196);c.lineTo(L+200,1196);c.stroke();
 T(c,'Sajed Saad',L,1230,'700 22px Cinzel',NAVY);T(c,'Founder, SAJED STUDIO  ·  المؤسس',L,1262,'italic 400 23px "EB Garamond"',GRAY);
 /* verification + QR */
 const link=window.verifyLink(o),hasQR=qr(c,link,1118,1098,128),vx=hasQR?930:1000;
 T(c,'VERIFICATION No.  ·  رقم التحقق',vx,1132,'700 15px Cinzel',GRAY);
 T(c,o.serial,vx,1174,'700 15px Syncopate',RED);
 c.strokeStyle=NAVY;c.lineWidth=1.2;c.beginPath();c.moveTo(vx-170,1196);c.lineTo(vx+170,1196);c.stroke();
 T(c,'Verify at  ·  للتحقق',vx,1230,'italic 400 22px "EB Garamond"',GRAY);
 T(c,'injaz-sajedstudio.netlify.app/verify',vx,1262,'600 19px "EB Garamond"',NAVY);
 /* embossed seal */
 seal(c,R+20,1180,92,d.getFullYear(),U);
 return cv};
})();
