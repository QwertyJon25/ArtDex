Artist.destroy_all
Piece.destroy_all
Gallery.destroy_all
Director.destroy_all
Material.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating artists..."
Artist.create(name: "Jon Courtier", bio: "Jon Anthony Courtier is an afro-Latinx illustrator and comic artist who lives in Brooklyn, NY.", contact: "jonaqwerty@yahoo.com", style: "Comic Artist", dates: "1991-", image: "https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/1074965_10200951563686027_84827670_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=de6eea&_nc_ohc=KXgwQEv5ZiYAX9QMclh&_nc_ht=scontent-lga3-2.xx&oh=0fb242a88bdea6ca511ca3ac2c717627&oe=61C95D46", user_name: "Jon", password: "password")

Artist.create(name: "Pablo Picasso", bio: "Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France.", contact: "pablo@gmail.com", style: "Cubism", dates: "1881 to 1973", image: "https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/2021-05/Picasso%20Lead%20Color.png", user_name: "Pablo", password: "pablo123")

Artist.create(name: "Leonardo Da Vinci", bio: "Leonardo da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor and architect.", contact: "leonardo@gmail.com", style: "High Renaissance", dates: "1452-1519", image: "https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk_2x3.jpg", user_name: "Leo", password: "leonardo123")

Artist.create(name: "Salvador Dali", bio: "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquess of Dalí of Púbol gcYC was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work. Born in Figueres, Catalonia, Spain, Dalí received his formal education in fine arts in Madrid.", contact: "dali@gmail.com", style: "Surrealism", dates: "1904-1989", image: "https://dangerousminds.net/content/uploads/images/made/content/uploads/images/salvador_dali_flower_moustache_465_599_int.jpg", user_name: "Dali", password: "dali123")

Artist.create(name: "Georgia O'Keeffe", bio: "Georgia Totto O'Keeffe was an American modernist artist. She was known for her paintings of enlarged flowers, New York skyscrapers, and New Mexico landscapes. O'Keeffe has been recognized as the 'Mother of American modernism.'", contact: "georgia@gmail.com", style: "Modernism", dates: "1887-1986", image: "https://media.newyorker.com/photos/594c4e19e12ccd77a1625ab2/master/w_2560%2Cc_limit/Lange-Power-Dresses.jpg", user_name: "Georgia", password: "georgia123")


puts "Creating directors..."
Director.create(name: "John Akomfrah", bio: "John Akomfrah CBE is a British artist, writer, film director, screenwriter, theorist and curator of Ghanaian descent, whose 'commitment to a radicalism both of politics and of cinematic form finds expression in all his films'.", contact: "john@gmail.com", image: "https://i.guim.co.uk/img/media/2bba21a303818ddd94c170bdbda3dc6617b68c7a/0_309_8075_4845/master/8075.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64a24c52e8f8854e42f04072956f8b7e")

puts "Creating galleries..."
Gallery.create(name: "Gagosian Gallery", desc: "Gagosian is a contemporary art gallery owned and directed by Larry Gagosian. The gallery exhibits some of the most influential artists of the 20th and 21st centuries. There are 16 gallery spaces: five in New York; three in London; two in Paris; one each in Basel, Beverly Hills, Rome, Athens, Geneva and Hong Kong", contact: "gagosian@gmail.com", location: "New York, New York",  director_id: Director.all.sample.id)

Gallery.create(name: "David Zwirner Gallery", desc: "David Zwirner Gallery is an American contemporary art gallery owned by David Zwirner. It has three gallery spaces in New York City and one each in London, Hong Kong, and Paris.", contact: "zwirner@gmail.com", location: "New York, New York",  director_id: Director.all.sample.id)

Gallery.create(name: "Fraenkel Gallery", desc: "Fraenkel Gallery is a contemporary art gallery in San Francisco founded by Jeffrey Fraenkel in 1979. Frish Brandt, president of the gallery, joined in 1985.", contact: "fraenkel@gmail.com", location: "San Francisco, CA",  director_id: Director.all.sample.id)

puts "Creating pieces..."
Piece.create(name: "Phone Death", category: "Illustration", style: "Traditional", desc: "A submission for Ink-Tober.", price: 20, date: 2016, image: "https://64.media.tumblr.com/5bb98d88b4b59c04b9e3a56fb8468874/tumblr_oxsu73stgJ1rwfw6ko1_640.jpg", gallery_id: Gallery.all.sample.id, artist_id: Artist.first.id)

Piece.create(name: "The Old Guitarist", category: "Painting", style: "Cubism", desc: "The Old Guitarist is an oil painting by Pablo Picasso, which he created in late 1903 and early 1904. It depicts an elderly musician, a haggard man with threadbare clothing, who is hunched over his guitar while playing in the streets of Barcelona, Spain.", price: 20000, date: 1903, image: "https://i.pinimg.com/564x/10/52/c3/1052c31bf523c6c1ab679df7f68d5a92.jpg", gallery_id: Gallery.all.sample.id, artist_id: Artist.second.id)

Piece.create(name: "Femme au chapeau (Woman with Hat)", category: "Sculpture", style: "Cubism", desc: "Sheet metal, cut out, folded, and painted in 1963", price: 25000, date: 1961, image: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=497&height=640&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FoKgx8qKuLF3OPs_XAxbLsA%2Flarge.jpg", gallery_id: Gallery.all.sample.id, artist_id: Artist.second.id)

Piece.create(name: "Mona Lisa", category: "Painting", style: "High Renaissance", desc: "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'.", price: 45000, date: 1503, image: "https://www.artranked.com/images/a9/a9fa4377d916ccd568f855c35e5577d8.jpeg", gallery_id: Gallery.all.sample.id, artist_id: Artist.third.id)

Piece.create(name: "The Persistence of Memory", category: "Painting", style: "Surrealism", desc: "The Persistence of Memory is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art in New York City, which received it from an anonymous donor", price: 45000, date: 1931, image: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg", gallery_id: Gallery.all.sample.id, artist_id: Artist.fourth.id)

Piece.create(name: "Ram's Head, White Hollyhock-Hills", category: "Painting", style: "Modernism", desc: "Georgia O'Keeffe's Ram's Head, White Hollyhock-Hills can be counted among her most important paintings. In it, the whitened bones of a ram's skull float weightlessly against the brooding New Mexico skies and a pristine white hollyhock blossom hovers beside it, the Rio Grande Valley hills below.", price: 40000, date: 1935, image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rams-head-white-hollyhock-hills-georgia-okeeffe.jpg", gallery_id: Gallery.all.sample.id, artist_id: Artist.fifth.id)


puts "Creating materials..."
Material.create(name: "Paintbrush", desc: "Used to apply paint to canvas.", category: "Painting", artist_id: Artist.all.sample.id, piece_id: Piece.all.sample.id)

Material.create(name: "Chisel", desc: "Used to chip off and style segments of stone.", category: "Sculture", artist_id: Artist.all.sample.id, piece_id: Piece.all.sample.id)

Material.create(name: "Micron Pen", desc: "Used to ink pencil work.", category: "Illustration", artist_id: Artist.all.sample.id, piece_id: Piece.all.sample.id)

Material.create(name: "HB Pencil", desc: "Used to sketch and draft.", category: "Drawing", artist_id: Artist.all.sample.id, piece_id: Piece.all.sample.id)

Material.create(name: "Eraser", desc: "Used to correct drafting mistakes.", category: "Drawing", artist_id: Artist.all.sample.id, piece_id: Piece.all.sample.id)


puts "✅ Done seeding!" 