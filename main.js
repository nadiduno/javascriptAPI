async function userData() {
    var urlApi = 'https://api.jsonbin.io/v3/b/64c745978e4aa6225ec8162c'

    await fetch(urlApi)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            // console.log(data)
            let root = document.getElementById('root')
            let nameproduct = data['record']['TotiLunch']['0']['name']
            let imageproduct = data['record']['TotiLunch']['0']['avatar']
            let descriptionproduct = data['record']['TotiLunch']['0']['descriptionNutritional']
            let priceproduct = data['record']['TotiLunch']['0']['price']


            let name = document.createElement('h2')
            let image = document.createElement('img')
            let description = document.createElement('p')
            let price = document.createElement('p')

            name.textContent = nameproduct
            description.textContent = descriptionproduct
            price.textContent = priceproduct
            image.src = imageproduct

            root.append(image, name, description, price)

            // Styles CSS
            document.body.style.padding = '0'
            document.body.style.margin = '0'
            document.body.style.alignItems = 'center'
            document.body.style.fontFamily = '"Roboto", sans - serif';
            document.body.style.background = '#1f1f1f'
            document.body.style.color = '#fff'
            document.body.style.width = '80vw'
            document.body.style.display = 'flex'
            document.body.style.justifyContent = 'center'
            document.body.style.alignItems = 'center'

            root.style.width = '80vw'
            root.style.height = 'auto'
            root.style.margin = '1rem auto';
            root.style.padding = '1rem';

            image.style.borderRadius = '50%';
            image.style.width = '20%'
            image.style.height = '20%'

            name.style.fontSize = '1.5rem'


        })
        .catch((error) => {
            console.error(error)
        })
}

userData()