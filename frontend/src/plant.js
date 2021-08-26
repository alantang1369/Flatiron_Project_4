class Plant {
    static all= []
    static plantContainer = document.getElementById("plant-container")
    constructor({id, name, img_url, hybridizer, description, color_id}){
        this.id = id 
        this.name = name
        this.img_url = img_url
        this.hybridizer = hybridizer 
        this.description = description 
        this.color_id = color_id 

        this.plantElement = document.createElement('div')
        this.plantElement.dataset.id = this.id 
        this.plantElement.id = `plant-${this.id}`
       
        Plant.all.push(this)
    }

    plantHTML(){
        let h2 = document.createElement('h2')
        h2.innerText= this.name

        let img = document.createElement('img')
        img.setAttribute('src', this.img_url )
        img.setAttribute('class', 'plant-photo')

        let p1 = document.createElement('p')
        p1.innerText = `Hybridized by ${this.hybridizer}`

        let p2 = document.createElement('p')
        p2.innerHTML = `<h4>Description:</h4> ${this.description}`

        this.plantElement.append(h2, img, p1, p2)
        
        return this.plantElement

    }

    attachOnDom(){
        Plant.plantContainer.appendChild(this.plantHTML())
    }


}

    