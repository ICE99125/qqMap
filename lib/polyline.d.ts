declare namespace TMap {
  type MultiPolylineEvtName =
    | 'click'
    | 'dblclick'
    | 'rightclick'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'mouseover'
    | 'mouseout'
    | 'hover'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  class MultiPolyline {
    constructor(options: MultiPolylineOptions);
    setMap(map: Map | null): MultiPolyline; // 设置地图对象, 如果 map 为 null 意味着将多折线同时从地图中移除
    setZIndex(zIndex: number): MultiPolyline; // 设置图层绘制顺序
    setGeometries(geometries: PolylineGeometry[]): MultiPolyline; // 更新折线数据, 如果参数为 null 或 undefined 不会做任何处理
    setStyles(styles: MultiPolylineStyleHash): MultiPolyline; // 设置 MultiPolyline 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
    setVisible(visible: boolean): MultiPolyline; // 设置图层是否可见
    getMap(): Map | null; // 获取地图对象, 若为空返回 null
    getGeometries(): PolylineGeometry[]; // 获取折线数据
    getStyles(): MultiPolylineStyleHash; // 获取图层相关样式信息
    getVisible(): visible; // 获取可见状态
    getZIndex(): number; // 获取图层绘制顺序
    getId(): MultiPolyline; // 获取图层的 id
    getGeometryById(id: string): PolylineGeometry; // 根据折线数据id来获取点数据
    updateGeometries(geometry: PolylineGeometry[]): MultiPolyline; // 更新折线数据, 如果 geometry 的 id 存在于集合中, 会更新对应id的数据, 如果之前不存在于集合中, 会作为新的折线添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
    add(geometries: PolylineGeometry[]): MultiPolyline; // 向图层中添加折线
    remove(ids: string[] | null | undefined): MultiPolyline; // 移除指定 id 的折线, 如果参数为 null 或 undefined 不会做任何处理
    on(
      eventName: MultiPolylineEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiPolyline;
    off(
      eventName: MultiPolylineEvtName,
      listener: (evt: unknown) => void
    ): MultiPolyline;
  }

  interface MultiPolylineStyleHash {
    [key: string]: PolylineStyle;
  }

  class PolylineStyle implements PolylineStyleOptions {
    constructor(options: PolylineStyleOptions);
  }

  interface PolylineGeometry {
    id: string; // 折线图形数据的标志信息, 不可重复, 若id重复后面的id会被重新分配一个新id, 若没有会随机生成一个
    styleId: string; // 对应 MultiPolylineStyleHash 中的样式 id, 如果样式表中没有包含 geometry 指定的 styleId, 则该 geometry 不会被绘制出来
    paths: LatLng[] | LatLng[][]; // 折线的位置信息
    rainbowPaths: Array<{
      path: latLng[];
      color?: string;
      borderColor?: string;
    }>; // 多颜色折线的信息
    properties: unknown; // 折线的属性数据
  }

  type MultiPloygonEvtName =
    | 'click'
    | 'dblclick'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'hover'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  class MultiPolygon {
    constructor(options: MultiPolygonOptions);
    setMap(map: Map | null): MultiPolygon; // 设置地图对象, 如果 map 为 null 意味着将多多边形同时从地图中移除
    setZIndex(zIndex: number): MultiPolygon; // 设置图层绘制顺序
    setGeometries(
      geometries: PolygonGeometry[] | null | undefined
    ): MultiPolygon; // 更新多边形数据, 如果参数为 null 或 undefined 不会做任何处理
    setStyles(styles: MultiPolygonStyleHash | null | undefined): MultiPolygon; // 设置MultiPolygon图层相关样式信息, 如果参数为 null 或 undefined不会做任何处理
    setVisible(visible: boolean): MultiPolygon; // 设置图层是否可见
    getMap(): Map; // 获取地图对象, 若为空返回null
    getGeometries(): PolygonGeometry[]; // 获取多边形数据
    getStyles(): MultiPolygonStyleHash; // 获取图层相关样式信息
    getVisible(): visible; // 获取可见状态
    getZIndex(): number; // 获取图层绘制顺序
    getId(): MultiPolygon; // 获取图层的id
    getGeometryById(id: string): PolygonGeometry; // 根据多边形数据id来获取点数据
    updateGeometries(geometry: PolygonGeometry[]): MultiPolygon; // 更新多边形数据, 如果 geometry 的 id 存在于集合中, 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的多边形添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
    add(geometries: PolygonGeometry[]): MultiPolygon; // 向图层中添加多边形, 如果 geometry 的 id 已经存在集合中, 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合, 没有 id 的 geometry 会被赋予一个唯一id, 如果要添加到集合中的多边形存在重复id, 这些多边形会被重新分配id, 如果参数为 null 或 undefined 不会做任何处理
    remove(ids: string[] | null | undefined): MultiPolygon; // 移除指定 id 的多边形, 如果参数为 null 或 undefined 不会做任何处理
    on(
      eventName: MultiPloygonEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiPolygon;
    off(
      eventName: MultiPloygonEvtName,
      listener: (evt: unknown) => void
    ): MultiPolygon;
  }

  interface MultiPolygonStyleHash {
    [key: string]: PolygonStyle | ExtrudablePolygonStyle;
  }

  class PolygonStyle implements PolygonStyleOptions {
    constructor(options: PolygonStyleOptions);
  }

  class ExtrudablePolygonStyle {
    constructor(options: ExtrudablePolygonStyleOptions);
    color: string; // 线填充色, 支持rgb(), rgba(), #RRGGBB等形式
    extrudeHeight: number; // 多边形拔起高度, 默认为1, 单位米
    showBorder: boolean; // 是否显示拔起面块的边线, 拔起面块的边线不支持设置宽度, 永远为1像素宽度
    borderColor: string; // 边线颜色, 支持rgb(), rgba(), #RRGGBB等形式, showBorder为true时有效
  }

  //   多边形数据
  interface PolygonGeometry {
    id: string; // 多边形图形数据的标志信息, 不可重复, 若id重复后面的id会被重新分配一个新id, 若没有会随机生成一个
    styleId: string; // 对应MultiPolygonStyleHash中的样式id, 如果样式表中没有包含geometry指定的styleId, 则该geometry不会被绘制出来
    paths: LatLng[] | LatLng[][] | LatLng[][][]; // 多边形的位置信息, 可以传入[latLng1, latLng2, latLng3, latLng5, latLng1]这种简单多边形, 也可以传入带洞多边形[[latLng1, latLng2, latLng3, latLng5, latLng1], [latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10]]这个多边形包含一个外环[latLng1, latLng2, latLng3, latLng5, latLng1]和两个洞[latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10]; 另外一个多边形可能有多个不相邻的多边形组成一个逻辑主体, 比如南沙群岛就是由多个分离的多边形组成一个主体, 一个岛屿可能存在多个岛中湖形成带洞多边形, 示例：[[[latLng1, latLng2, latLng3, latLng5, latLng1], [latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10]], [[latLng11, latLng12, latLng13, latLng14, latLng11]], [[latLng15, latLng16, latLng17, latLng18, latLng15]]], 这个多边形主体中包含了三个多边形,  其中第一个多边形包含一个外环[latLng1, latLng2, latLng3, latLng5, latLng1]和两个洞[latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10],  第二和第三个多边形都是不带洞的简单多边形
    rank: number; // 多边形的图层内绘制顺序
    properties: unknown; // 多边形的属性数据
  }

  class MultiRectangle {
    constructor(options: MultiRectangleOptions);
    setMap(map: Map | null): MultiRectangle; // 设置地图对象, 如果 map 为 null 意味着将多矩形同时从地图中移除
    setZIndex(zIndex: number): MultiRectangle; // 设置图层绘制顺序
    setGeometries(
      geometries: RectangleGeometry[] | null | undefined
    ): MultiRectangle; // 更新多矩形数据, 如果参数为 null 或 undefined 不会做任何处理
    setStyles(
      styles: MultiRectangleStyleHash | null | undefined
    ): MultiRectangle; // 设置 MultiRectangle 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
    setVisible(visible: boolean): MultiRectangle; // 设置图层是否可见
    getMap(): Map | null; // 获取地图对象, 若为空返回 null
    getGeometries(): RectangleGeometry[]; // 获取多矩形数据
    getStyles(): MultiRectangleStyleHash; // 获取图层相关样式信息
    getVisible(): visible; // 获取可见状态
    getZIndex(): number; // 获取图层绘制顺序
    getGeometryById(id: string): RectangleGeometry; // 根据多矩形数据 id 来获取点数据
    updateGeometries(
      geometry: RectangleGeometry[] | null | undefined
    ): MultiRectangle; // 更新多矩形数据, 如果geometry的id存在于集合中, 会更新对id的数据, 如果之前不存在于集合中, 会作为新的矩形添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
    add(geometries: RectangleGeometry[] | null | undefined): MultiRectangle; // 向图层中添加矩形, 如果geometry的id已经存在集合中, 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合, 没有 id 的 geometry 会被赋予一个唯一 id, 如果要添加到集合中的多边形存在重复 id, 这些多边形会被重新分配 id, 如果参数为 null 或 undefined 不会做任何处理
    remove(ids: string[] | null | undefined): MultiRectangle; // 移除指定 id 的矩形, 如果参数为 null 或 undefined 不会做任何处理
    destroy(); // 销毁图层对象

    static getBounds(geometry: RectangleGeometry): LatLngBounds; // 根据geometry获取矩形的左下角和右上角顶点经纬度坐标
  }

  interface MultiRectangleStyleHash {
    [key: string]: RectangleStyle;
  }

  class RectangleStyle {
    constructor(options: RectangleStyleOptions);
  }

  interface RectangleGeometry {
    id: string; // 多矩形图形数据的标志信息, 不可重复, 若id重复后面的id会被重新分配一个新id, 若没有会随机生成一个
    styleId: string; // 对应MultiRectangleStyleHash中的样式id, 如果样式表中没有包含geometry指定的styleId, 则该geometry不会被绘制出来
    center: LatLng; // 矩形的中心点位置
    width: number; // 矩形的宽, 正数, 单位为米
    height: number; // 矩形的高, 正数, 单位为米
    properties: unknown; // 矩形的属性数据
    rank: number; // 矩形的图层内绘制顺序
  }

  class MultiCircle {
    constructor(options: MultiCircleOptions);
    setMap(map: Map | null): MultiCircle; // 设置地图对象, 如果 map 为 null 意味着将多圆同时从地图中移除
    setZIndex(zIndex: number): MultiCircle; // 设置图层绘制顺序
    setGeometries(geometries: CircleGeometry[] | null | undefined): MultiCircle; // 更新多圆数据, 如果参数为 null 或 undefined 不会做任何处理
    setStyles(styles: MultiCircleStyleHash): MultiCircle; // 设置 MultiCircle 图层相关样式信息, 如果参数为 null 或undefined不会做任何处理
    setVisible(visible: boolean): MultiCircle; // 设置图层是否可见
    getMap(): Map | null; // 获取地图对象, 若为空返回 null
    getGeometries(): CircleGeometry[]; // 获取多圆数据
    getStyles(): MultiCircleStyleHash; // 获取图层相关样式信息
    getVisible(): visible; // 获取可见状态
    getZIndex(): number; // 获取图层绘制顺序
    getId(): MultiCircle; // 获取图层的 id
    getGeometryById(id: string): CircleGeometry; // 根据多圆数据 id 来获取点数据
    updateGeometries(
      geometry: CircleGeometry[] | null | undefined
    ): MultiCircle; // 更新多圆数据, 如果 geometry 的 id 存在于集合中, 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的圆添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
    add(geometries: CircleGeometry[] | null | undefined): MultiCircle; // 向图层中添加圆, 如果 geometry 的 id 已经存在集合中, 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合, 没有 id 的 geometry 会被赋予一个唯一id, 如果要添加到集合中的多边形存在重复id, 这些多边形会被重新分配id, 如果参数为 null 或 undefined 不会做任何处理
    remove(ids: string[] | null | undefined): MultiCircle; // 移除指定 id 的圆, 如果参数为 null 或 undefined 不会做任何处理
  }

  interface MultiCircleStyleHash {
    [key: string]: CircleStyle;
  }

  interface CircleGeometry {
    id: string; // 多圆图形数据的标志信息, 不可重复, 若id重复后面的id会被重新分配一个新id, 若没有会随机生成一个
    styleId: string; // 对应MultiCircleStyleHash中的样式id, 如果样式表中没有包含geometry指定的styleId, 则该geometry不会被绘制出来
    center: LatLng; // 圆的中心点位置
    radius: number; // 圆的半径, 正数, 单位为米
    properties: unknown; // 圆的属性数据
  }

  class CircleStyle {
    constructor(options: CircleStyleOptions);
  }

  class MultiEllipse {
    constructor(options: MultiEllipseOptions);
    setMap(map: Map | null): MultiEllipse; // 设置地图对象, 如果 map 为 null 意味着将多椭圆同时从地图中移除
    setZIndex(zIndex: number): MultiEllipse; // 设置图层绘制顺序
    setGeometries(geometries: EllipseGeometry[]): MultiEllipse; // 更新多椭圆数据, 如果参数为 null 或 undefined 不会做任何处理
    setStyles(styles: MultiEllipseStyleHash): MultiEllipse; // 设置 MultiEllipse 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
    setVisible(visible: boolean): MultiEllipse; // 设置图层是否可见
    getMap(): Map | null; // 获取地图对象, 若为空返回 null
    getGeometries(): EllipseGeometry[]; // 获取多椭圆数据
    getStyles(): MultiEllipseStyleHash; // 获取图层相关样式信息
    getVisible(): visible; // 获取可见状态
    getZIndex(): number; // 获取图层绘制顺序
    getGeometryById(id: string): EllipseGeometry; // 根据多椭圆数据 id 来获取点数据
    updateGeometries(
      geometry: EllipseGeometry[] | null | undefined
    ): MultiEllipse; // 更新多椭圆数据, 如果 geometry 的 id 存在于集合中, 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的椭圆添加到集合中, 如果参数为null或undefined不会做任何处理
    add(geometries: EllipseGeometry[] | null | undefined): MultiEllipse; // 向图层中添加椭圆, 如果 geometry 的 id 已经存在集合中, 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合, 没有id的geometry会被赋予一个唯一id, 如果要添加到集合中的多边形存在重复id, 这些多边形会被重新分配id, 如果参数为null或undefined不会做任何处理
    remove(ids: string[] | null | undefined): MultiEllipse; // 移除指定 id 的椭圆, 如果参数为 null 或 undefined 不会做任何处理
    destroy(); // 销毁图层对象
  }

  interface MultiEllipseStyleHash {
    [key: string]: EllipseStyle;
  }

  class EllipseStyle implements EllipseStyleOptions {
    constructor(options: EllipseStyleOptions);
  }

  interface EllipseGeometry {
    id: string; // 多椭圆图形数据的标志信息, 不可重复, 若id重复后面的id会被重新分配一个新id, 若没有会随机生成一个
    styleId: string; // 对应 MultiEllipseStyleHash中的样式id, 如果样式表中没有包含geometry指定的styleId, 则该geometry不会被绘制出来
    center: LatLng; // 椭圆的中心点位置
    majorRadius: number; // 椭圆的主半径, 正数, 单位为米
    minorRadius: number; // 椭圆的辅半径, 正数, 单位为米
    properties: unknown; // 椭圆的属性数据
    rank: number; // 椭圆的图层内绘制顺序
  }
}
