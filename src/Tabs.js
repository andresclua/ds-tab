import JSUTIL from '@andresclua/jsutil/src/js_helper';
class Tabs{
    constructor(config){
        this.tabActive = config.tabActive; //tab active by default
        this.tabActiveClass = config.tabActiveClass; //active class on header
        this.tabBodyActiveClass = config.tabBodyActiveClass; //active class on
        this.tabTrigger = config.tabTrigger;
        this.tabBody = config.tabBody;

        this.onshow = config.onShow;
        this.onhide = config.onHide;

        this.JSUTIL = new JSUTIL();
        this.init();
        this.events()
    }

    init (){ 
        this.show()
     }

    events(){
        document.querySelectorAll(`[${this.tabTrigger}]`).forEach((element)=>{
            element.addEventListener('click', (item)=>{
                item.preventDefault();
                // Hides all active classes
                this.toggle(element);
            })
        })
    }

    toggle(element){
        // Hides all active classes
        this.hide();
        // apply class to trigger 
        this.JSUTIL.toggleClass(element,this.tabBodyActiveClass);
        // apply class to body   
        var bodyelement = element.getAttribute(`${this.tabTrigger}`);
        this.JSUTIL.toggleClass(document.getElementById(bodyelement),this.tabActiveClass);
    }

    // Shows tab with tabActive 
    show(){
        this.JSUTIL.addClass(document.getElementById(this.tabActive),this.tabActiveClass);
        this.JSUTIL.addClass(document.querySelector(`[${this.tabTrigger} = ` + this.tabActive),this.tabBodyActiveClass);
        if(this.onshow)
            this.onshow()
    }

    // Hides all active clases
    hide(){
        // removes class to body
        document.querySelectorAll(`[${this.tabBody}]`).forEach((el)=>{
            this.JSUTIL.removeClass(el,this.tabActiveClass)
        });
        // removes class to trigger 
        document.querySelectorAll(`[${this.tabTrigger}]`).forEach((el)=>{
            this.JSUTIL.removeClass(el,this.tabBodyActiveClass)
        });
        if(this.onhide)
            this.onhide()
    }
}


export default Tabs;   