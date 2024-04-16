"""Given an integer, , print the following values for each integer  from  to :

Decimal
Octal
Hexadecimal (capitalized)
Binary"""

def print_formatted(number):

        spacing_of_the_number = len(format(number,'b')) #in here we convert the number to binary form with the format option
        for i in range (1,number+1):
            print(f'{i:>{ spacing_of_the_number}} {i:>{ spacing_of_the_number}o} {i:>{ spacing_of_the_number }X} {i:>{ spacing_of_the_number }b}') #here we printed on the diferent formats
            #o for octadecimal X: hexadecimal b:binary

if __name__ == '__main__':
    n = int(input())
    print_formatted(n)