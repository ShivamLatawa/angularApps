 sme.controller("CarouselCtrl",function CarouselCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/img1.jpg',
      text:'Get your products serviced easily and quickly'
    },
    {
      image: 'images/img2.jpg',
      text :'Easy and convenient way'
    },
    {
      image: 'images/img3.jpg',
      text :'Door to door service'
    }
  ];
});