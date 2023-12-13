# Sporteka-MVP

## Welcome to the Sporteka MVP repository

<p align="center" width="100%">
  <img src="https://github.com/Sporteka-chainlink-hack/sporteka11212023/assets/58889001/37f6e8a0-7c08-424c-bd4c-7bc4f4186c61" alt="site"/>
</p>

> ## Table of contents
- [Overview](#overview)
- [Core Features Implemented](#core-features-implemented)
- [Technologies](#technologies)
- [Repo Setup](#repo-setup)
- [Requirements](#requirements)
- [Setup the Project](#setup-the-project)
  - [Install Hardhat](#install-hardhat)
  - [Env Setup](#env-setup)
  - [Setup Hardhat.config](#setup-hardhatconfig)
- [Setup the Frontend](#setup-the-frontend)
  - [Install Dependencies](#install-dependencies)
  - [Steps to host the live site on Vercel](#steps-to-host-the-live-site-on-vercel)
- [Testing the Smartcontract](#testing-the-smartcontract)
- [Sporteka-MVP Contract Address](#Nft-factory-contract-address)
- [Live Link](#live-link)
- [Contributors](#contributors)
- [Contributing to the project](#contributing-to-the-project)
#
> ## Overview
<p align="justify">
Sporteka aims to revolutionize the sports industry by providing a cutting-edge Blockchain platform where users can trade future contracts of players, invest in clubs, and engage in predictive match outcomes. We strive to create an innovative, fair, and transparent ecosystem that benefits sports enthusiasts, clubs, and investors worldwide.
</p>



#
> ## Core Features Implemented

`Deployment on Polygon chain`
- Tokenization of Sports Clubs: Sporteka facilitates the tokenization of sports clubs, allowing users to invest in and own fractionalized shares of various clubs. The ClubsFactory contract enables the creation of unique ERC-20 tokens representing ownership in specific sports clubs.

- Club Token Marketplace: The platform incorporates a marketplace for buying and selling club tokens. Users can purchase club tokens using the native SportekaToken or other cryptocurrencies, enabling them to participate in sports club ownership and trade these assets.

- Futures Contract Creation: The Futures contract allows users to create and manage positions based on future predictions of sports events. This feature enables users to open, close, modify, and delete positions for specific sports-related outcomes using different tokens.

- Chainlink Oracle Integration: The system integrates Chainlink oracles to obtain external data necessary for various functionalities. This integration enables fetching data from external sources like APIs (e.g., Sportmonkie), updating token prices, and determining price fluctuations based on real-time information.

- ICO Allocation: The SportekaToken contract includes an Initial Coin Offering (ICO) allocation feature, granting a specific amount of tokens to ICO participants. This process is managed to prevent multiple claims from the same address.

- Ownership and Transfer of Tokens: Users can transfer ownership of club tokens, SportekaTokens, or tokens representing positions between addresses. This feature enables trading, staking, or using tokens within the Sporteka platform.

- Admin Functions and Controls: The system includes functionalities limited to admin roles, such as adding new clubs, setting club prices, and managing the platform's core operations. These controls ensure platform integrity and governance.

`Test Coverage`
- Unit testing ensures that all the codes meet the quality standards and the functions return the expected output.
- Test coverage shows us the extent of how much of our codes are covered by tests. We ideally aim for 100% coverage.

`Natspec commenting`
- This documentation provides information about the codebase and their implementation for both technical and non technical people. 


</p>

#
> ## Technologies
| <b><u>Stack</u></b> | <b><u>Usage</u></b> |
| :------------------ | :------------------ |
| **`Solidity`**      | Smart contract      |
| **`React JS`**      | Frontend            |

#
> ## Repo Setup

<p align="justify">
To setup the repo, first fork the chainlink-hack Repo, then clone the forked repository to create a copy on the local machine.
</p>

    $ git clone https://github.com/Sporteka-chainlink-hack/Sporteka12052023.git

<p align="justify">
Change directory to the cloned repo and set the original Sporteka-chainlink-hack repository as the "upstream" and your forked repository as the "origin" using gitbash. and make sure to switch to dev branch
</p>

    $ git remote add upstream  https://github.com/Sporteka-chainlink-hack/Sporteka12052023.git

#

> ## Requirements
#
- Hardhat
- Polygon key
- Metamask key
- Node JS
#
> ## Setup the Project
**`*Note:`**

<p align="justify">
This project was setup on a windows 10 system using the gitbash terminal. Some of the commands used may not work with the VScode terminal, command prompt or powershell.
</p>

The steps involved are outlined below:-
#
> ### Install Hardhat
The first step involves cloning and installing hardhat.
```shell
$ cd core

$ npm i -D hardhat

$ npm install

$ npm install --save-dev "@nomiclabs/hardhat-waffle" "ethereum-waffle" "chai" "@nomiclabs/hardhat-ethers" "ethers" "web3" "@nomiclabs/hardhat-web3" "@nomiclabs/hardhat-etherscan" "@openzeppelin/contracts" "dotenv" "@tenderly/hardhat-tenderly" "hardhat-gas-reporter" "hardhat-deploy"
```
> ### Env Setup
 Next create a `.env` file by using the sample.env. Retrieve your information from the relevant sites and input the information where needed in the `.env` file.





#
> ## Setup the Frontend
- First run the frontend on your local server to ensure it's fully functional before building for production.
#
> ### Install Dependencies
- Setup and install dependencies
 
```shell
$ npm install 

$ cd client 

$ npm install

$ cd..    

$ cd server

$ npm install

$ cd..

$ npm run start
```


#
> ## Testing the Smartcontract

- Coverage is used to view the percentage of the code required by tests and unittests were implemented to ensure that the code functions as expected
#
**`Coverage Test`**
- To test the smartcontract, first open a terminal and run the following command:

- First install Solidity Coverage
```
  $ npm i solidity-coverage
```
- Add `require('solidity-coverage')` to hardhat.config.json

- Install Ganache
``` 
  $ npm i ganache-cli
``` 
- Run coverage
```
$ npx hardhat coverage --network localhost

# if you get errors and you want to trace the error in the terminal
$ npx hardhat coverage --network localhost --show-stack-traces
```




# 

## Useful links

## View attribution files here



## Demo Video (Clients POV)


- [Pitch Deck](https://docs.google.com/presentation/d/1NyY9OxkOy0HlC2H3XU0ofv7KopBk-TP1dqL_sMGRExY/edit#slide=id.g54491d1c7cb78e5c_53)
- [Frontend Deployment](/)
- [Figma design](https://www.figma.com/file/ttyIDZ7GW2qwYCzefKVuWR?type=design)


> ## Contributors

This Project was created by these awesome dedicated members

 <a href="https://github.com/richieart123" target="_blank">**Richie**</a>
 <br />
 <a href="https://github.com/CramerJ1470" target="_blank">**John Cramer**</a>
<br />
 <a href="https://github.com/EnebeliEmmanuel" target="_blank">**Emmanuel Enebeli**</a>
<br />
 <a href="https://github.com/midnightmoet" target="_blank">**Lisa Miner**</a>
 <br />
 <a href="https://github.com/EndlessLucky" target="_blank">**kj crypto**</a>
#
> ## Contributing to the project

If you find something worth contributing, please fork the repo, make a pull request and add valid and well-reasoned explanations about your changes or comments.

Before adding a pull request, please note:

- This is an open source project.
- Your contributions should be inviting and clear.
- Any additions should be relevant.
- New features should be easy to contribute to.

All **`suggestions`** are welcome!
#
> ##### README Created by `Enebeli Emmanuel` for DigiPass

