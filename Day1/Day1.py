sums = []
f = open('Input.txt','r')

currSum = 0
for line in f:
    if line == '\n':
        sums.append(currSum)
        currSum = 0
    else:
        currSum += int(line)
sums.sort(reverse=True)
print(sums[0]+sums[1]+sums[2])