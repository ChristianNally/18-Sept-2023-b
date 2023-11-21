# block of code is denoted with do..end

names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# block in memory is stored as a Proc(edure)
my_block = Proc.new do |name|
  puts "hello there #{name}"
end

# names.each &my_block

[1,2,3].each &my_block

def accepting_block &block
  block.call 42
end

# accepting_block &my_block

def accepting_invis_block
  yield('bob') # equivalent to calling my_block
end

accepting_invis_block &my_block
