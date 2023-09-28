
function display(val){
    document.getElementById('input').value += val
}
function solve(){
    let x =  document.getElementById('input').value

    let y = eval(x)

    document.getElementById('input').value=y

    return y
}
function clearscreen(){
    document.getElementById('input').value=""
}
function delescreen(){
    document.getElementById('delete').addEventListener('click',()=>{
        
        let inputField = document.getElementById('input')
        const inputValue = inputField.value;

        if (inputValue.length > 0) {
            const newValue = inputValue.slice(0, -1); // Remove the last character
            inputField.value = newValue;
          } else {
            alert("The input field is empty!");
          }
        })
    }
delescreen()
