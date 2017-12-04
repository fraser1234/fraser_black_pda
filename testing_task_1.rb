### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val#brackets
  if val = 1 #== needed
  return true
  else
  return false
  end
end

dif max a b #def
  if a > b
      return a
  else
  b #return b
  end
end
end #end not needed

def looper
  for i in 1..10
  puts i #needs return statement to store it, eg puts num, then return num
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#end here

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #should be max(100,1) failed
  failrues = failures + 1 #failures spelt wrong
end


if failures # should have > 0 so it knows what to expect
  puts "Test Failed"
else
  puts "Test Passed"
end
