
// step 1: load the window
window.onload=()=>{
    main();
}
// step 2 : get the buttton 

function main(){
    // taking the container. 
    const root=document.getElementById('root');
    // taking the button 
    const changeButton=document.getElementById('btn-change');
    // taking input area 
    const inputField=document.getElementById('output');

    changeButton.addEventListener('click',function(){
        const hexColor=hexColorGenerator();
        root.style.backgroundColor=hexColor;
        inputField.value=hexColor;
    })
}

//step 2: hex color geneate 

const hexColorGenerator=()=>{
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}