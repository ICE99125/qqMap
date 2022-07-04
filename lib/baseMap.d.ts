declare namespace TMap {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface BaseMap {}

  // VectorBaseMap 对象规范
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#5
  interface VectorBaseMap extends BaseMap {
    type: string; // 必须为 vector
    features: string[]; // 矢量底图要素类型
  }

  // SatelliteBaseMap 对象规范
  interface SatelliteBaseMap extends BaseMap {
    ype: string; // 必须为 satellite
    features: string[]; // 卫星图要素类型
  }

  // TrafficBaseMap 对象规范
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#7
  interface TrafficBaseMap extends BaseMap {
    type: string; // 必须为 traffic
    features: string[]; // 路况图要素类型
    filter: string[]; // 指定特定类型的道路才显示路况
    opacity: number; // 路况线网图的透明度, 默认为1
    flowColor: string[]; // 路况流动粒子颜色组合, 长度为 4 的数组, 0-3 位分别对应流畅、缓行、拥堵、极度拥堵
    flowSpeed: number[]; // 路况流动粒子速度组合, 长度为 4 的数组, 0-3位分别对应流畅、缓行、拥堵、极度拥堵
  }
}
