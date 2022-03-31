const readline = require('readline-sync');

module.exports = class Example {

  greeting() {

    const arrTower = []

    let jumlahTower = readline.question("Masukan Jumlah Tower : ");

    for (var i = 1;i <= jumlahTower; i++) {
      function formTower() {
        
        console.log("");
        let namaTower = readline.question(`Masukan Nama Tower ${i} : `);
        let inputX =  readline.question("Masukan Kordinat X : ");
        let inputY =  readline.question("Masukan Kordinat Y : ");

        return arrTower.push({
          nama : namaTower,
          kordinatX : parseInt(inputX),
          kordinatY : parseInt(inputY)
        }) 
      }
      formTower()
    }

    const arrOrder = []

    function inputOrder(){

      console.log('');
      console.log('Order Tower');
      let inputOrderX =  readline.question("Masukan Kordinat X : ");
      let inputOrderY =  readline.question("Masukan Kordinat Y : ");
      console.log('');
      
      return arrOrder.push(parseInt(inputOrderX), parseInt(inputOrderY));

    }
    inputOrder()
  
    function DistSquared(pt1, pt2) {
      var diffX = pt1.x - pt2.x;
      var diffY = pt1.y - pt2.y;
      return (diffX*diffX+diffY*diffY);
    }
  
   const closest = arrTower[0];
   const shortestDistance = DistSquared(arrOrder, arrTower[0]);
   for (i = 0; i < arrTower.length; i++) {
       var d = DistSquared(arrOrder, arrTower[i]);
       if (d < shortestDistance) {
           closest = arrTower[i];
           shortestDistance = d;
       }
   }
  
    return console.log(`Hasil Pencarian Tower Terdekat : ${closest.nama}`);

  }

}
