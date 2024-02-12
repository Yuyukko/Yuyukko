const tempsAttentePopup = 7;
const tempsAttenteResult = 1;

var tempsp1 = null;
var tempsp2 = null;
var tempsp3 = null;
var tempsp4 = null;
var tempsp5 = null;
var tempsp6 = null;

var tempsq1 = null;
var tempsq2 = null;
var tempsq3 = null;
var tempsq4 = null;
var tempsq5 = null;
var tempsq6 = null;

var tempspo1 = null;
var tempspo2 = null;
var tempspo3 = null;
var tempspo4 = null;
var tempspo5 = null;
var tempspo6 = null;

var maintenant = null;
var PopUpenCours = null;

var res1 = "Faux";
var res2 = "Faux";
var res3 = "Faux";
var res4 = "Faux";
var res5 = "Faux";
var res6 = "Faux";

var idQuestion = 0;

const p0 = document.getElementById('test');
p0.addEventListener('click', () => {
    const pres = document.getElementById('pres');
    pres.hidden = true;
    const para1 = document.getElementById('tes');
    para1.hidden = false;
});

const p1 = document.getElementById('par1');
p1.addEventListener('click', () => {
    idQuestion = 0;
    maintenant = new Date().getTime();
    setTimeout(function() {
        openPopup();
    }, tempsAttentePopup * 1000);
    const pres = document.getElementById('tes');
    pres.hidden = true;
    const para1 = document.getElementById('para1');
    para1.hidden = false;
});


const p2 = document.getElementById('par2');
p2.addEventListener('click', () => {
    idQuestion = 0;
    tempsq1 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    setTimeout(function() {
        openPopup2();
    }, tempsAttentePopup * 1000);
    const pres = document.getElementById('ques1');
    pres.hidden = true;
    const para1 = document.getElementById('para2');
    para1.hidden = false;
});

const p3 = document.getElementById('par3');
p3.addEventListener('click', () => {
    idQuestion = 0;
    tempsq2 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    setTimeout(function() {
        openPopup3();
    }, tempsAttentePopup * 1000);
    const pres = document.getElementById('ques2');
    pres.hidden = true;
    const para1 = document.getElementById('para3');
    para1.hidden = false;
});

const p4 = document.getElementById('par4');
p4.addEventListener('click', () => {
    idQuestion = 0;
    tempsq3 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    setTimeout(function() {
        openPopup4();
    }, tempsAttentePopup * 1000);
    const pres = document.getElementById('ques3');
    pres.hidden = true;
    const para1 = document.getElementById('para4');
    para1.hidden = false;
});

const p5 = document.getElementById('par5');
p5.addEventListener('click', () => {
    idQuestion = 0;
    tempsq4 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    setTimeout(function() {
        openPopup5();
    }, tempsAttentePopup * 1000);
    const pres = document.getElementById('ques4');
    pres.hidden = true;
    const para1 = document.getElementById('para5');
    para1.hidden = false;
});

const p6 = document.getElementById('par6');
p6.addEventListener('click', () => {
    idQuestion = 0;
    tempsq5 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    setTimeout(function() {
        openPopup6();
    }, tempsAttentePopup * 1000);
    const pres = document.getElementById('ques5');
    pres.hidden = true;
    const para1 = document.getElementById('para6');
    para1.hidden = false;
});

const q1 = document.getElementById('q1');
q1.addEventListener('click', () => {
    idQuestion = 1;
    tempsp1 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    const pres = document.getElementById('para1');
    pres.hidden = true;
    const para1 = document.getElementById('ques1');
    para1.hidden = false;
});

const q2 = document.getElementById('q2');
q2.addEventListener('click', () => {
    idQuestion = 2;
    tempsp2 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    const pres = document.getElementById('para2');
    pres.hidden = true;
    const para1 = document.getElementById('ques2');
    para1.hidden = false;
});

const q3 = document.getElementById('q3');
q3.addEventListener('click', () => {
    idQuestion = 3;
    tempsp3 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    const pres = document.getElementById('para3');
    pres.hidden = true;
    const para1 = document.getElementById('ques3');
    para1.hidden = false;
});

const q4 = document.getElementById('q4');
q4.addEventListener('click', () => {
    idQuestion = 4;
    tempsp4 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    const pres = document.getElementById('para4');
    pres.hidden = true;
    const para1 = document.getElementById('ques4');
    para1.hidden = false;
});

const q5 = document.getElementById('q5');
q5.addEventListener('click', () => {
    idQuestion = 5;
    tempsp5 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    const pres = document.getElementById('para5');
    pres.hidden = true;
    const para1 = document.getElementById('ques5');
    para1.hidden = false;
});

const q6 = document.getElementById('q6');
q6.addEventListener('click', () => {
    idQuestion = 6;
    tempsp6 = new Date().getTime() - maintenant;
    maintenant = new Date().getTime();
    const pres = document.getElementById('para6');
    pres.hidden = true;
    const para1 = document.getElementById('ques6');
    para1.hidden = false;
});

const bouton = document.getElementById('fini');
bouton.addEventListener('click', () => {
    console.log("toto1");
    tempsq6 = new Date().getTime() - maintenant;
    const pres = document.getElementById('ques6');
    pres.hidden = true;
    const para1 = document.getElementById('fin');
    para1.hidden = false;
    console.log(`Temps Paragraphe 1: ${tempsp1 / 1000} secondes.\nTemps Paragraphe 2: ${tempsp2 / 1000} secondes.\nTemps Paragraphe 3: ${tempsp3 / 1000} secondes.\nTemps Paragraphe 4: ${tempsp4 / 1000} secondes.\nTemps Paragraphe 5: ${tempsp5 / 1000} secondes.\nTemps Paragraphe 6: ${tempsp6 / 1000} secondes.\n\nTemps Question 1: ${tempsq1 / 1000}\nTemps Question 2: ${tempsq2 / 1000}\nTemps Question 3: ${tempsq3 / 1000}\nTemps Question 4: ${tempsq4 / 1000}\nTemps Question 5: ${tempsq5 / 1000}\nTemps Question 6: ${tempsq6 / 1000}\n\nTemps PopUp 1: ${tempspo1 / 1000}\nTemps PopUp 2: ${tempspo2 / 1000}\nTemps PopUp 3: ${tempspo3 / 1000}\nTemps PopUp 4: ${tempspo4 / 1000}\nTemps PopUp 5: ${tempspo5 / 1000}\nTemps PopUp 6: ${tempspo6 / 1000}\n\nRéponse 1: ${res1}\nRéponse 2: ${res2}\nRéponse 3: ${res3}\nRéponse 4: ${res4}\nRéponse 5: ${res5}\nRéponse 6: ${res6}\n`);
});

const res = document.getElementById('res');
bouton.addEventListener('click', () => {
    openResult();
});

/*
const bouton2 = document.getElementById('afficherResult');
bouton2.addEventListener('click', () => {
    openResult();
});
*/
function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
    PopUpenCours = new Date().getTime();
};
  
function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    tempspo1 = new Date().getTime() - PopUpenCours;
    console.log(tempspo1);
};

function openPopup2() {
    document.getElementById('popup-container2').style.display = 'block';
    PopUpenCours = new Date().getTime();
};

function closePopup2() {
    document.getElementById('popup-container2').style.display = 'none';
    tempspo2 = new Date().getTime() - PopUpenCours;
};

function openPopup3() {
    document.getElementById('popup-container3').style.display = 'block';
    PopUpenCours = new Date().getTime();
};
  
function closePopup3() {
    document.getElementById('popup-container3').style.display = 'none';
    tempspo3 = new Date().getTime() - PopUpenCours;
};

function openPopup4() {
    document.getElementById('popup-container4').style.display = 'block';
    PopUpenCours = new Date().getTime();
};

function closePopup4() {
    document.getElementById('popup-container4').style.display = 'none';
    tempspo4 = new Date().getTime() - PopUpenCours;
};

function openPopup5() {
    document.getElementById('popup-container5').style.display = 'block';
    PopUpenCours = new Date().getTime();
};
  
function closePopup5() {
    document.getElementById('popup-container5').style.display = 'none';
    tempspo5 = new Date().getTime() - PopUpenCours;
};

function openPopup6() {
    document.getElementById('popup-container6').style.display = 'block';
    PopUpenCours = new Date().getTime();
};

function closePopup6() {
    document.getElementById('popup-container6').style.display = 'none';
    tempspo6 = new Date().getTime() - PopUpenCours;
};

function openResult() {
    console.log("toto");
    document.getElementById('result-container').style.display = 'block';
    
};

function closeResult() {
    document.getElementById('result-container').style.display = 'none';
};

document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowLeft" && idQuestion === 1) {
      res1 = "Vrai";
      idQuestion = 0;
      tempsq1 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup2();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques1");
      pres.hidden = true;
      const para1 = document.getElementById("para2");
      para1.hidden = false;
    }
    if (event.code == "ArrowRight" && idQuestion === 1) {
      res1 = "Faux";
      idQuestion = 0;
      tempsq1 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup2();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques1");
      pres.hidden = true;
      const para1 = document.getElementById("para2");
      para1.hidden = false;
    }
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowLeft" && idQuestion === 2) {
      res2 = "Vrai";
      idQuestion = 0;
      tempsq2 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup3();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques2");
      pres.hidden = true;
      const para1 = document.getElementById("para3");
      para1.hidden = false;
    }
    if (event.code == "ArrowRight" && idQuestion === 2) {
      res2 = "Faux";
      idQuestion = 0;
      tempsq2 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup3();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques2");
      pres.hidden = true;
      const para1 = document.getElementById("para3");
      para1.hidden = false;
    }
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowLeft" && idQuestion === 3) {
      res3 = "Faux";
      idQuestion = 0;
      tempsq3 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup4();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques3");
      pres.hidden = true;
      const para1 = document.getElementById("para4");
      para1.hidden = false;
    }
    if (event.code == "ArrowRight" && idQuestion === 3) {
      res3 = "Vrai";
      idQuestion = 0;
      tempsq3 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup4();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques3");
      pres.hidden = true;
      const para1 = document.getElementById("para4");
      para1.hidden = false;
    }
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowLeft" && idQuestion === 4) {
      res4 = "Vrai";
      idQuestion = 0;
      tempsq4 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup5();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques4");
      pres.hidden = true;
      const para1 = document.getElementById("para5");
      para1.hidden = false;
    }
    if (event.code == "ArrowRight" && idQuestion === 4) {
      res4 = "Faux";
      idQuestion = 0;
      tempsq4 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup5();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques4");
      pres.hidden = true;
      const para1 = document.getElementById("para5");
      para1.hidden = false;
    }
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowLeft" && idQuestion === 5) {
      res5 = "Faux";
      idQuestion = 0;
      tempsq5 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup6();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques5");
      pres.hidden = true;
      const para1 = document.getElementById("para6");
      para1.hidden = false;
    }
    if (event.code == "ArrowRight" && idQuestion === 5) {
      res5 = "Vrai";
      idQuestion = 0;
      tempsq5 = new Date().getTime() - maintenant;
      maintenant = new Date().getTime();
      setTimeout(function () {
        openPopup6();
      }, tempsAttentePopup * 1000);
      const pres = document.getElementById("ques5");
      pres.hidden = true;
      const para1 = document.getElementById("para6");
      para1.hidden = false;
    }
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowLeft" && idQuestion === 6) {
      res6 = "Vrai";
      tempsq6 = new Date().getTime() - maintenant;
      const pres = document.getElementById("ques6");
      pres.hidden = true;
      const para1 = document.getElementById("fin");
      para1.hidden = false;
      console.log(`Temps Paragraphe 1: ${tempsp1 / 1000} secondes.\nTemps Paragraphe 2: ${tempsp2 / 1000} secondes.\nTemps Paragraphe 3: ${tempsp3 / 1000} secondes.\nTemps Paragraphe 4: ${tempsp4 / 1000} secondes.\nTemps Paragraphe 5: ${tempsp5 / 1000} secondes.\nTemps Paragraphe 6: ${tempsp6 / 1000} secondes.\n\nTemps Question 1: ${tempsq1 / 1000}\nTemps Question 2: ${tempsq2 / 1000}\nTemps Question 3: ${tempsq3 / 1000}\nTemps Question 4: ${tempsq4 / 1000}\nTemps Question 5: ${tempsq5 / 1000}\nTemps Question 6: ${tempsq6 / 1000}\n\nTemps PopUp 1: ${tempspo1 / 1000}\nTemps PopUp 2: ${tempspo2 / 1000}\nTemps PopUp 3: ${tempspo3 / 1000}\nTemps PopUp 4: ${tempspo4 / 1000}\nTemps PopUp 5: ${tempspo5 / 1000}\nTemps PopUp 6: ${tempspo6 / 1000}\n\nRéponse 1: ${res1}\nRéponse 2: ${res2}\nRéponse 3: ${res3}\nRéponse 4: ${res4}\nRéponse 5: ${res5}\nRéponse 6: ${res6}\n`);
    }
    if (event.code == "ArrowRight" && idQuestion === 6) {
      res6 = "Faux";
      tempsq6 = new Date().getTime() - maintenant;
      const pres = document.getElementById("ques6");
      pres.hidden = true;
      const para1 = document.getElementById("fin");
      para1.hidden = false;
      console.log(`Temps Paragraphe 1: ${tempsp1 / 1000} secondes.\nTemps Paragraphe 2: ${tempsp2 / 1000} secondes.\nTemps Paragraphe 3: ${tempsp3 / 1000} secondes.\nTemps Paragraphe 4: ${tempsp4 / 1000} secondes.\nTemps Paragraphe 5: ${tempsp5 / 1000} secondes.\nTemps Paragraphe 6: ${tempsp6 / 1000} secondes.\n\nTemps Question 1: ${tempsq1 / 1000}\nTemps Question 2: ${tempsq2 / 1000}\nTemps Question 3: ${tempsq3 / 1000}\nTemps Question 4: ${tempsq4 / 1000}\nTemps Question 5: ${tempsq5 / 1000}\nTemps Question 6: ${tempsq6 / 1000}\n\nTemps PopUp 1: ${tempspo1 / 1000}\nTemps PopUp 2: ${tempspo2 / 1000}\nTemps PopUp 3: ${tempspo3 / 1000}\nTemps PopUp 4: ${tempspo4 / 1000}\nTemps PopUp 5: ${tempspo5 / 1000}\nTemps PopUp 6: ${tempspo6 / 1000}\n\nRéponse 1: ${res1}\nRéponse 2: ${res2}\nRéponse 3: ${res3}\nRéponse 4: ${res4}\nRéponse 5: ${res5}\nRéponse 6: ${res6}\n`);
    }
  });