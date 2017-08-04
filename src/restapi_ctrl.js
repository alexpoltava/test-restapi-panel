import {PanelCtrl} from 'app/plugins/sdk';
import angular from 'angular';

const restapiDefaults = {
    url: "https://sandbox.waylay.io/api/",
    response: ""
};

export class RestapiCtrl extends PanelCtrl {

    constructor($scope, $injector, $http) {
        super($scope, $injector,);
        _.defaults(this.panel, restapiDefaults);
        this.restapi = restapiDefaults;
        this.$http = $http;
    }

    onSubmit() {
      this.$http({
        method: 'GET',
        withCredentials: true,
        url: this.restapi.url
      })
      .then(data => {
          console.log(data);
          this.restapi.response = data;
      })
      .catch(err => {
          console.error(err);
          this.restapi.response = err;
      });
    }
}

RestapiCtrl.templateUrl = 'module.html';
