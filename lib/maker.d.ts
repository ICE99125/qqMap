declare namespace TMap {
  type geoEvtName =
    | 'click'
    | 'dblclick'
    | 'mousedown'
    | 'mouseup'
    | 'image.png'
    | 'hover'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  type MEvtName = 'moving';

  type MEvtName_ =
    | 'move_ended'
    | 'move_stopped'
    | 'move_paused'
    | 'move_resumed';

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker
  class MultiMarker {
    constructor(options: MultiMarkerOptions);

    setMap(map: Map | null): MultiMarker; // 设置地图对象, 如果 map 为 null 意味着将多个标注点同时从地图中移除

    setGeometries(geometries: PointGeometry[] | null | undefined): MultiMarker; // 更新标注点数据, 如果参数为 null 或 undefined 不会做任何处理

    setStyles(styles: MultiMarkerStyleHash | null | undefined): MultiMarker; // 设置 MultiMarker 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理

    setVisible(visible: boolean): MultiMarker; // 设置图层是否可见

    getMap(): Map | null; // 获取地图对象, 若为空返回 null

    getId(): MultiMarker; // 获取图层的 id

    getGeometries(): PointGeometry[]; // 获取点数据

    getStyles(): MultiMarkerStyleHash; // 获取图层相关样式信息

    getVisible(): boolean; // 获取可见状态

    getGeometryById(id: string): PointGeometry; // 根据点数据 id 来获取点数据

    updateGeometries(geometry: PointGeometry[] | null | undefined): MultiMarker; // 更新标注点数据

    add(geometries: PointGeometry[] | null | undefined): MultiMarker; // 向图层中添加标注点

    remove(ids: string[] | null | undefined): MultiMarker; // 移除指定id的标注点

    moveAlong(param: MoveAlongParamSet, options: unknown): MultiMarker; // 指定 id 的标注点

    stopMove(): MultiMarker; // 停止移动

    pauseMove(): MultiMarker; // 暂停点标记的动画效果

    resumeMove(): MultiMarker; // 重新开始点标记的动画效果

    on(
      eventName: geoEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiMarker; // 添加 listener 到 eventName 事件的监听器数组中

    on(
      eventName: MEvtName,
      listener: (evt: { [key: string]: MarkerMovingEventItem }) => void
    ): MultiMarker; // 添加 listener 到 eventName 事件的监听器数组中

    on(eventName: MEvtName_, listener: () => void): MultiMarker; // 添加 listener 到 eventName 事件的监听器数组中

    off(eventName: string, listener: () => void): MultiMarker; // 从 eventName 事件的监听器数组中移除指定的 listener
  }

  interface MultiMarkerStyleHash {
    [key: string]: MarkerStyle;
  }

  class MarkerStyle {
    constructor(options: MarkerStyleOptions);
  }

  interface MoveAlongParamSet {
    [key: string]: MoveAlongParam;
  }

  interface MoveAlongParam {
    path: LatLng[]; // 移动路径的坐标串
    duration: number; // 完成移动所需的时间，单位: 毫秒
    speed: number; // speed为指定速度, 正整数, 单位: 千米/小时
  }

  interface MarkerMovingEventItem {
    passedLatLngs: LatLng[]; // marker 所走过的路径坐标串
    angle: number; // 自动旋转情况下, 当前点的旋转角度(只对faceTo为 'Map' 的点标记有效)
  }
}
