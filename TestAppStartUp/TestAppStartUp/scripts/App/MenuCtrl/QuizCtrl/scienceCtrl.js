ExamSolution.controller('scienceCtrl', function ($scope) {

    $scope.checked = false;

    $scope.tabs = [{
        title: 'Level1',
        url: 'science1.html'
    }, {
        title: 'Level2',
        url: 'science2.html'
    }, {
        title: 'Level3',
        url: 'science3.html'
    }];

    $scope.currentTab = 'science1.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function (tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $scope.options = [
        'a','b','c','d'
    ]

    $scope.srNum = 1;
    $scope.question = 'This is first question.'

    $scope.checkAnswer = function(answer){
        $scope.IsRightAnswer = answer.option == 'a' ? true : false;
        $scope.checked = true;
    }
})