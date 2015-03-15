 sme.controller("CarouselCtrl",function CarouselCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/img1.jpg'
    },
    {
      image: 'images/img2.jpg'
    },
    {
      image: 'images/img3.jpg'
    }
  ];
});