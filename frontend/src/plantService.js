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
}