pragma solidity ^0.4.18;

contract EventTester {

    event Start();
    event Stop();

    function start() public {
        Start();
    }

    function stop() public {
        Stop();
    }

}