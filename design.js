let off = document.querySelector('.off').addEventListener('click',()=>{
    let image_off = document.querySelector('.imgoff').style.display = 'block';
    let image_on = document.querySelector('.imgon').style.display = 'none';
})
let on = document.querySelector('.on').addEventListener('click',()=>{
    let image_on = document.querySelector('.imgon').style.display = 'block';
    let image_off = document.querySelector('.imgoff').style.display = 'none';
})