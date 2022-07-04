// docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster

declare namespace TMap {
  type CEvtName = 'click';
  type CEvtName_ = 'cluster_changed';

  class MarkerCluster {
    constructor(options: MarkerClusterOptions);

    setMap(map: Map | null | undefined): MarkerCluster; // 设置地图对象, 如果 map 为 null 意味着将点聚合图层从地图中移除

    setGeometries(
      geometries: PointGeometry[] | null | undefined
    ): MarkerCluster; // 更新点数据, 如果参数为 null 或 undefined 不会做任何处理

    getMap(): Map | null; // 获取地图对象, 若为空返回 null

    getId(): MarkerCluster; // 获取图层的 id

    getClusters(): ClusterInfo[]; // 获取当前地图视野范围内, 聚合后的聚合簇数据；聚合是异步操作, 可以绑定cluster_changed事件获取每次地图上最新的聚合簇

    getGeometries(): PointGeometry[]; // 获取点数据

    getGeometryById(id: string): PointGeometry; // 根据点数据id来获取点数据

    updateGeometries(geometry: PointGeometry[]): MarkerCluster; // 更新标注点数据, 如果 geometry 的 id 存在于聚合点的集合中, 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的点标注添加到集合中进行聚合, 如果参数为 null 或 undefined 不会做任何处理

    // 向图层中添加标注点
    // 如果 geometry 的 id 已经存在集合中, 则该 geometry 不会被重复添加
    // 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合中进行聚合
    // 没有 id 的 geometry 会被赋予一个唯一 id
    // 如果要添加到集合中的标注存在重复 id, 这些标注点会被重新分配 id
    // 如果参数为 null 或 undefined 不会做任何处理
    add(geometries: PointGeometry[] | null | undefined): MarkerCluster;

    remove(ids: string[] | null | undefined): MarkerCluster; // 移除指定 id 的标注点, 如果参数为 null 或 undefined 不会做任何处理

    on(
      eventName: CEvtName,
      listener: (evt: ClusterInfo[] | PointGeometry) => void
    ): MarkerCluster;
    on(eventName: CEvtName_, listener: () => void): MarkerCluster;

    off(eventName: string, listener: () => void): MarkerCluster;
  }

  interface ClusterInfo {
    center: LatLng; // 聚合簇的位置点
    geometries: PointGeometry[]; // 该聚合簇内的点标记数据数组, 注：该点标记不支持通过style更改样式
    bounds: LatLngBounds; // 聚合簇的边界范围
  }
}
