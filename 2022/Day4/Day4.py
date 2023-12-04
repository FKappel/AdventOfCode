f = open('Input.txt','r')
sum = 0
for line in f:
    tmp = line.split(",")
    LeRange = set(range(int(tmp[0].split("-")[0]),int(tmp[0].split("-")[1])+1))
    RiRange = set(range(int(tmp[1].split("-")[0]),int(tmp[1].split("-")[1])+1))
    #Part 1
    #if LeRange.issubset(RiRange) or RiRange.issubset(LeRange):
    #Part 2
    if len(LeRange) > len(LeRange.difference(RiRange)):
        sum +=1
print(sum)