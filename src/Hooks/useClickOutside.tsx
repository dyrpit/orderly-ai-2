import { useEffect, RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
 const handleClickOutside = (e: MouseEvent) => {
  if (ref.current && !ref.current.contains(e.target as Node)) {
   callback();
  }
 };

 useEffect(() => {
  document.addEventListener("click", handleClickOutside, true);

  return () => {
   document.removeEventListener("click", handleClickOutside, true);
  };
 }, [ref, callback]);
};

export default useClickOutside;
