Hello everyone! 
This is my second project within npm, it's a simple tab/toggle component

#### CSS Setup
1 - super easy to customize //
```sh
.b--tabs-a__hd__list-item__link{
    display:block;
    font-family:Jost,sans-serif;
    font-weight:300;
    line-height:1.35;
    letter-spacing:.26px;
    font-size:1rem;
    text-decoration:none!important;
    text-underline-position:auto;
    display:inline-block;
    background:#49c5f3;
    color:#1a191d;
    -webkit-transition:all .3s ease-in-out;
    transition:all .3s ease-in-out;
    position:relative;
    padding:.45455rem .5rem
}
.b--tabs-a__hd__list-item__link--is-active,.b--tabs-a__hd__list-item__link:focus,
.b--tabs-a__hd__list-item__link:hover{
    background:#3ca8b0
}
.b--tabs-a__bd{
    padding-top:1rem
}
.b--tabs-a__bd__item{
    overflow:hidden;
    max-height:0
}
.b--tabs-a__bd__item--is-active{
    max-height:99rem;
    opacity:1
}
```
### JS Setup
2 - Import the package
```sh
npm install @andresclua/tabs
```
3 -  the package
```sh
import Tab from '@andresclua/tabs/src/Tabs';
new Tabs()  
```
4 - Your Html should look like this

```sh
<div class="b--tabs-a f--mb-32" >
    <ul class="b--tabs-a__hd js--tabs-hd">
        <li class="b--tabs-a__hd__list-item">
            <a href="#" class="b--tabs-a__hd__list-item__link" tf-ds-tab-to-open="tab-1">Item1</a>
        </li>
        <li class="b--tabs-a__hd__list-item">
            <a href="#" class="b--tabs-a__hd__list-item__link" tf-ds-tab-to-open="tab-2">Item2</a>
        </li>
    </ul>
    <div class="b--tabs-a__bd js--tabs-bd">
        <div class="b--tabs-a__bd__item" id="tab-1" tf-ds-tab-body="tab-1">
            <p>Content 1</p>
        </div>
        <div class="b--tabs-a__bd__item" id="tab-2" tf-ds-tab-body="tab-2">
            <p>Content item 2 </p>
        </div>
    </div>
    </div>
```

### For Nuxt
1 - Create a file TAb.js inside plugins folder & add this.
```sh
import Tabs from '@andresclua/tabs/src/Tabs';
export default ({ app }, inject) => {
    inject('Tabs', data => new Tabs(data) );
};
```
2 - Reference in your nuxt.config.js
```sh
plugins: [
    { src: '~/plugins/Tabs.js', ssr: false }
  ]
```
3 - Use it in your .vue file
```sh
mounted(){
    const tab = new Tabs({
        tab:'b--tab-a',
        tabActive : 'tab-1',
        tabActiveClass:'b--tabs-a__bd__item--is-active',
        tabBodyActiveClass: 'b--tabs-a__hd__list-item__link--is-active',
        tabTrigger : 'tf-ds-tab-to-open',
        tabBody : 'tf-ds-tab-body',
        onHide : () => {
            console.log("hide tabs");
        },
        onShow : () =>{
            console.log("show tab");
        }
    });
}
```
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)