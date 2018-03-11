let alojamientos = [
    {
        nombre: 'Bahía Feliz',
        comentarios: [
            {
                usuario: 'Franz Kartofen',
                comentario: 'Gut',
                valoracion: 6
            },
            {
                usuario: 'Ferdinando',
                comentario: 'Muy bueno',
                valoracion: 9
            },
            {
                usuario: 'Roberthino',
                comentario: 'Molto malo',
                valoracion: 3
            },    
        ]
    },
    {
        nombre: 'Nacho Sol',
        comentarios: [
            {
                usuario: 'Manolín',
                comentario: 'Estuvo chido',
                valoracion: 10
            },
            {
                usuario: 'Solete',
                comentario: 'Muy sucio',
                valoracion: 2
            }    
        ]
    }
    
];
var sum=0;
var numbers=0;
alojamientos.forEach(alojamiento=>alojamiento.comentarios.forEach(comentario=>{
    sum += comentario.valoracion;
    numbers++;
}))

alojamientos.forEach(alojamiento=> alojamiento.media = sum/numbers);
console.log(sum);
console.log(numbers);

console.log(alojamientos);
