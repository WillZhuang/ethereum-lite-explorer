运行步骤：
1. 下载并安装 node 12（确保使用的是npm6.9+，由于在npm6.9中引入了alias，旧版本将无法工作。）
2. 在您选择的文件夹中克隆资源`git clone https://github.com/WillZhuang/ethereum-lite-explorer.git`并到指定目录下`cd ethereum-lite-explorer`
3. 更改配置文件文件并下载Ganache它将为您提供自己的个人测试链。设置并启动Ganache，需要下载 MetaMask，并添加密语，配置用户词根并登录。更新`config.dev.json`并将eth-lite插件的nodeUrl属性设置为 `http://127.0.0.1:7545`；如果使用Melody区块链底层作为节点的话，属性设置为 `http://127.0.0.1:8545`。
4. 项目启动`npm start`

修改项目步骤：
1. 下载并安装node 12（确保使用的是npm6.9+，由于在npm6.9中引入了alias，旧版本将无法工作。）
2. 克隆监控项目，`git clone https://github.com/WillZhuang/ethereum-lite-explorer.git`，并进入到指定目录下 `cd ethereum-lite-explorer`，以下简称项目ethereum-lite-explorer
3. 克隆监控插件，`git clone
https://github.com/WillZhuang/explorer-core-plugins.git`，并进入到指定目录下`cd explorer-core-plugins`，以下简称项目explorer-core-plugins
4. 修改explorer-core-plugins中的代码，修改完成后 `npm run build`（此处有四个文件需要打包，时间较长请耐心等待）
5. 打包完成后，将ethereum-lite-explorer项目目录下`dist\plugins\aleth.io\eth-common`和`dist\plugins\aleth.io\eth-lite`目录下代码删除，并将`explorer-core-plugins`项目目录下`packages/eth-common/dist`和`packages/eth-lite/dist` 下的代码，分别复制到ethereum-lite-explorer项目目录下`dist\plugins\aleth.io\eth-common`和`dist\plugins\aleth.io\eth-lite`目录下
6. 更改配置文件文件并下载Ganache它将为您提供自己的个人测试链。同上 运行步骤 的第3步
7. 在ethereum-lite-explorer项目目录下，`npm start`启动项目

