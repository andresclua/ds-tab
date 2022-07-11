import Tab from './Tab';
class Page{
    constructor(){
        this.init()
    }
    init(){ 
        const tab = new Tab({
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
}
export default Page;

new Page()
