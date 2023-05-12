class speciet{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
       this.directions = [];
 
     }
    getNewCoordinates(){
        this.directions =[
        [this.x - 1, this.y - 1],
[this.x    , this.y - 1],
[this.x + 1, this.y - 1],
[this.x - 1, this.y    ],
[this.x + 1, this.y    ],
[this.x - 1, this.y + 1],
[this.x    , this.y + 1],
[this.x + 1, this.y + 1]
        ];
    }
     chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
        
      }
 
      

}

class Grass extends speciet{
    constructor(x, y, index) {
       super(x,y,index);
       this.energy = 0;
       this.multiply = 0;
        this.directions = [];

    }
 getNewCoordinates(){
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
 }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
            }
        }
        }
        return found;
     }

     mul () {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        console.log(emptyCells);
        if(newCell && this.multiply >= 8){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
 
            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
 

     }
     

     class GrassEater extends speciet{
        constructor(x,y,index) {
            super(x,y,index);
            this.energy = 5;
            this.directions = [];
        }


        getNewCoordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
             [this.x    , this.y - 1],
             [this.x + 1, this.y - 1],
                 [this.x - 1, this.y    ],
                 [this.x + 1, this.y    ],
                 [this.x - 1, this.y + 1],
                 [this.x    , this.y + 1],
                 [this.x + 1, this.y + 1]
            ];
         }
         

        chooseCell(character) {
            var found = [];
            this.getNewCoordinates();
            for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
        }


        move(){
            this.getNewCoordinates();
            var n = random(this.chooseCell(0));
            console.log(n);
            if(n){
                var newX = n[0];
                var newY = n [1];
                matrix[newY][newX] = 2;
                matrix[this.y][this.x] =0;
                this.x = newX
                this.y = newY  
            }
           
            }
        eat(){
            this.getNewCoordinates();
            var z = random(this.chooseCell(1));
            console.log(z);
            
            if(z){
                var newX = z[0];
                var newY = z [1];
                matrix[newY][newX] = 2;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
                this.energy++;

                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
            }
            }
            
            else {
                this.energy--;
                this.move()
               
            }
            if (this.energy<=0){
                console.log(grassEaterArr)
            this.die()
            }
                }
        
                die(){
            for (var i in grassEaterArr) {
                if (this.x== grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    matrix[this.y][this.x] = 0
                    grassEaterArr.splice(i, 1);
                    break;
                }


    
}
                    
                    }

        mul(){

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        console.log(emptyCells);
        if(newCell && this.energy >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
 
            var newGrasseater = new GrassEater(newX, newY, 2);
            grassEaterArr.push(newGrasseater);
            this.energy = 5;
            
        }
        else {
            this.eat()
        }
        }
        
    }





    class Predator extends speciet{
        constructor(x,y,index) {
            super(x,y,index);
            this.energy = 10;
            this.directions = [];
        }


        getNewCoordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
             [this.x    , this.y - 1],
             [this.x + 1, this.y - 1],
                 [this.x - 1, this.y    ],
                 [this.x + 1, this.y    ],
                 [this.x - 1, this.y + 1],
                 [this.x    , this.y + 1],
                 [this.x + 1, this.y + 1]
            ];
         }
         

        chooseCell(character) {
            var found = [];
            this.getNewCoordinates();
            for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
        }


        move(){
            this.getNewCoordinates();
            var n = random(this.chooseCell(0));
            console.log(n);
            if(n){
                var newX = n[0];
                var newY = n [1];
                matrix[newY][newX] = 8;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
            }
           
            }
        eat(){
            this.getNewCoordinates();
            var z = random(this.chooseCell(1));
            console.log(z);
            
            if(z){
                var newX = z[0];
                var newY = z [1];
                matrix[newY][newX] = 8;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
                this.energy++;

                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 2);
                        break;
                    }
            }
            }
            else {
                this.energy--;
                this.move()
            }
            if (this.energy<=0){
                console.log(predatorArr)
            this.die()
            }
                }
        
                die(){
            for (var i in predatorArr) {
                if (this.x== predatorArr[i].x && this.y == predatorArr[i].y) {
                    matrix[this.y][this.x] = 0
                    predatorArr.splice(i, 1);
                    break;
                }


    
}
                    
                    }

        mul(){

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        console.log(emptyCells);
        if(newCell && this.energy >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 8;
 
            var newpredatorArr = new Predator(newX, newY, 8);
            predatorArr.push(newpredatorArr);
            this.energy = 5;
            
        }
        else {
            this.eat()
        }
        }
        
    }
    class Waterman extends speciet{
        constructor(x,y,index) {
            super(x,y,index);
            this.energy = 9;
            this.directions = [];
        }


        getNewCoordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
             [this.x    , this.y - 1],
             [this.x + 1, this.y - 1],
                 [this.x - 1, this.y    ],
                 [this.x + 1, this.y    ],
                 [this.x - 1, this.y + 1],
                 [this.x    , this.y + 1],
                 [this.x + 1, this.y + 1]
            ];
         }
         

        chooseCell(character) {
            var found = [];
            this.getNewCoordinates();
            for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
        }


        move(){
            this.getNewCoordinates();
            var n = random(this.chooseCell(0));
            console.log(n);
            if(n){
                var newX = n[0];
                var newY = n [1];
                matrix[newY][newX] = 3;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
            }
           
            }
        eat(){
            this.getNewCoordinates();
            var z = random(this.chooseCell(1));
            console.log(z);
            
            if(z){
                var newX = z[0];
                var newY = z [1];
                matrix[newY][newX] = 3;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
                this.energy++;

                for (var i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 8);
                        break;
                    }
            }
            }
            else {
                this.energy--;
                this.move()
            }
            if (this.energy<=0){
                console.log(watermanArr)
            this.die()
            }
                }
        
                die(){
            for (var i in watermanArr) {
                if (this.x== watermanArr[i].x && this.y == watermanArr[i].y) {
                    matrix[this.y][this.x] = 0
                    watermanArr.splice(i, 1);
                    break;
                }


    
}
                    
                    }

        mul(){

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        console.log(emptyCells);
        if(newCell && this.energy >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
 
            var newwatermanArr = new Waterman(newX, newY, 3);
            watermanArr.push(newwatermanArr);
            this.energy = 5;
            
        }
        else {
            this.eat()
        }
        }
        
    }

    class Zombies extends speciet{
        constructor(x,y,index) {
            super(x,y,index);
            this.energy = 7;
            this.directions = [];
        }


        getNewCoordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
             [this.x    , this.y - 1],
             [this.x + 1, this.y - 1],
                 [this.x - 1, this.y    ],
                 [this.x + 1, this.y    ],
                 [this.x - 1, this.y + 1],
                 [this.x    , this.y + 1],
                 [this.x + 1, this.y + 1]
            ];
         }
         move(){
            this.getNewCoordinates();
            var n = random(this.chooseCell(0));
            console.log(n);
            if(n){
                var newX = n[0];
                var newY = n [1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
            }
           
            }

        chooseCell(character) {
            var found = [];
            this.getNewCoordinates();
            for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
        }
        eat(){
            this.getNewCoordinates();
            var z = random(this.chooseCell(1));
            console.log(z);
            
            if(z){
                var newX = z[0];
                var newY = z [1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] =0
                this.x = newX
                this.y = newY  
                this.energy++;

                for (var i in watermanArr) {
                    if (newX == watermanArr[i].x && newY == watermanArr[i].y) {
                        predatorArr.splice(i, 3);
                        break;
                    }
            }
            }
            else {
                this.energy--;
                this.move()
            }
            if (this.energy<=0){
                console.log(zombiesArr)
            this.die()
            }
                }
        
                die(){
            for (var i in zombiesArr) {
                if (this.x== zombiesArr[i].x && this.y == zombiesArr[i].y) {
                    matrix[this.y][this.x] = 0
                    zombiesArr.splice(i, 1);
                    break;
                }

            }
        }
    
    mul(){

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        console.log(emptyCells);
        if(newCell && this.energy >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
 
            var newzombiesArr = new Zombies(newX, newY, 4);
            zombiesArr.push(newzombiesArr);
            this.energy = 5;
            
        }
        else {
            this.eat()
        }
    }
    }  
        
    