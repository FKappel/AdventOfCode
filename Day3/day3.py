f = open('Input.txt','r')
sum = 0

def getValue(InStr):
    ascValue = ord(InStr)
    #A-Z
    if ascValue>64 and ascValue<91:
        value = ascValue - 38
    #a-z
    elif ascValue>96 and ascValue<123:
        value = ascValue - 96
    return value
    """
    A -> Ascii 65 -> 27 Advent of Code
    a -> Ascii 97 -> 1 Advent of Code
    -> Wenn zwischen 97-122 dann minus 96 rechnen
    Wenn zwischen 65-90 dann minus 64 rechnen
    """
"""
Part one
for line in f:
    found = []
    line = line.strip()
    mid = int(len(line)/2)
    le = line[:mid]
    ri = line[-mid:]
    for letter in le:
        if ri.count(letter) > 0 and letter not in found:
            print(line)
            found.append(letter)
            sum += getValue(letter)
"""
n = 0
group = []
for line in f:
    if n == 3:
        group = []
        n = 0
    line = line.strip()
    group.append(line)
    if n == 2:
        for letter in group[0]:
            if group[1].count(letter) > 0 and group[2].count(letter) > 0:
                sum += getValue(letter)
                break
    n+=1
print(sum)