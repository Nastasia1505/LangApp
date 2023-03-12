import { Route, Routes } from "react-router-dom";
import { UserModel } from "moduls";
import { observer } from 'mobx-react-lite'

import { Home, Learn, Library, Settings, SignIn, SignUp, Start, Translator } from "pages";
import { ROUTES } from "shared/consts/routers";

function Router({ library, setLibrary, playWords, setPlayWords }) {

  return (
    <Routes>
      <Route path={ROUTES.START_PAGE} element={<Start />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      {UserModel.isLoggedIn() && (<>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TRANSLATOR} element={<Translator />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.LIBRARY} element={<Library library={library} setLibrary={setLibrary} playWords={playWords} setPlayWords={setPlayWords} />} />
        <Route path={ROUTES.LEARN} element={<Learn library={library} />} />
      </>)}

    </Routes>
  )
}

export default observer(Router);
