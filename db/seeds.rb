Artist.destroy_all
Piece.destroy_all
Gallery.destroy_all
Director.destroy_all
Material.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating artists..."
Artist.create(username: "Mary", password: "password123")
Artist.create(username: "Jon",  password: "123password")
Artist.create(username: "Steven", password: "123pass")
Artist.create(username: "Susan", password: "word123")
Artist.create(username: "Sheena", password: "pass123word")


puts "Creating pieces..."
Equipment.create(name: "Dumbbell", image: "https://yorkbarbell.com/wp-content/uploads/2018/06/25-2.jpg")



puts "Creating galleries..."
Exercise.create(name: "Jogging", image: "https://static.toiimg.com/photo/72532520.cms", description: "Trotting or running at a slow or leisurely pace. The main intention is to increase physical fitness with less stress on the body than from faster running but more than walking, or to maintain a steady speed for longer periods of time.", category: "Aerobic", equipment_id: Equipment.all.sample.id)



puts "Creating directors..."
UserExercise.create(user_id: User.all.sample.id , exercise_id: Exercise.all.sample.id)


puts "Creating user materials..."



puts "✅ Done seeding!" 