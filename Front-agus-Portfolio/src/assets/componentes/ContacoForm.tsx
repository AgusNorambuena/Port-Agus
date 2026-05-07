
import { useState } from "react";

//Definición de la interfaz ContactoDto para tipar el estado del formulario
interface ContactoDto {
  nombreAppellido: string;
  email: string;
  numero: string;
  descripcion: string;
}
//estructura del formulario de contacto, con los campos necesarios para enviar un email al backend
export const ContactoForm = () => {
  const [form, setForm] = useState<ContactoDto>({
    nombreAppellido: "",
    email: "",
    numero: "",
    descripcion: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const response = await fetch("http://localhost:8080/contacto/enviado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMensaje("¡Email enviado correctamente!");
        setForm({ nombreAppellido: "", email: "", numero: "", descripcion: "" });
      } else {
        setMensaje("Hubo un error al enviar el email.");
      }
    } catch (error) {
      setMensaje("No se pudo conectar con el servidor.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="flex justify-center" id="contacto">
    <div className="bg-[#468FAF]  justify-center m-5 p-5 rounded-lg w-full max-w-4xl mx-5 flex shadow-2xl">
      <div className="flex flex-col gap-4 max-w-md mx-auto p-6">
        <p className="text-3xl text-white font-['Tourney'] text-center mt-10">Contacto</p>
        <p className="text-white text-center mt-4">Por cualquier duda o consulta sobre mis proyectos y servicios, siéntete libre de contactarme.</p><p className="text-white text-center mt-4">¡Contáctame para más información!</p>
      </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-200 mx-auto p-6 bg-[#2A6F97] rounded-lg mt-10 shadow-xl">
          <input
            type="text"
            name="nombreAppellido"
            placeholder="Nombre y Apellido"
            value={form.nombreAppellido}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />
          <input
            type="text"
            name="numero"
            placeholder="Número"
            value={form.numero}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />
          <button
            type="submit"
            disabled={enviando}
            className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 disabled:opacity-50"
          >
            {enviando ? "Enviando..." : "Enviar"}
          </button>
          {mensaje && <p className="text-center text-sm">{mensaje}</p>}
        </form>
      </div>
    </section>
  );
};