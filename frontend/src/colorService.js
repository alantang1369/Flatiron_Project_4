class ColorService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getColor(){
        
        fetch(`${colorService.endpoint}colors`)
        .then(resp =>resp.json())
        .then( colors => {
            for ( const color of colors){
                let c = new Color(color)
                c.attachOnDOM()
            }
        })
    }

    static renderFilteredPlant(event){
        event.preventDefault()
        const id = parseInt(event.target.id)
        const plants = Plant.all.filter(plant => plant.color_id === id)
        Plant.plantContainer.innerHTML = ""
        
        for (const plant of plants){
           //console.log(plant)
            Plant.plantContainer.appendChild(plant.plantElement)
           // debugger
        }
        
    }
}