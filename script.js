(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Demo data. Replace getRooftopAnalysis() with real API/model calls later ---------- */
var MOCK={
  nasa:[
    {i:'🌡',k:'Temperature',v:'31.4°C',s:'Suitable',so:'Heat stress risk is low today, but shade helps if it rises.'},
    {i:'🌧',k:'Precipitation',v:'12.8 mm',s:'Moderate',so:'Reduce tomorrow’s watering.'},
    {i:'🌱',k:'Environmental index',v:'0.64',s:'Healthy',so:'Influences crop suitability scores.'},
    {i:'☀️',k:'Seasonal conditions',v:'Sample',s:'Monsoon tail',so:'Adjust the planting plan.'}],
  stats:[
    {k:'Rooftop health',v:82,u:'/100',so:'Good overall conditions'},
    {k:'Temperature',v:31.4,u:'°C',d:1,so:'Within crop comfort range'},
    {k:'Rain probability',v:28,u:'%',so:'Low today, higher tomorrow'},
    {k:'Water today',v:1.2,u:' L',d:1,so:'Suggested for 12 containers'}],
  crops:[
    {n:'Tomato',e:'🍅',p:87,w:'Medium',sun:'6–8 h',risk:'Low',ok:['Temperature suitable','Sunlight sufficient','Soil condition acceptable'],warn:'Rain expected soon',f:[['🌡 Temperature',91],['☀️ Sunlight',90],['🌱 Soil',81],['💧 Water requirement',84],['🌧 Rain condition',76]],
      why:'Tomato is recommended because most environmental and rooftop conditions are favorable. Rain is expected soon, so watering should be reduced temporarily.'},
    {n:'Chili',e:'🌶',p:82,w:'Low–Medium',sun:'6–8 h',risk:'Low',ok:['Handles warm weather','Sunlight sufficient','Soil condition acceptable'],warn:'Heavy rain can drop flowers',f:[['🌡 Temperature',88],['☀️ Sunlight',86],['🌱 Soil',78],['💧 Water requirement',85],['🌧 Rain condition',70]],
      why:'Chili fits your warm rooftop and sunlight well. Protect it during heavy rain and avoid overwatering.'},
    {n:'Spinach',e:'🥬',p:76,w:'Medium',sun:'4–6 h',risk:'Medium',ok:['Soil condition acceptable','Water need is manageable'],warn:'Hot afternoons may stress leaves',f:[['🌡 Temperature',64],['☀️ Sunlight',80],['🌱 Soil',80],['💧 Water requirement',82],['🌧 Rain condition',78]],
      why:'Spinach prefers cooler weather, so it scores lower now. It becomes a strong choice later in the year, as shown in your plan.'}],
  water:[{d:'Today',l:1.2,note:''},{d:'Tomorrow',l:0,note:'78% rain probability'},{d:'Day 3',l:1.0,note:''}],
  saved:3.4,
  wx:[{d:'Today',t:31,i:'☀️',p:28,mm:0.5,h:'Heat: high'},{d:'Tomorrow',t:29,i:'🌧️',rain:1,p:78,mm:14,h:'Heat: low'},{d:'Day 3',t:30,i:'⛅',p:35,mm:2,h:'Heat: moderate'}],
  health:[['☀️ Sunlight',91],['🌡 Temperature',78],['💧 Water',84],['🌱 Soil',76],['🌧 Weather',81]],
  plan:[
    {m:'Jan–Mar',s:0,c:'Leafy greens',e:'🌿',w:'Medium',cond:'Cooler, drier weather',a:'Sow in prepared soil and keep it evenly moist.'},
    {m:'Apr–Jun',s:3,c:'Tomato',e:'🍅',w:'Medium',cond:'Warm, pre-monsoon',a:'Stake plants and water in the morning.'},
    {m:'Jul–Sep',s:6,c:'Chili',e:'🌶',w:'Low–Medium',cond:'Humid, frequent rain',a:'Check drainage and reduce watering after rain.'},
    {m:'Oct–Dec',s:9,c:'Spinach',e:'🥬',w:'Medium',cond:'Cooling, less rain',a:'Sow seeds and keep leaves shaded at noon.'}],
  steps:[
    {i:'🏠',t:'Rooftop input',p:'Tell us your location, containers, sunlight and soil photo.',m:'Everything is about one rooftop, not a region.'},
    {i:'🛰️',t:'Data fusion',p:'NASA Earth data, weather and crop requirements are combined.',m:'Temperature, precipitation and vegetation indicators give your location context.'},
    {i:'🤖',t:'AI analysis',p:'Soil image analysis, crop suitability and a decision engine.',m:'The soil photo is a visual estimate and does not replace lab testing.'},
    {i:'🌱',t:'Personalized output',p:'Crops, water schedule, 1-year plan and alerts.',m:'Each result comes with a reason you can read.'}],
  space:[['🛰','NASA'],['🌍','Earth observation'],['🌡🌧🌱','Temperature + Rainfall + Environment'],['🤖','AI analysis'],['🏠','Your rooftop'],['🌱','Personalized recommendation']]
};
function getRooftopAnalysis(input){ /* swap for real API calls; keep the return shape */ return Promise.resolve(MOCK); }

var h=function(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.innerHTML=x;return e};

/* ---------- Nav ---------- */
var nav=$('#nav'),burger=$('#burger'),menu=$('#menu');
function setMenu(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')}
burger.onclick=function(){setMenu(!menu.classList.contains('open'))};
menu.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
addEventListener('scroll',function(){nav.classList.toggle('sc',scrollY>20)},{passive:true});

/* ---------- Count-up ---------- */
function count(el,to,dec,dur){
  if(reduce){el.textContent=to.toFixed(dec||0);return}
  var t0=performance.now();(function f(t){var p=Math.min((t-t0)/(dur||900),1);el.textContent=(to*(1-Math.pow(1-p,3))).toFixed(dec||0);if(p<1)requestAnimationFrame(f)})(t0);
}
document.querySelectorAll('[data-count]').forEach(function(el){count(el,+el.dataset.count,+el.dataset.dec||0,1200)});

/* ---------- Static sections ---------- */
MOCK.steps.forEach(function(s,i){
  var b=h('button','step','<span class="n">Step '+(i+1)+'</span><span class="ic">'+s.i+'</span><h3>'+s.t+'</h3><p>'+s.p+'</p><div class="more">'+s.m+'</div>');
  b.setAttribute('aria-expanded','false');
  b.onclick=function(){var o=b.getAttribute('aria-expanded')==='true';document.querySelectorAll('.step').forEach(function(x){x.setAttribute('aria-expanded','false')});b.setAttribute('aria-expanded',!o)};
  $('#steps').appendChild(b);
});
MOCK.nasa.forEach(function(d){$('#nasaCards').appendChild(h('div','dc','<small>'+d.i+' '+d.k+' · Demo Data</small><b>'+d.v+'</b><span class="pill">'+d.s+'</span><div class="so">→ '+d.so+'</div>'))});
MOCK.space.forEach(function(s){$('#space').appendChild(h('li','','<span>'+s[0]+'</span>'+s[1]))});

/* ---------- Soil upload (simulated analysis) ---------- */
var drop=$('#drop'),file=$('#file'),soilT;
drop.onclick=function(){file.click()};
drop.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();file.click()}};
['dragover','dragenter'].forEach(function(n){drop.addEventListener(n,function(e){e.preventDefault();drop.classList.add('over')})});
['dragleave','drop'].forEach(function(n){drop.addEventListener(n,function(e){e.preventDefault();drop.classList.remove('over')})});
drop.addEventListener('drop',function(e){if(e.dataTransfer.files[0])handle(e.dataTransfer.files[0])});
file.onchange=function(){if(file.files[0])handle(file.files[0])};
function handle(f){
  if(!/^image\//.test(f.type)){alert('Please choose an image file.');return}
  var img=$('#prev');img.src=URL.createObjectURL(f);img.hidden=false;$('#dropIdle').hidden=true;
  var box=$('#soil');box.hidden=false;clearTimeout(soilT);
  var items=['Image preprocessing','Visual feature extraction','Soil characteristics','Crop compatibility'];
  box.innerHTML='<b>Analyzing soil…</b><ul>'+items.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>';
  var lis=box.querySelectorAll('li'),i=0;
  (function next(){if(i<lis.length){lis[i++].classList.add('ok');soilT=setTimeout(next,reduce?0:450)}else{
    box.innerHTML+='<b>Sample soil analysis</b> <span class="tag">Simulated AI Output</span><p style="margin:4px 0 10px;color:var(--gl)">Estimated soil category: suitable for vegetables</p>'+
    [['Texture',70],['Moisture',50],['Organic appearance',80]].map(function(r){return '<div class="r"><span>'+r[0]+'</span><div class="meter on" style="--w:'+r[1]+'%"><i></i></div></div>'}).join('')+
    '<p class="muted" style="margin:8px 0 0">Image-based soil analysis provides visual estimates and should not replace laboratory soil testing.</p>';
  }})();
}
$('#geo').onclick=function(){
  var b=$('#geo'),l=$('#loc');
  if(!navigator.geolocation){l.value='Location not available in this browser';return}
  b.textContent='Locating…';
  navigator.geolocation.getCurrentPosition(function(p){l.value=p.coords.latitude.toFixed(3)+', '+p.coords.longitude.toFixed(3);b.textContent='Use my location'},function(){l.value='Permission denied. Type your city instead.';b.textContent='Use my location'});
};

/* ---------- Analyze: demo sequence then dashboard ---------- */
$('#form').addEventListener('submit',function(e){
  e.preventDefault();
  var run=$('#run'),ul=$('#runSteps'),labels=[['Rooftop location','Location context processed'],['NASA environmental data','Temperature / precipitation context'],['Weather data','Short-term forecast'],['Soil image','CNN-based visual analysis (simulated)'],['Crop knowledge','Seasonal and crop requirements'],['AI recommendation','Personalized result generated']];
  ul.innerHTML=labels.map(function(l){return '<li>'+l[0]+'<small>'+l[1]+'</small></li>'}).join('');run.hidden=false;
  var lis=ul.children,i=0,gap=reduce?0:500;
  getRooftopAnalysis({}).then(function(data){
    (function step(){
      if(i>0)lis[i-1].classList.add('done');
      if(i<lis.length){lis[i++].classList.add('on');setTimeout(step,gap)}
      else{run.hidden=true;render(data)}
    })();
  });
});

function render(D){
  var hr=new Date().getHours();
  $('#hello').textContent='Good '+(hr<12?'morning':hr<18?'afternoon':'evening')+' 👋';
  var st=$('#stats');st.innerHTML='';
  D.stats.forEach(function(s){var c=h('div','card stat','<small>'+s.k+'</small><b><span>0</span>'+s.u+'</b><div class="so">'+s.so+'</div>');st.appendChild(c);count($('span',c),s.v,s.d||0)});
  var cr=$('#crops');cr.innerHTML='';
  D.crops.forEach(function(c){
    var el=h('div','card','<h4><span>'+c.e+' '+c.n+'</span><span class="pill'+(c.risk==='Medium'?' w':'')+'">Risk: '+c.risk+'</span></h4><b style="font-size:1.6rem">'+c.p+'% <small style="font-size:.8rem;font-weight:400;color:var(--lm)">Suitable</small></b><div class="meter on" style="--w:'+c.p+'%"><i></i></div><div class="meta"><span>💧 Water: '+c.w+'</span><span>☀️ Sunlight: '+c.sun+'</span></div><ul>'+c.ok.map(function(x){return '<li>✓ '+x+'</li>'}).join('')+'<li>⚠ '+c.warn+'</li></ul>');
    var b=h('button','btn dk sm','Why this crop?');b.onclick=function(){why(c)};el.appendChild(b);cr.appendChild(el);
  });
  var w='';D.water.forEach(function(x){w+='<div class="hrow" style="grid-template-columns:90px 1fr auto"><span>'+x.d+'</span><div class="meter on" style="--w:'+(x.l/1.2*100)+'%"><i style="background:var(--cy)"></i></div><b>💧 '+x.l+' L</b></div>'+(x.note?'<div class="muted" style="margin:-4px 0 6px 100px">🌧 '+x.note+'</div>':'')});
  $('#water').innerHTML=w+'<p style="margin:12px 0 4px"><b>Estimated water saved this week: 💧 '+D.saved+' L</b> <span class="tag">Demo Analysis</span></p><p class="muted" style="margin:0">Watering was reduced because rainfall is expected.</p>';
  $('#wx').innerHTML='<div class="days">'+D.wx.map(function(d){return '<div class="day'+(d.rain?' rain':'')+'"><small>'+d.d+'</small><span style="font-size:1.5rem">'+d.i+'</span><b>'+d.t+'°C</b><small>💧 '+d.p+'% · '+d.mm+' mm</small><small>'+d.h+'</small></div>'}).join('')+'</div><div class="alert h"><b>🔥 Heat alert</b>High temperature expected. Provide shade and water plants during cooler hours.</div><div class="alert r"><b>🌧 Rain alert</b>Rain expected in the next 3 days. Avoid unnecessary watering.</div>';
  $('#health').innerHTML='<div class="hs"><b>82</b><span>/ 100 · Good</span> <span class="tag">Demo Analysis</span></div>'+'<p class="muted" style="margin:4px 0 12px">Demo score based on five environmental factors.</p>'+D.health.map(function(r){return '<div class="hrow"><span>'+r[0]+'</span><div class="meter on" style="--w:'+r[1]+'%"><i></i></div><b>'+r[1]+'</b></div>'}).join('');
  var m=new Date().getMonth(),cur=D.plan.findIndex(function(p){return m>=p.s&&m<p.s+3});
  $('#plan').innerHTML='<div class="tl" role="group" aria-label="Seasons"></div><div class="tl-d" aria-live="polite"></div>';
  var tl=$('#plan .tl');
  function pick(i){var p=D.plan[i];tl.querySelectorAll('button').forEach(function(b,j){b.setAttribute('aria-pressed',j===i)});
    $('#plan .tl-d').innerHTML='<b>'+p.e+' '+p.c+'</b><span>Planting period: '+p.m+'</span><span>Water requirement: '+p.w+'</span><span>Expected conditions: '+p.cond+'</span><span>Action: '+p.a+'</span>'}
  D.plan.forEach(function(p,i){var b=h('button',i===cur?'cur':'','<span>'+p.e+'</span><small>'+p.m+'</small>'+p.c);b.onclick=function(){pick(i)};tl.appendChild(b)});
  pick(cur<0?0:cur);
  $('#dashEmpty').hidden=true;$('#dashMain').hidden=false;$('#dashboard').scrollIntoView({behavior:reduce?'auto':'smooth'});
}

function why(c){
  $('#whyBody').innerHTML='<h3>Why '+c.n+'?</h3>'+c.f.map(function(f){return '<div class="hrow wy"><span>'+f[0]+'</span><div class="meter on" style="--w:'+f[1]+'%"><i></i></div><span>'+f[1]+'% favorable</span></div>'}).join('')+'<p>'+c.why+'</p><span class="tag" style="background:#ede9fe;color:#5b21b6;border-color:#c4b5fd">Demo Analysis</span>';
  $('#why').showModal();
}
$('#why').addEventListener('click',function(e){if(e.target===this)this.close()});
})();
