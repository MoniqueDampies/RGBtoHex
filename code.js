const btnDisplay = document.querySelector('#generate');

function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}

btnDisplay.addEventListener('click',()=>{

    let redcode = parseInt(document.querySelector('#rgbR').value);
    let greencode = parseInt(document.querySelector('#rgbG').value);
    let bluecode = parseInt(document.querySelector('#rgbB').value);

    let rcode = redcode.toString(16);
    let gcode = greencode.toString(16);
    let bcode = bluecode.toString(16);

    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    console.log(rcode);
    console.log(bcode);
    console.log(gcode);
    let hexString = rcode + gcode + bcode;
    document.querySelector('#hex').innerHTML = '#'+hexString;

    // let clrpane = document.querySelector('#color');
    // let value = '#color' + hexString; 
    // clrpane.style = `background-color: ${value}`;

    
  let clrpane = document.querySelector("#color");
  let value =
    "rgb(" +
    parseInt(redcode, 16) +
    ", " +
    parseInt(greencode, 16) +
    ", " +
    parseInt(bluecode, 16) +
    ")";
  clrpane.style = `background-color: ${value}`;

  
  let txtclr = document.querySelector("#hex");
  let value1 =
    "rgb(" +
    parseInt(redcode, 16) +
    ", " +
    parseInt(greencode, 16) +
    ", " +
    parseInt(bluecode, 16) +
    ")";
  txtclr.style = `color: ${value1}`;

})
