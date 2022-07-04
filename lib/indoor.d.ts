// 室内地图
declare namespace TMap {
  type IEvtName = 'active_changed';

  // https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocIndoor
  class IndoorManager {
    initialize: Promise<null>; // 初始化室内图管理器
    setAutoActive(autoActive: boolean): IndoorManager; // 设置室内建筑是否可以被自动激活
    setActiveIndoorBuilding(buildingId: string): IndoorManager; // 将 buildingId 对应的室内建筑设置为激活状态
    setVisible(isVisible: boolean): IndoorManager; // 设置室内建筑是否显示
    showFloorControl(): IndoorManager; // 显示处于激活状态的室内建筑的楼层控件, 若没有激活状态的室内建筑，该方法无效。
    hideFloorControl(): IndoorManager; // 隐藏处于激活状态的室内建筑的楼层控件。
    getMap(): Map | null; // 获取地图对象, 若为空返回 null
    getAutoActive(): boolean; // 获取室内建筑是否可以被自动激活
    getActiveIndoorBuilding(): IndoorBuilding | null; // 获取处于激活状态下的室内建筑, 若都为非激活状态, 则返回 null
    getVisible(): boolean; // 获取室内图是否显示
    getIndoorBuilding(buildingId: string): IndoorBuilding | null; // 获取室内建筑, 若 id 不存在返回 null
    getIndoorBuildingList(): IndoorBuilding; // 获取所有的室内建筑
    on(
      eventName: IEvtName,
      listener: (evt: IndoorBuilding) => void
    ): IndoorManager;
    off(eventName: IEvtName, listener: () => void): IndoorManager;
  }

  type IEvtName_ = 'floor_changed';

  // 室内建筑实例
  interface IndoorBuilding {
    setSelectedFloor(floor: string): IndoorBuilding; // 设置当前选中楼层
    getMap(): Map | null; // 获取地图对象, 若为空返回 null
    getManager(): IndoorManager; // 获取室内建筑物的管理器
    getSelectedFloor(): string; // 获取室内建筑物的当前展示的楼层
    getBuildingInfo(): IndoorBuildingInfo; // 获取室内建筑物信息
    getBuildingInfoAsync(): Promise<IndoorBuildingInfo>; // 异步获取室内建筑物信息
    isActive(): boolean; // 室内建筑物是否处于激活状态
    on(eventName: IEvtName_, listener: () => void): IndoorBuilding; // 添加 listener 到 eventName 事件的监听器数组中
    off(eventName: IEvtName_, listener: () => void): IndoorBuilding; // 从 eventName 事件的监听器数组中移除指定的 listener
  }

  // 室内建筑相关信息
  interface IndoorBuildingInfo {
    cityId: string; // 室内建筑物所在的城市Id
    buldingId: string; // 室内建筑物Id
    buildingName: string; // 室内建筑名称
    floorList: FloorInfo[]; // 室内建筑物的楼层信息列表
    defaultFloor: string; // 室内建筑物默认显示的楼层
    center: LatLng; // 室内建筑物的中心点, 通常是建筑物的默认显示楼层的中心点
  }

  // 室内建筑楼层信息
  interface FloorInfo {
    name: string; // 楼层名称
    bounds: LatLngBounds; // 室内建筑物的楼层范围
  }
}
