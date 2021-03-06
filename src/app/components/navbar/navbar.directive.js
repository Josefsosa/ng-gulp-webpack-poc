export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor () {
    'ngInject';
    var date = new Date();

    // "this.creation" is available by directive option "bindToController: true"
    //this.relativeDate = moment(this.creationDate).fromNow();
    this.relativeDate = date;
  }
}
