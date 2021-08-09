
function startcounter(){
    var target=parseInt(document.getElementById('inputId').value);
    var current=document.querySelectorAll(".current");
    var next=document.querySelectorAll(".next");
    var start=0;
    for(let i of current){
        i.innerText=0;
    }
    for(let i of next){
        i.innerText=1;
    }
    var countInterval=setInterval(function(){
        console.log(start);
        if(start === target){
            clearInterval(countInterval);
            alert("Counter Has Been Stopped");
            return;
        }
        increaseCount(current,next,4);
        start++;
    },1000);
}

function increaseCount(current,next,index){
    let curr=current[index];
    let nxt=next[index];
    if(curr.innerText == 9){
        increaseCount(current,next,index-1);
    }
    nxt.classList.add('animate');
    setTimeout(function(){
        curr.innerText = nxt.innerText;
        nxt.classList.remove("animate");
        nxt.innerText = parseInt(nxt.innerText) + 1;
        if(nxt.innerText > 9) {
            nxt.innerText = 0;
        }
    },500);

}
