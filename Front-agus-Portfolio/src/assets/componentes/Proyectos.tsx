export default function Proyectos() {
    
    
    return(
        <section className="flex items-center justify-center" id="proyectos">
            <div className="bg-[#468FAF] justify-center m-5 p-5 rounded-lg w-300 flex flex-col shadow-2xl">
                <h2 className="text-3xl text-white font-['Tourney']">Proyectos</h2>
                <ul>
                    <li className="hover:border-t-2 hover:border-dashed hover:border-white transition duration-500">
                        <article className="h-15">
                        <h3>Proyecto 1</h3>
                        </article>
                    </li>
                    <li className="hover:border-t-2 hover:border-dashed hover:border-white transition duration-500">
                        <article className="h-15">
                        <h3>Proyecto 2</h3>
                        </article>
                    </li>
                    <li className="hover:border-t-2 hover:border-dashed hover:border-white transition duration-500">
                        <article className="h-15">
                        <h3>Proyecto 3</h3>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
      )
}
