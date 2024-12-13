var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        template: '<div class="popover" role="tooltip"><div class="popover-header bg-primary text-white"></div><div class="popover-body bg-primary text-white"></div></div>'
    })
})