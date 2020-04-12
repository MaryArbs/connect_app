# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Service.all.destroy_all
Category.all.destroy_all

Service.create([{name: "Therapy Kinections LLC", location:"Southbury, CT", phone_number: "(203) 262-9909", url: "https://therapykinections.com/", category_id: 7}])
Category.create([{name: "Occupational Therapy"}, {name: "Physical Therapy"}, {name: "Speech"}])
