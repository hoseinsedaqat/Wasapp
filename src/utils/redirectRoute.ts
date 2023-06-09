// eslint-diable-next-line
export function redirectRoute(to:any,from:any,next:any){
    if(window.innerWidth < 800){
        next({path: "/mobile/whatsapp"})
    }else{
        next({path: "/web/whatsapp"})
    }
}