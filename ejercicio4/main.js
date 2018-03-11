let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1','ordenador2','ordenador3']
    },{
        almacenan: '.mp3',
        nodos: ['ordenador2','ordenador5']
    },{
        almacenan: '.json',
        nodos: ['ordenador1','ordenador4','ordenador6']
    },{
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    },{
        almacenan: '.avi',
        nodos: ['ordenador1','ordenador7']
    },
];

var files = servidores.filter(servidor => servidor.almacenan==".mp4" || servidor.almacenan==".png");
var nodos = files.map(file=>file.nodos);
var nodo = _.flattenDeep(nodos);
console.log(_.uniq(nodo));