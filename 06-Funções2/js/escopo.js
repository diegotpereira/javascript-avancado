const btn = document.querySelector('button')
const _this = this

btn.addEventListener('click', function() {
    console.log('declaration');
    console.log(this);
    console.log(_this);
    console.log(this === _this);
})

btn.addEventListener('click', () => {
    console.log('arrow');
    console.log(this);
    console.log(_this);
    console.log(this === _this);
})