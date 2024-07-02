document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Define options
    const options = {
        columnSelector: '.footer-column.nav-links',
        triggerSelector: '.ft-text',
        htmlClass: 'open',
        allowMultiple: true
    };

    const columns = document.querySelectorAll(options.columnSelector);

    columns.forEach(column => {
        const triggers = column.querySelectorAll(options.triggerSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', function (event) {
                event.preventDefault();

                let currentColumn = column;

                if (!options.allowMultiple) {
                    columns.forEach(otherColumn => {
                        if (otherColumn !== currentColumn && otherColumn.classList.contains(options.htmlClass)) {
                            otherColumn.classList.remove(options.htmlClass);
                        }
                    });
                }
                currentColumn.classList.toggle(options.htmlClass);
            });
        });
    });
});