
const comida = ["bread","milk","cheese","hummus","noodles"]
const DiasSemsna =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"
]

const usuario = [{nombre:"juan",apellido:"polo",telefono:"11111",edad:"23"},
        {nombre:"thiago",apellido:"florez",telefono:"22222",edad:"6"},
        {nombre:"camila",apellido:"silva",telefono:"333333",edad:"18"},
        {nombre:"jose",apellido:"pastrana",telefono:"44444",edad:"30"},
        {nombre:"mabel",apellido:"lopez",telefono:"55555",edad:"50"},]

const estudiantes = [{nombre:"juana",apellido:"perez",telefono:"11211",edad:"33",materia:"ingles",hobbiesFav:"futbol"},
        {nombre:"santiago",apellido:"turuzo",telefono:"22522",edad:"16",materia:"historia",hobbiesFav:"leer"},
        {nombre:"camilo",apellido:"silva",telefono:"3335553",edad:"18",materia:"fisica",hobbiesFav:"leer"},
        {nombre:"jorse",apellido:"pastrana",telefono:"448844",edad:"10",materia:"ingles",hobbiesFav:"futbol"},
        {nombre:"malcon",apellido:"lopez",telefono:"55555",edad:"50",materia:"ingles",hobbiesFav:"futbol"},]
        

const color=["azul","rojo","amarillo","rosa"]
color[3]=[color[3]]

for (let i= 0; i < usuario.length; i++){
    console.log(usuario[i]);
}
for (let j= 0; j < estudiantes.length; j++){
    console.log(estudiantes[j]);
}

for(let k=0;k<comida.length; k++){
    console.log(comida[k])
}

for(let l=0;l<DiasSemsna.length;l++){
    console.log(DiasSemsna[l])
}

for(let p=0;p<color.length;p++){
    console.log(color[p])
}