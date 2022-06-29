import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <div>
      <button
        onClick={() => {
          console.log('window', window);

          window.parent.postMessage('iframe---message', '*');
        }}
      >
        send message
      </button>
    </div>
  );
}
