f = open('Input.txt','r')
sum = 0
n=0
board=[]
def readBoard(board):
    ret = []
    for i in range(1,35,4):
        ret.append(board[i])
    return ret

def move(board, source, target,n):
    counter=0
    i = 0
    while i < len(board):
        if board[i][source] != " ":
            counter += 1
            done = False
            for k in range(0, len(board)):
                if (board[k][target]!=" " and k > 0) or board[len(board)-1][target]==" ":
                    #Array hat noch Platz
                    board[k-1][target] = board[i][source]
                    board[i][source] = " "
                    done = True
                elif board[k][target]!=" " and k == 0:
                    #Kein Platz mehr in dem Array, muss erweitert werden
                    NewLine = [" " for x in range(9)]
                    NewLine[target] = board[i][source]
                    board[i][source] = " "
                    board.insert(0, NewLine)
                    done = True
    
                if done:
                    break
    
        if counter == n:
            break
        i += 1
    return board


n = 0
board = [[0 for x in range(8)] for y in range(8)]
boolSetup = True
for line in f:
    line = line[:-1]
    if boolSetup:
        lineArr = tuple(line)
    
        if lineArr[1] == '1':
            boolSetup = False
        if boolSetup:
            board[n] = readBoard(lineArr)
            n += 1
    else:
        tmp = line.split(" ")
        if len(tmp) > 1:
            board = move(board,int(tmp[3])-1,int(tmp[5])-1,int(tmp[1]))

for y in range(0,len(board)):
    print(board[y])