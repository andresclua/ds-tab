import JSUTIL from '@andresclua/jsutil/src/js_helper';
class Tab{
    constructor(config){
        this.tabs = config.tabs;
        this.tabActiveClass = config.tabActiveClass;
        this.tabListActiveClass = config.tabListActiveClass;
        this.tabID = config.tabIDTarget;
        this.tabTrigger = config.tabTrigger;
        this.tabBody = config.tabBody;
        this.time = 400;

        this.onshow = config.onShow;
        this.onhide = config.onHide;

        this.JSUTIL = new JSUTIL();
        this.init();
        this.events()
    }

    init (){  }

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
        this.JSUTIL.toggleClass(element,this.tabListActiveClass);
        // apply class to body   
        var bodyelement = element.getAttribute(`${this.tabTrigger}`);
        this.JSUTIL.toggleClass(document.getElementById(bodyelement),this.tabActiveClass);
    }

    // Shows tab with TabID 
    show(){
        this.JSUTIL.addClass(document.getElementById(this.tabID),this.tabActiveClass);
        this.JSUTIL.addClass(document.querySelector(`[${this.tabTrigger} = ` + this.tabID),this.tabListActiveClass);
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
            this.JSUTIL.removeClass(el,this.tabListActiveClass)
        });
        if(this.onhide)
            this.onhide()
    }
}


export default Tab;   