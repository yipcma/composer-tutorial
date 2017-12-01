'use strict';
/**
 * Track the trade of a commodity from one trader to another
 */

/**
 * Sample transaction
 * @param {org.acme.biznet.Trade} trade - the trade to be processed
 * @transaction
 */
function tradeCommodity(trade) {
  trade.commodity.owner = trade.newOwner;
  return getAssetRegistry('org.acme.biznet.Commodity').then(function(ar) {
    return assetRegistry.update(trade.commodity);
  });
}