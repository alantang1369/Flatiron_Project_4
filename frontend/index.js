const base_url = "http://127.0.0.1:3000/"
const plantService = new PlantService(base_url)
plantService.getPlants()
const addBtn = document.querySelector('#new-plant-btn')
const plantForm = document.getElementById("add-plant")
let addPlant = false

addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addPlant = !addPlant
    if (addPlant) {
      plantForm.style.display = 'block'
      plantForm.addEventListener('submit', event => {
        event.preventDefault()
        //post(event.target)
        
      })
    } else {
      plantForm.style.display = 'none'
    }
  })
