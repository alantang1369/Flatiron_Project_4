class PlantService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    //1: Read/Index action

    getPlants(){
        fetch(`${this.endpoint}plants`)
        .then(resp => resp.json())
        .then(plants => {
            for( const plant of plants){
                const p = new Plant(plant)
                
                p.attachOnDom()
            }
        })
    }

    postPlant(plant_data){
       
        const data = {
            plant:{
            name: plant_data.name.value,
            img_url: plant_data.image.value,
            hybridizer: plant_data.hybridizer.value,
            description: plant_data.description.value,
            
            color_id: parseInt(plant_data.color.value)         
         }
        }
        
      // return console.log(plant)
        fetch(`${this.endpoint}plants`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Accept: 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(resp => resp.json())
        .then( obj_plant => {
            const p = new Plant(obj_plant)
            p.attachOnDom()
        })
    }

    deletePlant(event){
        const id = parseInt(this.id)
        Plant.deleteObjPlant(id)
        fetch(`${plantService.endpoint}plants/${id}`,{
            method: "DELETE",
            headers: {
                'Content_Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => { 
            alert(json.message)
            Plant.plantContainer.innerHTML = ""
            for ( const plant of Plant.all){
                Plant.plantContainer.appendChild(plant.plantElement)
            }

        })
        
    }
}