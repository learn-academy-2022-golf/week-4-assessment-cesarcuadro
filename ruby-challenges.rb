# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#Create a method that takes in one parameter
# A number will be used as the argument
#Create a conditional statement to determine if a number is even or odd
# use the modulos operator to find if a number is divisible by two
#Return 

def even_odd number
    if number % 2 == 0
        "#{number} is even"
    elsif number % 2 != 0
        "#{number} is odd"
    else
        "That is not a number"
    end
end
p even_odd num1
# "7 is odd"
p even_odd num2
# "42 is even"
p even_odd num3
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#remove all the variables in a string
#use .delete("string")

def deleter string
    string.delete "aeiou" "AEIOU"
end
p deleter beatles_album1
# "Rbbr Sl"
p deleter beatles_album2
# "Sgt Pppr"
p deleter beatles_album3
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#create a method
#takes in one parameter
#a string is the argument that will pass through the parameter
#Lowercase all the characters inside the string so that way it will be exactly the same forward and backward
#use a conditional if the string is the same spelled forward and backward
#use string interpolation to return if the string is a palindrome or not a palindrome

def tester string
    low_case = string.downcase
    if low_case.reverse != low_case
        "#{string} is not a palindrome"
    elsif low_case.reverse == low_case
        "#{string} is a palindrome"
    else
        "use a different word"
    end
end
p tester palindrome_tester1
# "Racecar is a palindrome"
p tester palindrome_tester2
# "LEARN is not a palindrome"
p tester palindrome_tester3
# "Rotator is a palindrome"