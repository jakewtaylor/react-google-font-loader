'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleFontLoader = function (_React$PureComponent) {
    _inherits(GoogleFontLoader, _React$PureComponent);

    function GoogleFontLoader() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GoogleFontLoader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleFontLoader.__proto__ || Object.getPrototypeOf(GoogleFontLoader)).call.apply(_ref, [this].concat(args))), _this), _this.link = null, _this.createLink = function () {
            var _this$props = _this.props,
                fonts = _this$props.fonts,
                subsets = _this$props.subsets;


            var families = fonts.reduce(function (acc, font) {
                var family = font.font.replace(/ +/g, '+');
                var weights = (font.weights || []).join(',');

                acc.push(family + (weights && ':' + weights));

                return acc;
            }, []).join('|');

            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css?family=' + families;

            if (subsets && Array.isArray(subsets) && subsets.length > 0) {
                link.href += '&subset=' + subsets.join(',');
            }

            return link;
        }, _this.appendLink = function () {
            return document.head.appendChild(_this.link);
        }, _this.removeLink = function () {
            return document.head.removeChild(_this.link);
        }, _this.replaceLink = function () {
            _this.removeLink();
            _this.link = _this.createLink();
            _this.appendLink();
        }, _this.render = function () {
            return null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GoogleFontLoader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.link = this.createLink();
            this.appendLink();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (JSON.stringify(prevProps.fonts) !== JSON.stringify(this.props.fonts)) {
                this.replaceLink();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeLink();
        }
    }]);

    return GoogleFontLoader;
}(_react2.default.PureComponent);

GoogleFontLoader.propTypes = {
    fonts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        font: _propTypes2.default.string.isRequired,
        weights: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))
    })).isRequired,
    subsets: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

exports.default = GoogleFontLoader;