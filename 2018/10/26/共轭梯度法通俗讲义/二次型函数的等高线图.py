import matplotlib.pyplot as plt
import numpy as np
# 二次型函数方程
def f(x, y):
    return 3/2*pow(x, 2) + 2*x*y + 3*pow(y, 2) - 2*x + 8*y

n = 256

x = np.linspace(-4, 6, n)
y = np.linspace(-6, 4, n)

X, Y = np.meshgrid(x, y)

# 填充等高线的颜色, 8是等高线分为几部分
#plt.contourf(X, Y, f(X, Y), 8, alpha = 0.75, cmap = plt.cm.hot)

C = plt.contour(X, Y, f(X, Y), 8, colors = 'black', linewidths = 0.2)

plt.scatter(-2, -2, label="(-2,-2)")

plt.clabel(C, inline = True, fontsize = 10)

plt.show()
