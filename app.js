const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];

function getTime(){
    const dt = new Date();
    return (dt.getHours() + ':' + dt.getMinutes());
}

let dayNum = new Date().getDay();

const currTime = document.querySelector('#currentTime');
const currDay = document.querySelector('#currentDay');
const dayName = document.querySelector('#dayName');

currTime.innerText = getTime();
currDay.innerText = days[dayNum];

const subjectCols = document.querySelectorAll('.subjects');
const linkCols = document.querySelectorAll('.link-primary'); 

function update(){
    dayNum = parseInt(menu.value);
    for (let i = 0; i < 8; i++){
        let inrText = subjects[`${days[dayNum]}`][i];

        if(inrText == undefined || inrText.length == 0){
            inrText = '--Free--'
            subjectCols[i].parentElement.classList.add('bg-free-color')
        }
        else{
            subjectCols[i].parentElement.classList.remove('bg-free-color')
        }


        let lnkText = links[`${days[dayNum]}`][i];

        if(lnkText == undefined || lnkText.length == 0){
            linkCols[i].classList.add('hide');
        }
        else{
            linkCols[i].classList.remove('hide');
        }
        subjectCols[i].innerText = inrText;
        linkCols[i].href = lnkText;
    }
}
// Drop-down menu
const menu = document.querySelector('.form-select');
menu.selectedIndex = dayNum;
menu.addEventListener('change', update)


update(subjectCols);
