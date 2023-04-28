# 导数

## 定义

> 导数是函数的局部性质。一个函数在某一点的导数描述了这个函数在这一点附近的变化率。即：当函数 $y=f(x)$ 的自变量 $x$ 在一点 $x_0$ 上产生一个增量 $\Delta x$ 时，函数输出值的增量 $\Delta y$ 与自变量增量 $\Delta x$ 的比值在 $\Delta x$ 趋于0时的极限a如果存在，a即为在 $x_0$ 处的导数，记作 $f'(x)$ 或 $\dfrac{df(x_0)}{dx}$。

### 🌰举个栗子
速度公式：$v=\dfrac{s}{t}$，意思是：速度等于路程除以时间。

平均速度：$\overline{v}=\dfrac{\Delta s}{\Delta t}=\dfrac{s\left(t_0+\Delta t\right)-s\left(t_0\right)}{\Delta t}$

瞬时速度也就是$\Delta t\to 0$的时候，$v(t_0)=\lim\limits_{\Delta t \to 0}{\overline{v}}=\lim\limits_{\Delta t \to 0}{\dfrac{s(t_0+\Delta t)-s(t_0)}{\Delta t}}$ 
- 由于平均变化率的极限存在，则称此极限为函数$y=f(x)在点x_0$处的导数。

## 求导公式
| 函数 | 原函数 | 导函数 |
| -- | -- | --|
| 常函数 | $y=C$（C为常数）| $y'=0$ |
| 指数函数 | $y=a^x$ <br> $y=e^x$ | $y'=a^x\ln a$ <br> $y'=e^x$ |
| 幂函数 | $y=x^n$ | $y'=nx^{n-1}$|
| 对数函数 | $y=\log_a{x}$ <br> $y=\ln x$ | $y'=\tfrac{1}{x\ln a}$ <br> $y'=\tfrac{1}{x}$|
| 正弦函数 | $y=\sin x$ | $y'=\cos x$ |
| 余弦函数 | $y=\cos x$ | $y'=-\sin x$ |
| 正切函数 | $y=\tan x$ | $y'=\sec^2 x$ |
| 余切函数 | $y=\cot x$ | $y'=-\csc^2 x$ |
| 正割函数 | $y=\sec x$ | $y'=\sec x \tan x$ |
| 余割函数 | $y=\csc x$ | $y'=-\csc x \cot x$ |
| 反正弦函数 | $y=\arcsin x$ | $y'=\tfrac{1}{\sqrt{1-x^2}}$ |
| 反余弦函数 | $y=\arccos x$ |  $y'=-\tfrac{1}{\sqrt{1-x^2}}$ |
| 反正切函数 | $y=\arctan x$ |  $y'=\tfrac{1}{1+x^2}$ |
| 反余切函数 | $y=arccot{x}$ |  $y'=-\tfrac{1}{1+x^2}$ |
| 双曲线函数 | $y=\mathrm{sh} x$ | $y'=\mathrm{ch} x$ |

## 求导运算

1. $(u±v)'=u'±v'$
2. $(uv)'=u'v+uv'$
3. $(\dfrac{u}{v})'=\dfrac{u'v-uv'}{v^2}$（v≠0）
4. $(Cu)'=Cu'$
5. $(\dfrac{C}{v})'=\dfrac{Cv'}{v^2}$（C为常数）