import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AuthenticationProvider } from './src/contexts/AuthenticationContext'

export default function App() {
  return (
    <TemaProvider>
      <AuthenticationProvider>
        <Rotas />
      </AuthenticationProvider>
    </TemaProvider>
  );
}