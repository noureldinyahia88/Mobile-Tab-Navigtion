const img = document.querySelectorAll('.content')
const li = document.querySelectorAll('li')

li.forEach((item, idx)=>{
    item.addEventListener('click',()=>{
        hideAllActivie()
        hideAllShow()

        item.classList.add('active')
        img[idx].classList.add('show')
    })
})

function hideAllActivie() {
    img.forEach(img=>img.classList.remove('show'))
}
function hideAllShow() {
    li.forEach(li=>li.classList.remove('active'))
}