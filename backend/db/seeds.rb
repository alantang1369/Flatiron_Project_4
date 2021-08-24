# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Color.create(name: "Red")
Color.create(name: "Orange")
Color.create(name: "Yellow")
Color.create(name: "Pink")
Color.create(name: "White")
Color.create(name: "Blue & Purple")
Color.create(name: "Multi-Colored")

Plant.create(name: 'TW Blue Lotus', hybridizer: 'Aneela Lee', description:'large 8-10" blooms with soft pink to yellow edge, purple body and dark red center', color_id: 7)
Plant.create(name: 'Language of Love', hybridizer: 'Charles Black', description:'blooms with large 7-9" single flowers with a blue body, orange and yellow edge, and a large red eye. In heat the flower is softer with a gray body and a pinker edge', color_id: 7)
Plant.create(name: 'Acapulco Gold', hybridizer: 'Charles Black', description:'blooms with 7-9" vivid single flowers in yellow, orange, and white with a deep red eye and a bit of a pink bleed', color_id: 3)
