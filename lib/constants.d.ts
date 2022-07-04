declare namespace TMap {
  namespace constants {
    // 控件位置
    enum CONTROL_POSITION {
      TOP_LEFT, // 左上
      TOP_CENTER, // 顶部中间
      TOP_RIGHT, // 右上
      CENTER_LEFT, // 左侧中间
      CENTER, // 图区中间
      CENTER_RIGHT, // 右侧中间
      BOTTOM_LEFT, // 左下
      BOTTOM_CENTER, // 底部中间
      BOTTOM_RIGHT, // 右下
    }

    enum IMAGE_DISPLAY {
      ORIGIN,
      SCALE,
      REPEAT,
    }

    // 默认控件
    enum DEFAULT_CONTROL_ID {
      FLOOR = 'floor',
      ROTATION = 'rotation', // 旋转控件
      SCALE = 'scale', // 比例尺控件
      ZOOM = 'zoom', // 缩放控件
    }

    // 地图缩放焦点常量
    enum MAP_ZOOM_TYPE {
      DEFAULT, // 默认缩放, 双指中心位置(移动端), 鼠标的光标位置(PC端)
      CENTER, // 根据地图中心点缩放(移动端和 PC 端)
    }

    enum GEOMETRY_TYPES {
      CIRCLE = 'CIRCLE',
      ELLIPSE = 'ELLIPSE',
      HIGHLIGHT = 'HIGHLIGHT',
      LABEL = 'LABEL',
      MASK = 'MASK',
      POINT = 'POINT',
      POLYGON = 'POLYGON',
      POLYLINE = 'POLYLINE',
      RECTANGLE = 'RECTANGLE',
    }

    // 图层渲染层级常量
    enum LAYER_LEVEL {
      UNDERGROUND, // 地下层, 底图下方
      BASE, // 基础底图层, 底图平面元素所在层级
      GROUND, // 贴地层, 用户创建的平面图层所在层级
      BUILDING, // 建筑层
      OVERLAY_AA, // 需抗锯齿的覆盖物层
      POST_PROCESS,
      TEXT, // 文字层
      OVERLAY_NAA, // OVERLAY_NAA
    }

    enum LIGHT_TYPE {
      AMBIENT = 'ambient',
      DIRECTION = 'dir',
      POINT = 'point',
      SPOT = 'spot',
    }
  }
}
