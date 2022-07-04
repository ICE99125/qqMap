// docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel
declare namespace TMap {
  class MultiLabel {
    constructor(options: MultiLabelOptions);
  }

  interface MultiLabelStyleHash {
    [key: string]: LabelStyle;
  }

  class LabelStyle {
    constructor(options: LabelStyleOptions);
    color: string; // 颜色属性, 支持rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,1)
    size: number; // 文字大小属性, 默认为14
    offset: { x: number; y: number }; // 文字偏移属性, 单位为像素, 以 PointGeometry 的位置点所对应屏幕位置为原点, x轴向右为正向左为负, y轴向下为正向上为负
    angle: number; // 文字旋转属性, 单位为度, 以 PointGeometry 的位置点所对应屏幕位置为原点, 逆时针为正, 默认为 0
    alignment: string; // 文字水平对齐属性, 默认为 center, 可选值为 left（文字左侧与位置锚点对齐）、right（文字右侧与位置锚点对齐）、center（文字水平中心与位置锚点对齐）
    verticalAlignment: string; // 文字垂直对齐属性, 默认为middle, 可选值为top（文字顶部与位置点对齐）、bottom（文字底部与位置点对齐）、middle（文字垂直中心与位置点对齐）
    height: number; // 文字背景框高度, 单位为像素
    width: number; // 文字背景框宽度, 单位为像素
    backgroundColor: string; // 文字背景框颜色属性, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,0)
    padding: string; // 文字背景框内边距, 单位为像素, 属性支持接受 1~2 个值, 规则符合 css 规范
    borderWidth: number; // 文字背景框边线宽度, 单位为像素
    borderRadius: number; // 文字背景框边线宽度, 单位为像素
    borderColor: string; // 文字背景框边线颜色属性, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,0)
  }

  interface LabelGeometry {
    id: string; // 点图形数据的标志信息, 不可重复, 若 id 重复后面的 id 会被重新分配一个新 id, 若没有会随机生成一个
    styleId: string; // 对应 MultiLabelStyleHash 中的样式 id, 如果样式表中没有包含 geometry 指定的 styleId, 则该 geometry 不会被绘制出来
    position: LatLng; // 标注点位置
    content: string; // 标注文本
    rank: number; // 当开启文本碰撞时, 值越大碰撞优先级越高关闭碰撞时, 表示标注文本的图层内绘制顺序
    properties: unknown; // 标注点的属性数据
  }
}
