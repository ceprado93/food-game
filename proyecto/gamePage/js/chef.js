class Chef{
    // sera el personaje principal, tiene que recolectar los platos que se le indican en el tablero
    // moviendose de izq a drcha, tiene que evitar a chikote saltandolo
    // y esquivar el jagger

        constructor(ctx, chefPosX, chefPosY, chefWidth, chefHeight, chefImage) {
             this.ctx = ctx
     
             this.chefPos = {
                 x: chefPosX,
                 y: chefPosY
             }
             this.chefSize = {
                 w: chefWidth,
                 h: chefHeight
             }
             this.imageName = chefImage
             this.chefInstance = undefined
             this.init()
         }
     
         init() {
             this.chefInstance = new Image()
             this.chefInstance.src = '/images/mariokart.png'
         }
     
         draw() {
           this.ctx.drawImage(this.chefInstance, this.chefPos.x, this.chefPos.y, this.chefSize.w, this.chefSize.h)
         }
     
         move(dir) {
             dir === 'left' && this.chefPos.x > 50 ? this.chefPos.x -= 20 : null
             dir === 'right' && this.chefPos.x < (450-this.chefSize.w) ? this.chefPos.x += 20 : null
             dir === 'up'&& this.chefPos.y > 50 ? this.chefPos.y -= 20 : null
         }
     
      }
