console.log("Page Loaded Succesfully!")

const display = document.getElementById('displayingScrren')


function funNumber(event){
    console.log(event.target.innerText)
    let value = event.target.innerText

    if(display.innerText === '0'){
        display.innerText=value;
    }else{
        let data = display.innerText
        display.innerText = (data + value)
    }

}

function funDelete(){
    display.innerText=0
}

function funcAC(){
    let data = display.innerText
    if(data.length > 1){
        data = data.slice(0,-1)
        display.innerText = data
    }else{
        display.innerText=0
    }
}



function funOperations(){
    
    try {
        let data = display.innerText
        display.innerText = eval(data )

    } catch (error) {
        display.innerText=`Error : ${error.message}`
    }
        
    
}