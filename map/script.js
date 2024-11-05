const img1 = document.getElementById("display-img");
const pageCount = 4

function mod(number,modulo){
    return (number%modulo+modulo)%modulo;
    
    } 

var pageNum=0;

function nextPage(){
    pageNum+=1;
    pageNum = mod(pageNum,pageCount)
    img1.src = `map_image/image${pageNum}.png`;
}
