const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// obtener el total de segundos de todos los videos del tipo 'Redux Video'
// pistas: convertirlo en objetos
// Vale por el primer parcial
// Fecha de entrega: Domingo 30 AGO 23:59
// Fecha de solucio: Miercoles 2 de SEP

// Modalidad de entrega. Pull Request.
//console.log(str);
let tiempos = str.split('"');
let videos = [];
tiempos.filter(parte => parte.includes(":"))
  .forEach(tiempo => {
    tiempo = tiempo.split(":");
    videos.push({ tiempo: { minutos: Number.parseInt(tiempo[0]), segundos: Number.parseInt(tiempo[1]) } })
  });

let tipos = str.split('">').join("</li>").split("</li>");

let j = 0;
for (let i = 1; i < tipos.length - 1; i = i + 2) {
  videos[j].tipo = tipos[i];
  j++;
}

let tipoBuscado = 'Redux Video';
let suma = 0;
videos.filter(video => video.tipo === tipoBuscado).forEach(video => suma += video.tiempo.minutos * 60 + video.tiempo.segundos)
console.log("La suma buscada es de", suma, "segundos");