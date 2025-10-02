export const setLocal = (key:string,value:any) => sessionStorage.setItem(key,JSON.stringify(value))

//@ts-ignore
export const getLocal = (key:string) => JSON.parse(sessionStorage.getItem(key))