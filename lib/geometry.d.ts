declare namespace TMap {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Geometry {}

  interface PointGeometry extends Geometry {
    id: string; // 点图形数据的标志信息, 不可重复
    styleId?: string; // 对应 MultiMarkerStyleHash 中的样式 id
    position: LatLng; // 标注点位置
    rank?: number; // 标注点的图层内绘制顺序
    properties?: unknown; // 标注点的属性数据
    content?: string; // 标注点文本, 默认为 undefined
  }
}
