angular.module('PwpApp')
  .controller('PwpController', PwpController)

PwpController.$inject = ['$http', '$log'];

function PwpController($http, $log){
  var vm = this;
  vm.all = []
  vm.newGenre = {}
  vm.addGenre = addGenre;
  vm.showGenre = showGenre;
  vm.updateGenre = updateGenre;
  vm.removeGenre = removeGenre;
  vm.getGenres = getGenres;
  vm.editable = false;
  vm.displayGenre = displayGenre;


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

  function updateGenre(genre){
    $http
      .patch("/genres/"+genre._id, genre)
      .then(function(res){
        $log.info(res)
      })
  }

  function showGenre(genre){
    $http
      .get("/genres/"+genre._id)
      .then(function(res){
        $log.info(res)
        vm.displayGenre(genre)
      })
  }

  function removeGenre(genre){
    $http
      .delete("/genres/"+genre._id)
      .then(function(res){
        getGenres();
      })
  }

  function displayGenre(genre){
    vm.currentGenre = genre
  }
}
