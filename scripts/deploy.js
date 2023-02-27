const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["kyubi", "kakashi", "naruto"], //Name
        ["https://i.imgur.com/8Yj735O.jpg",
         "https://i.imgur.com/FuPh3FN.jpg",
         "https://i.imgur.com/GUpIApk.jpg"],
         [100, 200, 300], //HP values
         [100, 50, 25], // Attackdamage values
         "Jong Cena", //bossname
         "https://i.imgur.com/fTNkRnl.jpg", //boss image
         100000, //hp
         50 // attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

//     let txn;
//     // We only have three characters.
//     // an NFT w/ the character at index 2 of our array.
//     txn = await gameContract.mintCharacterNFT(2);
//     await txn.wait();

//     txn = await gameContract.attackBoss();
//     await txn.wait();

//     txn = await gameContract.attackBoss();
//     await txn.wait();
//   };
    }


const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
