import { useEffect } from 'react';
import { history } from 'umi';
import styles from './index.less';
export default function IndexPage() {
  useEffect(() => {
    if (!localStorage.userInfo) {
      window.location.href = '/login';
    }
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button
        onClick={() => {
          history.push('/detail' + window.location.search);
        }}
      >
        push
      </button>
    </div>
  );
}
