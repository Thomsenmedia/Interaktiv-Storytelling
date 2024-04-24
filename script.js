/* Får menneskerne på forsiden til at skifte */
const forside_1700 = document.querySelectorAll(".forside_1700");
const forside_1950 = document.querySelectorAll(".forside_1950");
const forside_2000 = document.querySelectorAll(".forside_2000");

const skiftBillede = setTimeout(skiftImg, 1);

function skiftImg() {
    forside_1700.forEach(forside_1700 => forside_1700.style.display = "inline");
    forside_1950.forEach(forside_1950 => forside_1950.style.display = "none");
    forside_2000.forEach(forside_2000 => forside_2000.style.display = "none");

        setTimeout(() => {
            forside_1700.forEach(forside_1700 => forside_1700.style.display = "none");
            forside_1950.forEach(forside_1950 => forside_1950.style.display = "inline");
            forside_2000.forEach(forside_2000 => forside_2000.style.display = "none");
        }, 800);

        setTimeout(() => {
            forside_1700.forEach(forside_1700 => forside_1700.style.display = "none");
            forside_1950.forEach(forside_1950 => forside_1950.style.display = "none");
            forside_2000.forEach(forside_2000 => forside_2000.style.display = "inline");
        }, 1600);

        setTimeout(skiftImg, 2400);
}



/* Får teksten til at slide in på kropsideal sektionen */
const p_kropsideal_v1 = document.querySelectorAll(".p_kropsideal_v1");
const p_kropsideal_v2 = document.querySelectorAll(".p_kropsideal_v2");
const p_kropsideal_v3 = document.querySelectorAll(".p_kropsideal_v3");
const p_kropsideal_h1 = document.querySelectorAll(".p_kropsideal_h1");
const p_kropsideal_h2 = document.querySelectorAll(".p_kropsideal_h2");
const p_kropsideal_h3 = document.querySelectorAll(".p_kropsideal_h3");

const slideAnimation1 = setTimeout(v1Slide, 10);
const slideAnimation2 = setTimeout(v2Slide, 50);
const slideAnimation3 = setTimeout(v3Slide, 70);
const slideAnimation4 = setTimeout(h1Slide, 30);
const slideAnimation5 = setTimeout(h2Slide, 60);
const slideAnimation6 = setTimeout(h3Slide, 90);


// Får kropsidealbilledet til at tippe
function addAnimation() {
    var element = document.querySelector('.img_kropsideal');
    element.style.animation = 'rotateAnimation 3s infinite';
}

setTimeout(addAnimation, 2000); 



function v1Slide() {
    p_kropsideal_v1.forEach(p_kropsideal_v1 => p_kropsideal_v1.style.left = "21%");
    p_kropsideal_v1.forEach(p_kropsideal_v1 => p_kropsideal_v1.style.top = "30%");
    p_kropsideal_v1.forEach(p_kropsideal_v1 => p_kropsideal_v1.style.opacity = "1");
}

function v2Slide() {
    p_kropsideal_v2.forEach(p_kropsideal_v2 => p_kropsideal_v2.style.left = "16%");
    p_kropsideal_v2.forEach(p_kropsideal_v2 => p_kropsideal_v2.style.top = "50%");
    p_kropsideal_v2.forEach(p_kropsideal_v2 => p_kropsideal_v2.style.opacity = "1");
}

function v3Slide() {
    p_kropsideal_v3.forEach(p_kropsideal_v3 => p_kropsideal_v3.style.left = "23%");
    p_kropsideal_v3.forEach(p_kropsideal_v3 => p_kropsideal_v3.style.top = "75%");
    p_kropsideal_v3.forEach(p_kropsideal_v3 => p_kropsideal_v3.style.opacity = "1");
}

function h1Slide() {
    p_kropsideal_h1.forEach(p_kropsideal_h1 => p_kropsideal_h1.style.right = "21%");
    p_kropsideal_h1.forEach(p_kropsideal_h1 => p_kropsideal_h1.style.top = "22%");
    p_kropsideal_h1.forEach(p_kropsideal_h1 => p_kropsideal_h1.style.opacity = "1");
}

function h2Slide() {
    p_kropsideal_h2.forEach(p_kropsideal_h2 => p_kropsideal_h2.style.right = "11%");
    p_kropsideal_h2.forEach(p_kropsideal_h2 => p_kropsideal_h2.style.top = "47%");
    p_kropsideal_h2.forEach(p_kropsideal_h2 => p_kropsideal_h2.style.opacity = "1");
}

function h3Slide() {
    p_kropsideal_h3.forEach(p_kropsideal_h3 => p_kropsideal_h3.style.right = "16%");
    p_kropsideal_h3.forEach(p_kropsideal_h3 => p_kropsideal_h3.style.top = "73%");
    p_kropsideal_h3.forEach(p_kropsideal_h3 => p_kropsideal_h3.style.opacity = "1");
}










/* øjet der blinker */
const eyeImgs = document.querySelectorAll(".eye");
const blinkImgs = document.querySelectorAll(".blink");

function blink() {
    eyeImgs.forEach(eyeImg => eyeImg.style.display = "none");
    blinkImgs.forEach(blinkImg => blinkImg.style.display = "inline");

    setTimeout(() => {
        blinkImgs.forEach(blinkImg => blinkImg.style.display = "none");
        eyeImgs.forEach(eyeImg => eyeImg.style.display = "inline");
    }, 100);

    setTimeout(() => {
        blinkImgs.forEach(blinkImg => blinkImg.style.display = "inline");
        eyeImgs.forEach(eyeImg => eyeImg.style.display = "none");
        setTimeout(() => {
            blinkImgs.forEach(blinkImg => blinkImg.style.display = "none");
            eyeImgs.forEach(eyeImg => eyeImg.style.display = "inline");
        }, 100);
    }, 500);

    setTimeout(blink, 3000);
}

const myTimeout = setTimeout(blink, 2000);

const eye_S1 = document.getElementById("eye_S1");
const container_popup = document.getElementById("container_popup");
const popupKryds = document.getElementById("popup_kryds");

const eye_F1 = document.getElementById("eye_F1");
const container_popupF1 = document.getElementById("container_popupF1");
const popup_krydsF1 = document.getElementById("popup_krydsF1");

const eye_F2 = document.getElementById("eye_video");
const container_popupVideo = document.getElementById("container_popupVideo");
const popup_krydsVideo = document.getElementById("popup_krydsVideo");


eye_S1.onclick=popUp
function popUp(){
    container_popup.style.display = "flex";
}
popupKryds.onclick=lukPopup
function lukPopup(){
    container_popup.style.display = "none";
}

eye_video.onclick=popUpVideo
function popUpVideo(){
    container_popupVideo.style.display = "flex";
    bg_lyd.pause();
}
popup_krydsVideo.onclick=lukPopupVideo
function lukPopupVideo(){
    container_popupVideo.style.display = "none";
    bg_lyd.play();
}

eye_F1.onclick=popUpF1
function popUpF1(){
    container_popupF1.style.display = "flex";
}
popup_krydsF1.onclick=lukPopupF1
function lukPopupF1(){
    container_popupF1.style.display = "none";
}



/* -- -- lyd -- -- */
const lyd = document.getElementById("lyd");
const lyd_ikon = document.getElementById("lyd_ikon");
const bg_lyd = document.getElementById("bg_lyd");
const lydTekst = document.getElementById("lydTekst");

let lydSpiller = false;

lyd_ikon.onclick = toggleLyd;

function toggleLyd() {
    if (lydSpiller) {
        lyd.pause();
        bg_lyd.play();
        lydTekst.style.opacity = "0";
    } else {
        lyd.play();
        bg_lyd.pause();
        lydTekst.style.opacity = "1";
    }
    lydSpiller = !lydSpiller;
}






//Ændre mellem sektionerne 

const kropsideal = document.getElementById("kropsideal");
const fact1 = document.getElementById("fact1");
const fact2 = document.getElementById("fact2");
const fact3 = document.getElementById("fact3");
const quizStart = document.getElementById("quizStart");
const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");
const quiz3 = document.getElementById("quiz3");
const quizSlut = document.getElementById("quizSlut");

// Span i teksten der skal blive til h1
const p_h1_fact1 = document.querySelectorAll(".p_h1_fact1");
const p_h1_fact2 = document.querySelectorAll(".p_h1_fact2");
const p_h1_fact3 = document.querySelectorAll(".p_h1_fact3");


/* Knapper */
const videre1 = document.getElementById("videre1");
const videre2 = document.getElementById("videre2");
const videre3 = document.getElementById("videre3");
const videre4 = document.getElementById("videre4");
const videre5 = document.getElementById("videre5");

/* Funktionerne, som får sektionerne til at skifte */
videre1.onclick = slide1;
function slide1(){
    kropsideal.style.animationName = "slideNext";
    p_h1_fact1.forEach(p_h1_fact1 => p_h1_fact1.style.animationName = "grow");
}
videre2.onclick = slide2;
function slide2(){
    fact1.style.animationName = "slideNext";
    p_h1_fact2.forEach(p_h1_fact2 => p_h1_fact2.style.animationName = "grow");
    lyd.pause();
    bg_lyd.play();
}
videre3.onclick = slide3;
function slide3(){
    fact2.style.animationName = "slideNext";
    p_h1_fact3.forEach(p_h1_fact3 => p_h1_fact3.style.animationName = "grow");
}
videre4.onclick = slide4;
function slide4(){
    fact3.style.animationName = "slideNext";
}
videre5.onclick = slide5;
function slide5(){
    quizStart.style.animationName = "slideNext";
}













/* --- --- QUIZ --- --- */
const answer_p_q1 = document.getElementById("answer_p_q1");
const answer_p_q2 = document.getElementById("answer_p_q2");
const answer_p_q3 = document.getElementById("answer_p_q3");

const btn_answer_q1 = document.getElementById("btn_answer_q1");
const btn_answer_q2 = document.getElementById("btn_answer_q2");
const btn_answer_q3 = document.getElementById("btn_answer_q3");



const videre6 = document.getElementById("videre6");
const videre7 = document.getElementById("videre7");
const videre8 = document.getElementById("videre8");


const q1_a = document.getElementById("q1_a");
const q1_b = document.getElementById("q1_b");
const q1_c = document.getElementById("q1_c");

const q2_a = document.getElementById("q2_a");
const q2_b = document.getElementById("q2_b");
const q2_c = document.getElementById("q2_c");

const q3_a = document.getElementById("q3_a");
const q3_b = document.getElementById("q3_b");
const q3_c = document.getElementById("q3_c");

const hjem_slut_center = document.getElementById("hjem_slut_center");

/* -- -- q1 -- -- */
/* markere svaret */
q1_a.onclick = marker1A
function marker1A(){
    q1_a.style.border = "5px solid";
    q1_b.style.border = "2px solid";
    q1_c.style.border = "2px solid";
}
q1_b.onclick = marker1B
function marker1B(){
    q1_a.style.border = "2px solid";
    q1_b.style.border = "5px solid";
    q1_c.style.border = "2px solid";
}
q1_c.onclick = marker1C
function marker1C(){
    q1_a.style.border = "2px solid";
    q1_b.style.border = "2px solid";
    q1_c.style.border = "5px solid";
}

/* det der sker når man trykker på svar */
btn_answer_q1.onclick = svarQ1
function svarQ1(){
    if(q1_a.style.border === "5px solid"){
        answer_p_q1.innerHTML = "Korrekt";
        answer_p_q1.style.color = "green"
        videre6.style.display = "flex"
    }
    else{
        answer_p_q1.innerHTML = "Forkert, prøv igen";
        answer_p_q1.style.color = "red"
    }
}

videre6.onclick = slide6;
function slide6(){
    quiz1.style.animationName = "slideNext";
}


/* -- -- q2 -- -- */
/* markere svaret */
q2_a.onclick = marker2A
function marker2A(){
    q2_a.style.border = "5px solid";
    q2_b.style.border = "2px solid";
    q2_c.style.border = "2px solid";
}
q2_b.onclick = marker2B
function marker2B(){
    q2_a.style.border = "2px solid";
    q2_b.style.border = "5px solid";
    q2_c.style.border = "2px solid";
}
q2_c.onclick = marker2C
function marker2C(){
    q2_a.style.border = "2px solid";
    q2_b.style.border = "2px solid";
    q2_c.style.border = "5px solid";
}

/* det der sker når man trykker på svar */
btn_answer_q2.onclick = svarQ2
function svarQ2(){
    if(q2_b.style.border === "5px solid"){
        answer_p_q2.innerHTML = "Korrekt";
        answer_p_q2.style.color = "green"
        videre7.style.display = "flex"
    }
    else{
        answer_p_q2.innerHTML = "Forkert, prøv igen";
        answer_p_q2.style.color = "red"
    }
}

videre7.onclick = slide7;
function slide7(){
    quiz2.style.animationName = "slideNext";
}


/* -- -- q2 -- -- */
/* markere svaret */
q3_a.onclick = marker3A
function marker3A(){
    q3_a.style.border = "5px solid";
    q3_b.style.border = "2px solid";
    q3_c.style.border = "2px solid";
}
q3_b.onclick = marker3B
function marker3B(){
    q3_a.style.border = "2px solid";
    q3_b.style.border = "5px solid";
    q3_c.style.border = "2px solid";
}
q3_c.onclick = marker3C
function marker3C(){
    q3_a.style.border = "2px solid";
    q3_b.style.border = "2px solid";
    q3_c.style.border = "5px solid";
}

/* det der sker når man trykker på svar */
btn_answer_q3.onclick = svarQ3
function svarQ3(){
    if(q3_b.style.border === "5px solid"){
        answer_p_q3.innerHTML = "Korrekt";
        answer_p_q3.style.color = "green"
        videre8.style.display = "flex"
    }
    else{
        answer_p_q3.innerHTML = "Forkert, prøv igen";
        answer_p_q3.style.color = "red"
    }
}

videre8.onclick = slide8;
function slide8(){
    quiz3.style.animationName = "slideNext";
    hjem_slut_center.style.left = "48%";
    hjem_slut_center.style.top = "75%";
}








