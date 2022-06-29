import { useEffect } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Spin } from 'antd';
export default function IndexPage() {
  useEffect(() => {
    if (window.h5sdk) {
      let timer;
      window.h5sdk.ready(() => {
        // ready方法不需要每次都调用
        tt.requestAuthCode({
          appId: 'cli_a2cfb4be7e7fd00d',
          success: (info) => {
            console.info(info.code);
            localStorage.userInfo = info.code;
            history.push('/');
          },
          fail: (error) => {
            console.error(error);
          },
        });
      });
    }
  }, []);
  return (
    <div>
      {window.h5sdk ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>请在飞书客户端打开</h2>
        </div>
      )}
    </div>
  );
}
