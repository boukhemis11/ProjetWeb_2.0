/*global document*/
// ------------------------------------- Variables
var i = 0;
var j = 0;
var g9countdown;
var g9sec;
var g9element = document.querySelector(".g9qst");
var g9element1 = document.getElementsByClassName("g9qst1");
var g9timer = document.getElementById('timer');

var g9question1 = ["Quand vous utilisez la balise TITLE, où est affiché le texte? ", "Le titre est affiché dans le haut des navigateurs. ", "Le titre est placé au début de chaque paragraphe.", "Le titre est placé au début de la page HTML.", "Toutes les réponses ci-dessus "];
var g9question2 = ["Quelle est la syntaxe pour déclarer l'encodage des caractères du document en UTF-8 ?", "&lt;meta charset=utf-8&gt;", "&lt;meta charset=text/html; UTF-8&lt;", "&lt;meta encoding=text/html; charset=utf-8&gt;", "&lt;meta encoding=text/html&gt;"];
var g9question3 = ["Quelle nouvelle balise de section permet de regrouper un contenu tangentiel au contenu principal du document ?", "&lt;aside&gt;", "&lt;section id=sidebar&gt;", "&lt;sidebar&gt;", "&lt;details&gt;"];
var g9question4 = ["La nouvelle balise &lt;time&gt; permet de baliser une date structurée. Quelle serait sa syntaxe pour le 1er avril 2012 à 13h37 ?", "&lt;time datetime=2012-04-01T13:37:00Z&gt;&lt;/time&gt;", "&lt;time value=2012-04-01 13:37&gt;&lt;/time&gt;", "&lt;time datetime=01/04/2012 13H37M00S&gt;&lt;/time&gt;", "&lt;time 01/04/2012 13H37M00S &gt;&lt;/time&gt;"];
var g9question5 = ["À partir de quelle version d'Internet Explorer peut-on utiliser nativement les éléments de section HTML5 (sans hack ou script complémentaire) ?", "Internet Explorer 9", "Internet Explorer 8", "Internet Explorer 10", "Internet Explorer 7"];
var g9question6 = ["Quelle est la méthode pour associer une légende complète à une illustration ?", "&lt;figure&gt;&lt;img src=image.jpg&gt;&lt;figcaption&gt;La légende...&lt;/figcaption&gt;&lt;/figure&gt;", "&lt;figure src=image.jpg legend=#cap1&gt;&lt;/figure&gt;&lt;figcaption id=cap1&gt;La légende...&lt;/figcaption&gt;", "&lt;figure&gt;&lt;legend&gt;La légende...&lt;/legend&gt;&lt;img src=image.jpg&gt;&lt;/figure&gt;", "&lt;figure&gt;&lt;img src=image.jpg&gt;&lt;/figure&gt;"];
var g9question7 = ["Comment représenter une barre de progression à 50% d'avancement ?", "&lt;progress value=50 max=100&gt;50%&lt;/progress&gt;", "&lt;input type=progress value=0.5&gt;50%&lt;/progress&gt;", "&lt;input type=progress value=50 max=100 title=50% /&gt;", "&lt;input type=progress value=50&gt;50%&lt;/progress&gt;"];
var g9question8 = ["Quelle balise doit permettre l inclusion de sous-titres textes dans les vidéos lues avec &lt;video&gt; ?", "&lt;track src=soustitres.vtt&gt;", "&lt;subtitle source=soustitres.srt&gt;", "&lt;captions source=soustitres.srt&gt;", "&lt;soustitres source=soustitres.srt&gt;"];
var g9question9 = ["L'attribut du tag A définissant l'URL d'un lien hypertexte est :", "href", "url", "location", "http"];
var g9question10 = ["Un meta-tag doit se placer", "Dans l'entête", "Dans le corps", "En-dehors du HTML", "dans l'entête et dans le corps "];
var g9question = [g9question1, g9question2, g9question3, g9question4, g9question5, g9question6, g9question7, g9question8, g9question9, g9question10];

function g9getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function g9startTimer() {
    g9sec = 06;
    g9countdown = setInterval(g9currentTime, 1000);
}

function g9resetTimer() {
    clearInterval(g9countdown);
    g9timer.innerHTML = "left time = 0:06";
    g9startTimer()
}

// ------------------------------------- Countdown Output
function g9currentTime() {
    switch (true) {
        case (g9sec < 07 && g9sec > 0):
            g9timer.innerHTML = 'left time = 0:0' + g9sec;
            break;
        case (g9sec === 0):
            g9timer.innerHTML = 'left time = 0:0' + g9sec;
            clearInterval(g9countdown);
            g9resetTimer()
            g9loadQuestion();
            break;
        default:
            g9timer.innerHTML = 0 + ':' + g9sec;
            break;
    }
    g9sec--;
}

function g9Table(table) {
    var g9rand = Math.floor(Math.random() * 9);
    return table[g9rand]
}
var g9secore = document.getElementById('secores');

function g9loadQuestion() {
    g9resetTimer()
    var g9qstn = g9Table(g9question);
    var g9q = g9qstn[0];
    var g9ins1 = g9qstn[1];
    var g9ins2 = g9qstn[2];
    var g9ins3 = g9qstn[3];
    var g9ins4 = g9qstn[4];
    do {
        var g9numRand1 = g9getRndInteger(0, 3);
        var g9numRand2 = g9getRndInteger(0, 3);
        var g9numRand3 = g9getRndInteger(0, 3);
        var g9numRand4 = g9getRndInteger(0, 3);
        i = i + 1;
    } while (g9numRand1 == g9numRand2 | g9numRand1 == g9numRand3 | g9numRand1 == g9numRand4 | g9numRand2 == g9numRand3 | g9numRand2 == g9numRand4 | g9numRand3 == g9numRand4);
    g9element.innerHTML = g9q;
    g9element1[g9numRand1].innerHTML = g9ins1;
    g9element1[g9numRand2].innerHTML = g9ins2;
    g9element1[g9numRand3].innerHTML = g9ins3;
    g9element1[g9numRand4].innerHTML = g9ins4;


    var g9check = document.g9element1[g9numRand1].checked;
    if (g9check) {
        j++;
        g9secore.innerHTML = j;
    }
}


function g9start() {
    g9loadQuestion();
    g9resetTimer();
}

g9start();
