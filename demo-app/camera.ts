class Camera {

// vscode
// node 7 >
//  typescript
// anular-cli

    private cost:any = 100
    private obj : {[key : string] : any}

    public getCost(): number {
        this.cost = 'hello'
        return this.cost
    }

    public assign(cost : number) {
        this.cost = cost
    }
}

let cam  = new Camera()
cam.assign(100)