import { useEffect } from 'react';
import { history } from 'umi';
import styles from './index.less';
export default function IndexPage() {
  useEffect(() => {
    if (!window.location.search) {
      window.location.href =
        'https://open.feishu.cn/open-apis/authen/v1/user_auth_page_beta?app_id=cli_a2cfb4be7e7fd00d&redirect_uri=http%3A%2F%2F192.168.3.73%3A8000%2Flogin&state=RANDOMSTATE';
    } else {
      let search = window.location.search.substring(1);
      let arr = search.split('&');
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
      }
      console.log(obj, 'obj');

      localStorage.userInfo = obj.code;
      history.push('/');
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
