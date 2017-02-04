angular.module('PwpApp')
  .controller('PwpController', PwpController)

PwpController.$inject = ['$http', '$log'];

function PwpController($http, $log){
  var vm = this;
  vm.all = []
  vm.newGenre = {}
  vm.addGenre = addGenre;
  // vm.displayGenre = displayGenre;

  // Get all the genres
  function getGenres(){
    $http({
      method: 'GET',
      url: 'http://localhost:3000/genres'
    })
    .then(function(res){
      console.log(res.data);
      vm.all = res.data;
    })
  }
    getGenres();

  function addGenre(){
    $http
      .post('/genres', vm.newGenre)
      .then(function(res){
        vm.newGenre = {}
        $log.info(res)
        getGenres();  // updates array
      })
  }

}
