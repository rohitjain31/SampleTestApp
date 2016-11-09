ExamSolution.controller('sscCtrl', function ($scope) {


    // Dummy object which will be returned ---start
        
    var Obj = {
        1: {
            srNum: '1',
            question: 'This is first Question',
            choices : ['First Choice 1','Second Choice 1','Third Choice 1','Fourth Choice 1']
        },
        2: {
            srNum: '2',
            question: 'This is Second Question',
            choices: ['First Choice 2', 'Second Choice 2', 'Third Choice 2', 'Fourth Choice 2']
        },
        3: {
            srNum: '3',
            question: 'This is Third Question',
            choices: ['First Choice 3', 'Second Choice 3', 'Third Choice 3', 'Fourth Choice 3']
        },
        4: {
            srNum: '4',
            question: 'This is Fourth Question',
            choices: ['First Choice 4', 'Second Choice 4', 'Third Choice 4', 'Fourth Choice 4']
        }
    }

    // end


    $scope.srNum = Obj[1].srNum;
    $scope.question = Obj[1].question;
    $scope.choices = Obj[1].choices;


    $scope.NumberOfQuestions = Object.keys(Obj).length;

    $scope.getTimes = function (n) {
        return new Array(n);
    };

    $scope.goToQuestion = function (elem) {
        var id = elem.$index + 1;
        $scope.srNum = Obj[id].srNum;
        $scope.question = Obj[id].question;
        $scope.choices = Obj[id].choices;
    }
})