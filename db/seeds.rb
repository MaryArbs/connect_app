# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Service.all.destroy_all
Category.all.destroy_all

Service.create([{name: "Therapy Kinections LLC", location:"Southbury", phone_number: "2032629909", url: "https://therapykinections.com/", category_id: 13}])

Category.create([{name: "Occupational Therapy", description: "Occupational therapy (OT) helps people who struggle to do everyday tasks because of poor motor skills. For kids, that includes tasks that are part of learning and functioning well at school.", image: "https://cdn.clipart.email/015c5884bd00465043ad7d99bcf17e24_best-occupational-therapist-illustrations-royalty-free-vector-_612-612.jpeg"}, {name: "Physical Therapy", description: " Physical therapy (PT) helps people work on their mobility skills, this may include, strengthening exercises or stretching exercises.", image: "https://cdn.clipart.email/0a6df96553d625e918852595f4f12646_pediatric-physical-therapy-illustrations-royalty-free-vector-_612-612.jpeg"}, {name: "Speech Therapy", description: "Speech therapy is an intervention service that focuses on improving a child's speech and abilities to understand and express language, including nonverbal language.", image:"https://www.clipartkey.com/mpngs/m/40-405548_stop-clipart-speech-therapy-cartoon.png"}])
