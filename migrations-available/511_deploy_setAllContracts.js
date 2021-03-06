/**
 * Deployment script for FlightDelay
 *
 * @author Christoph Mussenbrock
 * @description Deploy FlightDelayController
 * @copyright (c) 2017 etherisc GmbH
 *
 */
const deployment = require('../deployment.js');
const log = require('../util/logger');

const FlightDelayController = artifacts.require('FlightDelayController.sol');

module.exports = (deployer, network) =>

    deployer.then(async () => {

        const controller = await FlightDelayController.deployed();

        log.info('Set all Contracts');
        await controller.setAllContracts({ from: deployment.networks[network].FD.owner, });

    });
