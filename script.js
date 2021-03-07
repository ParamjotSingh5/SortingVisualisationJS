let values = [];
let brickWidth = 2;


function resetButtonClick(){
    setup();
    cleanContainerDiv();
    resetArray();
}

function cleanContainerDiv(){
    var containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.innerHTML = "" ;  
}

function setup(){
    values.length = 200; // Array size or number of bricks
}

function buildArray(array){
    var containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.innerHTML = "" ;  
    for(var i=0; i< array.length; i++){
        containerDiv.appendChild(createBrick(array[i]));
    }   
}

function SortBuiltArray(array){
    var containerDiv = document.getElementsByClassName("container")[0];
    
    for(var i=0; i< array.length; i++){
        var currentBrick = containerDiv.getElementsByTagName('span')[i];        
        currentBrick.style.height = array[i] + "px";                
    }   
}

function createBrick(height){

    var tempSpan = document.createElement("span");
    tempSpan.style.height = height + "px";
    tempSpan.style.width = brickWidth + "px";
    tempSpan.style.display = "inline-block";
    tempSpan.style.background = "cornflowerblue";
    tempSpan.style.marginLeft = "2px";
    tempSpan.style.marginRight = "2px";

    return tempSpan;
}

function resetArray(){
    for(var i=0; i < values.length; i++){
        values[i] = Math.floor(Math.random() * 400 + 5);          
    }    
    buildArray(values);
}

async function sortButtonClick(){
    for(var i=0; i< values.length; i++){
        for(var j=0; j< values.length -i -1; j++){
            var a = values[j];
            var b = values[j+1];
            if(a>b)
            {
                swap(values, j, j+1);
            }           
        }           
        SortBuiltArray(values);
        await waitforme(0);        
    }    
}


function swap(arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}



function waitforme(ms)  {
    return new Promise( resolve => { setTimeout(resolve, ms); });
}