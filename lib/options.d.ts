declare namespace TMap {
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#2
  interface MapOptions {
    center?: LatLng; // 地图中心点经纬度
    zoom?: number; // 地图缩放级别, 支持3～20
    minZoom?: number; // 地图最小缩放级别, 默认为3
    maxZoom?: number; // 地图最大缩放级别, 默认为20
    rotation?: number; // 地图在水平面上的旋转角度, 顺时针方向为正, 默认为 0
    pitch?: number; // 地图俯仰角度, 取值范围为0~80, 默认为 0
    scale?: number; // 地图显示比例, 默认为 1
    offset?: {
      // 地图中心与容器的偏移量
      x: number;
      y: number;
    };
    draggable?: boolean; // 是否支持拖拽移动地图
    scrollable?: boolean; // 是否支持鼠标滚轮缩放地图
    pitchable?: boolean; // 是否允许设置俯仰角度
    rotatable?: boolean; // 是否允许设置旋转角度
    doubleClickZoom?: boolean; // 是否支持双击缩放地图
    mapZoomType?: constants.MAP_ZOOM_TYPE; // 地图缩放焦点控制
    boundary?: LatLngBounds; // 地图边界
    mapStyleId?: string; // 地图样式 ID
    baseMap?: BaseMap | BaseMap[]; // 地图底图
    viewMode?: string; // 地图视图模式, 支持 2D 和 3D
    renderOptions?: MapRenderOptions; // 地图渲染配置参数
    showControl?: boolean; // 是否显示地图上的控件
    clip?: ClipOptions; // clip 区域掩膜配置参数
  }

  // 地图渲染配置参数
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#10
  interface MapRenderOptions {
    preserveDrawingBuffer?: boolean; // 保留地图的渲染缓冲
    enableBloom?: boolean; // 是否启用泛光效果(请确认浏览器支持 WebGL2)
    fogOptions?: fogOptions; // 边际雾化设置
  }

  interface fogOptions {
    color?: string; //雾气颜色, 支持 #RRGGBB 和 rgb() 格式, 若不设置则使用矢量地图地面颜色
  }

  interface GradientColorOptions {
    stops?: ColorObj;
    angle?: number; // 水平线和渐变线之间的角度, 逆时针方向旋转, 0 度从左到右, 90 度从下到上, 默认值 0 度
  }

  // 地图缓动变化配置参数
  interface EaseOptions {
    duration?: number; // 缓动动画时长, 单位为 ms, 默认为 500
  }

  interface positionObj {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  // 地图自适应地理范围配置参数
  interface FitBoundsOptions {
    padding?: number | positionObj; // 设定的地理范围与可视窗口之间的距离
    minZoom?: number; // 调整视野时的最小缩放等级
    maxZoom?: number; // 调整视野时的最大缩放等级
    ease?: EaseOptions; // 缓动配置
  }

  interface ClipOptions {
    paths?: LatLng;
  }

  interface AnimationOptions {
    duration?: number; // 动画周期时长, 单位为 ms, 默认为 1000
    loop?: number; // 动画周期循环次数, 若为 Infinity 则无限循环, 默认为 1
  }

  // 地图高亮区域设置
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#highlightOptions
  interface highlightOptions {
    paths?: LatLng; // 高亮区域轮廓坐标点串
    highlightColor?: string; // 高亮色, 区域内地图元素将与该色进行混合, 支持rgb()、rgba()、#RRGGBB等形式, 默认为 rgba(0, 0, 0, 0)
    shadeColor?: string; // 阴影色, 区域外地图元素将与该色进行混合, 支持rgb()、rgba()、#RRGGBB等形式, 默认为 rgba(0, 0, 0, 0.4)
  }

  // docs: https://lbs.qq.com/Vis/JUEAPI/APIDoc/overlay#2
  interface GeometryOverlayOptions {
    id?: string; // 图层id
    map?: Map; // 显示图层的底图
    styles?: Record<string, string>; // 图层样式映射表
    geometries?: Geometry[]; // 数据数组
  }

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#2
  interface MultiMarkerOptions {
    id?: string; // 图层 id
    map?: Map; // 显示 Marker 图层的底图
    styles?: MultiMarkerStyleHash; // 点标注的相关样式
    enableCollision?: boolean; // 是否开启图层内部的marker标注碰撞
    geometries?: PointGeometry[]; // 点标注数据数组
  }

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#5
  interface MarkerStyleOptions {
    width: number; // 标注点图片的宽度, 默认为 34
    height: number; // 标注点图片的高度, 默认为 50
    anchor?: { x: number; y: number }; // 标注点图片的锚点位置, 默认为 { x: width/2, y: height }
    src?: string; // 标注点图片 url 或 base64 地址
    faceTo?: string; // 标注点图片的朝向, 可取 'map'(贴地)或 'screen'(直立), 默认为 'screen'
    rotate?: number; // 标注点图片的旋转角度
    color?: string; // 标注点文本颜色属性
    strokeColor?: string; // 标注点文本描边颜色属性
    strokeWidth?: number; // 标注点文本描边宽度, 默认为 1
    size?: number; // 标注点文本文字大小属性, 默认为 14
    direction?: string; // 标注点文本文字相对于标注点图片的方位, 可选位于标注点图片的 center, top, bottom, left, right方位
    // 标注点文本文字基于 direction 方位的偏移量, 单位为像素
    // 以文本文字中心为原点, x轴向右为正向左为负, y轴向下为正向上为负, 默认为 {x:0, y:0}
    offset?: { x: number; y: number };
  }

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLayer#2
  interface ImageTileLayerOptions {
    getTileUrl: (x: number, y: number, z: number) => string; // 通过传入的瓦片坐标 (x,y) 以及 zoom 级别返回瓦片的 URL(string类型)
    map?: Map; // 展示图层的地图对象
    minZoom?: number; // 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为3
    maxZoom?: number; // 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为18
    visible?: boolean; // 是否可见, 默认为true
    zIndex?: number; // 图层绘制顺序, 默认为1, 有效范围为[1, 9999]
    opacity?: number; // 图层透明度, 默认为1
  }

  interface CustomLayerOptions {
    layerId: string; // 个性化图层的id
    map?: Map; // 展示图层的地图对象
    minZoom?: number; // 最小缩放层级, 当地图缩放层级小于该值时该图层不显示
    maxZoom?: number; // 最大缩放层级, 当地图缩放层级大于该值时该图层不显示
    visible?: boolean; // 是否可见, 默认为 true
    zIndex?: number; // 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
    opacity?: number; // 图层透明度, 默认为 1
  }

  interface WMSLayerOptions {
    url: string; // 地图服务地址
    map?: Map; // 展示图层的地图对象
    minZoom?: number; // 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
    maxZoom?: number; // 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
    maxDataZoom?: number; // 最大数据层级, 当缩放层级大于该值时不再加载新数据, 而是以此层级数据拉伸进行展示, 默认与 maxZoom 相同
    visible?: boolean; // 是否可见, 默认为 true
    zIndex?: number; // 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
    opacity?: number; // 图层透明度, 默认为 1
    params?: WMSParams; // OGC 标准的 WMS 地图服务的 GetMap 接口的参数
  }

  interface WMTSLayerOptions {
    url: string; // 地图服务地址
    map?: Map; // 展示图层的地图对象
    minZoom?: number; // 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
    maxZoom?: number; // 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
    maxDataZoom?: number; // 最大数据层级, 当缩放层级大于该值时不再加载新数据, 而是以此层级数据拉伸进行展示, 默认与 maxZoom 相同
    visible?: boolean; // 是否可见, 默认为 true
    zIndex?: number; // 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
    opacity?: number; // 图层透明度, 默认为 1
    params?: WMTSParams; // OGC 标准的 WMTS 地图服务的 GetTile 接口的参数
  }

  interface ImageGroundLayerOptions {
    bounds: LatLngBounds; // 图片覆盖的经纬度范围
    src: string; // 图片 url 或 base64, 如果图片为 url 格式, 图片服务器必须允许跨域访问
    map?: Map; // 展示图层的地图对象
    minZoom?: number; // 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
    maxZoom?: number; // 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
    visible?: boolean; // 是否可见, 默认为 true
    zIndex?: boolean; // 图层绘制顺序, 默认为 1
    opacity?: number; // 图层透明度, 默认为 1
  }

  interface CanvasGroundLayerOptions {
    bounds: LatLngBounds; // 纹理覆盖的经纬度范围
    canvas: HTMLCanvasElement; // Canvas 元素, 如果 canvas 中有图片, 必须保证原始的图片服务允许跨域访问
    map?: Map; // 展示图层的地图对象
    minZoom?: number; // 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
    maxZoom?: number; // 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
    visible?: boolean; // 是否可见, 默认为 true
    zIndex?: boolean; // 图层绘制顺序, 默认为 1
    opacity?: number; // 图层透明度, 默认为 1
  }

  interface MaskLayerOptions {
    map: Map; // 绑定的地图对象
    geometries?: MaskGeometry[]; // 遮罩区域数据
  }

  interface MarkerClusterOptions {
    id?: string; // 图层id, 若没有会自动分配一个
    map?: Map; // 显示点聚合图层的底图
    enableDefaultStyle?: boolean; // 是否启用默认的聚合样式; 默认样式是聚合点的数量量在1-10,11-100,101-1000的样式图标; 默认为true; 如果用户想实现更加炫酷的聚合效果, 可以关闭默认样式, 使用getClusters获取到聚合簇数据后通过继承DOMOverlay来实现自定义聚合样式
    minimumClusterSize?: number; // 形成聚合簇的最小个数, 默认为2
    geometries?: PointGeometry[]; // 点标记数据数组
    zoomOnClick?: boolean; // 点击已经聚合的标记点时是否实现聚合分离, 默认为true
    gridSize?: number; // 聚合算法的可聚合距离, 即距离小于该值的点会聚合至一起, 默认为 60
    averageCenter?: boolean; // 每个聚和簇的中心是否应该是聚类中所有标记的平均值, 默认为 false
    maxZoom?: number; // 采用聚合策略的最大缩放级别, 若地图缩放级别大于该值, 则不进行聚合默认为 20
  }

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo#2
  interface InfoWindowOptions {
    map: Map; // 显示信息窗的地图
    position: LatLng; // 信息窗的经纬度坐标
    content?: string; // 信息窗显示内容, 默认为空字符串当 enableCustom 为 true 时, 需传入信息窗体的 dom 字符串
    zIndex?: number; // 信息窗的 z-index值, 默认为 0
    offset?: { x: number; y: num }; // 信息窗相对于 position 对应像素坐标的偏移量, x 方向向右偏移为正值, y 方向向下偏移为正值
    enableCustom?: boolean; // 信息窗体样式是否为自定义, 默认为 false
  }

  interface DOMOverlayOptions {
    map: Map; // 显示自定义 DOM 覆盖物的地图
  }

  interface MultiLabelOptions {
    id?: string; // 图层id, 若没有会自动分配一个
    map?: Map; // 显示文本标注图层的底图
    styles?: MultiLabelStyleHash; // 文本标注的相关样式
    enableCollision?: boolean; // 是否开启图层内部的文本标注碰撞
    geometries?: LabelGeometry[]; // 文本标注数据数组
  }

  interface MultiPolylineOptions {
    id?: string; // 图层id, 若没有会自动分配一个
    map?: Map; // 显示折线图层的底图
    zIndex?: number; // 图层绘制顺序
    styles?: MultiPolylineStyleHash; // 折线的相关样式
    enableGeodesic?: boolean; // 绘制折线是否是大圆航线, 默认为 false
    geometries?: PolylineGeometry[]; // 折线数据数组
  }

  interface PolylineStyleOptions {
    color?: string; // 线填充色, 支持rgb(), rgba(), #RRGGBB等形式, 默认为#3777FF
    width?: number; // 折线宽度, 正整数, 单位为像素, 指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为3
    borderWidth?: number; // 边线宽度, 非负整数, 默认为0, 单位为像素, 指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为1
    borderColor?: string; // 边线颜色, 支持rgb(), rgba(), #RRGGBB等形式, borderWidth不为0时有效, 默认为#3777FF
    lineCap?: string; // 线端头方式, 可选为butt, round, square, 默认为butt
    dashArray?: number[]; // 虚线展示方式, [0, 0]为实线, [10, 10]表示十个像素的实线和十个像素的空白（如此反复）组成的虚线, 默认为[0, 0];这里的像素指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差
    showArrow?: boolean; // 是否沿线路方向显示箭头, 默认为false, 建议线宽度大于6时使用
    arrowOptions?: ArrowOptions; // 箭头显示配置, 仅在showArrow为true时有效
    enableBloom?: boolean; // 是否对折线启用泛光效果, 需在MapRenderOptions中开启泛光后才可使用
  }

  interface PolygonStyleOptions {
    color?: string; // 面填充色, 支持rgb(), rgba(), #RRGGBB等形式
    showBorder?: boolean; // 是否显示边线, 默认为false
    borderColor?: string; // 边线颜色, 支持rgb(), rgba(), #RRGGBB等形式, 默认为#3777FF, showBorder为true时有效
    borderWidth?: number; // 边线宽度, 正整数, 单位为像素, 指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为2, showBorder为true时有效
    borderDashArray?: number[]; // 边线虚线虚线展示方式, [0, 0]为实线, [10, 10]表示十个像素的实线和十个像素的空白（如此反复）组成的虚线, 默认为[0, 0];这里的像素指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差
  }

  // 折线上箭头配置参数
  interface ArrowOptions {
    width?: number; // 箭头图标宽度, 单位为px, 默认为6, 最大支持255
    height?: number; // 箭头图标高度（沿线方向长度）, 单位为px, 默认为4, 最大支持255
    space?: number; // 箭头图标之间的孔隙长度, 单位为px, 默认为50, 最大支持255
  }

  interface MultiPolygonOptions {
    id?: string; // 图层 id, 若没有会自动分配一个
    map?: Map; // 显示多边形图层的底图
    zIndex?: number; // 图层绘制顺序
    styles?: MultiPolygonStyleHash; // 多边形的相关样式
    geometries?: PolygonGeometry[]; // 多边形数据数组
  }

  interface MultiRectangleOptions {
    id?: string; // 图层 id, 若没有会自动分配一个
    map?: Map; // 显示多矩形图层的底图
    zIndex?: number; // 图层绘制顺序
    styles?: MultiRectangleStyleHash; // 矩形的相关样式
    geometries?: RectangleGeometry[]; // 矩形数据数组
  }

  interface RectangleStyleOptions {
    color?: string; // 面填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
    showBorder?: boolean; // 是否显示边线, 默认为 false
    borderColor?: string; // 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为#3777FF, showBorder为true时有效
    // 折线宽度, 正整数, 单位为像素
    // 指的是地图 pitch 为 0 时的屏幕像素大小
    // 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为2
    // showBorder 为 true 时有效
    borderWidth?: number;
  }

  interface MultiCircleOptions {
    id?: string; // 图层 id, 若没有会自动分配一个
    map?: Map; // 显示多圆图层的底图
    zIndex?: number; // 图层绘制顺序
    styles?: MultiCircleStyleHash; // 圆的相关样式
    geometries?: CircleGeometry[]; // 圆数据数组
  }

  interface CircleStyleOptions {
    color?: string; // 面填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
    showBorder?: boolean; // 是否显示边线, 默认为 false
    borderColor?: string; // 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 #3777FF, showBorder为true时有效
    // 折线宽度, 正整数, 单位为像素
    // 指的是地图 pitch 为0时的屏幕像素大小
    // 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为2
    // showBorder为true时有效
    borderWidth?: number;
  }

  interface MultiEllipseOptions {
    id?: string; // 图层 id, 若没有会自动分配一个
    map?: Map; // 显示多椭圆图层的底图
    zIndex?: number; // 图层绘制顺序
    styles?: MultiEllipseStyleHash; // 椭圆的相关样式
    geometries?: EllipseGeometry[]; // 椭圆数据数组
  }

  interface EllipseStyleOptions {
    color?: string; // 面填充色, 支持rgb(), rgba(), #RRGGBB等形式
    showBorder?: boolean; // 是否显示边线, 默认为 false
    borderColor?: string; // 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为#3777FF, showBorder为true时有效
    // 折线宽度, 正整数, 单位为像素
    // 指的是地图 pitch 为 0 时的屏幕像素大小
    // 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为2
    // showBorder 为 true 时有效
    borderWidth?: number;
  }
}
