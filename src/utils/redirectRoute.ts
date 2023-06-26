// eslint-diable-next-line
export function redirectRoute(to:any,from:any,next:any){
    if(window.innerWidth < 850){
        next({path: "/mobile/whatsapp"})
    }else{
        next({path: "/web/whatsapp"})
    }
}