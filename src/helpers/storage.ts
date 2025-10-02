export const setLocal = (key:string,value:unknown) => sessionStorage.setItem(key,JSON.stringify(value))

export const getLocal = <T extends object>(key: string): T | null => {
  const item = sessionStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};