// const dirs = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]];
const dirs = [[1,1],[-1,1],[-1,-1],[1,-1]];
// const dirs = [[1,1],[-1,1],[-1,-1],[1,-1],[1,0],[-1,0],[0,1],[0,-1]];
// const dirs = [[1,0],[-1,0],[0,1],[0,-1]];


const rows = 8;
const cols = 8;

let grid = [];

function CreateBoard()
{
    let container = document.getElementsByClassName("grid-container")[0];    
    for(let row = 0 ; row < rows ; row++)
    {
        let rowElement = document.createElement("div");
        rowElement.className = "grid-row";
        let gridRow = [];
        for(let col = 0 ; col < cols ; col ++)
        {
            let item = document.createElement("div");
            
            item.classList.add("grid-item");
            item.classList.add(((row+col)%2 == 0)?"black":"white");
            
            item.state = 0;
            item.isSource = false;

            item.addEventListener("click",onClick.bind(this,row,col));
            rowElement.appendChild(item);
            gridRow.push(item);
        }
        container.append(rowElement);
        grid.push(gridRow);
    }
}

function onClick(row,col)
{
    Source(!grid[row][col].isSource,row,col);
}

function RefreshCell(row,col)
{
    let cell = grid[row][col];

    if(cell.state == 0 && cell.classList.contains("highlight"))
        cell.classList.remove("highlight");
    if(cell.state > 0 && !cell.classList.contains("highlight"))
        cell.classList.add("highlight");
}

function Source(on,row,col)
{
    grid[row][col].isSource = on;
    grid[row][col].state += (on)?1:-1;
    RefreshCell(row,col);

    for(let dist = 1 ; dist < ((rows>cols)?rows:cols) ; dist ++)
    {
        for(let dir = 0 ; dir < dirs.length ; dir++)
        {
            let newRow = row+dirs[dir][0]*dist;
            let newCol = col+dirs[dir][1]*dist;
            
            if(newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols)continue;
            
            if(grid[row][col].state == -1)
            {
                continue;
            }
            grid[newRow][newCol].state += (on)?1:-1;
            RefreshCell(newRow,newCol);
        }
    }
    
}

CreateBoard();