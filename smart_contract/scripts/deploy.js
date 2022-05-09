const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionContract = await transactionsFactory.deploy();

  await transactionContract.deployed();

  console.log("Transactions address: ", transactionContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
