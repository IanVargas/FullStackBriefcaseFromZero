
def palindrome(word_sent):
  is_palindrome = word_sent[::-1]
  if(word_sent == is_palindrome):
      print("is palindrome")
  else:
      print("is not palindriome")



def reverse_word_to_check(word_to_convert):
  converted_word = list(word_to_convert)
  converted_word.reverse()
  return_word = "".join(converted_word)
  return return_word


palindrome('MOMsa')