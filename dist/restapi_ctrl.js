'use strict';

System.register(['app/plugins/sdk', 'angular'], function (_export, _context) {
    "use strict";

    var PanelCtrl, angular, _createClass, restapiDefaults, RestapiCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_appPluginsSdk) {
            PanelCtrl = _appPluginsSdk.PanelCtrl;
        }, function (_angular) {
            angular = _angular.default;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            restapiDefaults = {
                url: "https://sandbox.waylay.io/api/",
                response: ""
            };

            _export('RestapiCtrl', RestapiCtrl = function (_PanelCtrl) {
                _inherits(RestapiCtrl, _PanelCtrl);

                function RestapiCtrl($scope, $injector, $http) {
                    _classCallCheck(this, RestapiCtrl);

                    var _this = _possibleConstructorReturn(this, (RestapiCtrl.__proto__ || Object.getPrototypeOf(RestapiCtrl)).call(this, $scope, $injector));

                    _.defaults(_this.panel, restapiDefaults);
                    _this.restapi = restapiDefaults;
                    _this.$http = $http;
                    return _this;
                }

                _createClass(RestapiCtrl, [{
                    key: 'onSubmit',
                    value: function onSubmit() {
                        var _this2 = this;

                        this.$http({
                            method: 'GET',
                            withCredentials: true,
                            url: this.restapi.url
                        }).then(function (data) {
                            console.log(data);
                            _this2.restapi.response = data;
                        }).catch(function (err) {
                            console.error(err);
                            _this2.restapi.response = err;
                        });
                    }
                }]);

                return RestapiCtrl;
            }(PanelCtrl));

            _export('RestapiCtrl', RestapiCtrl);

            RestapiCtrl.templateUrl = 'module.html';
        }
    };
});
//# sourceMappingURL=restapi_ctrl.js.map
