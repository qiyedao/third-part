import { useEffect } from 'react';
import { history } from 'umi';
import './index.less';
export default function IndexPage() {
  useEffect(() => {
    let goto =
      'https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=cli_a2cfb4be7e7fd00d&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Flogin&state=RANDOMSTATE&response_type=code&state=STATE';
    if (!window.location.search) {
      var QRLoginObj = window.QRLogin({
        id: 'qrcode',
        goto: goto,
        width: '260',
        height: '260',
        style: 'width:260px;height:260px', //可选的，二维码html标签的style属性
      });
      const handleMessage = function (event) {
        console.log('event', event);

        var origin = event.origin;
        // 使用 matchOrigin 方法来判断 message 来自页面的url是否合法
        if (QRLoginObj.matchOrigin(origin)) {
          var loginTmpCode = event.data;

          // 在授权页面地址上拼接上参数 tmp_code，并跳转
          window.location.href = `${goto}&tmp_code=${loginTmpCode}`;
        }
      };
      if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('message', handleMessage, false);
      } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onmessage', handleMessage);
      }
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
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <h1 className={'title'}>Page index</h1>
      <div id="qrcode"></div>
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
