import { useEffect, useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [obj, setObj] = useState<any>({});
  useEffect(() => {
    let search = window.location.search.substring(1);
    let arr = search.split('&');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i].split('=');
      obj[temp[0]] = temp[1];
    }
    console.log(obj, 'obj');
    setObj(obj);
  }, []);
  return (
    <div>
      <button
        id="framebtn"
        onClick={() => {
          console.log('window', window);
          window.postMessage('iframe---message');
        }}
      >
        send message
      </button>
    </div>
  );
}
