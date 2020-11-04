var boxList = document.querySelectorAll(".box");


var first ;
var second;
var isClicked = false;

boxList.forEach((box) => {
    box.addEventListener('click',()=>{
        box.classList.add('flip');
        if(!isClicked){
            first = box;
            
            isClicked = true;
        }
        else{
            second = box;
            
            result();
        }
    })
})

var result = () =>{
    if(first.dataset.who === second.dataset.who){
        first.dataset.checked = 'y';
        first.dataset.checked = 'y';
        first = null;
        second = null;
        isClicked=false;
        
    }
    else{
        setTimeout(()=>{
            first.classList.remove('flip');
            second.classList.remove('flip');
            first = null;
            second = null;
            isClicked=false;
        },1000);
        
    }
}

var count = 0;
boxList.forEach((box)=>{
    if(box.dataset.checked === 'y'){
        count=count+1;
    }
})

if(count === 16){
    console.log("winner");
}