'use scrict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var classname = document.body.className;
    if (classname == "light.theme"){
        this.textcontent = "Dark";
    }
    console.log('Nome da Classe Atual: ' + classname);
});
