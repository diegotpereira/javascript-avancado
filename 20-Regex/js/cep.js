const regex = /^\d{5}-\d{3}$/
const elFocus = (e) => console.log('focus');
const elBlur = (e) => {
    const cep = e.target.value
    console.log(isCepValid(cep));
}

const el = document.getElementById('cep')
el.addEventListener('focus', elFocus)
el.addEventListener('blur', elBlur)

const isCepValid = cep => regex.test(cep)