// docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocDomOverlay
declare namespace TMap {
  class DOMOverlay {
    constructor(options: DOMOverlayOptions);
    setMap(map: Map | null): DOMOverlay; // 设置覆盖物所在的 map 对象, 传入 null 则代表将其从Map中移除
    getMap(): Map; // 获取覆盖物所在的 Map 对象
    destroy(): this; // 销毁覆盖物对象
    on(eventName: string, listener: () => void): DOMOverlay;
    off(eventName: string, listener: () => void): DOMOverlay;

    static onInit(options): void; // 实现这个接口来定义构造阶段的初始化过程, 此方法在构造函数中被调用, 接收构造函数的 options 参数作为输入
    static onDestroy(): void; // 实现这个接口来定义销毁阶段的资源释放过程, 此方法在 destroy 函数中被调用
    static createDOM(): HTMLElement; // 实现这个接口来创建自定义的 DOM 元素, 此方法在构造函数中被调用（在初始化过程之后）
    static updateDOM(): void; // 实现这个接口来更新 DOM 元素的内容及样式, 此方法在地图发生平移、缩放等变化时被调用
  }
}
