import { useState } from "react";
import { PerfilePageProps } from "../interface/userInterface";

export default function PerfileConfigPage({ username, biografia }: PerfilePageProps) {
  const [newUsername, setNewUsername] = useState(username);
  const [newBiografia, setNewBiografia] = useState(biografia);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/user/update", {
        method: "PUT", // Usa PUT para actualizar datos
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: newUsername,
          biografia: newBiografia,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el perfil");
      }

      setMessage("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setMessage("Hubo un problema al actualizar el perfil. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-gray-900 text-white border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Información de perfil</h2>
      <p className="text-gray-400 mb-6">Actualiza tu información personal</p>

      {/* Mensaje de éxito o error */}
      {message && (
        <div className={`mb-4 p-2 rounded ${message.includes("éxito") ? "bg-green-500" : "bg-red-500"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre completo"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-white">
            Biografía
          </label>
          <textarea
            id="bio"
            placeholder="Cuéntanos sobre ti"
            rows={4}
            value={newBiografia}
            onChange={(e) => setNewBiografia(e.target.value)}
            className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Guardando..." : "Guardar cambios"}
        </button>
      </form>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Configuración de cuenta */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-gray-900 text-white border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Configuración de cuenta</h2>
            <button className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-left">
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}