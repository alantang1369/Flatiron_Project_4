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
        this.plantElement.className = 'plant-card'
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
        p1.innerHTML = `Hybridized by <em>${this.hybridizer}</em>`
        p1.className = 'hybridizer'

        let p2 = document.createElement('p')
        p2.innerHTML = `<h4>Description:</h4> ${this.description}`

        let delbtn = document.createElement('button')
        delbtn.setAttribute('id', this.id)
        delbtn.setAttribute('class', 'delete-button')
        delbtn.innerHTML = 'Delete'
        this.plantElement.append(h2,img, p1, p2, delbtn)
        
        delbtn.addEventListener('click', plantService.deletePlant)
        return this.plantElement
        
    }

    attachOnDom(){
        Plant.plantContainer.appendChild(this.plantHTML())
    }

    static deleteObjPlant(id){
        let i = Plant.all.findIndex(plant => plant.id === id)
        
        Plant.all.splice(i,1)
        //debugger
    }

   
}

    