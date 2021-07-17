const express = require('express')
const router = express.Router()
// Require necessary controllers
const campaignsCtrl = require('../../controllers/campaigns')


/*
* Routes for controller
*/

router.get('/getSortedCampaigns', campaignsCtrl.getSortedCampaigns)
router.get('/getActiveCampaigns', campaignsCtrl.getActiveCampaigns)
router.get('/getClosedCampaigns', campaignsCtrl.getClosedCampaigns)

module.exports = router