import React from "react";
import{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from "react-icons/bs";

function Sidebar({openSideBarToggle}){
  return (

    <aside id="sidebar" className={openSideBarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
         <div className="sidebar-brand">
               <BsCart3 className="icon_header"/>SHOP
         </div>
          <span className="close_icon">X</span>
       </div>




       <ul className="sidebar-list"> 
        <li className="sidebar-list-item">
          <a href="">
             <BsGrid1X2Fill className="icon"/> Panel
          </a>
        </li> 
      

       <li className="sidebar-list-item">
          <a href="">
             <BsFillArchiveFill className="icon"/> Productos
          </a>
        </li> 

        <li className="sidebar-list-item">
          <a href="">
             <BsFillGrid3X3GapFill className="icon"/> Categorias
          </a>
        </li> 



        <li className="sidebar-list-item">
          <a href="">
             <BsPeopleFill className="icon"/> Clientes
          </a>
        </li> 


        <li className="sidebar-list-item">
          <a href="">
             <BsListCheck className="icon"/> Inventario
          </a>
        </li> 



        <li className="sidebar-list-item">
           <a href="">
             <BsMenuButtonWideFill className="icon"/> Reportes
           </a>
        </li> 


        <li className="sidebar-list-item">
           <a href="">
              <BsFillGearFill className="icon"/> Ajustes
           </a>
        </li> 

        </ul>
    </aside>
  )
}

export default Sidebar;