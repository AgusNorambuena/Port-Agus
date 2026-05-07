import fotoGithub from "../imagenes/fotoGithub.jpg"
export default function Sobremi() {
    
    
    return(

        <section className="flex items-center justify-center" id="sobremi">
            <div className="bg-[#2A6F97] w-300 h-80 rounded-lg m-5 p-5 items-center flex mt-20 shadow-2xl">
                <figure>
                    <img src={fotoGithub} alt="Foto de perfil" className="w-48 h-48 rounded-full m-2 p-2 object-cove" />
                </figure>
                    <div className="flex gap-4">
                        <div>
                            <h1 className="text-4xl font-['Tourney'] text-white p-5 ">Agus Norambuena</h1>
                            <p className="text-4xl  text-white p-5 font-['Tourney']" >Estudiante en Técnico en Programación cursando 7mo año</p>
                            <div className="flex">
                            <div className="bg-[#61A5C2] w-25 h-10 m-2 p-2 rounded-lg hover:bg-[#A9D6E5] hover:text-black rounded-lg font-['Tourney']">
                                <a className="m-2 p-2 text-white hover:text-black" href="https://github.com/AgusNorambuena">github</a>
                            </div>
                            <div className="bg-[#61A5C2] h-10 w-30  m-2 p-2 hover:bg-[#A9D6E5] hover:text-black rounded-lg font-['Tourney']">
                                <a className="m-2 p-2 text-white hover:text-black" href="https://www.linkedin.com/in/agustin-norambuena-408970394/">Linkedin</a>
                            </div>
                            <div className="bg-[#61A5C2] h-10 w-25  m-2 p-2 hover:bg-[#A9D6E5] hover:text-black rounded-lg font-['Tourney']">
                                <a className="m-2 p-2 text-white hover:text-black" href="">prueba</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      )
}
