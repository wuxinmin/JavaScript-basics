var common = {
    chooser: function(name) {
        return document.querySelector(name)
    },
    toBtn: function (style, title) {
        // return '<button class="btn btn-'+style+'">'+title+'</button>'
        return `<button class="btn btn-${style}">${title}</button>`
    }
}

//原型继承 
    function Btn(title, style) {
        this.title = title;
        this.style = style;
    }
    Btn.prototype.toHtml = function() {
        return '<button class="btn btn-'+this.style+'">'+this.title+'</button>'
    }