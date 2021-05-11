
const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

            
const preguntas = [
  {
  
    pregunta: "1).Belén tiene 50 cromos y su amiga Gloria tiene 30.¿Cuántos cromos tienen entre las dos?",
    respuestas: {
      a: "0",
      b: "70",
      c: "80",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "2).Entre dos amigos tienen 700 canicas. si uno tiene 200, ¿Cuantas canicas tiene el otro?",
    respuestas: {
      a: "400",
      b: "500",
      c: "600",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "3). Pedro tiene 20 rotuladores, juan tiene 10 y Eva tiene 30.¿Cuántos rotuladores tienen entre los tres?",
    respuestas: {
      a: "40",
      b: "20",
      c: "50",
      d: "60",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4).En un corral hay 34 gallinas y otro 11 menos.¿Cuantas gallinas hay entre los dos corrales?",
    respuestas: {
      a: "57",
      b: "67",
      c: "47",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5).¿En un árbol hay 28 ardillas y otro diez menos.¿Cuántas ardillas hay en el segundo árbol?",
    respuestas: {
      a: "18",
      b: "8",
      c: "17",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "6).Marta tiene 85 céntimos y compra una bolsa de pipas de 35 céntimos.¿Cuánto dinero le queda  ?",
    respuestas: {
      a: "71",
      b: "60",
      c: "50",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7).25 Amigos compraron 21 rifas cada uno.¿Cuantas rifas hay en total?",
    respuestas: {
      a: "635",
      b: "525",
      c: "545",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8).¿En un almacén hay 744 vajas y en cada una hay 25 bolsos ¿Cuántos bolsos hay en total?",
    respuestas: {
      a: "18,800",
      b: "18,600",
      c: "18.600",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9).Una caja tiene  44 pelotas. Si hay 4 niños ¿Cúantas pelotas le corresponderá cada uno ?",
    respuestas: {
      a: "11",
      b: "12",
      c: "10",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10). En mi cuaderno tengo 62 problemas. Si cada día hago 5 , ¿En cúantos dias acabaré cuaderno?",
    respuestas: {
      a: "12 Días",
      b: "13 Días",
      c: "16 Días",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;
   
    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);