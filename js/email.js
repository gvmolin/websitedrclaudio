document.getElementById("enviar-dados").addEventListener('click', async(event)=>{
    event.preventDefault()
    const str = getStr()
    sendEmail(str)
})

function getStr(){
    const form = document.querySelector('form')

    var weekDays = document.getElementsByName('dia-semana')
    var weekDaysStr = ''
    for(let i=0; i < weekDays.length; i++){
        var weekIndex = weekDays[i]
        if(weekIndex.checked){
            var weekDaysStr = weekDaysStr + `${weekIndex.value}, `
        }
    }

    var sexSelect = document.getElementById('sexo');
    var sexValue = sexSelect.options[sexSelect.selectedIndex].value;

    var hourSelect = document.getElementById('horario');
    var hourValue = hourSelect.options[hourSelect.selectedIndex].value;

    var prefSelect = document.getElementById('horario');
    var prefValue = prefSelect.options[prefSelect.selectedIndex].value;
    

    const str = `
        FICHA PREENCHIDA PELO SITE:\n
        Nome: ${form.nome.value}// \n 
        Idade: ${sexValue}// \n
        Sexo: ${form.sexo.value}// \n
        Dias selecionados: ${weekDaysStr}// \n
        Horario selecionado: ${hourValue}// \n
        Telefone para contato: ${form.fone.value}// \n
        Email: ${form.email.value}// \n
        Preferencia para contato: ${prefValue}// \n
        Informações adicionais: ${form.infoAdd.value}//
    `
    return str
}

function sendEmail(messageStr){
    var tempParams = {
        message:messageStr 
    }
    emailjs.send('service_maf02n1', 'template_8g6xc2q', tempParams)
    .then(
        alert('Dados enviados com sucesso.')
    )
        
    
}