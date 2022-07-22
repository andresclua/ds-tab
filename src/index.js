import Tabs from './Tabs';
class Page{
    constructor(){
        this.init()
    }
    init(){ 
        const tabs = new Tabs({
            tabActive : 'tab-a-2',
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


        const tabs2 = new Tabs({
            tabActive : 'tab-b-1',
            tabActiveClass:'b--tabs-b__bd__item--is-active',
            tabBodyActiveClass: 'b--tabs-b__hd__list-item__link--is-active',
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
}
export default Page;

new Page()
