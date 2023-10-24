const DEVCoin = artifacts.require("DEVCoin");

contract("DEVCoin", (accounts) => {
    it("should match tokenname", async () => {
        const devCoin = await DEVCoin.deployed();
        const name = await devCoin.name();
        assert.equal(name, "DEVCoin", "Token name doesn't match");
    });

    it("should match the token symbol from the contract", async () => {
        const devCoin = await DEVCoin.deployed();
        const symbol = await devCoin.symbol();
        assert.equal(symbol, "DEV", "Token symbol doesn't match.");
    });

    it("should match the token decimals from the contract", async () => {
        const devCoin = await DEVCoin.deployed();
        const decimals = await devCoin.decimals();
        assert.equal(decimals, 14, "Token decimals don't match.");
    });

    it("should match the total supply from the contract", async () => {
        const devCoin = await DEVCoin.deployed();
        const totalSupply = await devCoin.totalSupply();
        const expectedSupply = 8000000 * 10 ** 14; 
        assert.equal(totalSupply.toNumber(), expectedSupply, "Total supply doesn't match.");
    });

    it("should have the initial supply in the creator's account", async () => {
        const devCoin = await DEVCoin.deployed();
        const creatorBalance = await devCoin.balanceOf(accounts[0]);
        const expectedSupply = 8000000 * 10 ** 14; 
        assert.equal(creatorBalance.toNumber(), expectedSupply, "Creator's balance doesn't match.");
    });
});
