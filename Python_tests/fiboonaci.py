def fibonacci(n):
 fib_list=[]
 a, b = 0, 1
 for i in range(n):
    fib_list.append(a)
    a, b = b, a + b
 return fib_list

if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))



'''
c = set(a_values.difference(b_values))
c = set(a_values.symmetric_difference(b_values))
 print(*arr[i],sep=" ") #*arr[i] print the array based on the separator sep=" " in this case an space



def fun(s):
    return bool(re.fullmatch("[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{,3}", s))  
    '''