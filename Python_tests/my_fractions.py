from fractions import Fraction
from functools import reduce

print(reduce(lambda x,y: x*y,[2,3,4,1]))


k = int(input())
lista = list(map(int,input().split()))
setlist = set(lista)

for i in setlist:
    lista.remove(i)
    if i not in lista:
        print(i)