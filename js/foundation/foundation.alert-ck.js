(function(e,t,n,r){"use strict";Foundation.libs.alert={name:"alert",version:"5.0.0",settings:{animation:"fadeOut",speed:300,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){e(this.scope).off(".alert").on("click.fndtn.alert","[data-alert] a.close",function(t){var n=e(this).closest("[data-alert]"),r=n.data("alert-init")||Foundation.libs.alert.settings;t.preventDefault();n[r.animation](r.speed,function(){e(this).trigger("closed").remove();r.callback()})})},reflow:function(){}}})(jQuery,this,this.document);