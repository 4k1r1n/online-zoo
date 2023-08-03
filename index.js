(()=>{"use strict";const e=[{name:"GIANT PANDAS",location:"Native to Southwest China",src:"./assets/images/pets/pandas.jpg",type:"herbivorous"},{name:"EAGLES",location:"Native to South America",src:"./assets/images/pets/eagle.jpg",type:"carnivores"},{name:"GORILLAS",location:"Native to Congo",src:"./assets/images/pets/gorilla.jpg",type:"herbivorous"},{name:"TWO-TOED SLOTH",location:"Mesoamerica, South America",src:"./assets/images/pets/sloth.jpg",type:"herbivorous"},{name:"CHEETAHS",location:"Native to Africa",src:"./assets/images/pets/cheetahs.jpg",type:"carnivores"},{name:"PENGUINS",location:"Native to Antarctica",src:"./assets/images/pets/penguin.jpg",type:"carnivores"},{name:"FOX",location:"all of Europe",src:"./assets/images/pets/fox.jpg",type:"carnivores"},{name:"PRZEWALSKI HORSE",location:"western Mongolia",src:"./assets/images/pets/horse_prj.jpg",type:"herbivorous"},{name:"HYENA",location:"Native to Africa",src:"./assets/images/pets/hyena.jpg",type:"carnivores"},{name:"JERBOA",location:"Asia west",src:"./assets/images/pets/jerboa.jpg",type:"herbivorous"},{name:"KENGURU",location:"Native to Australia",src:"./assets/images/pets/kenguru.jpg",type:"herbivorous"},{name:"OWL",location:"Native to Europe",src:"./assets/images/pets/owl.jpg",type:"carnivores"},{name:"PUMA",location:"Native to America",src:"./assets/images/pets/puma.jpg",type:"carnivores"},{name:"ZUBR",location:"Native to Eastern Europe",src:"./assets/images/pets/zubr.jpg",type:"herbivorous"},{name:"WOLF",location:"Native to Europe",src:"./assets/images/pets/wolf.jpg",type:"carnivores"}],o=document.querySelector(".button-left"),n=document.querySelector(".button-right"),t=document.querySelector(".pets__carousel"),s=o=>{var n;e.sort((()=>Math.random()-.5));for(let t=0;t<6;t+=1)o.innerHTML+=`<div class="card block-bordered">\n<div class="card__image-container">\n    <img src=${e[n=t].src} alt="${e[n].name}" class="card__image">\n</div>\n<div class="card__info">\n    <div class="card__text">\n        <p class="card__name">${e[n].name}</p>\n        <p class="card__title">${e[n].location}</p>\n    </div>\n    <span class="icon icon--${e[n].type}"></span>\n</div>\n</div>`},a=()=>{t.classList.add("transition-left"),o.removeEventListener("click",a),n.removeEventListener("click",i)},i=()=>{t.classList.add("transition-right"),o.removeEventListener("click",a),n.removeEventListener("click",i)};o.addEventListener("click",a),n.addEventListener("click",i),t.addEventListener("animationend",(e=>{const s=document.querySelectorAll(".slide");"move-left"===e.animationName?(t.classList.remove("transition-left"),t.insertBefore(s[s.length-1],s[0])):(t.classList.remove("transition-right"),t.insertBefore(s[0],s[s.length])),o.addEventListener("click",a),n.addEventListener("click",i)})),t.addEventListener("animationstart",(e=>{const o=document.querySelectorAll(".slide");"move-left"===e.animationName?(o[0].innerHTML="",s(o[0])):(o[o.length-1].innerHTML="",s(o[o.length-1]))}));const l=[{avatar:"01",author:"Michael John",location:"Local Austria",date:"Today",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"02",author:"Oskar Samborsky",location:"Local Austria",date:"Yesterday",text:"Online zoo is one jf the ways to instill a love for animals.The\n        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is\n        one\n        jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted\n        very\n        much ljves to watch gouillas.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals. The best online zoo I’ve met. My son delighted very much ljves to watch\n            gouillas.\n            Online zoo\n            is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"03",author:"Fredericka Michelin",location:"Local Austria",date:"Yesterday",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.<span>The best online zoo I’ve met. My son delighted very much\n            ljves\n            to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best\n            online zoo I’ve met.</span><span>The best online zoo I’ve met. My son delighted very\n            much\n            ljves to watch\n            gouillas. Online zoo\n            is one jf the ways to instill a love for animals.The best online zoo I’ve met.\n            My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to\n            instill\n            a love for\n            animals.</span>"},{avatar:"04",author:"Mila Riksh",location:"Local Austria",date:"Yesterday",text:"My son delighted very much ljves to watch gouillas. Online zoo is\n        one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted\n        very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n        animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n        Online\n        zoo is\n        one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted\n        very much ljves to watch gouillas.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"03",author:"Oska Samborska",location:"Local Austria",date:"Yesterday",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"01",author:"Philip Davids",location:"Local Austria",date:"Today",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"02",author:"Bob Dilan",location:"Local Austria",date:"Yesterday",text:"Online zoo is one jf the ways to instill a love for animals.The\n        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is\n        one\n        jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted\n        very\n        much ljves to watch gouillas.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals. The best online zoo I’ve met. My son delighted very much ljves to watch\n            gouillas.\n            Online zoo\n            is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"04",author:"Lauren Holm",location:"Local Austria",date:"Yesterday",text:"My son delighted very much ljves to watch gouillas. Online zoo is\n        one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted\n        very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n        animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n        Online\n        zoo is\n        one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted\n        very much ljves to watch gouillas.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"01",author:"Emma Gray",location:"Local Austria",date:"Today",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"03",author:"Jane Kravitz",location:"Local Austria",date:"Yesterday",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"},{avatar:"01",author:"Will Tailor",location:"Local Austria",date:"Today",text:"The best online zoo I’ve met. My son delighted very much ljves to\n        watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online\n        zoo\n        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways\n        to\n        instill a love for animals.\n        <span>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n            Online\n            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My\n            son\n            delighted\n            very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\n            animals.</span>"}],r=document.querySelector(".testimonials__carousel"),c=document.querySelector(".scrollbar");function h(e,o){const n=document.createElement(e);return n.className=o,n}c.addEventListener("input",(()=>{const e=document.querySelector(".testimonial").offsetWidth,o=+c.value;r.style.right=(e+29)*o+"px"}));const v=(e,o)=>{const n=h("div","overlay");e.append(n),requestAnimationFrame((()=>{n.classList.add("in")})),n.addEventListener("click",o)},m=e=>{const o=document.querySelector(".overlay");o.classList.remove("in"),o.addEventListener("transitionend",(()=>o.remove())),o.removeEventListener("click",e)},d=document.querySelector(".testimonials"),u=()=>{document.body.classList.remove("lock"),m(u),(()=>{const e=document.querySelector(".popup");e.classList.remove("active"),e.addEventListener("transitionend",(()=>e.remove()))})()};r.addEventListener("click",(e=>{var o;window.innerWidth<=640&&((()=>{(()=>{const e=h("div","popup active"),o=h("div","popup__wrapper"),n=h("span","close-button");d.append(e),e.append(o),o.append(n),n.addEventListener("click",u)})();const e=document.querySelector(".popup");v(e,u),document.body.classList.add("lock")})(),o=e.target.closest(".testimonial"),document.querySelector(".popup__wrapper").append(o.cloneNode(!0)))}));const y=u,g=document.querySelector(".burger"),p=document.querySelector(".header"),w=document.querySelectorAll(".navigation__item"),f=()=>{p.classList.toggle("active"),g.classList.toggle("active"),document.body.classList.toggle("lock"),j()},j=()=>{g.classList.contains("active")?v(p,f):m(f)};g.addEventListener("click",(()=>{f()})),w.forEach((e=>{e.addEventListener("click",(()=>{g.classList.contains("active")&&f()}))}));const z=document.querySelector(".backstage__content"),b=h("img","backstage__image");b.src="./assets/images/backstage/bamboo-cap.jpg",b.alt="Man in bamboo hat",z.before(b);let T=!1;window.addEventListener("resize",(function(){const e=document.querySelector(".popup");window.innerWidth>640&&e&&y(),window.innerWidth>640&&g.classList.contains("active")&&(f(),T=!0),window.innerWidth<=640&&T&&(f(),T=!1),window.innerWidth<=1220?c.max="8":c.max="7",(window.innerWidth<=980||window.innerWidth>980&&window.innerWidth<=1220)&&(r.style.right="0px",c.value="0")})),(()=>{for(let e=0;e<3;e+=1){const e=document.createElement("div");e.classList.add("slide"),t.appendChild(e)}})(),[...document.querySelectorAll(".slide")].forEach((e=>s(e))),(()=>{for(let o=0;o<11;o+=1)r.innerHTML+=`<div class="testimonial">\n    <div class="testimonial__header">\n        <span class="icon icon--avatar-user${l[e=o].avatar}"></span>\n        <div class="testimonial__info">\n            <p class="testimonial__author">${l[e].author}</p>\n            <div class="testimonial__row">\n                <p class="testimonial__location">${l[e].location}</p>\n                <p class="testimonial__date">${l[e].date}</p>\n            </div>\n        </div>\n    </div>\n    <div class="testimonial__text">${l[e].text}\n    </div>\n</div>`;var e})(),window.innerWidth<=1220?c.max="8":c.max="7"})();