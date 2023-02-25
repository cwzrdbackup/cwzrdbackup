(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calculator-calculator-module"],{

/***/ "./src/app/pages/calculator/calculator.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/calculator/calculator.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout class=\"layout-container\">\n\n\t<nb-layout-header class=\"flex flexCenter platformHeader\">\n\t\t<app-header></app-header>\n\t</nb-layout-header>\n\n\t<nb-layout-column  class=\"px-3 px-md-5\">\n\t\t<nb-card class=\"f-w book-size book-alignment\">\t\n\t\t\t<nb-tabset fullWidth=\"true\">\t\t\t\n\t\t\t  <nb-tab class=\"tabsetText p-0 px-md-3 px-lg-5\" tabTitle=\"BITMEX\">\n\t\t\t\t  <i class=\"fal fa-info-circle information-popup-btn\" (click)='informationDisplay()'></i>\n\t\t\t\t  <nb-card-body class=\"flex p-2 p-md-3 mt-3\">\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-12 col-md-6 pr-md-3 pr-lg-5\">\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TRADING PAIR\n\t\t\t\t\t\t<button nbTooltip=\"Which trading pair do you want to trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button>\n\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t<nb-select [selected]=\"selected\" (selectedChange)=\"select($event)\" placeholder=\"TRADING PAIR\" class=\"mb-3\">\n\t\t\t\t\t\t\t<nb-option value=\"XBTUSD\">XBTUSD</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"ETHUSD\">ETHUSD</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"ADABTC\">ADABTC</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"BCHBTC\">BCHBTC</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"EOSBTC\">EOSBTC</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"LTCBTC\">LTCBTC</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"TRXBTC\">TRXBTC</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"XRPBTC\">XRPBTC</nb-option>\n\t\t\t\t\t\t</nb-select>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TYPE OF TRADE</div>\n\t\t\t\t\t\t<div class=\"flex mb-3 justify-content-center sizing-buttons\">\n\t\t\t\t\t\t\t<button status=\"success\" id=\"buy\" (click)=\"buyFlag($event)\" nbButton class=\"mr-3 sizing-btn buy-btn\">BUY</button>\n\t\t\t\t\t\t\t<button status=\"danger\" id=\"sell\" (click)=\"sellFlag($event)\" nbButton class=\"sizing-btn sell-btn\">SELL</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">ACCOUNT BALANCE <button nbTooltip=\"What is your total account balance?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"accountBalance\" #accountBalance nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">ENTRY PRICE <button nbTooltip=\"At what price are you planning to open a trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"entry-price-icon\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"entryPrice\" #entryPrice nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">STOP LOSS PRICE <button nbTooltip=\"At what price are you going to cut your losses?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"stop-price-icon\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"stopLossPrice\" #stopLossPrice nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TARGET PRICE <button nbTooltip=\"At what price are you planning to take a profit?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"target-price-icon\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"targetPrice\" #targetPrice nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK LIMIT <button nbTooltip=\"What percent of your whole account are you risking on this trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fas fa-percent\"></i></div>\n\t\t\t\t\t\t\t\t<input step=\".01\" type=\"number\" id=\"riskLimit\" #riskLimit nbInput placeholder=\"0\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"sizing-buttons flex justify-content-center mb-4 mb-md-1\"><button type=\"submit\" (click) = 'calculate(accountBalance.value, entryPrice.value, stopLossPrice.value, targetPrice.value, riskLimit.value)' nbButton class=\"submit-btn\">CALCULATE</button></div>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mobile-line mb-3\"></div>\n\t\t\t\t\t<div class=\"col-12 col-md-6 pl-md-3 pl-lg-5\">\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">QUANTITY <button nbTooltip=\"The suggested amount of contracts you need to buy/sell.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"quantity\" nbInput placeholder=\"0\" value=\"{{quantityAns | number:'1.0-0'}}\"\n\t\t\t\t\t\t\tclass=\"col-12 col-md-12 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">POTENTIAL WIN <button nbTooltip=\"The amount you will make if your trade reaches the target.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"potentialValue\" nbInput placeholder=\"0\" value=\"{{potentialWinAnswer | number:'1.5-5'}}\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">POTENTIAL LOSS <button nbTooltip=\"The amount you will lose if your trade reaches stop loss.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"potentialLoss\" nbInput placeholder=\"0\" value=\"{{potentialLossAnswer | number:'1.5-5'}}\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK LIMIT <button nbTooltip=\"It checks the risk you are taking on a trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"riskLimitResult\" nbInput placeholder=\"0\" value=\"{{riskLimitAns}}\"\n\t\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-sixth\" id=\"low-1\">\n\t\t\t\t\t\t\t\t\t\tLow\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-sixth\" id=\"good-1\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-sixth\" id=\"ideal-1\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"yellow-bar one-sixth\" id=\"good-1-2\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-sixth\" id=\"risky-1\">\n\t\t\t\t\t\t\t\t\t\tRisky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-sixth\" id=\"very-risky-1\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK REWARD <button nbTooltip=\"It checks the risk reward for the trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t<input disabled type=\"text\" id=\"\" nbInput placeholder=\"0:0\" value=\"{{riskRewardAns}}\"\n\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-fifth\" id=\"red-2\">\n\t\t\t\t\t\t\t\t\t\tBad\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-fifth\" id=\"orange-2\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-fifth\" id=\"green-2\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-fifth\" id=\"orange-2-2\">\n\t\t\t\t\t\t\t\t\t\tHigh\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-fifth\" id=\"red-2-2\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">LEVERAGE <button nbTooltip=\"It checks the required leverage on a trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t<input disabled type=\"text\" id=\"\" nbInput placeholder=\"0\" value=\"{{leverageAns}}\"\n\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-quarter\" id=\"green-3\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"yellow-bar one-quarter\" id=\"yellow-3\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-quarter\" id=\"orange-3\">\n\t\t\t\t\t\t\t\t\t\tRisky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-quarter\" id=\"red-3\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</nb-card-body>\n\t\t\t  </nb-tab>\n\t\t\t  <nb-tab class=\"tabsetText p-0 px-md-3 px-lg-5\" tabTitle=\"NON-LEVERAGE\">\t\n\t\t\t\t<i class=\"fal fa-info-circle information-popup-btn\" (click)='informationDisplay()'></i> \n\t\t\t\t<nb-card-body class=\"flex p-2 p-md-3 mt-3\">\n\t\t\t\t\t<div class=\"col-12 col-md-6 pr-md-3 pr-lg-5\">\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TRADING PAIR\n\t\t\t\t\t\t<button nbTooltip=\"Which trading pair do you want to trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button>\n\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t<nb-select [selected]=\"selected\" (selectedChange)=\"selectN($event)\" placeholder=\"TRADING PAIR\" class=\"mb-3\">\n\t\t\t\t\t\t\t<nb-option value=\"USDPAIR\">USD PAIR</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"BTCPAIR\">BTC PAIR</nb-option>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</nb-select>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TYPE OF TRADE</div>\n\t\t\t\t\t\t<div class=\"flex mb-3 justify-content-center sizing-buttons\">\n\t\t\t\t\t\t\t<button status=\"success\" id=\"buy\" (click)=\"buyFlag($event)\" nbButton class=\"mr-3 sizing-btn buy-btn\">BUY</button>\n\t\t\t\t\t\t\t<button status=\"danger\" id=\"sell\" (click)=\"sellFlag($event)\" nbButton class=\"sizing-btn sell-btn\">SELL</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">ACCOUNT BALANCE <button nbTooltip=\"What is your total account balance?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"accountBalance\" #accountBalanceNL nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">ENTRY PRICE <button nbTooltip=\"At what price are you planning to open a trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"entry-price-icon-NL\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"entryPrice\" #entryPriceNL nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">STOP LOSS PRICE <button nbTooltip=\"At what price are you going to cut your losses?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"stop-price-icon-NL\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"stopLossPrice\" #stopLossPriceNL nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TARGET PRICE <button nbTooltip=\"At what price are you planning to take a profit?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"target-price-icon-NL\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"targetPrice\" #targetPriceNL nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK LIMIT <button nbTooltip=\"What percent of your whole account are you risking on this trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fas fa-percent\"></i></div>\n\t\t\t\t\t\t\t\t<input step=\".01\" type=\"number\" id=\"riskLimit\" #riskLimitNL nbInput placeholder=\"0\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"sizing-buttons flex justify-content-center mb-4 mb-md-1\"><button type=\"submit\" (click) = 'calculateNL(accountBalanceNL.value, entryPriceNL.value, stopLossPriceNL.value, targetPriceNL.value, riskLimitNL.value)' nbButton class=\"submit-btn\">CALCULATE</button></div>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mobile-line mb-3\"></div>\n\t\t\t\t\t<div class=\"col-12 col-md-6 pl-md-3 pl-lg-5\">\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">QUANTITY <button nbTooltip=\"BUY ORDER: The suggested amount of margin (money) you need to open a trade. SELL ORDER: The suggested amount of coins you need to open a trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"quantity\" nbInput placeholder=\"0\" value=\"{{quantityAnsNL | number:'1.0-0'}}\"\n\t\t\t\t\t\t\tclass=\"col-12 col-md-12 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">POTENTIAL WIN <button nbTooltip=\"The amount you will make if your trade reaches the target.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"potentialValue\" nbInput placeholder=\"0\" value=\"{{potentialWinAnswerNL | number:'1.5-5'}}\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">POTENTIAL LOSS <button nbTooltip=\"The amount you will lose if your trade reaches stop loss.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"potentialLoss\" nbInput placeholder=\"0\" value=\"{{potentialLossAnswerNL | number:'1.5-5'}}\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK LIMIT <button nbTooltip=\"It checks the risk you are taking on a trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"riskLimitResult\" nbInput placeholder=\"0\" value=\"{{riskLimitAnsNL}}\"\n\t\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-sixth\" id=\"lowNL-1\">\n\t\t\t\t\t\t\t\t\t\tLow\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-sixth\" id=\"goodNL-1\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-sixth\" id=\"idealNL-1\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"yellow-bar one-sixth\" id=\"goodNL-1-2\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-sixth\" id=\"riskyNL-1\">\n\t\t\t\t\t\t\t\t\t\tRisky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-sixth\" id=\"very-riskyNL-1\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK REWARD <button nbTooltip=\"It checks the risk reward for the trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t<input disabled type=\"text\" id=\"\" nbInput placeholder=\"0:0\" value=\"{{riskRewardAnsNL}}\"\n\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-fifth\" id=\"redNL-2\">\n\t\t\t\t\t\t\t\t\t\tBad\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-fifth\" id=\"orangeNL-2\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-fifth\" id=\"greenNL-2\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-fifth\" id=\"orangeNL-2-2\">\n\t\t\t\t\t\t\t\t\t\tHigh\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-fifth\" id=\"redNL-2-2\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">LEVERAGE <button nbTooltip=\"NOT REQUIRED.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t<input disabled type=\"text\" id=\"\" nbInput placeholder=\"0\" value=\"{{leverageAnsNL}}\"\n\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-quarter\" id=\"greenNL-3\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"yellow-bar one-quarter\" id=\"yellowNL-3\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-quarter\" id=\"orangeNL-3\">\n\t\t\t\t\t\t\t\t\t\tRisky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-quarter\" id=\"redNL-3\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</nb-card-body>\n\t\t\t  </nb-tab>\n\t\t\t  <nb-tab class=\"tabsetText p-0 px-md-3 px-lg-5\" tabTitle=\"BITFINEX\">\t  \n\t\t\t\t<i class=\"fal fa-info-circle information-popup-btn\" (click)='informationDisplay()'></i>  \n\t\t\t\t<nb-card-body class=\"flex p-2 p-md-3 mt-3\">\n\t\t\t\t\t<div class=\"col-12 col-md-6 pr-md-3 pr-lg-5\">\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TYPE <button nbTooltip=\"What trade type are you entering?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>  \n\t\t\t\t\t\t<nb-select placeholder=\"TYPE\" [selected]=\"selected\" (selectedChange)=\"selectBL($event)\" class=\"mb-3\">\n\t\t\t\t\t\t\t<nb-option value=\"LEVERAGE\">LEVERAGE</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"NON-LEVERAGE\">NON-LEVERAGE</nb-option>\n\t\t\t\t\t\t</nb-select>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TRADING PAIR\n\t\t\t\t\t\t<button nbTooltip=\"Which trading pair do you want to trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button>\n\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t<nb-select [selected]=\"selected\" (selectedChange)=\"selectB($event)\" placeholder=\"TRADING PAIR\" class=\"mb-3\">\n\t\t\t\t\t\t\t<nb-option value=\"USDPAIR\">USD PAIR</nb-option>\n\t\t\t\t\t\t\t<nb-option value=\"BTCPAIR\">BTC PAIR</nb-option>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</nb-select>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TYPE OF TRADE</div>\n\t\t\t\t\t\t<div class=\"flex mb-3 justify-content-center sizing-buttons\">\n\t\t\t\t\t\t\t<button status=\"success\" id=\"buy\" (click)=\"buyFlag($event)\" nbButton class=\"mr-3 sizing-btn buy-btn\">BUY</button>\n\t\t\t\t\t\t\t<button status=\"danger\" id=\"sell\" (click)=\"sellFlag($event)\" nbButton class=\"sizing-btn sell-btn\">SELL</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">ACCOUNT BALANCE <button nbTooltip=\"What is your total account balance?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"accountBalance\" #accountBalanceB nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">ENTRY PRICE <button nbTooltip=\"At what price are you planning to open a trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"entry-price-icon-B\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"entryPrice\" #entryPriceB nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">STOP LOSS PRICE <button nbTooltip=\"At what price are you going to cut your losses?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"stop-price-icon-B\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"stopLossPrice\" #stopLossPriceB nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">TARGET PRICE <button nbTooltip=\"At what price are you planning to take a profit?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i id=\"target-price-icon-B\" class=\"fas fa-dollar-sign\"></i></div>\n\t\t\t\t\t\t\t\t<input type=\"number\" id=\"targetPrice\" #targetPriceB nbInput placeholder=\"0.00\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK LIMIT <button nbTooltip=\"What percent of your whole account are you risking on this trade?\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fas fa-percent\"></i></div>\n\t\t\t\t\t\t\t\t<input step=\".01\" type=\"number\" id=\"riskLimit\" #riskLimitB nbInput placeholder=\"0\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"sizing-buttons flex justify-content-center mb-4 mb-md-1\"><button type=\"submit\" (click) = 'calculateB(accountBalanceB.value, entryPriceB.value, stopLossPriceB.value, targetPriceB.value, riskLimitB.value)' nbButton class=\"submit-btn\">CALCULATE</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mobile-line mb-3\"></div>\n\t\t\t\t\t<div class=\"col-12 col-md-6 pl-md-3 pl-lg-5\">\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">QUANTITY <button nbTooltip=\"BUY ORDER: The suggested amount of margin (money) you need to open a trade. SELL ORDER: The suggested amount of coins you need to open a trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"quantity\" nbInput placeholder=\"0\" value=\"{{quantityAnsB | number:'1.0-0'}}\"\n\t\t\t\t\t\t\tclass=\"col-12 col-md-12 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">POTENTIAL WIN <button nbTooltip=\"The amount you will make if your trade reaches the target.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"potentialValue\" nbInput placeholder=\"0\" value=\"{{potentialWinAnswerB | number:'1.5-5'}}\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">POTENTIAL LOSS <button nbTooltip=\"The amount you will lose if your trade reaches stop loss.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex input-height mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1 p-0 icon-height-container\"><i class=\"fab fa-btc\"></i></div>\n\t\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"potentialLoss\" nbInput placeholder=\"0\" value=\"{{potentialLossAnswerB | number:'1.5-5'}}\"\n\t\t\t\t\t\t\t\tclass=\"col-11 col-md-11 input-bg-3 light-color-2 input-md input-rectangle\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK LIMIT <button nbTooltip=\"It checks the risk you are taking on a trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t\t<input disabled type=\"text\" id=\"riskLimitResult\" nbInput placeholder=\"0\" value=\"{{riskLimitAnsB}}\"\n\t\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-sixth\" id=\"lowB-1\">\n\t\t\t\t\t\t\t\t\t\tLow\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-sixth\" id=\"goodB-1\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-sixth\" id=\"idealB-1\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"yellow-bar one-sixth\" id=\"goodB-1-2\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-sixth\" id=\"riskyB-1\">\n\t\t\t\t\t\t\t\t\t\tRisky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-sixth\" id=\"very-riskyB-1\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">RISK REWARD <button nbTooltip=\"It checks the risk reward for the trade.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t<input disabled type=\"text\" id=\"\" nbInput placeholder=\"0:0\" value=\"{{riskRewardAnsB}}\"\n\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-fifth\" id=\"redB-2\">\n\t\t\t\t\t\t\t\t\t\tBad\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-fifth\" id=\"orangeB-2\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-fifth\" id=\"greenB-2\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-fifth\" id=\"orangeB-2-2\">\n\t\t\t\t\t\t\t\t\t\tHigh\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-fifth\" id=\"redB-2-2\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"calculator-title mb-3\">LEVERAGE <button nbTooltip=\"NOT REQUIRED.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button></div>\n\t\t\t\t\t\t<div class=\"flex\">\n\t\t\t\t\t\t<input disabled type=\"text\" id=\"\" nbInput placeholder=\"0\" value=\"{{leverageAnsB}}\"\n\t\t\t\t\t\tclass=\"col-4 col-md-4 input-bg-3 light-color-2 input-md input-rectangle mb-3\">\n\t\t\t\t\t\t<div class=\"col-8 col-md-8 pr-0\">\n\t\t\t\t\t\t\t\t<div class=\"gauge-bar\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"green-bar one-quarter\" id=\"greenB-3\">\n\t\t\t\t\t\t\t\t\t\tIdeal\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"yellow-bar one-quarter\" id=\"yellowB-3\">\n\t\t\t\t\t\t\t\t\t\tGood\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"orange-bar one-quarter\" id=\"orangeB-3\">\n\t\t\t\t\t\t\t\t\t\tRisky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"red-bar one-quarter\" id=\"redB-3\">\n\t\t\t\t\t\t\t\t\t\tVery Risky\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</nb-card-body>\n\t\t\t  </nb-tab>\t\t\t  \t\t  \n\t\t\t</nb-tabset>\n\t\t  </nb-card>\n\t</nb-layout-column>\n\n\t<nb-layout-footer class=\"footer-main\">\n\t\t&copy; 2021 Powered by <a target=\"_blank\" class=\"wzrdgroup-link\" href=\"http://wzrdgroup.com/\">WZRD Group</a>\n\t</nb-layout-footer>\n\n</nb-layout>\n\n<div class=\"modal fade\" id=\"alertModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content alert-modal-content\">\n            <div class=\"modal-body text-center\">\n                <button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <div class=\"pt-5 pb-5\">\n                    <div>\n                        {{alertModalMessage}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"alertModalInfo\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t\t<div class=\"modal-content alert-modal-content\">\n\t\t\t\t<div class=\"modal-body text-center\">\n\t\t\t\t\t<button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\"pt-3 pb-3\">\n\t\t\t\t\t\t<div class=\"calc-text\">\n\t\t\t\t\t\t\t\t<div class=\"text-center mb-3 text-uppercase\">How to use the WZRD calculator?</div>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t\tStep 1: Choose the Exchange Type\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tYou can choose between Bitmex, Bitfinex and Non-Leverage exchanges.\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t\tStep 2: Choose the trading pair\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t\tStep 3: Choose a trade type. If on Bitfinex, also choose whether you'll be using leverage or not.\n\t\t\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t\tStep 4: Enter the account balance\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tAccount balances in this calculator are computed using Bitcoin.\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t\tStep 5: Enter entry, target and stop loss price\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t\tStep 6: Enter the risk limit\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\tStep 7: Click the Calculate button\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tThe results will include the quantity (suggested position size for Bitmex and suggested amount of margin or coins for the other exchange types), potential win, potential loss, risk-reward checker, risk limit checker, and the leverage checker. Please note that you will have to account for exchange fees and the possibility of slippage.\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/pages/calculator/calculator.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/calculator/calculator.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/calculator/calculator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/calculator/calculator.component.ts ***!
  \**********************************************************/
/*! exports provided: calculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorComponent", function() { return calculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");







var calculatorComponent = /** @class */ (function () {
    function calculatorComponent(zone, _dataservice, _router, router, route, dialogService, _passingDataservice, _configuration) {
        this.zone = zone;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        this._passingDataservice = _passingDataservice;
        this._configuration = _configuration;
        this.alertModalMessage = '';
        // Line 10 - Line 17
        this.subText = ''; // The text that should appear in the sub-display
        this.mainText = ''; // The text that should appear in the main display
        this.operator = ''; // The operator
        this.calculationString = '';
        // This is the string that denotes the operation being performed
        this.answered = false;
        // A flag to check whether the solution has been processed
        this.operatorSet = false; // You'll see how this is used soon
        this.testData = [
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
            { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true }
        ];
        this.selected = "TRADING PAIR";
        this.loading = true;
        this.chunkedData = [];
    }
    calculatorComponent.prototype.clicked = function (e) {
        this.selected = e.data.name;
    };
    calculatorComponent.prototype.select = function (e) {
        this.selected = e;
        if (e === "TOTAL") {
        }
        else if (e === "XBTUSD" || e === "ETHUSD" || e === "USDPAIR") {
            $("#entry-price-icon").addClass("fas");
            $("#entry-price-icon").addClass("fa-dollar-sign");
            $("#entry-price-icon").removeClass("fab");
            $("#entry-price-icon").removeClass("fa-btc");
            $("#stop-price-icon").addClass("fas");
            $("#stop-price-icon").addClass("fa-dollar-sign");
            $("#stop-price-icon").removeClass("fab");
            $("#stop-price-icon").removeClass("fa-btc");
            $("#target-price-icon").addClass("fas");
            $("#target-price-icon").addClass("fa-dollar-sign");
            $("#target-price-icon").removeClass("fab");
            $("#target-price-icon").removeClass("fa-btc");
        }
        else if (e === "ADABTC" || e === "BCHBTC" || e === "EOSBTC" || e === "LTCBTC" || e === "TRXBTC" || e === "XRPBTC" || e === "BTCPAIR") {
            $("#entry-price-icon").removeClass("fas");
            $("#entry-price-icon").removeClass("fa-dollar-sign");
            $("#entry-price-icon").addClass("fab");
            $("#entry-price-icon").addClass("fa-btc");
            $("#stop-price-icon").removeClass("fas");
            $("#stop-price-icon").removeClass("fa-dollar-sign");
            $("#stop-price-icon").addClass("fab");
            $("#stop-price-icon").addClass("fa-btc");
            $("#target-price-icon").removeClass("fas");
            $("#target-price-icon").removeClass("fa-dollar-sign");
            $("#target-price-icon").addClass("fab");
            $("#target-price-icon").addClass("fa-btc");
        }
    };
    calculatorComponent.prototype.selectN = function (e) {
        if (e === "USDPAIR") {
            this.pairSelectedNL = true;
            $("#entry-price-icon-NL").addClass("fas");
            $("#entry-price-icon-NL").addClass("fa-dollar-sign");
            $("#entry-price-icon-NL").removeClass("fab");
            $("#entry-price-icon-NL").removeClass("fa-btc");
            $("#stop-price-icon-NL").addClass("fas");
            $("#stop-price-icon-NL").addClass("fa-dollar-sign");
            $("#stop-price-icon-NL").removeClass("fab");
            $("#stop-price-icon-NL").removeClass("fa-btc");
            $("#target-price-icon-NL").addClass("fas");
            $("#target-price-icon-NL").addClass("fa-dollar-sign");
            $("#target-price-icon-NL").removeClass("fab");
            $("#target-price-icon-NL").removeClass("fa-btc");
        }
        else if (e === "BTCPAIR") {
            this.pairSelectedNL = true;
            $("#entry-price-icon-NL").removeClass("fas");
            $("#entry-price-icon-NL").removeClass("fa-dollar-sign");
            $("#entry-price-icon-NL").addClass("fab");
            $("#entry-price-icon-NL").addClass("fa-btc");
            $("#stop-price-icon-NL").removeClass("fas");
            $("#stop-price-icon-NL").removeClass("fa-dollar-sign");
            $("#stop-price-icon-NL").addClass("fab");
            $("#stop-price-icon-NL").addClass("fa-btc");
            $("#target-price-icon-NL").removeClass("fas");
            $("#target-price-icon-NL").removeClass("fa-dollar-sign");
            $("#target-price-icon-NL").addClass("fab");
            $("#target-price-icon-NL").addClass("fa-btc");
        }
    };
    calculatorComponent.prototype.selectBL = function (e) {
        if (e === "LEVERAGE") {
            this.bitfinexFlagLeverage = true;
            this.bitfinexFlagNonLeverage = false;
        }
        else if (e === "NON-LEVERAGE") {
            this.bitfinexFlagLeverage = false;
            this.bitfinexFlagNonLeverage = true;
        }
    };
    calculatorComponent.prototype.selectB = function (e) {
        if (e === "USDPAIR") {
            this.pairSelected = true;
            $("#entry-price-icon-B").addClass("fas");
            $("#entry-price-icon-B").addClass("fa-dollar-sign");
            $("#entry-price-icon-B").removeClass("fab");
            $("#entry-price-icon-B").removeClass("fa-btc");
            $("#stop-price-icon-B").addClass("fas");
            $("#stop-price-icon-B").addClass("fa-dollar-sign");
            $("#stop-price-icon-B").removeClass("fab");
            $("#stop-price-icon-B").removeClass("fa-btc");
            $("#target-price-icon-B").addClass("fas");
            $("#target-price-icon-B").addClass("fa-dollar-sign");
            $("#target-price-icon-B").removeClass("fab");
            $("#target-price-icon-B").removeClass("fa-btc");
        }
        else if (e === "BTCPAIR") {
            this.pairSelected = true;
            $("#entry-price-icon-B").removeClass("fas");
            $("#entry-price-icon-B").removeClass("fa-dollar-sign");
            $("#entry-price-icon-B").addClass("fab");
            $("#entry-price-icon-B").addClass("fa-btc");
            $("#stop-price-icon-B").removeClass("fas");
            $("#stop-price-icon-B").removeClass("fa-dollar-sign");
            $("#stop-price-icon-B").addClass("fab");
            $("#stop-price-icon-B").addClass("fa-btc");
            $("#target-price-icon-B").removeClass("fas");
            $("#target-price-icon-B").removeClass("fa-dollar-sign");
            $("#target-price-icon-B").addClass("fab");
            $("#target-price-icon-B").addClass("fa-btc");
        }
    };
    calculatorComponent.prototype.calculateB = function (accountBalanceB, entryPriceB, stopLossPriceB, targetPriceB, riskLimitB) {
        $("#lowB-1").removeClass("result-outline");
        $("#goodB-1").removeClass("result-outline");
        $("#idealB-1").removeClass("result-outline");
        $("#goodB-1-2").removeClass("result-outline");
        $("#riskyB-1").removeClass("result-outline");
        $("#very-riskyB-1").removeClass("result-outline");
        $("#redB-2").removeClass("result-outline");
        $("#orangeB-2").removeClass("result-outline");
        $("#greenB-2").removeClass("result-outline");
        $("#orangeB-2-2").removeClass("result-outline");
        $("#redB-2-2").removeClass("result-outline");
        // $("#greenB-3").removeClass("result-outline");
        // $("#yellowB-3").removeClass("result-outline");
        // $("#orangeB-3").removeClass("result-outline");
        // $("#redB-3").removeClass("result-outline");
        if (+accountBalanceB === 0 || +entryPriceB === 0 || +stopLossPriceB === 0 || +targetPriceB === 0 || +riskLimitB === 0) {
            this.alertModalMessage = 'Please fill in all entries.';
            $('#alertModal').modal('show');
            return;
        }
        if (this.bitfinexFlagLeverage) {
            if (!this.pairSelected) {
                this.alertModalMessage = 'Please select a trading pair.';
                $('#alertModal').modal('show');
                return;
            }
            if (this.buyFlagV) {
                if (+entryPriceB > +targetPriceB || +entryPriceB < +stopLossPriceB) {
                    this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
                    $('#alertModal').modal('show');
                    return;
                }
                if (this.t = Math.abs(+entryPriceB - +stopLossPriceB),
                    Math.abs(+entryPriceB - +targetPriceB),
                    this.a = this.t / +entryPriceB * 100,
                    this.r = +riskLimitB / this.a,
                    this.n = this.r * +accountBalanceB,
                    this.r > 3
                // this.alertModalMessage = 'Please lower the risk limit.',
                // $('#alertModal').modal('show')
                )
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                this.c = this.quantityB ? this.quantityB : this.n / +entryPriceB,
                    +entryPriceB > +stopLossPriceB ? (this.l = Math.abs(this.c * +stopLossPriceB - this.n),
                        this.i = this.c * +targetPriceB - this.n,
                        void 0 !== +targetPriceB && (this.s = this.c * +targetPriceB - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceB),
                        this.i = this.n - this.c * +targetPriceB,
                        void 0 !== +targetPriceB && (this.s = this.n - this.c * +targetPriceB)),
                    this.o = Math.abs(this.l / this.i),
                    Math.abs(this.l / this.s);
                this.u = this.o > 1 ? this.o : 1 / this.o;
                //return this.c = Ma(c || ""),
                //this.l = Ma(this.l || ""),
                //this.i = Ma(this.i || ""),        
                this.quantityAnsB = Math.round(this.c);
                this.potentialWinAnswerB = this.i;
                this.potentialLossAnswerB = -1 * this.l;
                this.riskRewardNumB = parseFloat(this.u.toFixed(2));
                this.riskRewardAnsB = "1 : " + this.u.toFixed(2);
                this.riskLimitAnsB = +riskLimitB + "%";
                //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                this.leverageAnsB = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
            }
            else if (this.sellFlagV) {
                if (+entryPriceB > +stopLossPriceB || +entryPriceB < +targetPriceB) {
                    this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
                    $('#alertModal').modal('show');
                    return;
                }
                // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                // Math.abs(+entryPriceNL - +targetPriceNL),
                // this.r = this.t / +entryPriceNL * 100,
                // this.u = (this.n = +riskLimitNL / this.r) * +accountBalanceNL,
                // this.n > 1)
                //     return;
                // this.c = this.quantityNL ? this.quantityNL : this.u / +entryPriceNL,
                // this.l = +stopLossPriceNL * this.c - this.u,
                // this.s = +targetPriceNL * this.c - this.u,
                // void 0 !== +targetPriceNL && (this.i = this.c * +targetPriceNL - this.u,
                // Math.abs(this.i / this.l)),
                // this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o;
                if (this.t = Math.abs(+entryPriceB - +stopLossPriceB),
                    Math.abs(+entryPriceB - +targetPriceB),
                    this.a = this.t / +entryPriceB * 100,
                    this.r = +riskLimitB / this.a,
                    this.n = this.r * +accountBalanceB,
                    this.r > 3
                // this.alertModalMessage = 'Please lower the risk limit.',
                // $('#alertModal').modal('show')
                )
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                this.c = this.quantityB ? this.quantityB : this.n / +entryPriceB,
                    +entryPriceB > +stopLossPriceB ? (this.l = Math.abs(this.c * +stopLossPriceB - this.n),
                        this.i = this.c * +targetPriceB - this.n,
                        void 0 !== +targetPriceB && (this.s = this.c * +targetPriceB - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceB),
                        this.i = this.n - this.c * +targetPriceB,
                        void 0 !== +targetPriceB && (this.s = this.n - this.c * +targetPriceB)),
                    this.o = Math.abs(this.l / this.i),
                    Math.abs(this.l / this.s);
                this.u = this.o > 1 ? this.o : 1 / this.o;
                //return this.c = Ma(c || ""),
                //this.l = Ma(this.l || ""),
                //this.i = Ma(this.i || ""),                    
                this.quantityAnsB = Math.round(this.c);
                this.potentialWinAnswerB = this.i;
                this.potentialLossAnswerB = -1 * this.l;
                this.riskRewardNumB = parseFloat(this.u.toFixed(2));
                this.riskRewardAnsB = "1 : " + this.u.toFixed(2);
                this.riskLimitAnsB = +riskLimitB + "%";
                this.leverageAnsB = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);      
                // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                // Math.abs(+entryPriceNL - +targetPriceNL),
                // this.a = this.t / +entryPriceNL * 100,
                // this.r = +riskLimitNL / this.a,
                // this.n = this.r * +accountBalanceNL,
                // this.r > 3)
                // return;
                // this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
                // +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
                // this.i = this.c * +targetPriceNL - this.n,
                // void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
                // this.i = this.n - this.c * +targetPriceNL,
                // void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
                // this.o = Math.abs(this.l / this.i),
                // Math.abs(this.l / this.s);
                // this.u = this.o > 1 ? this.o : 1 / this.o;
                // //return this.c = Ma(c || ""),
                // //this.l = Ma(this.l || ""),
                // //this.i = Ma(this.i || ""),                    
                // this.quantityAnsNL = Math.round(this.c);
                // this.potentialWinAnswerNL = this.i;
                // this.potentialLossAnswerNL = -1 * this.l;
                // this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
                // this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
                // this.riskLimitAnsNL = +riskLimitNL + "%";
                // //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                // this.leverageAnsNL = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);            
            }
            else {
                this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
                $('#alertModal').modal('show');
                return;
            }
        }
        else if (this.bitfinexFlagNonLeverage) {
            if (this.buyFlagV) {
                if (+entryPriceB > +targetPriceB || +entryPriceB < +stopLossPriceB) {
                    this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
                    $('#alertModal').modal('show');
                    return;
                }
                if (this.t = Math.abs(+entryPriceB - +stopLossPriceB),
                    Math.abs(+entryPriceB - +targetPriceB),
                    this.a = this.t / +entryPriceB * 100,
                    this.r = +riskLimitB / this.a,
                    this.n = this.r * +accountBalanceB,
                    this.r > 3)
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                this.c = this.quantityB ? this.quantityB : this.n / +entryPriceB,
                    +entryPriceB > +stopLossPriceB ? (this.l = Math.abs(this.c * +stopLossPriceB - this.n),
                        this.i = this.c * +targetPriceB - this.n,
                        void 0 !== +targetPriceB && (this.s = this.c * +targetPriceB - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceB),
                        this.i = this.n - this.c * +targetPriceB,
                        void 0 !== +targetPriceB && (this.s = this.n - this.c * +targetPriceB)),
                    this.o = Math.abs(this.l / this.i),
                    Math.abs(this.l / this.s);
                this.u = this.o > 1 ? this.o : 1 / this.o;
                //return this.c = Ma(c || ""),
                //this.l = Ma(this.l || ""),
                //this.i = Ma(this.i || ""),        
                this.quantityAnsB = Math.round(this.c);
                this.potentialWinAnswerB = this.i;
                this.potentialLossAnswerB = -1 * this.l;
                this.riskRewardNumB = parseFloat(this.u.toFixed(2));
                this.riskRewardAnsB = "1 : " + this.u.toFixed(2);
                this.riskLimitAnsB = +riskLimitB + "%";
                //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                this.leverageAnsB = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
            }
            else if (this.sellFlagV) {
                if (+entryPriceB > +stopLossPriceB || +entryPriceB < +targetPriceB) {
                    this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
                    $('#alertModal').modal('show');
                    return;
                }
                // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                // Math.abs(+entryPriceNL - +targetPriceNL),
                // this.r = this.t / +entryPriceNL * 100,
                // this.u = (this.n = +riskLimitNL / this.r) * +accountBalanceNL,
                // this.n > 1)
                //     return;
                // this.c = this.quantityNL ? this.quantityNL : this.u / +entryPriceNL,
                // this.l = +stopLossPriceNL * this.c - this.u,
                // this.s = +targetPriceNL * this.c - this.u,
                // void 0 !== +targetPriceNL && (this.i = this.c * +targetPriceNL - this.u,
                // Math.abs(this.i / this.l)),
                // this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o;
                if (this.a = +accountBalanceB * +entryPriceB / +stopLossPriceB,
                    this.r = +accountBalanceB - this.a,
                    this.n = +riskLimitB * +stopLossPriceB / (100 * (+stopLossPriceB - +entryPriceB)),
                    this.c = this.quantityB ? this.quantityB : this.n * +accountBalanceB,
                    this.l = (+entryPriceB - +stopLossPriceB) / +stopLossPriceB * this.c,
                    this.s = (+entryPriceB - +targetPriceB) / +targetPriceB * this.c,
                    this.n > 1)
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                void 0 !== +targetPriceB && (this.i = this.c * ((+entryPriceB - +targetPriceB) / +targetPriceB)) / Math.abs(this.l),
                    this.m = (this.o = this.s / Math.abs(this.l)) > 1 ? this.o : 1 / this.o;
                this.quantityAnsB = Math.round(this.c);
                this.potentialWinAnswerB = this.s;
                this.potentialLossAnswerB = this.l;
                this.riskRewardNumB = parseFloat(this.m.toFixed(2));
                this.riskRewardAnsB = "1 : " + this.m.toFixed(2);
                this.riskLimitAnsB = +riskLimitB + "%";
                //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                this.leverageAnsB = "NONE";
                // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                // Math.abs(+entryPriceNL - +targetPriceNL),
                // this.a = this.t / +entryPriceNL * 100,
                // this.r = +riskLimitNL / this.a,
                // this.n = this.r * +accountBalanceNL,
                // this.r > 3)
                // return;
                // this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
                // +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
                // this.i = this.c * +targetPriceNL - this.n,
                // void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
                // this.i = this.n - this.c * +targetPriceNL,
                // void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
                // this.o = Math.abs(this.l / this.i),
                // Math.abs(this.l / this.s);
                // this.u = this.o > 1 ? this.o : 1 / this.o;
                // //return this.c = Ma(c || ""),
                // //this.l = Ma(this.l || ""),
                // //this.i = Ma(this.i || ""),                    
                // this.quantityAnsNL = Math.round(this.c);
                // this.potentialWinAnswerNL = this.i;
                // this.potentialLossAnswerNL = -1 * this.l;
                // this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
                // this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
                // this.riskLimitAnsNL = +riskLimitNL + "%";
                // //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                // this.leverageAnsNL = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);            
            }
            else {
                this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
                $('#alertModal').modal('show');
                return;
            }
        }
        if (+riskLimitB < .5) {
            $("#lowB-1").addClass("result-outline");
        }
        else if (.5 <= +riskLimitB && +riskLimitB < 1) {
            $("#goodB-1").addClass("result-outline");
        }
        else if (1 <= +riskLimitB && +riskLimitB < 2) {
            $("#idealB-1").addClass("result-outline");
        }
        else if (2 <= +riskLimitB && +riskLimitB < 3) {
            $("#goodB-1-2").addClass("result-outline");
        }
        else if (3 <= +riskLimitB && +riskLimitB < 5) {
            $("#riskyB-1").addClass("result-outline");
        }
        else if (5 <= +riskLimitB) {
            $("#very-riskyB-1").addClass("result-outline");
        }
        if (this.riskRewardNumB < 1) {
            $("#redB-2").addClass("result-outline");
        }
        else if (1 <= this.riskRewardNumB && this.riskRewardNumB < 2) {
            $("#orangeB-2").addClass("result-outline");
        }
        else if (2 <= this.riskRewardNumB && this.riskRewardNumB < 3) {
            $("#greenB-2").addClass("result-outline");
        }
        else if (3 <= this.riskRewardNumB && this.riskRewardNumB < 5) {
            $("#orangeB-2-2").addClass("result-outline");
        }
        else if (5 <= this.riskRewardNumB) {
            $("#redB-2-2").addClass("result-outline");
        }
    };
    calculatorComponent.prototype.calculateNL = function (accountBalanceNL, entryPriceNL, stopLossPriceNL, targetPriceNL, riskLimitNL) {
        $("#lowNL-1").removeClass("result-outline");
        $("#goodNL-1").removeClass("result-outline");
        $("#idealNL-1").removeClass("result-outline");
        $("#goodNL-1-2").removeClass("result-outline");
        $("#riskyNL-1").removeClass("result-outline");
        $("#very-riskyNL-1").removeClass("result-outline");
        $("#redNL-2").removeClass("result-outline");
        $("#orangeNL-2").removeClass("result-outline");
        $("#greenNL-2").removeClass("result-outline");
        $("#orangeNL-2-2").removeClass("result-outline");
        $("#redNL-2-2").removeClass("result-outline");
        $("#greenNL-3").removeClass("result-outline");
        $("#yellowNL-3").removeClass("result-outline");
        $("#orangeNL-3").removeClass("result-outline");
        $("#redNL-3").removeClass("result-outline");
        if (+accountBalanceNL === 0 || +entryPriceNL === 0 || +stopLossPriceNL === 0 || +targetPriceNL === 0 || +riskLimitNL === 0) {
            this.alertModalMessage = 'Please fill in all entries.';
            $('#alertModal').modal('show');
            return;
        }
        if (!this.pairSelectedNL) {
            this.alertModalMessage = 'Please select a trading pair.';
            $('#alertModal').modal('show');
            return;
        }
        else {
            if (this.buyFlagV) {
                if (+entryPriceNL > +targetPriceNL || +entryPriceNL < +stopLossPriceNL) {
                    this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
                    $('#alertModal').modal('show');
                    return;
                }
                if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                    Math.abs(+entryPriceNL - +targetPriceNL),
                    this.a = this.t / +entryPriceNL * 100,
                    this.r = +riskLimitNL / this.a,
                    this.n = this.r * +accountBalanceNL,
                    this.r > 3)
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
                    +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
                        this.i = this.c * +targetPriceNL - this.n,
                        void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
                        this.i = this.n - this.c * +targetPriceNL,
                        void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
                    this.o = Math.abs(this.l / this.i),
                    Math.abs(this.l / this.s);
                this.u = this.o > 1 ? this.o : 1 / this.o;
                //return this.c = Ma(c || ""),
                //this.l = Ma(this.l || ""),
                //this.i = Ma(this.i || ""),        
                this.quantityAnsNL = Math.round(this.c);
                this.potentialWinAnswerNL = this.i;
                this.potentialLossAnswerNL = -1 * this.l;
                this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
                this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
                this.riskLimitAnsNL = +riskLimitNL + "%";
                //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                this.leverageAnsNL = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
            }
            else if (this.sellFlagV) {
                if (+entryPriceNL > +stopLossPriceNL || +entryPriceNL < +targetPriceNL) {
                    this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
                    $('#alertModal').modal('show');
                    return;
                }
                // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                // Math.abs(+entryPriceNL - +targetPriceNL),
                // this.r = this.t / +entryPriceNL * 100,
                // this.u = (this.n = +riskLimitNL / this.r) * +accountBalanceNL,
                // this.n > 1)
                //     return;
                // this.c = this.quantityNL ? this.quantityNL : this.u / +entryPriceNL,
                // this.l = +stopLossPriceNL * this.c - this.u,
                // this.s = +targetPriceNL * this.c - this.u,
                // void 0 !== +targetPriceNL && (this.i = this.c * +targetPriceNL - this.u,
                // Math.abs(this.i / this.l)),
                // this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o;
                if (this.a = +accountBalanceNL * +entryPriceNL / +stopLossPriceNL,
                    this.r = +accountBalanceNL - this.a,
                    this.n = +riskLimitNL * +stopLossPriceNL / (100 * (+stopLossPriceNL - +entryPriceNL)),
                    this.c = this.quantityNL ? this.quantityNL : this.n * +accountBalanceNL,
                    this.l = (+entryPriceNL - +stopLossPriceNL) / +stopLossPriceNL * this.c,
                    this.s = (+entryPriceNL - +targetPriceNL) / +targetPriceNL * this.c,
                    this.n > 1)
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                void 0 !== +targetPriceNL && (this.i = this.c * ((+entryPriceNL - +targetPriceNL) / +targetPriceNL)) / Math.abs(this.l),
                    this.m = (this.o = this.s / Math.abs(this.l)) > 1 ? this.o : 1 / this.o;
                this.quantityAnsNL = Math.round(this.c);
                this.potentialWinAnswerNL = this.s;
                this.potentialLossAnswerNL = this.l;
                this.riskRewardNumNL = parseFloat(this.m.toFixed(2));
                this.riskRewardAnsNL = "1 : " + this.m.toFixed(2);
                this.riskLimitAnsNL = +riskLimitNL + "%";
                //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                this.leverageAnsNL = "NONE";
                // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
                // Math.abs(+entryPriceNL - +targetPriceNL),
                // this.a = this.t / +entryPriceNL * 100,
                // this.r = +riskLimitNL / this.a,
                // this.n = this.r * +accountBalanceNL,
                // this.r > 3)
                // return;
                // this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
                // +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
                // this.i = this.c * +targetPriceNL - this.n,
                // void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
                // this.i = this.n - this.c * +targetPriceNL,
                // void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
                // this.o = Math.abs(this.l / this.i),
                // Math.abs(this.l / this.s);
                // this.u = this.o > 1 ? this.o : 1 / this.o;
                // //return this.c = Ma(c || ""),
                // //this.l = Ma(this.l || ""),
                // //this.i = Ma(this.i || ""),                    
                // this.quantityAnsNL = Math.round(this.c);
                // this.potentialWinAnswerNL = this.i;
                // this.potentialLossAnswerNL = -1 * this.l;
                // this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
                // this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
                // this.riskLimitAnsNL = +riskLimitNL + "%";
                // //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                // this.leverageAnsNL = "NONE";
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);            
            }
            else {
                this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
                $('#alertModal').modal('show');
                return;
                //bitfinex
                //non-leverage
                // if (this.t = Math.abs(+entryPrice - +stopLossPrice),
                //               Math.abs(+entryPrice - +targetPrice),
                //               this.a = this.t / +entryPrice * 100,
                //               this.r = +riskLimit / this.a,
                //               this.n = this.r * +accountBalance,
                //               this.r > 3)
                //               return;
                //               this.c = this.quantity ? this.quantity : this.n / +entryPrice,
                //               +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
                //               this.i = this.c * +targetPrice - this.n,
                //               void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
                //               this.i = this.n - this.c * +targetPrice,
                //               void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
                //               this.o = Math.abs(this.l / this.i),
                //               Math.abs(this.l / this.s);
                //               this.u = this.o > 1 ? this.o : 1 / this.o;
                //               //return this.c = Ma(c || ""),
                //               //this.l = Ma(this.l || ""),
                //               //this.i = Ma(this.i || ""),                    
                //               this.quantityAns = Math.round(this.c);
                //               this.potentialWinAnswer = this.i;
                //               this.potentialLossAnswer = this.l;
                //               this.riskRewardNum = parseFloat(this.u.toFixed(2));
                //               this.riskRewardAns = "1 : " + this.u.toFixed(2);
                //               this.riskLimitAns = +riskLimit + "%";
                //               this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                //               console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
            }
            if (+riskLimitNL < .5) {
                $("#lowNL-1").addClass("result-outline");
            }
            else if (.5 <= +riskLimitNL && +riskLimitNL < 1) {
                $("#goodNL-1").addClass("result-outline");
            }
            else if (1 <= +riskLimitNL && +riskLimitNL < 2) {
                $("#idealNL-1").addClass("result-outline");
            }
            else if (2 <= +riskLimitNL && +riskLimitNL < 3) {
                $("#goodNL-1-2").addClass("result-outline");
            }
            else if (3 <= +riskLimitNL && +riskLimitNL < 5) {
                $("#riskyNL-1").addClass("result-outline");
            }
            else if (5 <= +riskLimitNL) {
                $("#very-riskyNL-1").addClass("result-outline");
            }
            if (this.riskRewardNumNL < 1) {
                $("#redNL-2").addClass("result-outline");
            }
            else if (1 <= this.riskRewardNumNL && this.riskRewardNumNL < 2) {
                $("#orangeNL-2").addClass("result-outline");
            }
            else if (2 <= this.riskRewardNumNL && this.riskRewardNumNL < 3) {
                $("#greenNL-2").addClass("result-outline");
            }
            else if (3 <= this.riskRewardNumNL && this.riskRewardNumNL < 5) {
                $("#orangeNL-2-2").addClass("result-outline");
            }
            else if (5 <= this.riskRewardNumNL) {
                $("#redNL-2-2").addClass("result-outline");
            }
        }
    };
    calculatorComponent.prototype.informationDisplay = function () {
        $('#alertModalInfo').modal('show');
        return;
    };
    calculatorComponent.prototype.calculate = function (accountBalance, entryPrice, stopLossPrice, targetPrice, riskLimit) {
        $("#low-1").removeClass("result-outline");
        $("#good-1").removeClass("result-outline");
        $("#ideal-1").removeClass("result-outline");
        $("#good-1-2").removeClass("result-outline");
        $("#risky-1").removeClass("result-outline");
        $("#very-risky-1").removeClass("result-outline");
        $("#red-2").removeClass("result-outline");
        $("#orange-2").removeClass("result-outline");
        $("#green-2").removeClass("result-outline");
        $("#orange-2-2").removeClass("result-outline");
        $("#red-2-2").removeClass("result-outline");
        $("#green-3").removeClass("result-outline");
        $("#yellow-3").removeClass("result-outline");
        $("#orange-3").removeClass("result-outline");
        $("#red-3").removeClass("result-outline");
        if (+accountBalance === 0 || +entryPrice === 0 || +stopLossPrice === 0 || +targetPrice === 0 || +riskLimit === 0) {
            this.alertModalMessage = 'Please fill in all entries.';
            $('#alertModal').modal('show');
            return;
        }
        if (this.buyFlagV) {
            if (+entryPrice > +targetPrice || +entryPrice < +stopLossPrice) {
                this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
                $('#alertModal').modal('show');
                return;
            }
            if (this.selected === "TRADING PAIR") {
                this.alertModalMessage = 'Please select a trading pair.';
                $('#alertModal').modal('show');
                return;
            }
            if (this.selected === "XBTUSD") {
                this.t = +stopLossPrice / +entryPrice;
                this.a = this.t - 1,
                    this.r = Math.abs(this.a),
                    this.n = +accountBalance * +riskLimit / 100,
                    this.i = this.n / this.r,
                    this.l = this.quantity ? this.quantity : this.i * +stopLossPrice,
                    this.s = this.i * this.a,
                    this.d = this.l / +targetPrice,
                    this.p = 1 - +targetPrice / +entryPrice,
                    this.o = this.d * this.p,
                    void 0 !== +targetPrice && (this.h = +targetPrice / +entryPrice - 1,
                        this.g = this.l / +targetPrice,
                        this.c = this.h * this.g),
                    this.u = this.l / (+accountBalance * +entryPrice),
                    this.m = Math.abs(this.o / this.s),
                    Math.abs(this.c / this.s),
                    this.f = this.m > 1 ? this.m : 1 / this.m;
                this.o = Math.abs(this.o);
                this.quantityAns = this.l;
                this.potentialWinAnswer = this.o;
                this.potentialLossAnswer = this.s;
                this.riskRewardNum = parseFloat(this.f.toFixed(2));
                this.riskRewardAns = "1 : " + this.f.toFixed(2);
                this.riskLimitAns = +riskLimit + "%";
                this.leverageAns = this.u > 1 ? parseFloat(this.u.toFixed(2)) : 1;
            }
            else if (this.selected === "ETHUSD") {
                this.t = Math.abs(+entryPrice - +stopLossPrice),
                    this.a = +riskLimit * +accountBalance / 100,
                    this.r = this.a / this.t,
                    this.i = +accountBalance / +entryPrice * 1e6,
                    this.n = this.quantity ? this.quantity : 1e6 * this.r,
                    +entryPrice > +stopLossPrice ? (this.l = (+entryPrice - +stopLossPrice) * this.n / 1e6,
                        this.c = +targetPrice - +entryPrice,
                        this.s = this.c * this.n / 1e6,
                        void 0 !== +targetPrice && (this.u = +targetPrice - +entryPrice,
                            this.o = this.u * this.n / 1e6)) : (this.l = Math.abs((+entryPrice - +stopLossPrice) * this.n / 1e6),
                        this.c = +entryPrice - +targetPrice,
                        this.s = this.c * this.n / 1e6,
                        void 0 !== +targetPrice && (this.u = +entryPrice - +targetPrice,
                            this.o = this.u * this.n / 1e6));
                this.m = Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice)),
                    void 0 !== +targetPrice && Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice));
                +accountBalance / this.t,
                    this.r / 100,
                    this.d = this.n / this.i,
                    this.p = this.m > 1 ? this.m : 1 / this.m;
                //console.log(this.o),
                this.quantityAns = this.n;
                this.potentialWinAnswer = this.s;
                this.potentialLossAnswer = this.l;
                this.riskRewardNum = parseFloat(this.p.toFixed(2));
                this.riskRewardAns = "1 : " + this.p.toFixed(2);
                this.riskLimitAns = +riskLimit + "%";
                this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
            }
            else if (this.selected === "ADABTC" || this.selected === "BCHBTC" || this.selected === "EOSBTC" || this.selected === "LTCBTC" || this.selected === "TRXBTC" || this.selected === "XRPBTC") {
                // console.log("alt selected");
                // if (+entryPrice > +stopLossPrice) {
                //   console.log("entry greather than stop price");
                //     if (this.t = Math.abs(+entryPrice - +stopLossPrice),
                //     Math.abs(+entryPrice - +targetPrice),
                //     this.r = this.t / +entryPrice * 100,
                //     this.u = (this.n = +riskLimit / this.r) * +accountBalance,
                //     this.n > 1)
                //     this.c = this.quantity ? this.quantity : this.u / +entryPrice,
                //     this.l = +stopLossPrice * this.c - this.u,
                //     this.s = +targetPrice * this.c - this.u,
                //     void 0 !== +targetPrice && (this.i = this.c * +targetPrice - this.u,
                //     Math.abs(this.i / this.l)),
                //     this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o
                // } else if (+entryPrice < +stopLossPrice) {
                //   console.log("entry less than stop price");
                //     if (this.a = +accountBalance * +entryPrice / +stopLossPrice,
                //     this.r = +accountBalance - this.a,
                //     this.n = +riskLimit * +stopLossPrice / (100 * (+stopLossPrice - +entryPrice)),
                //     this.c = this.quantity ? this.quantity : this.n * +accountBalance,
                //     this.l = (+entryPrice - +stopLossPrice) / +stopLossPrice * this.c,
                //     this.s = (entryPrice - +targetPrice) / +targetPrice * this.c,
                //     this.n > 1)
                //     void 0 !== +targetPrice && (this.i = this.c * ((+entryPrice - +targetPrice) / +targetPrice)) / Math.abs(this.l),
                //     this.m = (this.o = this.s / Math.abs(this.l)) > 1 ? this.o : 1 / this.o
                // }
                //     this.quantityAns = this.c ? Math.round(this.c) : 0,
                //     this.potentialLossAnswer = this.l ? parseFloat((this.l).toFixed(2)) : 0,
                //     this.potentialWinAnswer = this.s ? parseFloat((this.s).toFixed(2)) : 0,
                //     this.riskRewardNum = this.m ? parseFloat(this.m.toFixed(4)) : 0,
                //     this.leverageAns = this.n > 1 ? parseFloat(this.n.toFixed(2)) : 1;
                //     this.riskRewardAns = "1 : " + this.m,
                //     this.riskLimitAns = +riskLimit ? +riskLimit + "%": "0";
                //     console.log("succeeded");
                //     console.log( this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u, this.m)
                if (this.t = Math.abs(+entryPrice - +stopLossPrice),
                    Math.abs(+entryPrice - +targetPrice),
                    this.a = this.t / +entryPrice * 100,
                    this.r = +riskLimit / this.a,
                    this.n = this.r * +accountBalance,
                    this.r > 3)
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                this.c = this.quantity ? this.quantity : this.n / +entryPrice,
                    +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
                        this.i = this.c * +targetPrice - this.n,
                        void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
                        this.i = this.n - this.c * +targetPrice,
                        void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
                    this.o = Math.abs(this.l / this.i),
                    Math.abs(this.l / this.s);
                this.u = this.o > 1 ? this.o : 1 / this.o;
                //return this.c = Ma(c || ""),
                //this.l = Ma(this.l || ""),
                //this.i = Ma(this.i || ""),                    
                this.quantityAns = Math.round(this.c);
                this.potentialWinAnswer = this.i;
                this.potentialLossAnswer = -1 * this.l;
                this.riskRewardNum = parseFloat(this.u.toFixed(2));
                this.riskRewardAns = "1 : " + this.u.toFixed(2);
                this.riskLimitAns = +riskLimit + "%";
                this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);         
            }
        }
        else if (this.sellFlagV) {
            if (+entryPrice > +stopLossPrice || +entryPrice < +targetPrice) {
                this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
                $('#alertModal').modal('show');
                return;
            }
            if (this.selected === "TRADING PAIR") {
                this.alertModalMessage = 'Please select a trading pair.';
                $('#alertModal').modal('show');
                return;
            }
            if (this.selected === "XBTUSD") {
                this.t = +stopLossPrice / +entryPrice;
                this.a = 1 - this.t,
                    this.r = Math.abs(this.a),
                    this.n = +accountBalance * +riskLimit / 100,
                    this.i = this.n / this.r,
                    this.l = this.quantity ? this.quantity : this.i * +stopLossPrice,
                    this.s = this.i * this.a,
                    this.d = this.l / +targetPrice,
                    //this.p = +targetPrice / +entryPrice - 1,
                    this.p = 1 - +targetPrice / +entryPrice;
                this.o = this.d * this.p,
                    void 0 !== +targetPrice && (this.h = 1 - +targetPrice / +entryPrice,
                        this.g = this.l / +targetPrice,
                        this.c = this.h * this.g),
                    this.u = this.l / (+accountBalance * +entryPrice),
                    this.m = Math.abs(this.o / this.s),
                    Math.abs(this.c / this.s),
                    this.f = this.m > 1 ? this.m : 1 / this.m;
                this.o = Math.abs(this.o);
                this.u = this.u > 1 ? parseFloat(this.u.toFixed(2)) : 1,
                    this.quantityAns = this.l;
                this.potentialWinAnswer = this.o;
                this.potentialLossAnswer = this.s;
                this.riskRewardNum = parseFloat(this.f.toFixed(2));
                this.riskRewardAns = "1 : " + this.f.toFixed(2);
                this.riskLimitAns = +riskLimit + "%";
                this.leverageAns = this.u;
            }
            else if (this.selected === "ETHUSD") {
                this.t = Math.abs(+entryPrice - +stopLossPrice),
                    this.a = +riskLimit * +accountBalance / 100,
                    this.r = this.quantity ? this.quantity : this.a / this.t,
                    this.n = +accountBalance / +entryPrice,
                    +entryPrice > +stopLossPrice ? (this.i = (+stopLossPrice - +entryPrice) * this.r,
                        this.l = (+targetPrice - +entryPrice) * this.r,
                        void 0 !== +targetPrice && (this.s = (+targetPrice - +entryPrice) * this.r)) : (this.i = (+entryPrice - +stopLossPrice) * this.r,
                        this.l = (+entryPrice - +targetPrice) * this.r,
                        void 0 !== +targetPrice && (this.s = (+entryPrice - +targetPrice) * this.r));
                this.o = Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice)),
                    void 0 !== +targetPrice && Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice));
                this.u = +accountBalance / this.t,
                    this.u / 100,
                    this.c = this.r / this.n,
                    this.m = this.o > 1 ? this.o : 1 / this.o;
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.u, this.c, this.m);
                this.quantityAns = this.r * 1000000;
                this.potentialWinAnswer = this.l;
                this.potentialLossAnswer = this.i;
                this.riskRewardNum = parseInt(this.m.toFixed(2));
                this.riskRewardAns = "1 : " + this.m.toFixed(2);
                this.riskLimitAns = +riskLimit + "%";
                this.leverageAns = this.c > 1 ? parseFloat(this.c.toFixed(2)) : 1;
            }
            else if (this.selected === "ADABTC" || this.selected === "BCHBTC" || this.selected === "EOSBTC" || this.selected === "LTCBTC" || this.selected === "TRXBTC" || this.selected === "XRPBTC") {
                if (this.t = Math.abs(+entryPrice - +stopLossPrice),
                    Math.abs(+entryPrice - +targetPrice),
                    this.a = this.t / +entryPrice * 100,
                    this.r = +riskLimit / this.a,
                    this.n = this.r * +accountBalance,
                    this.r > 3)
                    return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
                        $('#alertModal').modal('show');
                this.c = this.quantity ? this.quantity : this.n / +entryPrice,
                    +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
                        this.i = this.c * +targetPrice - this.n,
                        void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
                        this.i = this.n - this.c * +targetPrice,
                        void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
                    this.o = Math.abs(this.l / this.i),
                    Math.abs(this.l / this.s);
                this.u = this.o > 1 ? this.o : 1 / this.o;
                //return this.c = Ma(c || ""),
                //this.l = Ma(this.l || ""),
                //this.i = Ma(this.i || ""),                    
                this.quantityAns = Math.round(this.c);
                this.potentialWinAnswer = this.i;
                this.potentialLossAnswer = -1 * this.l;
                this.riskRewardNum = parseFloat(this.u.toFixed(2));
                this.riskRewardAns = "1 : " + this.u.toFixed(2);
                this.riskLimitAns = +riskLimit + "%";
                this.leverageAns = this.r > 1 ? parseFloat(this.r.toFixed(2)) : 1;
                //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u, this.d);
            }
        }
        else {
            this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
            $('#alertModal').modal('show');
            return;
            //bitfinex
            //non-leverage
            // if (this.t = Math.abs(+entryPrice - +stopLossPrice),
            //               Math.abs(+entryPrice - +targetPrice),
            //               this.a = this.t / +entryPrice * 100,
            //               this.r = +riskLimit / this.a,
            //               this.n = this.r * +accountBalance,
            //               this.r > 3)
            //               return;
            //               this.c = this.quantity ? this.quantity : this.n / +entryPrice,
            //               +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
            //               this.i = this.c * +targetPrice - this.n,
            //               void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
            //               this.i = this.n - this.c * +targetPrice,
            //               void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
            //               this.o = Math.abs(this.l / this.i),
            //               Math.abs(this.l / this.s);
            //               this.u = this.o > 1 ? this.o : 1 / this.o;
            //               //return this.c = Ma(c || ""),
            //               //this.l = Ma(this.l || ""),
            //               //this.i = Ma(this.i || ""),                    
            //               this.quantityAns = Math.round(this.c);
            //               this.potentialWinAnswer = this.i;
            //               this.potentialLossAnswer = this.l;
            //               this.riskRewardNum = parseFloat(this.u.toFixed(2));
            //               this.riskRewardAns = "1 : " + this.u.toFixed(2);
            //               this.riskLimitAns = +riskLimit + "%";
            //               this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
            //               console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
        }
        if (+riskLimit < .5) {
            $("#low-1").addClass("result-outline");
        }
        else if (.5 <= +riskLimit && +riskLimit < 1) {
            $("#good-1").addClass("result-outline");
        }
        else if (1 <= +riskLimit && +riskLimit < 2) {
            $("#ideal-1").addClass("result-outline");
        }
        else if (2 <= +riskLimit && +riskLimit < 3) {
            $("#good-1-2").addClass("result-outline");
        }
        else if (3 <= +riskLimit && +riskLimit < 5) {
            $("#risky-1").addClass("result-outline");
        }
        else if (5 <= +riskLimit) {
            $("#very-risky-1").addClass("result-outline");
        }
        if (this.riskRewardNum < 1) {
            $("#red-2").addClass("result-outline");
        }
        else if (1 <= this.riskRewardNum && this.riskRewardNum < 2) {
            $("#orange-2").addClass("result-outline");
        }
        else if (2 <= this.riskRewardNum && this.riskRewardNum < 3) {
            $("#green-2").addClass("result-outline");
        }
        else if (3 <= this.riskRewardNum && this.riskRewardNum < 5) {
            $("#orange-2-2").addClass("result-outline");
        }
        else if (5 <= this.riskRewardNum) {
            $("#red-2-2").addClass("result-outline");
        }
        if (this.leverageAns < 5) {
            $("#green-3").addClass("result-outline");
        }
        else if (5 <= this.leverageAns && this.leverageAns < 10) {
            $("#yellow-3").addClass("result-outline");
        }
        else if (10 <= this.leverageAns && this.leverageAns < 20) {
            $("#orange-3").addClass("result-outline");
        }
        else if (20 <= this.leverageAns) {
            $("#red-3").addClass("result-outline");
        }
    };
    // Ma(e) {
    //     var t = e.toString().split(".")[0]
    //       , a = e.toString().split(".")[1];
    //     if (t.length >= 2) {
    //         var r = e.toString();
    //         e = r.indexOf(".") >= 0 ? r.substr(0, r.indexOf(".")) + r.substr(r.indexOf("."), 3) : r
    //     } else if (1 == t.length)
    //         if (0 == t) {
    //             var n = e.toString();
    //             e = n.indexOf(".") >= 0 ? n.substr(0, n.indexOf(".")) + n.substr(n.indexOf("."), 5) : n
    //         } else {
    //             var i = e.toString();
    //             e = i.indexOf(".") >= 0 ? i.substr(0, i.indexOf(".")) + i.substr(i.indexOf("."), 4) : i
    //         }
    //     else if ("string" === typeof a && (0 == a[0] || 0 == a[1])) {
    //         var l = e.toString();
    //         e = l.indexOf(".") >= 0 ? l.substr(0, l.indexOf(".")) + l.substr(l.indexOf("."), 7) : l
    //     }
    //     return e
    // }
    calculatorComponent.prototype.buyFlag = function (e) {
        this.buyFlagV = true;
        this.sellFlagV = false;
        $(".btn-success").addClass("btn-buy-active");
        $(".btn-danger").removeClass("btn-sell-active");
        $(".buy-btn").css("opacity", "1");
        $(".sell-btn").css("opacity", ".5");
    };
    calculatorComponent.prototype.sellFlag = function (e) {
        this.buyFlagV = false;
        this.sellFlagV = true;
        $(".btn-success").removeClass("btn-buy-active");
        $(".btn-danger").addClass("btn-sell-active");
        $(".buy-btn").css("opacity", ".5");
        $(".sell-btn").css("opacity", "1");
    };
    calculatorComponent.prototype.ngOnInit = function () {
        this.baseURL = this._configuration.Server;
        this.loading = true;
        this.windowWidth = window.innerWidth;
    };
    calculatorComponent.prototype.onResize = function (event) {
        this.windowWidth = window.innerWidth;
    };
    Object.defineProperty(calculatorComponent.prototype, "isXsScreen", {
        get: function () {
            return this.windowWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(calculatorComponent.prototype, "sliderHeight", {
        get: function () {
            if (this.windowWidth < 1025) {
                return '25vh';
            }
            return '35vh';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], calculatorComponent.prototype, "onResize", null);
    calculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/pages/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/pages/calculator/calculator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogService"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], calculatorComponent);
    return calculatorComponent;
}());



/***/ }),

/***/ "./src/app/pages/calculator/calculator.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.module.ts ***!
  \*******************************************************/
/*! exports provided: calculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorModule", function() { return calculatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.component */ "./src/app/pages/calculator/calculator.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/pages/header/header.module.ts");







var routes = [
    { path: '', component: _calculator_component__WEBPACK_IMPORTED_MODULE_3__["calculatorComponent"] }
];
var calculatorModule = /** @class */ (function () {
    function calculatorModule() {
    }
    calculatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_calculator_component__WEBPACK_IMPORTED_MODULE_3__["calculatorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"]
            ],
            entryComponents: []
        })
    ], calculatorModule);
    return calculatorModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-calculator-calculator-module.js.map