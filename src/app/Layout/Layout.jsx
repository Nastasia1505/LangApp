import { UserModel } from "moduls";
import { Header } from "widgets";
import { observer } from 'mobx-react-lite'

function Layout() {
  return <div>
    {UserModel.isLoggedIn() && <Header />
    }

  </div>;
}

export default observer(Layout);
