(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.miscellaneous = factory();
    }
}(this, function () {
    const popover = (container, content) => $(container).popover({
        html: true,
        content: () => $($(content).html().replace(/-1/g, '')),
        placement: 'bottom',
        trigger: 'click',
    });

    const web_get = (url, data, callback) => $.get(url, data, (resp) => resp.code ? alert(resp.msg) : callback(resp));

    const web_post = (url, data, callback) => {
        data['csrfmiddlewaretoken'] = $('[name=csrfmiddlewaretoken]').val();
        $.post(url, data, (resp) => resp.code ? alert(resp.msg) : callback(resp));
    };

    return {
        popover: popover,
        web: {
            get: web_get,
            post: web_post
        }
    }
}));
