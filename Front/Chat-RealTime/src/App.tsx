import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PerfilePage from "./pages/PerfilePage";
import ChatPage from "./pages/ChatPage";
import PerfileConfigPage from "./pages/PerfileConfigPage"; // Importa la página PerfilConfig
import LayoutPage from "./pages/LayoutPage"; // Importa LayoutPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/general" element={<ChatPage />} />

        {/* Rutas protegidas con LayoutPage */}
        <Route element={<LayoutPage children={undefined} />}>
          <Route path="/perfile" element={<PerfilePage username="JohnDoe" biografia="Software Developer" />} />
          <Route path="/perfilconfig" element={<PerfileConfigPage username={""} biografia={""} />} /> {/* Nueva ruta para PerfilConfig */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
