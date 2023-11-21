# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Create users!"
User.destroy_all
user_one = User.create(email: 'one@example.com', password: '123456')
user_two = User.create(email: 'two@example.com', password: '123456')
user_three = User.create(email: 'three@example.com', password: '123456')

puts "Create URLs!"
Url.destroy_all
Url.create(shortURL: 'asdf1', longURL: 'www.example.com', user_id: user_one.id)
Url.create(shortURL: 'asdf2', longURL: 'www.example.com/two.html', user_id: user_one.id)
Url.create(shortURL: 'asdf3', longURL: 'www.example.com/three.html', user_id: user_one.id)
