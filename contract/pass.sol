pragma solidity 0.8.17;

contract Password{
    string public name;
    string public password;

    function set (string memory nam,string memory pass) public
    {
        name=nam;
        password=pass;
    }

    event Save(string nam,string pass);

    function getdet() view public returns(string memory ,string memory)
    {
        return (name,password) ;
    }

    function save() public
    {
        emit Save(name,password);
    }
}