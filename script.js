let body = document.querySelector("body");
let label1 = document.createElement("label");
label1.innerHTML = "Nombre de questions ?";
label1.htmlFor = "nbQuestions"; 
let input = document.createElement("input");
input.type = "number";
input.id="nbQuestions";
let button = document.createElement("button");
button.innerHTML = "Valider";
let br = document.createElement("br");

body.appendChild(label1);
body.appendChild(input);
body.appendChild(button);
body.appendChild(br);

let button2 = document.createElement("button");
button2.innerHTML = "Valider";
let nbQuestions;
button.onclick = () => {
    nbQuestions = document.querySelector("input").value;
    for (let i = 0; i < nbQuestions; i++) {
        let label2 = document.createElement("label");
        label2.innerHTML = "Entrer la question";
        let input2 = document.createElement("input");
        input2.type = "text";
        input2.name = `titre${i}`;

        body.appendChild(label2); 
        body.appendChild(input2); 

        let reponse1 = document.createElement("input");
        reponse1.type = "radio";
        reponse1.name = "question" + i;
        reponse1.id="reponse1";
        reponse1.value = true;
        body.appendChild(reponse1);

        let labelr1 = document.createElement("label");
        labelr1.htmlFor = "reponse1";
        labelr1.innerHTML = "Vrai";
        body.appendChild(labelr1);

        let reponse2 = document.createElement("input");
        reponse2.type = "radio";
        reponse2.name = "question" + i;
        reponse2.id = "reponse2";
        reponse2.value = false;
        body.appendChild(reponse2);

        let labelr2 = document.createElement("label");
        labelr2.htmlFor = "reponse2";
        labelr2.innerHTML = "Faux";
        body.appendChild(labelr2);

        let br = document.createElement("br");

        body.appendChild(br); 

    }

    body.appendChild(button2);
}

let questions = [];

button2.onclick = () => {
    
    for (let i = 0; i < nbQuestions; i++) {
        questions[i] = new Object();
        questions[i].titre = document.querySelector(`input[name=titre${i}`).value;
        let radios = document.querySelectorAll(`input[name="question${i}"]`);
        for (const radio of radios) {
            if (radio.checked) {
                questions[i].reponse = radio.value;
                break;
            }
        }

    }
    body.innerHTML = "";
    loadQcm(questions);
}

function loadQcm(questions) {
    for (let i = 0; i < questions.length; i++) {
    
        //Label de la question
        let p = document.createElement("p");
        p.innerHTML = questions[i].titre;
        let br = document.createElement("br");
        body.appendChild(p);
        body.appendChild(br);
    
        //Input type radio
        let reponse1 = document.createElement("input");
        reponse1.type = "radio";
        reponse1.name = "question" + i;
        reponse1.id="reponse1";
        reponse1.value = true;
        body.appendChild(reponse1);
    
        let labelr1 = document.createElement("label");
        labelr1.htmlFor = "reponse1";
        labelr1.innerHTML = "Vrai";
        body.appendChild(labelr1);
    
        let reponse2 = document.createElement("input");
        reponse2.type = "radio";
        reponse2.name = "question" + i;
        reponse2.id = "reponse2";
        reponse2.value = false;
        body.appendChild(reponse2);
    
        let labelr2 = document.createElement("label");
        labelr2.htmlFor = "reponse2";
        labelr2.innerHTML = "Faux";
        body.appendChild(labelr2);
    }
    
    let br2 = document.createElement("br");
    body.appendChild(br2);
    let button = document.createElement("button");
    button.innerHTML = "Soumettre";
    body.appendChild(button);
    
    button.onclick = () => {
        let note = 0;
        for (let i = 0; i < questions.length; i++) {
            let radios = document.querySelectorAll(`input[name="question${i}"]`);
            let selectedValue;
            for (const radio of radios) {
                if (radio.checked) {
                    selectedValue = radio.value;
                    //console.log(selectedValue);
                    break;
                }
            }
    
            console.log(questions[i].reponse);
            if ( selectedValue == questions[i].reponse) {
                note++;
            }
        }
        let p2 = document.createElement("p");
        p2.innerHTML = `Tu as obtenu la note de ${note} sur ${questions.length}`;
        body.appendChild(p2);    
    }
}
