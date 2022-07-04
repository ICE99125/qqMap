declare namespace TMap {
  class ImageTileLayer {
    constructor(options: ImageTileLayerOptions); //
    getId(): ImageTileLayer; // 获取图层的id
    setMap(map: Map | null): ImageTileLayer; // 设置展示图层的地图对象
    setVisible(visible: boolean): ImageTileLayer; // 设置图层是否可见
    setZIndex(zIndex: number): ImageTileLayer; // 设置图层绘制顺序
    setOpacity(opacity: number): ImageTileLayer; // 设置图层透明度
    static createCustomLayer(
      options: CustomLayerOptions
    ): Promise<ImageTileLayer>; // 创建个性化图层平台配置的个性化图层
  }

  class WMSLayer {
    constructor(options: WMSLayerOptions);
    setMap(map: Map | null): WMSLayer; // 设置展示图层的地图对象
    setVisible(visible: boolean): WMSLayer; // 设置图层是否可见
    setZIndex(zIndex: number): WMSLayer; // 设置图层绘制顺序
    setOpacity(opacity: number): WMSLayer; // 设置图层透明度
  }

  interface WMSParams {
    layers: string; // 请求的图层名称
    version?: string; // 请求的WMS的版本号
  }

  class WMTSLayer {
    constructor(options: WMTSLayerOptions);
    setMap(map: Map | null): WMTSLayer; // 设置展示图层的地图对象
    setVisible(visible: boolean): WMTSLayer; // 设置图层是否可见
    setZIndex(zIndex: number): WMTSLayer; // 设置图层绘制顺序
    setOpacity(opacity: number): WMTSLayer; // 设置图层透明度
  }

  interface WMTSParams {
    layer: string; // 请求的图层名称
    tileMatrixSet: string; // 瓦片矩阵数据集
    version?: string; // 请求的WMTS的版本号
  }

  class ImageGroundLayer {
    constructor(options: ImageGroundLayerOptions);
    setMap(map: Map): ImageGroundLayer; // 设置展示图层的地图对象
    setBounds(bounds: LatLngBounds): ImageGroundLayer; // 设置展示图层的地理范围
    setVisible(visible: boolean): ImageGroundLayer; // 设置图层是否可见
    setZIndex(zIndex: number): ImageGroundLayer; // 设置图层绘制顺序
    setOpacity(opacity: number): ImageGroundLayer; // 设置图层透明度
    setSrc(src: string): ImageGroundLayer; // 更新图层资源路径, 相同的 url 不会被更新
    getMap(): Map | null; // 获取地图对象, 若无返回 null
    getId(): ImageGroundLayer; // 获取图层的 id
    getBounds(): LatLngBounds; // 获取展示图层的地理范围
  }

  class CanvasGroundLayer {
    constructor(options: CanvasGroundLayerOptions);
    setMap(map: Map): CanvasGroundLayer; // 设置展示图层的地图对象
    setBounds(bounds: LatLngBounds): CanvasGroundLayer; // 设置展示图层的地理范围
    setVisible(visible: boolean): CanvasGroundLayer; // 设置图层是否可见
    setZIndex(zIndex: number): CanvasGroundLayer; // 设置图层绘制顺序
    setOpacity(opacity: number): CanvasGroundLayer; // 设置图层透明度
    setCanvas(canvas: HTMLCanvasElement): CanvasGroundLayer; // 更新 canvas 元素, 同一个 canvas 不会被重复更新
    refresh(): null; // 刷新 canvas, 当 canvas 图像内容改变时调用, 否则 canvas 的内容不会更新到地图上
    getMap(): Map | null; // 获取地图对象, 若无返回 null
    getId(): CanvasGroundLayer; // 获取图层的 id
    getBounds(): LatLngBounds; // 获取展示图层的地理范围
  }

  class MaskLayer {
    constructor(options: MaskLayerOptions);
    add(geometries: MaskGeometry[]): MaskLayer; // 新增遮罩区域, 可批量添加
    update(geometries: MaskGeometry[]): MaskLayer; // 更新遮罩区域数据, 已存在id则更新已有数据, 若不存在则添加数据
    get(id: string): MaskGeometry; // 获取指定遮罩区域
    getAll(): MaskGeometry[]; // 获取图层内所有遮罩区域
    remove(ids: string[]): MaskLayer; // 删除指定遮罩区域
    clear(): MaskLayer; // 清除所有遮罩区域
    setMap(map: Map | null): MaskLayer; // 设置图层绑定的地图对象, 若为 null 则将其从地图中移除
    getMap(): Map | null; // 获取地图对象, 若为空则返回 null
  }

  interface MaskGeometry {
    id: string; // 唯一标识
    paths: LatLng[]; // 遮罩轮廓线坐标点串
  }
}
