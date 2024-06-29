
"""
def palindrome(word_sent):
  reverse_word = word_sent[::-1]
  if(word_sent == reverse_word):
      print("is palindrome")
  else:
      print("is not palindriome")


palindrome('MOMsa')
"""
def reverse_number(num):
  # Reverse the number
    num = str(num) #we can use the fact that python is dynamic and we can use the same name of the variable instead of creating another one
    reverse = num[::-1]
    reverse = int(reverse)
  # Return the number
    return reverse


print(reverse_number(123))