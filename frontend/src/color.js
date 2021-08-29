

class Color{
    static all =[]
    constructor({id, name, plants}){
        this.id = id
        this.name = name 
        this.plants = plants
        this.colorElement = document.createElement('li')
        this.colorElement.id = `color-${this.id}`
        Color.all.push(this)
    }

    colorHTML(){
       
        let h4 = document.createElement('h4')
        h4.id = this.id
        h4.innerText= this.name
        h4.className ='color-name'
        this.colorElement.append(h4)
        
        return this.colorElement
    }

    attachOnDOM(){
        ul.append(this.colorHTML())
    }
}