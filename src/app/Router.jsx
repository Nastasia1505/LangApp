import { Home, Learn, Library, Settings, SignIn, SignUp, Start, Translator } from "pages";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "shared/consts/routers";

function Router() {
  const [library, setLibrary] = useState(
    JSON.parse(localStorage.getItem("library")) || []
  );
  const [playWords, setPlayWords] = useState([library.slice(-10).lenght]);
  return (
    <Routes>
      <Route path={ROUTES.START_PAGE} element={<Start />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.TRANSLATOR} element={<Translator />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SETTINGS} element={<Settings />} />
      <Route path={ROUTES.LIBRARY} element={<Library library={library} setLibrary={setLibrary} playWords={playWords} setPlayWords={setPlayWords} />} />
      <Route path={ROUTES.LEARN} element={<Learn library={library} />} />

    </Routes>
  )
}

export default Router;
