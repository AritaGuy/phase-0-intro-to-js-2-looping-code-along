// Code your solutions in this file
const thankYou = ['July','Maggie','Meg']

function writeCards(name, event){
    let msg = []
    for (let i = 0; i<thankYou.length; i++){
        msg.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return msg;

}
function countDown(num){
    
    while (num > -1){
        console.log (num--);
    }
}
