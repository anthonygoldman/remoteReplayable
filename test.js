{
            staticBlockEls : {

            },
            dynamicBlockEls : {
                //DELIVERYSUPPORT-89584
                "https:":".greeting" //username
                +", #points-default, #points-alternate"
                +", #thankyou-account-num"
                //DELIVERYSUPPORT-95989 - PII update, January 19, 2016
                + ", #pub-account-menu-logged-in, .pub-digits"

                ,"" : "#ID-my-account-text > p > em, #ID-bar > div > div > p > strong.points, #ID-my-account-menu > ul:nth-child(1)" +
                ", #ID-my-account-menu ul:nth-child(1)" +
                ", .greeting" +
                ", #points-default-2"
                ,"http" : "#welcome-strip > p > em"
                +", #my-account-menu-subnav > .account-menu-subnav-user > *"
                +", #citi-header-ID .points"
                +", #points-normal > .points-max"

                // Flight, Hotel, Car
                // - Points due, points remaining
                ,"flight" : "*[id*=totalContents]"
                +", *[id*=TotalDue]"
                +", .blueText"
                ,"flightresults" : ".results-payment-text"
                ,"hotel" : "*[id*=totalContents]"
                +", *[id*=TotalDue]"
                +", .blueText"
                ,"car" : "*[id*=totalContents]"
                +", *[id*=TotalDue]"
                +", .blueText"
                ,"activity" : "*[id*=totalContents]"
                +", *[id*=TotalDue]"
                +", .blueText"
                ,"accountstatementpage" : "#newContentContainer > div.section-header > p.points"
                +", #pointsSumTotal"
                +", #pointsSumPointsExpiring"
                +", #pointsSumAllPoints"
                +", #pointsSumUnavPointsTotal"
                +", #pointsSumUnPoints"
                    //points expired label, table sub-text and table rows
                +",#noti-label-expiring, #noti-msg-expiring > p, #noti-msg-expiring tr"
                    //points used for online bill pay label, table sub-text and table rows
                +",#noti-label-used, #noti-msg-used > p, #noti-msg-used tr"
                    //View By Account
                    //Member since date
                +",#transactionSearch > p"
                    // points earned by credit cards
                +",#points_earned"
                    // user credit cards details
                +",#user-credit-cards"
                    //points earned by banking accounts
                +",#accounts-head-total"
                    //user banking accounts
                +",#user-bank-accounts"
                    //user other accounts total
                +",#other-head-total"
                    //user points earned from other accounts
                +",#user-other-accounts"
                    //thank you rewards total
                +",#thankyouRewards-total"
                    //user points earned from ThankYou
                +",#thankyouRewards-data"
                    //orders place total
                +",#ordersplaced-total"
                    //orders placed table data
                +",#ordersplaced-data"
                    // orders returned total
                +",#returns-total"
                    // order returned itemized table
                +",#returns-data"
                    // View as a List
                + ",#detail_points_list"
                    // unavailable points
                +",#points_unavailable div.category-points, #unavailable_points_list"
                    //points modal window
                +",#glPopContainer, #modalTitle, #reinstatedOverlayNoFeeTable"
                    //Sept 3, 2014
                + ", #total-unavailable-points, .table-total .fee"

                ,"paymentoptions" : ".payment-options-payment-text" +
                ", #PointsTextBox" +
                ", #CashTextBox"

                ,"accountindex":"#noti-msg-expiring"
                +", #noti-msg-used"
                +", #noti-label-expiring"
                +", #myAccLandHeader > h1"
                    //2/26/2013 updates
                    //welcome message by search
                +", #ID-my-account-text em"
                    //welcome message header
                +", #myAccLandHeader h1"
                    // Sponsor Accounts
                +", #expPoints td.mySponsorc2"
                    //points spent per payment
                +", #newContentContainer table.obpwp-payment-details"
                , "accountstatementexpiry" : "#newContentContainer .points"
                +", #expPoints tbody td"

                // Trip folder
                // - Points due points remaining
                , "tripfolder" : "*[id*=BalValue]"
                +", *[id*=DueValue]"
                +", *[id*=RemValue]"
                +", #dvtotalTripPrice"

                // My trips
                // - Trip locator number(s), Record Locator box, Travel Name box
                , "pointsexchange" : "#mainContent"

                // Request proof of purchase
                // (see http://issuetracking.foreseeresults.com/jira/browse/SRIMP-1612 for information)
                , "accountorderhistory" : "#glPPContent .align"
                +", .orderLink"
                +", .cart-id .underLink"
                +", .reward-id"
                , "accountorderdetails" : "#glPPContent .align"
                +", .shipping-address .value"
                +", .productContent .gray"
                    //blocks eGift Card content
                + ", .productContent, .orderActions"
                , "resendegiftcard" : ".productContent-contact-info .info-content"
                +", .cart-id a"
                +", .reward-id"
                +", [id*=email-confirmation] p"

                , "ptstransferpartner" : ".transactions > li > span"

                // pii update DELIVERYSUPPORT-69920, tom 3/10/2014
                ,"returnrequestreviewclaim":"#mainContent div.wrap-info span.right"
                ,"transferconfirm":"#recipient-confirm div.form-value"

                //PII update - DELIVERYSUPPORT-82433 - May 27, 2015
                , "recommendedforyou" : ".item-need-points"
                // can't find thie, this is a guess
                , "merchandise" : ".item-need-points"
                +", .sidebar-container-content"
                +", .item-my-points > .item-value"
                +", #pointsRemainingId"
                +", .shipping_address > div > .form-value"
                +", .sidebar-block > .sidebar-block-inner > p"
                +", .item-meta > .item-title"
                    //PII update June 12, 2014
                +", #content-inner table table td > p"
                +", #content-inner .item-my-points > .item-label"

                // Travel confirmation page
                // and My Trip --> Show Details
                // - Trip ID number in headline, Name at top of message, Trip ID number (again), Confirmation number, Hotel Insurance policy number, Customer Phone Number
                ,"confirmation" : ".phoneNumber"
                +", #orderSummaryMsg"
                +", #divTripFolder .grayBdr"
                +", .expandBox.padFive .unBoldFont"
                +", .floatRight.bgBlue"
                +", .h1"

                //overblocking because we can't see an example of gift cards to block
                //commenting this out as the egift cards will not be in place until September 2015
                , "shippingaddress.do" : "#container"
                , "placeorder.do" : "#container"

                ,"transferreview" : "#bracketedFname"
                +", #bracketedLname"
                +", #bracketedAccNum"
                +", #bracketedPoints"

                ,"buypoints" : "#reviewPaymentMethod"
                +", #billingReviewTable"
                +", #pointsTotal"
                +", #pointPurchased"
                +", #paymentMethodTable"
                +", #billingAddressTable > tbody > tr > td"
                ,"buypointsreview" : "#reviewPaymentMethod"
                +", #totalCost"
                +", #displayPoints > p"
                +", #pointsPurchased > div > span"
                +", #billingReviewTable"
                ,"transferpoints" : "#points-normal > span.points-max"
                ,"transferenterinfo:" : "#points-normal > span.points-max"

                ,"accountprofilegeneralpage" : "span.prfInfoValueColumn",
                "accountprofilegeneral" : "span.prfPlainEmailContent"
                +", span.prfInfoValueColumn",
                "mysponsoraccounts" : "#mainContent  td.descripCell"
                +", #mainContent td.numbCell",
                "accountswppage" : "#details > div.formContainer",

                "membermemories" : "p.mmSubmittedMemory"
                +", div.formRightColumn p.margin_bottom_3"
                +", form[name=aboutMemberMemoriesForm] div.formRightColumn strong"
                +", div.mmFormBlockRow > div.formRightColumn > p > strong"


            },
            staticVisibleEls : {
                /*"<url_wildcard_1>" : "<css_selector">,
                 "<url_wildcard_2>" : "<css_selector">*/
            },
            dynamicVisibleEls : {
                "" : "select[id*=selFlightArriveTime]"
                +", input[id*=txtFlightArriveDate]"
                +", select[id*=selFlightDepartTime]"
                +", input[id*=txtFlightDepartDate]"
                +", input[id*=txtFlightArriveLoc]"
                +", input[id*=txtFlightDepartLoc]"
                +", input[id*=txtAirlineSearch]"
                +", select[id*=ddlFlightClass]"
                +", select[id*=selFlightNumChildren]"
                +", select[id*=selFlightNumYouth]"
                +", select[id*=selFlightNumAdults]"
                +", div[id=divHChildAge] select"
                    //PII update - DELIVERYSUPPORT-82433 - May 27, 2015
                + ", #search-text"
                + ", [id^=quantity]"
                    //FROM STATIC
                +", input[id*=txtActivityDest]"
                +", input[id*=txtActivityStartDate]"
                +", input[id*=txtActivityEndDate]"
                +", select[id*=selCarType]"
                +", select[id*=selCarRentalCompany]"
                +", select[id*=selCarDropOffTime]"
                +", select[id*=selCarPickUpTime]"
                +", input[id*=txtCarDropOffDate]"
                +", input[id*=txtCarPickUpDate]"
                +", input[id*=txtPickUpLoc]"
                +", select[id*=selRentalCompany]"
                +", select[id*=ddlHotelRating]"
                +", input[id*=txtHotelName]"
                +", select[id*=ddlHChild]"
                +", select[id*=ddlHAdult]"
                +", input[id*=txtHotelCheckoutDate]"
                +", input[id*=txtHotelCheckinDate]"
                +", input[id*=txtHotelLoc]"
                +", #searchTerm"
                +", input[name=searchTerm]"
                +", #txtTripName"
                +", #txtStartFromDate"
                +", #txtStartToDate"
                +", #txtEndFromDate"
                +", #txtEndToDate"


                // Checkout process
                ,"/checkout" : "select[id*=ddlSpecialAssistance]"
                +", select[id*=drpMeal]"

                // Airline search
                , "/flight" : "input[id*=txtAirlineSearch]"
                +", input[id*=txtReturnDate]"
                +", input[id*=txtDepartureDate]"
                +", input[id*=txtTo]"
                +", input[id*=txtFrom]"
                +", select[id*=ddlFlightClass]"
                +", select[id*=ddlChildren]"
                +", select[id*=ddlYouth]"
                +", select[id*=ddlAdults]"
                +", select[id*=ddlReturnTime]"
                +", select[id*=ddlDepartureTime]"
                +", select[id*=ddlTripType]"

                // User profile
                , "/myprofile" : "select[id*=drpAirline], select[id*=SpecialAssistance], select[id*=drpMeal],  select[id*=drpServiceClass], input[id*=txtDefaultOrigin]"
                + ",div[id*=AirPrefs].infoPanels input, div[id*=AirPrefs].infoPanels select"

            },
            assetBlockEls : {
                /*"<url_wildcard_1>" : "<css_selector">,
                 "<url_wildcard_2>" : "<css_selector">*/
            },
            removeVisibilityEls : {
                "/myprofile" : "input[name*=ProgramNos]"
            },
            obscureEls : {
                /*"<url_wildcard_1>" : "<css_selector">,
                 "<url_wildcard_2>" : "<css_selector">*/
            }
        }