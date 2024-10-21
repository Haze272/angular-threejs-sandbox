import {Component, ElementRef, viewChild} from '@angular/core';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {PerspectiveCamera, Scene, WebGLRenderer} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';



@Component({
  selector: 'app-showcase-page',
  standalone: true,
  imports: [],
  templateUrl: './showcase-page.component.html',
  styleUrl: './showcase-page.component.scss'
})
export class ShowcasePageComponent {
  rendererContainer = viewChild<ElementRef>('rendererContainer');

  public loader: GLTFLoader | undefined;
  public scene: Scene | undefined;
  public camera: PerspectiveCamera | undefined;
  public controls: OrbitControls | undefined;
  public renderer: WebGLRenderer | undefined;

  constructor() {
    this.loader = new GLTFLoader();
  }
}
