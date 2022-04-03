const element = document.getElementById('submit-btn')
element.addEventListener('click', submit);

function submit(){
    document.getElementById('state-2').style.display = 'block';
    document.getElementById('state-1').style.display = 'none'
};