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
    faceTo?: string; // 标注点图片的朝向, 可取 'map'（贴地）或 'screen'（直立）, 默认为 'screen'
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
}
