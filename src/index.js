
import Tab from './Tab';
class Page{
    constructor(){
        this.init()
    }
    init(){ 
        const tab = new Tab({
            tab:'b--tab-a',
            tabIDTarget : 'tab-2',
            tabActiveClass:'b--tabs-a__bd__item--is-active',
            tabListActiveClass: 'b--tabs-a__hd__list-item__link--is-active',
            tabTrigger : 'data-tab-to-open',
            tabBody : 'data-tab-body',
            onHide : () => {
                console.log("hide tabs");
            },
            onShow : () =>{
                console.log("show tab");
            }
        });
        tab.show()
        // setTimeout(()=>{
        //     tab.hide()
        // },3000)
    }
}
export default Page;

new Page()
