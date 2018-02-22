function Step1Ctrl($state, $scope, GlobalFunctions, $rootScope, $timeout, $ionicTabsDelegate) {
    $scope.initialize = () => {
        $rootScope.headerString = '';
        $timeout(() => {
            $scope.showAddTabButton = true;
        })

        // initialize data.
        $scope.data = {}
        $scope.data.dateOfBirth = new Date();
        $scope.data.noTelOffice = [{
            code: '',
            target: '',
            tel: ''
        }]
    }

    var params = $state.params;
    
    if (params.policyHolder === "Calon Tertanggung Utama") {
        $scope.lengthOfTab = 0;
        $scope.titleTabs = ['Pemegang Polis - Tertanggung Utama']
    }else {
        $scope.lengthOfTab = 1;
        $scope.titleTabs = [params.policyHolder, 'Tertanggung Utama']
    }

    $scope.addTab = () => {
        $scope.showAddTabButton = false;
        
        if (params.policyHolder === "Calon Tertanggung Utama" && $scope.lengthOfTab < 2) {
            console.log('add')
            $scope.lengthOfTab += 1;
            $scope.titleTabs.push('Tertanggung Tambahan ' + $scope.lengthOfTab)

            $timeout(() => {
                $scope.showAddTabButton = true;
            }, 0)
        }

        if (params.policyHolder !== "Calon Tertanggung Utama" && $scope.lengthOfTab < 2) {
            console.log('add')
            $scope.titleTabs.push('Tertanggung Tambahan ' + $scope.lengthOfTab)
            $scope.lengthOfTab += 1;

            $timeout(() => {
                $scope.showAddTabButton = true;
            }, 0)
        }

        if ($scope.lengthOfTab === 2) {
            $timeout(() => {
                $scope.showAddTabButton = false;
            }, 0)
        }

        $timeout(() => {
            $ionicTabsDelegate.select($scope.lengthOfTab);
        }, 100)
    }

    $scope.addNoTelOffice = () => {
        $scope.data.noTelOffice.push({
            code: '',
            target: '',
            tel: ''
        })

        console.log($scope.data)
    }

    $scope.deleteNoTelOffice = (index) => {
        if (index) return $scope.data.noTelOffice.splice(index, 1);

        return $scope.data.noTelOffice.pop();
    }
}