const getGoods = () => {

    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
    fetch('https://willberris-project-default-rtdb.europe-west1.firebasedatabase.app/db.json')
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('goods', JSON.stringify(data))
        }) 
   }

   

    links.forEach ((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

}

getGoods()