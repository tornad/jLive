/*
 *  Project:
 *  Description:
 *  Author:
 *  License:
 */

function jLive(url) {
            
            var bkobj = new Backbone.Collection();

            bkobj.url  = url;


            bkobj.on('add',function(model, collection, options) {
                collection.render();
            });        
                        

            
            bkobj.on('remove',function(model, collection, options) {
                collection.render();
            });

            bkobj.on('reset',function(collection, options) {
                collection.render();
            });

            bkobj.setTemplate = function(element) {

                // We get template from element and store it
                this.template = $(element).html();
                this.element = element;
                
                // Until setLayout is not fixed we use the template as layout after having backuped it in this.template
                this.layout = element;
                return this;
            }

            bkobj.setLayout = function(layout) {
                this.layout = layout;
                return this;
            }

            bkobj.render = function() {
                var tpl = Handlebars.compile(this.template);
                var htmlres = tpl( { me:this.toJSON() } )
                $(this.layout).html(htmlres);
                return this;
            }

            return bkobj;

};



myCollectionView = Backbone.View.extend({
    initialize: function(){
        self = this;
        this.collection.on('add',function(model, collection, options) {
          self.render();
        });        
        this.collection.on('remove',function(model, collection, options) {
          self.render();
        });
        this.collection.on('reset',function(collection, options) {
          self.render();
        });              
    },
    render: function(){
        var tpl = Handlebars.compile(this.template);
        var htmlres = tpl( { me: this.collection.toJSON() } )
        $(this.el).html(htmlres);
        return this;          
    },
});


function jLive2(url) {
            
            var bkobj = new Backbone.Collection();
            bkobj.url  = url;
            bkobj.reset({});
            
            bkobj.collectionView = new myCollectionView({ 
              collection: bkobj
            });

            bkobj.setTemplate = function(element) {
                console.log(typeof(element));
                // We get template from element and store it
                this.collectionView.template = $(element).html();
                this.element = element;
                
                // Until setLayout is not fixed we use the template as layout after having backuped it in this.template
                this.layout = element;
                return this;
            }

            bkobj.setLayout = function(layout) {
                this.collectionView.el = $(layout);
                return this;
            }

            bkobj.render = function() {
              this.collectionView.render();
            }

            return bkobj;

};




function jLiveView(url) {
            
            var bkobj = new Backbone.Collection();
            bkobj.url  = url;
            bkobj.reset({});
            
            bkobj.collectionView = new myCollectionView({ 
              collection: bkobj
            });

            bkobj.setTemplate = function(element) {
                console.log(typeof(element));
                // We get template from element and store it
                this.collectionView.template = $(element).html();
                this.element = element;
                
                // Until setLayout is not fixed we use the template as layout after having backuped it in this.template
                this.layout = element;
                return this;
            }

            bkobj.setLayout = function(layout) {
                this.collectionView.el = $(layout);
                return this;
            }

            bkobj.render = function() {
              this.collectionView.render();
            }

            return bkobj;

};
// backbone.datagrid v0.3.2
//
// Copyright (c) 2012 Loïc Frering <loic.frering@gmail.com>
// Distributed under the MIT license

(function() {

 var Datagrid = Backbone.View.extend({
  initialize: function() {
    this.columns = this.options.columns;
    this.options = _.defaults(this.options, {
      paginated:      false,
      page:           1,
      perPage:        10,
      tableClassName: 'table',
      emptyMessage:   '<p>No results found.</p>'
    });

    this.collection.on('reset', this.render, this);
    this._prepare();
  },

  render: function() {
    this.$el.empty();
    this.renderTable();
    if (this.options.paginated) {
      this.renderPagination();
    }

    return this;
  },

});


  Backbone.Datagrid = Datagrid;
})();