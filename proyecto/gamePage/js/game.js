const lunchGame = {
    // un chef tiene que dar una comida clandestina para 20 comensales,
    //  tendra que preparar 5 platos para cada comensal, 
    // tendra que tener cuidado con la bedida y la comida fast food, 
    // ademas de esquivar a chikote que le quiere chapar el garito.
    name: 'Covid Lunchtime',
    description: 'Canvas App for lunch prep',
    author: 'Montserrat Mosqueda, Carlos Prado',
    version: '1.0.0',
    license: undefined,
    /** @type {CanvasRenderingContext2D} */
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
      },

    init(id){
        this.canvasDom = document.querySelector (`#${id}`)
        this.ctx = this.canvasDom.getContext ('2d')
        this. setDimensions()
    },

    setDimensions(){
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasDom.setAttribute ('width', this.canvasSize.w)
        this.canvasDom.setAttribute ('height', this.canvasSize.h)
    },
}