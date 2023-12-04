f = open('Input.txt','r')
#Defines for what to look 4 -> Part 1; 14 -> Part 2
toFind = 14
for line in f:
    for n in range(0,len(line)):
        checkSet = set()
        for k in range(0, toFind):
            checkSet.add(line[n+k])      
        if len(checkSet) == toFind:
            print(n+toFind)
            break