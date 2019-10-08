'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createLink = function createLink(fonts, subsets, display) {
    var families = fonts.reduce(function (acc, font) {
        var family = font.font.replace(/ +/g, '+');
        var weights = (font.weights || []).join(',');

        return [].concat(_toConsumableArray(acc), [family + (weights && ':' + weights)]);
    }, []).join('|');

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=' + families;

    if (subsets && Array.isArray(subsets) && subsets.length > 0) {
        link.href += '&subset=' + subsets.join(',');
    }

    if (display) {
        link.href += '&display=' + display;
    }

    return link;
};

var GoogleFontLoader = function GoogleFontLoader(_ref) {
    var fonts = _ref.fonts,
        subsets = _ref.subsets,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? null : _ref$display;

    var _useState = (0, _react.useState)(createLink(fonts, subsets, display)),
        _useState2 = _slicedToArray(_useState, 2),
        link = _useState2[0],
        setLink = _useState2[1];

    (0, _react.useEffect)(function () {
        document.head.appendChild(link);

        return function () {
            return document.head.removeChild(link);
        };
    }, [link]);

    (0, _react.useEffect)(function () {
        setLink(createLink(fonts, subsets, display));
    }, [fonts, subsets, display]);

    return null;
};

GoogleFontLoader.propTypes = {
    fonts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        font: _propTypes2.default.string.isRequired,
        weights: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))
    })).isRequired,
    subsets: _propTypes2.default.arrayOf(_propTypes2.default.string),
    display: _propTypes2.default.string
};

exports.default = GoogleFontLoader;