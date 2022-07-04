// docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo
declare namespace TMap {
  class InfoWindow {
    constructor(options: InfoWindowOptions);
    setPosition(position: LatLng): InfoWindow; // 设置经纬度位置
    setContent(content: string): InfoWindow; // 设置信息窗显示内容
    setMap(map: Map | null): InfoWindow; // 设置信息窗口所在的 map 对象, 传入 null 则代表将 infoWindow 从 Map 中移除
    getMap(): Map; // 获取信息窗口所在的map对象
    open(): InfoWindow; // 打开信息窗口
    close(): InfoWindow; // 关闭信息窗口
    destroy(): InfoWindow; // 销毁信息窗
    on(eventName: 'closeclick', listener: () => void): InfoWindow;
    off(eventName: 'closeclick', listener: () => void): InfoWindow;
  }
}
