import { UserModel } from 'moduls'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'

function Home() {
  return <div className={styles.wrapper}>
    {UserModel.email}
  </div>;
}

export default observer(Home);
