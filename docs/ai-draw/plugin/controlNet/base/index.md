# ControlNet插件应用

## 简介

![](/ai-draw/20231017111547.png)

- 准备工作参照：<a href='/ai-draw/plugin/controlNet/start/index'><span>ControlNet安装和使用</span></a>以及<a href='/ai-draw/plugin/install'><span>秋叶工具安装扩展插件</span></a>

## 模型说明

![](/ai-draw/20231016150002.png)

- **Control：** 表示项目名称
- **v11：** 表示版本号为 1.1
- **p：** 表示已发布生产版，e 是测试版，u 是开发版
- **sd15：** 表示基础模型版本是 SD1.5 版
- **canny：** 表示 Control 使用的模型

## 一、线稿上色

> 通过 ControlNet 边缘检测模型或线稿模型提取线稿（可提取参考图片线稿，或者手绘线稿），再根据提示词和风格模型对图像进行着色和风格化。

- 主要应用模型：Canny、SoftEdge、Lineart。

### 1）Canny 边缘检测

**说明：**

> Canny 是比较常用的一种线稿提取方式，该模型能够很好的识别出图像内各对象的边缘轮廓。

![](/ai-draw/20231017111823.png)

**示例图：**
![](/ai-draw/20231016150448.png)

**参数说明：**

1. **Control Weight：** 使用 ControlNet 生成图片的权重占比影响（多个 ControlNet 组合使用时，需要调整权重占比）。
2. **Starting Control Step：** ControlNet 开始参与生图的步数。
3. **Ending Control Step：** ControlNet 结束参与生图的步数。
4. **Preprocessor resolution：** 预处理器分辨率，默认 512，数值越高线条越精细，数值越低线条越粗糙。
5. **Canny 低阈值/高阈值：** 数值越低线条越复杂，数值越高线条越简单。

### 2）SoftEdge 软边缘检测

> 可以理解为 1.0 版本中 HED 的升级版，1.1 版本中 4 个预处理器质量排序 `SoftEdge_HED > SoftEdge_PIDI > SoftEdge_HED_safe > SoftEdge_PIDI_safe`，safe 表示可以防止生成不良内容。

**说明：**
![](/ai-draw/20231017111938.png)

**示例图：**
![](/ai-draw/20231016150908.png)

### 3）Lineart 精细线稿提取

> 相较于 Canny，Lineart 提取的线稿更加精细，细节更丰富。

![](/ai-draw/20231016151007.png)

- lineart_coarse（粗略模式）
- lineart_realistic（详细模式）
- lineart_standard（标准模式）

**示例图：**
![](/ai-draw/20231016151043.png)

## 二、涂鸦成图

> 通过 ControlNet 的 Scribble 模型提取涂鸦图（可提取参考图涂鸦，或者手绘涂鸦图），再根据提示词和风格模型对图像进行着色和风格化。

- 主要应用模型：Scribble。

### 1）Scribble 涂鸦图

> Scribble 比 Canny、SoftEdge 和 Lineart 的自由发挥度要更高，也可以用于对手绘稿进行着色和风格处理。

**说明：**
![](/ai-draw/20231017111956.png)

![](/ai-draw/20231016151318.png)

- Scribble_hed
- Scribble_pidinet
- Scribble_Xdog，细节最丰富

**示例图：**
![](/ai-draw/20231016151408.png)

> Scribble 手动涂鸦示例：根据手绘草图，生成图像

![](/ai-draw/20231016151450.png)

## 三、建筑/室内设计

> 通过 ControlNet 的 MLSD 模型提取建筑的线条结构和几何形状，构建出建筑线框（可提取参考图线条，或者手绘线条），再配合提示词和建筑/室内设计风格模型来生成图像。

- 主要应用模型：MLSD。

### 1）MLSD 线条结构

**说明：**
![](/ai-draw/20231017112024.png)

**示例图：**
![](/ai-draw/20231016151614.png)

## 四、颜色控制画面

> 通过 ControlNet 的 Segmentation 语义分割模型，标注画面中的不同区块颜色和结构（不同颜色代表不同类型对象），从而控制画面的构图和内容。

- 主要应用模型：Seg。
- 颜色语义参考：https://docs.qq.com/sheet/DYmtkWG5taWxhVkx2?tab=BB08J2

### 1）Seg 颜色作图

**说明：**
![](/ai-draw/20231017112039.png)

**示例图：**
![](/ai-draw/20231016151733.png)

**通过语义颜色添加人物实例：**
![](/ai-draw/20231016151808.png)

- 在预处理图片上添加对应人物颜色外形

## 五、背景替换

> 在 img2img 图生图模式中，通过 ControlNet 的 Depth_leres 模型中的 remove background 功能移除背景，再通过提示词更换想要的背景。

- 主要应用模型：Depth，预处理器 Depth_leres。

### 1）Depth_leres 背景替换

> 如果想要比较完美的替换背景，可以在图生图的 Inpaint 模式中，对需要保留的图片内容添加蒙版，remove background 值可以设置在 70-80%。

**说明：**
![](/ai-draw/20231017112137.png)

**示例图：**
![](/ai-draw/20231016154511.png)

## 六、图片指令

> 通过 ControlNet 的 Pix2Pix 模型（ip2p），可以对图片进行指令式变换。

应用模型：ip2p，预处理器选择 none。

### 1）Pix2Pix 指令变换

**示例图：**
![](/ai-draw/20231016154918.png)

- 通过指令`make it snow`让非洲草原下雪

## 七、风格迁移

> 通过 ControlNet 的 Shuffle 模型提取出参考图的风格，再配合提示词将风格迁移到生成图上。

应用模型：Shuffle。

### 1）Shuffle 风格变换

**示例图：**
![](/ai-draw/20231016155036.png)

- 根据魔兽道具风格，重新生成一个宝箱道具

## 八、色彩继承

> 通过 ControlNet 的 t2iaColor 模型提取出参考图的色彩分布情况，再配合提示词和风格模型将色彩应用到生成图上。

- 应用模型：Color。

### 1）Color 色彩参考

**示例图：**
![](/ai-draw/20231016155749.png)

- 把参考图的色彩分布应用到生成图上

## 九、色彩三视图

> 通过 ControlNet 的 Openpose 模型精准识别出人物姿态，再配合提示词和风格模型生成同样姿态的图片。

应用模型：OpenPose。在 ControlNet1.1 版本中，提供了多种姿态检测方式，包含：openpose 身体、openpose_face 身体+脸、openpose_faceonly 只有脸、openpose_full 身体+手+脸、openpose_hand 手，可以根据实际需要灵活应用。

### 1）Openpose 姿势识别

**说明：**
![](/ai-draw/20231017111616.png)

**示例图：**
![](/ai-draw/20231016160601.png)

- 上传 openpose 三视图，加载 charturner [风格模型](https://civitai.com/?query=charturner)，添加提示词保持背景干净 (simple background, white background:1.3), multiple views

## 十、图片光源控制

> 如果想对生成的图片进行打光，可以在 img2img 模式下，把光源图片上传到图生图区域，ControlNet 中放置需要打光的原图，ControlNet 模型选择 Depth。

- 应用模型：Depth。

### 1）Depth 光源控制

**示例图：**
![](/ai-draw/20231016160800.png)

## 十一、分块处理

### 1）tile_resample 模型

> 对于内容丰富的图片生图效果较好，但是和原图的颜色偏差较大。

**参数：**

- `Down Sampling Rate`：按照比例缩小参考图，降低参考图的分辨率，然后生成图片的时候就可以产生更多的细节。

### 2）tile_colorfix 模型

> 保持和原图的颜色一致，但背景会比较模糊。

- `Variation`：控制每个瓦片之间的色彩变化，值越大瓦片的色彩变化越大。
  ![](/ai-draw/20231017103738.png)

### 3）tile_colorfix+sharp 模型

> 保持和原图的颜色一致，同时增加锐化，让线条更清晰。

- `Variation`： 控制瓦片之间的色彩变化。
- `Sharpness`： 控制锐化程度，也就是线条的清晰程度。如果感觉生成的图片比较模糊，可以加大这个值。

### 4）用途

**修复老照片：**
![](/ai-draw/v2-c08e3d4f3b56898d4e2da1b09be862f4_b.png)

**改善细节**
![](/ai-draw/v2-c817816b32bd971a3d9d2fc5ce238467.png)

**完善草图**
![](/ai-draw/v2-1f10cc83df7e9878d98ebf512cb0ca1b.png)

**风格转换**
![](/ai-draw/v2-e50b3305e0521882ee6cce721d0f31c8_r.png)

## 十二、Normal 法线贴图

### Normal Map 模型

**说明：**
![](/ai-draw/20231017112109.png)

