export default function Nav() {
    
    
    return(
        <nav className="bg-[#012A4A] w-screen flex justify-center p-4 text-white fixed z-10 h-15">  
            <ul className="bg-blue-500 flex gap-6 rounded-full w-100 justify-center fixed  z-5">
                <li className="p-1 hover:text-black font-['Tourney'] "> <a href="#sobremi">Sobre mi</a></li>
                <li className="p-1 hover:text-black font-['Tourney']"> <a href="#proyectos">Proyectos</a></li>
                <li className="p-1 hover:text-black font-['Tourney']"> <a href="#Educación">Contacto</a></li>
            </ul>
        </nav>
      )
}
