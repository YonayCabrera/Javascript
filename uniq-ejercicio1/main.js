let provincias = [
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Albacete', codigoPostal: '02653'},
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Las Palmas', codigoPostal: '35118'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
    {nombre: 'Madrid', codigoPostal: '28001'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
];

var codigosPostales = provincias.map(provincia=> provincia.codigoPostal);
console.log(_.uniq(codigosPostales));