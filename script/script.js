let table = document.getElementById('table');

table.addEventListener('click', (e) => {
    if(e.target.innerHTML !== 'X' && e.target.innerHTML !== 'O'){
        e.target.innerHTML = 'X';
            wherePutZero().innerHTML = 'O';
    }
    else{
        alert('Choose the right cell!')
    }      
    if (isGameOver()) {
        alert("Game Over");
    }
})

function wherePutZero(){
    let cells = table.getElementsByClassName('cell');
    console.log(cells)
    for(let i = 0; i<cells.length; i++){
        if(cells[i].innerHTML !== 'X' && cells[i].innerHTML !== 'O'){
            if(i === 0){
                if((cells[1].innerHTML === 'O' && cells[2].innerHTML === 'O') 
                    ||(cells[3].innerHTML === 'O' && cells[6].innerHTML === 'O')
                    ||(cells[4].innerHTML === 'O' && cells[8].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 1){
                if((cells[0].innerHTML === 'O' && cells[2].innerHTML === 'O') 
                    ||(cells[4].innerHTML === 'O' && cells[7].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 2){
                if((cells[1].innerHTML === 'O' && cells[0].innerHTML === 'O') 
                    ||(cells[4].innerHTML === 'O' && cells[6].innerHTML === 'O')
                    ||(cells[5].innerHTML === 'O' && cells[8].innerHTML === 'O')){
                }else{
                    return cells[i];
                }
            }
            if(i === 3){
                if((cells[1].innerHTML === 'O' && cells[6].innerHTML === 'O') 
                    ||(cells[4].innerHTML === 'O' && cells[5].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 4){
                if((cells[1].innerHTML === 'O' && cells[7].innerHTML === 'O') 
                    ||(cells[3].innerHTML === 'O' && cells[5].innerHTML === 'O')
                    ||(cells[0].innerHTML === 'O' && cells[8].innerHTML === 'O')
                    ||(cells[6].innerHTML === 'O' && cells[2].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 5){
                if((cells[3].innerHTML === 'O' && cells[4].innerHTML === 'O') 
                    ||(cells[2].innerHTML === 'O' && cells[8].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 6){
                if((cells[0].innerHTML === 'O' && cells[3].innerHTML === 'O') 
                    ||(cells[7].innerHTML === 'O' && cells[8].innerHTML === 'O')
                    ||(cells[4].innerHTML === 'O' && cells[2].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 7){
                if((cells[6].innerHTML === 'O' && cells[8].innerHTML === 'O') 
                    ||(cells[1].innerHTML === 'O' && cells[4].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
            if(i === 8){
                if((cells[0].innerHTML === 'O' && cells[4].innerHTML === 'O') 
                    ||(cells[6].innerHTML === 'O' && cells[7].innerHTML === 'O')
                    ||(cells[2].innerHTML === 'O' && cells[5].innerHTML === 'O')){

                }else{
                    return cells[i];
                }
            }
        }
    }
}

function isGameOver(){
  let flag;
  let count = table.getElementsByTagName('tr').length;
  for(let i = 0; i < count; i++){
    let winRow = true;
    let winColumn = true;
    let winLeftTop = true;
    let winLeftBottom = true;

    for(let k = 0; k < count; k++){
      if(table.rows[i].cells[k].innerHTML !== 'X') winRow = false;
      if(table.rows[k].cells[i].innerHTML !== 'X') winColumn = false;
      if(table.rows[k].cells[k].innerHTML !== 'X') winLeftTop = false;
      if(table.rows[count-1-k].cells[k].innerHTML !== 'X') winLeftBottom = false;
    }

    if(winRow || winColumn || winLeftTop || winLeftBottom){
      flag = true;
      break;
    }
  }   
  return flag
}