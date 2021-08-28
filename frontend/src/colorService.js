class ColorService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getColor(){
        fetch(`${this.endpoint}colors`)
        .then(resp =>resp.json())
        .then( colors => {
            for ( const color of colors){
                let c = new Color(color)
                c.attachOnDOM()
            }
        })
    }
}