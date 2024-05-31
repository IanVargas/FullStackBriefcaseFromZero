n = int(input())
s = set(map(int, input().split()))
N = int(input())

for i in range (N):
    operation = input()
    if operation == 'pop':
        s.pop()
    else: 
        operation,number = operation.split()
        getattr(s,operation)(int(number)) #getattr sirve para poder generar funciones en el set

print(sum(s))   

