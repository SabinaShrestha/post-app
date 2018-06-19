


100.times do
  Post.create(
    title: Faker::Space.moon,
    body: Faker::Hipster.paragraph,
    author: Faker::Book.title
  )
end


puts "Magic *****************"
