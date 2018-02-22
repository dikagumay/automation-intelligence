function SpajStartCtrl($scope, $rootScope, $timeout) {
    $scope.initialize = () => {
        $rootScope.headerString = 'Sebelum Anda melanjutkan SPAJ';
        
        $scope.data = {}
    }

    $scope.goToStep1 = (policyHolder) => {
        $timeout(() => {
            $rootScope.footerHandler("step1", {policyHolder});
        })
    }
}