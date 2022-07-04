declare namespace TMap {
  // 动画事件回调
  interface AnimationEvent {
    percentage: number; // 动画进行百分比
    frame: Record<string, unknown>; // 当前帧状态
  }

  // 地图事件
  interface MapEvent {
    latLng: LatLng; // 事件发生时的经纬度坐标
    point: {
      x: number;
      y: number;
    }; // 事件发生时的屏幕位置
    type: string; // 事件类型
    target: unknown; // 事件的目标对象
    poi: POIInfo | null; // 事件触发位置的poi信息, 当触发位置没有 poi 点时值为 null
    originalEvent: MouseEvent | TouchEvent; // MouseEvent 或 TouchEvent	浏览器原生的事件对象
  }

  interface POIInfo {
    latLng: LatLng; // poi 的经纬度位置
    name: string; // poi 名称
    bounds?: number[];
    coord?: {
      x: number;
      y: number;
    };
    isIndoor?: boolean;
  }

  // 几何覆盖物事件返回参数
  interface GeometryOverlayEvent {
    geometry: Geometry; // 事件发生时的图形数据信息
    latLng: LatLng; // 事件发生时的经纬度坐标
    point: {
      //事件发生时的屏幕位置
      x: number;
      y: number;
    };
    type: string; // 事件类型
    target: unknown; // 事件的目标对象
    originalEvent: MouseEvent | TouchEvent;
  }
}
