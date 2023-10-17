# ControlNet安装和使用

## 一、安装
- 插件[Github地址](https://github.com/lllyasviel/ControlNet-v1-1-nightly)
- 参照<a href='/ai-draw/plugin/install'><span>秋叶工具安装扩展插件</span></a>进行安装
- 插件地址：`https://github.com/lllyasviel/ControlNet-v1-1-nightly`

## 二、模型下载
- 插件[模型地址](https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main)
- 名字带有`V11P`的模型是稳定版
- 下载完毕后，放到`ControlNet`根目录下

## 三、界面说明
<img src="/ai-draw/v2-df0b16b1b71560d86d1935a02af66b03_r.jpg" width="70%" height="70%" />

### 1）区域二说明
- **启用：** 插件生效
- **低显存优化：** 字面意思，会损失一些效果
- **Pixel Perfect:** 控制图和输出图的尺寸比例不一致，可以勾选这个。建议勾选，免去在设置一次图片尺寸。
- **Allow Preview：** 查看预处理结果。可选

### 2）区域三说明
- **Control Type控制类型：** 选择任一种控制类型，具体参照：[[ControlNet插件应用]]
- 预处理器：
- 模型设置：
- **Control Weight：** 权重，默认1。代表使用ControlNet生成图片占比。
- **Start Control Step：** 开始介入步数，默认1。意思是比如设置0.2，那么图片生成到20%的时候，ControlNet才会介入影响绘画。
- **Ending Control Step：** 结束介入步数，默认1。比如设置0.9，则绘图到90%结束影响。

### 3）区域四说明
- **Control Mode：** 如字面意思，一般选平衡。否则选更倾向于`描述词`，还是更倾向于`ControlNet`控制。