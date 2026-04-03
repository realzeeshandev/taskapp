import { useEffect, useState } from "react"


export default function Header(){


    const [theme, setTheme] = useState("gOne")

    useEffect(()=> {

        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    })
    return(<>
    
<header>
    <div className="logo">
        
       
        <span>Taskapp</span>
         </div>
        <div className="themeSelector">
            <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("ligth")}> </span>
            <span className={theme === "medium" ? "medium activeTheme" : "medium"}  onClick={() => setTheme("medium")}> </span>
            <span className={theme === "dark" ? "dark activeTheme" : "dark"}  onClick={() => setTheme("dark")}> </span>
            <span className={theme === "gOne" ? "gOne activeTheme" : "gOne"}  onClick={() => setTheme("gOne")}> </span>
            <span className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}  onClick={() => setTheme("gTwo")}> </span>
            <span className={theme === "gThree" ? "gThree activeTheme" : "gThree"}  onClick={() => setTheme("gThree")}> </span>
        </div>
   
</header>




    </>)
}