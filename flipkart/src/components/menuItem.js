export const MenuItem=(props)=>{
   console.log("hi keshav2",props.menu)
 return(
    <div className="menuItem">
       <img className="menu-img" src={props.menu?.img}></img>
       <span className="menu-name">{props.menu?.name}</span>
    </div>
 )
}