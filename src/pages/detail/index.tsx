import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    if (!localStorage.userInfo) {
      window.location.href = '/login';
    }
  }, []);
  return (
    <div>
      <h1 className={styles.title}>detail</h1>
    </div>
  );
}
