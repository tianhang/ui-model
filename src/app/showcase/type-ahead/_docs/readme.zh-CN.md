# 自动完成（输入提示）

本质上这是一个`Toggle`加上一个筛选功能。根据事件用`Toggle`来切换提示框；通过RxJS流来实现支持`debounce`的数据源筛选或延迟加载功能。

type-ahead分为指令和组件两层，指令负责提供一组辅助事件，而组件则引入具体的css框架，这种分层设计可以提供高级的可定制性。
