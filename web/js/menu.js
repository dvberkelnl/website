;(function($){
    'use strict';

    function asArray(pseudoArray){
        return Array.prototype.slice.call(pseudoArray);
    }

    $.createIn = function(container){
        var menuItems = asArray(container.querySelectorAll('.menu .item'));
        console.log(menuItems);
        function closeAllMenuItems(exceptMenuItem) {
            menuItems
            .filter(function(menuItem){
                return menuItem !== exceptMenuItem
            })
            .forEach(function(menuItem){
                menuItem.classList.remove('open');
                menuItem.classList.add('closed');
            });
        }
        function toggleMenuItem() {
            closeAllMenuItems(this);
            this.classList.toggle('closed');
            this.classList.toggle('open');
        }
        closeAllMenuItems();
        menuItems.forEach(function(menuItem){
            menuItem.addEventListener('click', toggleMenuItem.bind(menuItem));
        });
    }
})(window.menu = window.menu || {});

;(function(menu){
    'use strict';
    menu.createIn(document.body);
})(window.menu);
