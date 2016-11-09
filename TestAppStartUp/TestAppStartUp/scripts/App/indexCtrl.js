ExamSolution.controller("indexCtrl", function ($scope) {

    var items = [
        {
            name: 'Quiz',
            menuItem: [{
                menuName: 'Science'
            }, {
                menuName: 'Maths'
            }]
        },
        {
            name: 'Practice Here',
            menuItem: [{
                menuName: 'SSC'
            }]
        },
        {
            name: 'Current Affairs',
            menuItem: [{
                menuName: 'Technology'
            }]
        },
        {
            name: 'EBook'
        },
        {
            name: 'ExamInfo',
            menuItem: [{
                menuName: 'SSC'
            }]
        }
    ];

    $scope.items = items;
})