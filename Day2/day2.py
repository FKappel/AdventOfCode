f = open('Input.txt','r')
sum = 0
thisdict = {
"A": 1,
"B": 2,
"C": 3,
"X": 1,
"Y": 2,
"Z": 3
}
winDic = {
"X": 0,
"Y": 3,
"Z": 6  
}

def GetResult2(Outcome, n):
    #n = Zeichen des Gegngers
    Matrix=[[3,1,2],[1,2,3],[2,3,1]]
    return Matrix[Outcome][n]
    
for line in f:
    line = line.strip()
    tmp = line.split(" ")
    sum += winDic[tmp[1]] + GetResult2(thisdict[tmp[1]]-1,thisdict[tmp[0]]-1)

def GetResult(n, m):
    Matrix=[[3,0,6],[6,3,0],[0,6,3]]
    return Matrix[n][m]
"""
for line in f:
    line = line.strip()
    tmp = line.split(" ")
    sum += thisdict[tmp[1]] + GetResult(thisdict[tmp[1]]-1,thisdict[tmp[0]]-1)
"""
print(sum)

"""
    1. Teil
    A & X = 1 -> Rock
    B & Y = 2 -> Paper
    C & Z = 3 -> Scissors

    Matrix = [Ich][Gegenspieler] ->
       1 2 3
    1 [3,0,6]
    2 [6,3,0]
    3 [0,6,3]
    Defeat = 0
    Draw = 3
    Win = 6

    2. Teil
    -> 2. Spalte ist das Ergebnis
    X = 0
    Y = 3
    Z = 6
    
    X -> Matrix[Outcome][n] = 0
    Y -> 1. Spalte
    Z -> Matrix[0-2][m] = 6
       1 2 3
    1 [3,1,2]
    2 [1,2,3]
    3 [2,3,1]
"""