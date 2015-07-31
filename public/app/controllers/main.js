'use strict';

// Drum Controller
app.controller('DrumMachineCtrl', function($scope) {
  // Start playback
  $scope.playLoop = function() {
    $scope.machine.play();
    $scope.fade_msg_play = true;
  };

  // Halt playback
  $scope.stopLoop = function() {
    $scope.machine.stop();
  };

  // Reset the machine to its original state
  $scope.resetLoop = function() {
    $scope.machine.reset();
  };

  // Update the tempo
  $scope.updateTempo = function() {
    $scope.machine.setTempo($scope.tempo);
  };
});
