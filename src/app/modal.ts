import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ReflectiveInjector,
  ComponentRef,
} from "@angular/core";

@Injectable()
export class ModalContext {
  constructor(
    private _resolve: Function,
    private _reject: Function,
    public parameters?: any
  ) {
  }
  resolve(val: any) {
    this._resolve(val);
  }
  reject(reason?: any) {
    this._reject(reason);
  }
}

@Injectable()
export class Modal {
  public vcr: ViewContainerRef;

  private count = 0;

  constructor(
    private cfr: ComponentFactoryResolver
  ) {
  }

  isShow() {
    return this.count > 0;
  }

  open<T>(comp: any, parameters?: any) {

    return new Promise<T>((resolve, reject) => {
      const cf = this.cfr.resolveComponentFactory(comp);

      let cr: ComponentRef<any>;
      const _resolve = (val: T) => {
        if (cr) {
          cr.destroy();
          resolve(val);
          this.count--;
        }
      };

      const _reject = (reason?: any) => {
        if (cr) {
          cr.destroy();
          reject(reason);
          this.count--;
        }
      };
      const bindings = ReflectiveInjector.resolve([
        {provide: ModalContext, useValue: new ModalContext(_resolve, _reject, parameters)}
      ]);

      const ctxInjector = this.vcr.parentInjector;
      const injector = ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector);
      cr = this.vcr.createComponent(cf, 1, injector);
      this.vcr.element.nativeElement.appendChild(cr.location.nativeElement);
      this.count++;
    });
  }
}