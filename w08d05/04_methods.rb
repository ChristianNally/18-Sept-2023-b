def say_hello name, age, birth_date
  puts "hello there #{name}"

  users = ['bob', 'carol']

  return ['bob', 'carol']
end

# return_val = say_hello('alice')
return_val = say_hello 'alice'

puts "the return_val is " + return_val.to_s
