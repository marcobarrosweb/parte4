Alunos = new Mongo.Collection('alunos');

if (Meteor.isClient) {
	angular.module('minhaApp', ['angular-meteor']);

	//Controller AlunoListController
	angular.module('minhaApp').controller('AlunoListController', ['$scope','$meteor', function ($scope, $meteor) {

		$scope.alunos = $meteor.collection(Alunos);

	}]);
}

if(Meteor.isServer){
	Meteor.startup(function(){
		if(Alunos.find().count() == 0){
			//Criando array de objetos alunos
			var alunos = [
			 {'nome': 'Marco', 'sobrenome': 'Barroso'},
			 {'nome': 'Jaime', 'sobrenome': 'Neves'},
			 {'nome': 'Marcelo', 'sobrenome': 'Neves'}
			];

			for (var i = 0; i < alunos.length; i++) {
		        Alunos.insert({nome: alunos[i].nome, sobrenome: alunos[i].sobrenome});
		      }
			

		}
	});
}