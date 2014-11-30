app.controller('CadastroController', function ($rootScope, $scope, $http) {

    // inicio do comportamento
    $scope.objresponse = [];
    $scope.objTipoNotificacao = [];
    $scope.teste = "off";
    $scope.alerta = false;
    $scope.t2 = true;
    $scope.emp_name = "";
    $scope.emp_document = "";
    $scope.emp_password = "";
    $scope.emp_email = "";
    $scope.lControle = true;
    
    // funcoes e procedimentos
    $scope.Registro = function () {

        if ($rootScope.usuario == 0) {            
            $scope.lControle = false;
        }
        
        $scope.Usuario = {        
            usu_nome: $scope.usu_nome,
            usu_loginemail: $scope.usu_loginemail,
            usu_senha: $scope.usu_senha            
        };
        
        if (($scope.Registro.usu_nome != "")) {
            $('#lMessage').empty();
            $http.post('' + $rootScope.servidor + '/AddUsuario', $scope.Usuario).success(confirmaCallback);
        } else {
            $('#lMessage').append('<p class="alert alert-warning">Atenção ! Dados obrigatórios.</p>');
        }
    }

    // callbacks
    function confirmaCallback(data, status) {
        $rootScope.usuario = data[0].usu_id;
        if (data.error) {
            $('#lMessage').append('<p class="alert alert-danger">Erro ! Server error, tente novamente</p>');

        } else {
            $('#lMessage').append('<p class="alert alert-success">Usuário realizado com sucesso !</p>');
        }
    }

});