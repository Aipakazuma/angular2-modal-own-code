# Usage

```sh
$ npm install
```

# build
```sh
$ gulp
```

# Show

Using anything browser that browse `index.html`;

# Reference

## Angular2 quickstart

`package.json` や、 `tsconfig.js` はこちらを参考
https://angular.io/docs/ts/latest/quickstart.html

## Angular2でModal作る

このコードでは動かない（正確にはAngular2 quickstartのライブラリでは動かない）
http://qiita.com/Quramy/items/ccfcfa0e45dd9e43f041

### ハマリポイント

#### Componentから消えた `directives`

```
@Component({
	selector: 'my-app',
	directives: '...'
})
```

↑こう書いている記事多いけど、最新のAngular2はこう書けない。
紐付けには、Html上で、要素・属性・クラスで対応しましょう。


#### `ViewContainerRef`が、何故か`undefined`

`@Directive => ModalInner` と、`@Component => ModalEntryComponent`を一緒のファイルにしていたけど、分離したらうまくいった

#### Promise のエラーキャッチ
http://stackoverflow.com/questions/37624322/uncaught-in-promise-undefined-error-when-using-with-location-in-facebook-gra

単純にPromiseを使う側で`catch(e) => { console.log(e); }`を入れただけ


## Directiveについて

こちらで覚えました。
http://qiita.com/laco0416/items/8919899b8b45a72da39e
http://stackoverflow.com/questions/40104651/angular2-using-a-directive-in-head
https://plnkr.co/edit/hONSHQpNbhK3J4r9RIl2?p=preview
https://plnkr.co/edit/9HdEhJ3TVlh23RrCKoEr

## `ViewContainerRef` について

http://stackoverflow.com/questions/40228712/angular-2-understand-viewcontainerref-usage-with-templateref

## `@ViewChild` について

こちらを参考にしました
http://stackoverflow.com/questions/40438486/calling-function-in-directive
http://stackoverflow.com/questions/32693061/angular-2-typescript-get-hold-of-an-element-in-the-template/35209681#35209681

## Angular2 の情報量について

* まあまあ・・・？
* と、思いきやバージョンアップしすぎ
* 3ヶ月たてば、同じライブラリでも仕様が変わっている
* なので、検索するときは直近１ヶ月で絞るべし
