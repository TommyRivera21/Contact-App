import { ContactContextProvider } from "./src/context/ContactContext";
import Main from "./src/components/Main";

export default function App() {
  return (
    <ContactContextProvider>
      <Main />
    </ContactContextProvider>
  );
}