import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
 
 const ScrollToTop = () => {
   const pathname = useRouter();
 
   useEffect(() => {
     const scrollTimeout = setTimeout(() => {
         window.scrollTo(0, 0);
     }, 0); // Short delay to override browser scroll position history
 
     return () => clearTimeout(scrollTimeout);
     
   }, [pathname.pathname]);
 
   return null;
 };
 
 export default ScrollToTop