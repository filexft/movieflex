const fq = document.querySelectorAll('.fq');
const toggleBtn = document.querySelector('.fq .fa')

fq.forEach(item => {
    const btn = item.querySelector('.fq .q i');

    btn.addEventListener('click', (e) => {

        fq.forEach( part => {
            if (part != item){
                part.classList.remove('show');
            }
        })
        item.classList.toggle('show');
    });
    });

document.getElementById('crdate').innerText = new Date().getFullYear();

const blob = document.getElementById('blob');

window.onmousemove = event => {
    const { clientX, clientY } = event;

    console.log(clientX, event);

    blob.animate({
        left : `${event.pageX}px`,
        top : `${event.pageY}px`,
    }, {duration: 1000, fill : "forwards"}
    )
}