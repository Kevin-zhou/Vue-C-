const wx = require('./paysdk1.0.js');
class SdkUtils {

    loginData = null;

    constructor() {
        this.sdkConfig();
    }

    // 设置微信config
    sdkConfig() {
        let currentUrl = location.href;
        if (currentUrl.indexOf("#") < 0) {
            currentUrl = location.href;
        } else {
            currentUrl = currentUrl.split("#")[0];
        }

        __utils.ajax('wxConfig', { payUrl: currentUrl }).then(res => {
            if (res.success) this.setConfig(res.data);
        })
    }

    setConfig(configData) {
        let appId = configData.appId;
        let timestamp = configData.timestamp;
        let nonceStr = configData.nonceStr;
        let signature = configData.signature;

        wx.config({
            debug: true,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'scanQRCode',
                'chooseWXPay',
                'onMenuShareAppMessage'
            ]
        });
    }

    // 微信扫码
    scan() {
        return new Promise(resolve => {
            wx.scanQRCode({
                needResult: 1,
                desc: 'scanQRCode desc',
                success: (res => {
                    resolve(res.resultStr.replace(/.*\,/, ''));
                })
            });
        })
    }

  

}

window['__sdkUtils'] = new SdkUtils();