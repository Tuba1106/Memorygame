let cards = document.querySelectorAll('.inner');
let first = false;
let daralt = 0;
let hos = [];

cards.forEach((card)=> {
    card.state = 'unclicked';
})

shuffle() ;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click',()=>{
        if(!first){time()}
        first= true;

        if(cards[i].state='unclicked') {
            cards[i].style.transform='rotateY(180deg)';
            cards[i].state='clicked';
            daralt++;
            hos.push(cards[i]);
            hosshalgah()
        }
        else if (cards[i].state== 'clicked') {
            cards[i].style.transform = 'rotateY(0deg)';
            cards[i].state = 'unclicked';
            daralt--;
            hos = [];
        }
    });
}

function hosshalgah() {
    if(daralt==2) {
        if(hos[0].querySelector('img').src==hos[1].querySelector('img').src) {
            match()

        }else{unmatch(hos[0],hos[1])}
    }
}

function match() {
    hos[0].state='blocked';
    hos[1].state='blocked';
    daralt=0;
    hos=[];
    let score = document.querySelector('#score').innerHTML;
    score++
    document.querySelector('#score').innerHTML = score;
    
}

function unmatch(x,y) {
    setTimeout(()=> {
        x.style.transform = 'rotateY(0deg)';
        y.style.transform = 'rotateY(0deg)';
    },750)
    hos[0].state='unclicked';
    hos[1].state='unclicked';
    daralt = 0;
    hos=[];

    
}

function time() {
    let sec = 0;
    let min = 0;
    let SS;
    let MM;
    setInterval(()=>{
    sec++
    if(sec==60){sec=0; min++};
    sec<10?SS=`0${sec}`:SS=`${sec}`;
    min<10?MM=`0${min}`:MM=`${min}`;

    document.querySelector('#time').innerHTML=`${MM}:${SS}`
    },1000)
        



}


function shuffle() {
    let images = document.querySelectorAll("img")
    let srcs = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png'];
    
    for(let i=srcs.length-1; i>0; i--) {
        let j= Math.floor(Math.random()*i)
        let t= srcs[i]
        srcs[i]=srcs[j]
        srcs[j]=t;
    }

        for (let i = 0; i < images.length; i++) {
            images[i].src = srcs[i];
    }
}