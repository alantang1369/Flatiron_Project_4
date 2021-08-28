const colorContainer = document.getElementById("color-container")
class Color{
    constructor(id, name, plants){
        this.id = id
        this.name = name 
        this.plants = plants
        this.colorElement = document.createElement('li')
        this.colorElement.id = this.id
    }

    colorHTML(){
        let ul = document.createElement('ul')
        ul.setAttribute('id', "color-list")
        let h4 = document.createElement('h4')
        h4.innerText= this.name
        this.colorElement.append(h4)
        this.ul.append(this.colorElement)
        return this.colorElement
    }

    attachOnDOM(){
        colorContainer.append(this.colorHTML())
    }
}