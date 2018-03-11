let procesadores = [
    {modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15},
    {modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60},
    {modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3},
    {modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4},
    {modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10},
    {modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80}
];

var pro = procesadores.filter(procesador => procesador.tasaDeFallos<50)

pro.sort((a,b)=>{
    if (a.operacionesPorSegundo > b.operacionesPorSegundo) {
        return 1;
      }
      if (a.operacionesPorSegundo < b.operacionesPorSegundo) {
        return -1;
      }
      return 0;
})

console.log(pro);
