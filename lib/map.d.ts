declare namespace TMap {
  type EvtName =
    | 'idle'
    | 'tilesloaded'
    | 'dragstart'
    | 'drag'
    | 'dragend'
    | 'panstart'
    | 'pan'
    | 'panend'
    | 'rotatestart'
    | 'rotate'
    | 'rotateend'
    | 'pitchstart'
    | 'pitch'
    | 'pitchend'
    | 'zoom'
    | 'resize'
    | 'center_changed'
    | 'bounds_changed'
    | 'scale_changed'
    | 'control_added'
    | 'control_removed'
    | 'animation_ended'
    | 'animation_stopped';

  type MapEvtName =
    | 'click'
    | 'rightclick'
    | 'dblclick'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  type AnimateEvtName = 'animation_playing';

  type LoopEvtName = 'animation_looped';

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1
  class Map {
    constructor(dom: string | HTMLElement, options: MapOptions);

    setCenter(center: LatLng): Map;

    setZoom(zoom: number): Map;

    setRotation(rotation: number): Map;

    setPitch(pitch: number): Map;

    setScale(scale: number): Map;

    setOffset(offset: { x: number; y: number }): Map;

    setDraggable(draggable: boolean): Map;

    setScrollable(scrollable: boolean): Map;

    setMaxZoom(maxZoom: number): Map;

    setMinZoom(minZoom: number): Map;

    setPitchable(pitchable: boolean): Map;

    setRotatable(rotatable: boolean): Map;

    setDoubleClickZoom(doubleClickZoom: boolean): Map;

    setBoundary(boundary: LatLngBounds): Map;

    setViewMode(viewMode: string): Map;

    setBaseMap(baseMap: BaseMap | BaseMap[]): Map;

    setMapStyleId(mapStyleId: string): Map;

    panTo(latLng: LatLng, opts: EaseOptions): Map;

    zoomTo(zoom: number, opts: EaseOptions): Map;

    rotateTo(rotation: number, opts: EaseOptions): Map;

    pitchTo(pitch: number, opts: EaseOptions): Map;

    easeTo(mapStatus: object, opts: EaseOptions): Map;

    fitBounds(bounds: LatLngBounds, options: FitBoundsOptions): Map;

    getCenter(): LatLng;

    getZoom(): number;

    getRotation(): number;

    getPitch(): number;

    getBounds(): LatLngBounds;

    getScale(): number;

    getOffset(): { x: number; y: number };

    getDraggable(): boolean;

    getScrollable(): boolean;

    getDoubleClickZoom(): boolean;

    getBoundary(): LatLngBounds;

    addControl(control: Control): Map;

    removeControl(id: string): Map;

    getControl(id: string): Control;

    getViewMode(): string;

    getBaseMap(): BaseMap | BaseMap[];

    getIndoorManager(): indoorManager;

    destroy(): void;

    projectToContainer(latLng: LatLng): Point;

    unprojectFromContainer(pixel: Point): LatLng;

    on(eventName: EvtName, listener: () => void): Map;

    on(eventName: MapEvtName, listener: (evt: MapEvent) => void): Map;

    on(eventName: AnimateEvtName, listener: (evt: AnimationEvent) => void): Map;

    on(eventName: LoopEvtName, listener: (evt: number) => void): Map;

    off(
      eventName: EvtName | MapEvtName | AnimateEvtName | LoopEvtName,
      listener: () => void
    ): Map;

    moveLayer(layerId: string, level: constants.LAYER_LEVEL): Map;

    startAnimation(keyFrames: MapKeyFrame[], opts: AnimationOptions): void;

    stopAnimation(): void;

    pauseAnimation(): void;

    resumeAnimation(): void;

    enableAreaHighlight(opts: highlightOptions): Map;

    disableAreaHighlight(): Map;

    enableAreaClip(opts: ClipOptions): Map;

    disableAreaClip(): Map;
  }

  type ColorObj = {
    // key?????????(offset), value?????????(color)
    [key: number]: string;
  };

  class GradientColor {
    constructor(options: GradientColorOptions);

    addColorStop(offset: number, color: string): GradientColor; // ?????????????????????(offset)?????????(color)???????????????, offset ???????????????0~1, ???????????? rgb(), rgba(), #RRGGBB ??????

    setAngle(angle: number): GradientColor; // ??????????????????????????????????????????, ?????????????????????, 0 ???????????????, 90 ???????????????

    getAngle(): number; // ??????????????????????????????????????????

    static createDoubleColorGradient(
      color1: string,
      color2: string,
      angle: number
    ): GradientColor;

    static convert(colors: ColorObj | string[]): GradientColor;
  }

  // ?????????????????????
  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#mapKeyFrame
  interface MapKeyFrame {
    percentage: number; // ???????????????????????????????????????, ??????????????? 0~1
    center: LatLng; // ????????????????????????
    zoom: number; // ??????????????????
    rotation: number; // ????????????????????????????????????
    pitch: number; // ??????????????????, ??????????????? 0~80
  }

  class ZoomControl extends Control {
    setNumVisible(visible: boolean): ZoomControl;
  }
}
