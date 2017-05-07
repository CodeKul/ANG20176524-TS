let hardware = (function () {
    return {
        iot : () =>{ }
    };
})();

let software = (function (hw) {
    hw.iot();
})(hardware);