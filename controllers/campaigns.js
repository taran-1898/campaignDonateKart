// require needed modules
const {get} = require('../utils')
const moment = require('moment')

// Function to get sorted campaigns

const getSortedCampaigns = async (req,res) => {
  try {
    const result = await get({
      url : `https://testapi.donatekart.com/api/campaign`,

    })
    let campaigns = JSON.parse(result.body)
    campaigns.sort((a,b) => (a.totalAmount < b.totalAmount) ? 1 : ((b.totalAmount < a.totalAmount) ? -1 : 0))
    res.json({
      status: 0,
      data: campaigns,
    })
  } catch (err) {
    console.log(err)
        res.json({
      status: -1,
      message: err,
    })
  }
}

// Function to get active campaigns

const getActiveCampaigns = async (req,res) => {
  try {
    const result = await get({
      url : `https://testapi.donatekart.com/api/campaign`,

    })
    const campaigns = JSON.parse(result.body)
    const output = campaigns.filter(campaign => {
      if (moment(campaign.endDate).isSameOrAfter(moment()) && moment(campaign.created).isSameOrAfter(moment().subtract(30, "days")))
      return campaign
    })
    res.json({
      status: 0,
      data: output,
    })
  } catch (err) {
    console.log(err)
        res.json({
      status: -1,
      message: err,
    })
  }
}

// Function to get Closed Campaigns

const getClosedCampaigns = async (req,res) => {
  try {
    const result = await get({
      url : `https://testapi.donatekart.com/api/campaign`,

    })
    const campaigns = JSON.parse(result.body)
    const output = campaigns.filter(campaign => {
      if (moment(campaign.endDate).isBefore(moment()) || campaign.procuredAmount >= campaign.totalAmount)
      return campaign
    })
    res.json({
      status: 0,
      data: output,
    })
  } catch (err) {
    console.log(err)
        res.json({
      status: -1,
      message: err,
    })
  }
}

module.exports = {
  getSortedCampaigns,
  getActiveCampaigns,
  getClosedCampaigns
}