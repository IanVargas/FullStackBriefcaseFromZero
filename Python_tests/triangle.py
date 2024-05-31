"""std = []
std1=""
std2 = ""
n = int(input())
for i in range (1,n+1):
  std1+=str(i)
  std.append(std1) 
for k in range (0,len(std)):
  std1= std[k]
  n = int(std1[-1])
  value = n
  std2 = std[k]
  while(n > 0):
     if(value >= 2):
      value = value-1
      std2 += str(value)
     n = n-1
  print(std2)
"""

for i in range(1, int(input()) + 1): 
    print(((10 ** i - 1) // 9) ** 2) 

