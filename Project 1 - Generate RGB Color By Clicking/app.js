
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
z
    changeButton.addEventListener('click',function(){
        const rgbColor=rgbColorGenerator();
        root.style.backgroundColor=rgbColor;
    })
}

//step 2: rgb color geneate 

const rgbColorGenerator=(r,g,b)=>{4
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}