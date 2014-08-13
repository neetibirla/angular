angular.module('AngularRails')
    .controller('PanelCtrl', function(){
    	this.tab = 1;
    	
    	this.selectTab = function(tab){
    		this.tab = tab;
    	}
    	
    	this.isSelected = function(checkTab){
    		return this.tab === checkTab;
    	}
    }
);