setTimeout(()=>{
    const items=document.querySelectorAll('.item')
  const c1=document.getElementById('a')
    const c2=document.getElementById('b')
    const c3=document.getElementById('c')
    const c4=document.getElementById('d')
    c1.oninput=function (){
        for(let i=0;i<items.length;i++){
                if(items[i].innerText.includes('футболк')){items[i].style.display='block'}else{items[i].style.display='none'}}}
    c2.oninput=function (){
        for(let i=0;i<items.length;i++){
            if(items[i].innerText.includes('рубашк')){items[i].style.display='block'}else{items[i].style.display='none'}}}
    c3.oninput=function (){
        for(let i=0;i<items.length;i++){
            if(items[i].innerText.includes('курт')){items[i].style.display='block'}else{items[i].style.display='none'}}}
    c4.oninput=function (){
        for(let i=0;i<items.length;i++){
            if(items[i].innerText.includes('трус')){items[i].style.display='block'}else{items[i].style.display='none'}}}
},"1")
