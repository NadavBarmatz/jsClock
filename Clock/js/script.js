setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    // const milisecRatio = currentDate.getMilliseconds/60000
    const secondRatio = currentDate.getSeconds()/60
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60
    const hourRatio = (minuteRatio + currentDate.getHours())/12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()


const unsortedArr = [5, 47 , 99, 1, 46, 55, 2, 54, -5, 100, 156, 54]

function bubblesort(arr){
    var arrLen = arr.length; //5
    var temp = 0;
    
    for(let i = arrLen-1; i > 0; i--){
        for(let j = 0; j < arrLen; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log(arr);

        arrLen -= 1;
    }
    // return console.log(arr);
}

bubblesort(unsortedArr)