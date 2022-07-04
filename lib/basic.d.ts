// 基础类
declare namespace TMap {
  // 控件基类
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocControl#1
  class Control {
    setPosition(position: constants.CONTROL_POSITION): Control; // 设置控件的位置

    setClassName(className: string): Control; // 设置控件的 css 样式名
  }

  // 经纬度坐标
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1
  class LatLng {
    lat: number;

    lng: number;

    constructor(lat: number, lng: number);

    getLng(): number;

    getLat(): number;
  }

  // 描述一个矩形的地理坐标范围
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2
  class LatLngBounds {
    // sw: 西南角位置经纬度
    // ne: 东北角位置经纬度
    constructor(sw: LatLng, ne: LatLng);

    getCenter(): LatLng; // 获取该范围的中心点坐标

    getNorthEast(): LatLng; // 获取该范围的东北角坐标

    getSouthWest(): LatLng; // 获取该范围的西南角坐标

    extend(latlng: LatLng): LatLngBounds; // 扩展该范围边界, 以包含指定的坐标点

    union(other: LatLngBounds): LatLngBounds; // 扩展该范围边界, 以包含指定的一个矩形范围

    equals(other: LatLngBounds): boolean; // 比较两个矩形范围是否完全相等

    intersects(other: LatLngBounds): boolean; // 判断该范围是否与另一矩形范围相交

    isEmpty(): boolean; // 判断该范围是否为空

    contains(latlng: LatLng): boolean; // 判断指定的坐标是否在这个范围内

    toString(): string;
  }

  // 二维点坐标
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#3
  class Point {
    constructor(x: number, y: number);

    getX(): number;

    getY(): number;

    equals(other: Point): boolean;

    clone(): Point;

    toString(): string;
  }
}
