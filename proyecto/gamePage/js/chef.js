class Chef{
    // sera el personaje principal, tiene que recolectar los platos que se le indican en el tablero
    // moviendose de izq a drcha, tiene que evitar a chikote saltandolo
    // y esquivar el jagger

        constructor(ctx, canvasSize) {
             this.ctx = ctx

     
             this.chefPos = {x:200, y: 550}
             this.chefSize = {w: 100, h: 100}
             this.canvasSize = { w: canvasSize.w, h: canvasSize.h}
             this.speed = {x: 0,y: -20}



             this.chefGravity = 0.4
             this.chefImageName = 'mariokart.png'
             
             this.chefInstance = undefined

             this.init()

            
            //  this.speed.y+=this.chefGravity
            //  this.chefInstance = undefined
            
         }
     
         init() {
             this.chefInstance = new Image()
             this.chefInstance.src =  'images/mariokart.png'
         }


     
         draw() {
           this.ctx.drawImage(this.chefInstance, this.chefPos.x, this.chefPos.y, this.chefSize.w, this.chefSize.h)
         }
     
         move(dir) {
             dir === 'left' && this.chefPos.x > 20 ? this.chefPos.x -= 20 : null
             dir === 'right' && this.chefPos.x < (1230-this.chefSize.w) ? this.chefPos.x += 20 : null
            if (dir === 'space'&& this.chefPos.y > 50){
               this.speed.y+=this.chefGravity
               this.chefPos.y += this.speed.y 
            } 
         }

      }
