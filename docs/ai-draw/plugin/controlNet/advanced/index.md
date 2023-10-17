# ControlNet插件多模型组合应用

## 一、开启多模型

> ControlNet 还支持多个模型的组合使用，从而对图像进行多条件控制。

![](/ai-draw/20231017105637.png)

- 如果无多条件，可在设置中开启。
- 基础应用参照：<a href='/ai-draw/plugin/controlNet/start/index'><span>ControlNet插件应用</span></a>

## 二、人物和背景分别控制

**方法：**

- 第一个 ControlNet 通过 OpenPose 控制人物姿态。
- 第二个 ControlNet 通过 Seg 或 Depth 控制背景构成。
- 调整 ControlNet 权重，如 OpenPose 权重高于 Depth 权重，以确保人物姿态被正确识别，再通过提示词和风格模型进行内容和风格控制。
- 应用模型：OpenPose、Seg（自定义背景内容和结构）、Depth。

**示例：**
![](/ai-draw/20231017110253.png)

## 三、三维重建

**方法：**

- 第一个 Depth 深度检测。
- 第二个 Normalbae 法线贴图模型，识别三维目标。
- 再配合提示词和风格模型，重新构建出三维物体和场景。
- 应用模型：Depth、Normalbae。

**示例：**
![](/ai-draw/20231017110512.png)

## 四、更精准的图片风格化

**方法：**

- 图生图中，第一个 Lineart 模型获取线稿
- 第二个 Depth 模型提取深度，可以更加精准的提取图像结构，最大程度保留原图细节。
- 应用模型：Lineart、Depth。

**示例：**
![](/ai-draw/20231017110817.png)

## 五、更精准的图片局部重绘

**方法：**

- 在 图生图的局部重绘中，第一个 Depth 模型提取深度
- 第二个 Inpaint 模型进行局部重绘，可以更加精准的对图像进行局部重绘。
- 应用模型：Depth、Inpaint。

**示例：**
![](/ai-draw/20231017111118.png)
