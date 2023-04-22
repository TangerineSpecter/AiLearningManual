## 定义

> 量和量之间的关系


$$
A = \pi r^n
$$

## 类型

### 1 - 分段函数
> x取不同值的时候，得到的结果是不一样的

$$
f(x)=\left\{\begin{array}{ll}
\sqrt{x}, & x \geq 0 \\
-x, & x<0
\end{array}\right.
$$

### 2 - 反函数
> 自变量和因变量对调

$$
\mathrm{h}=\frac{1}{2} g t^{2} \rightarrow h=h(t) \quad \mathrm{t}=\sqrt{\frac{2 \mathrm{~h}}{\mathrm{~g}}} \rightarrow t=t(h)
$$

### 3 - 显函数和隐函数

**显函数：**
> 直接写出y的公式，称为显函数
$$
y=x^2+1
$$
**隐函数：**
> 不直接写出来的，称为隐函数
$$
F(x,y)=0,3x+y-4=0
$$

## 特性

### 1 - 奇偶性

**偶函数**
> 基于y轴对称
$$
f(-x)=f(x)
$$

**奇函数**
> 基于原点对称
$$
f(-x)=-f(x)
$$


### 2 - 周期性
> 呈现出周期变换

$$
f(x+T)=f(x)
$$

### 3 - 单调性
> 一直递增，或者递减

$$
y=f(x)
$$

### 4 - 连续性
> 函数$y=f(x)$在点$x_0$的某领域内有定义，如果自变量的改变量$\Delta x$趋近于零时，相应函数的改变量$\Delta y$也趋近于零，则称$y=f(x)$在点$x_0$处连续。

$$
\lim_{\Delta x\to0}\Delta y =\lim_{\Delta x\to0}\left[f\left(x_{0}+\Delta x\right)-f\left(x_{0}\right)\right]=0
$$

函数在点$x_0$处连续的条件：
1. 函数在该点处有定义
2. 函数在该点处极限$\lim\limits_{x\to x_0}f(x)$存在
3. 极限值等于函数值$f(x)$

#### 🌰举个例子

**证明：** 函数$f(x)=\begin{cases}x+1 & \quad x\leq0 \\ \dfrac{\sin x}{x} & \quad x\gt0\end{cases}$在$x=0$处的连续性？

∵ $x=0$连续，则$f(0)=1$

∴ $\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^-}(x+1)=1$

∴ $\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}\dfrac{\sin x}{x}=1$

∴ 由以上可知，$\lim\limits_{x\to0}f(x)=f(0)=1$，根据第三点条件可知函数符合连续性。

### 5 - 间断点

> 函数$f(x)$在点$x=x_0$处不连续，则称其为函数的间断点。

**函数在点$x_0$处间断的条件：**
1. 函数$f(x)$在点$x_0$处没有定义
2. 极限$\lim\limits_{x\to x_0}f(x)$不存在
3. 满足前两点，但是$\lim\limits_{x\to x_0}f(x) \neq f(x)$

**间断点分类：**
- 第一类间断点：当$x\to x_0$时，$f(x)$的左右极限存在，则称为第一类间断点，否则为第二类间断点。
- 跳跃间断点：$\lim\limits_{x\to 0^-}{f(x)}$与$\lim\limits_{x\to 0^+}{f(x)}$均存在，但不相等。
- 可去间断点：$\lim\limits_{x\to x_0}{f(x)}$存在，但不等于$f(x)$