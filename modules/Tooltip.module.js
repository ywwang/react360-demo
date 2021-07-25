import { Surface, Module } from 'react-360-web';

import { r360 } from '../client';

export class TooltipModule extends Module {
  constructor() {
    super('TooltipModule');
  }

  roots = [];
  surfaces = [];

  setTooltips() {
    this.detachAll();

    const tooltips = [
      {
        width: 80,
        height: 80,
        yaw: 10.3,
        pitch: 0.1,
        text: 'Chernihiv Regional Youth Center',
        img: 'youth_center.jpg',
      },
    ];

    tooltips.map((item, index) => {
      this.surfaces.push(
        new Surface(item.width, item.height, Surface.SurfaceShape.Flat),
      );
      this.surfaces[index].setAngle(item.yaw, item.pitch);
      this.roots.push(
        r360.renderToSurface(
          r360.createRoot('TooltipComponent', {
            width: item.width,
            height: item.height,
            iconImg: 'question.png',
            index: index,
            text: item.text,
            infoImg: item.img,
          }),
          this.surfaces[index],
        ),
      );
    });
  }

  resizeTooltip(index, width, height) {
    this.surfaces[index].resize(width, height);
  }

  detachAll() {
    for (let i = 0; i < this.roots.length; i++) {
      r360.detachRoot(this.roots[i]);
    }
  }
}
