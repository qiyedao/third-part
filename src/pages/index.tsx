import { useEffect } from 'react';
import { history } from 'umi';
import styles from './index.less';
export default function IndexPage() {
  useEffect(() => {
    if (!localStorage.userInfo) {
      window.location.href = '/login';
    } else {
      window.addEventListener('message', (event) => {
        console.log('message', event);
      });
    }
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <iframe
        id="frame1"
        src="http://127.0.0.1:8000/iframe?redirectUri=http://192.168.3.73:8000/"
      />
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
