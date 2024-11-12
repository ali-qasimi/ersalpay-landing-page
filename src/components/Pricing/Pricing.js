import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { 
  BsCurrencyExchange,
  BsPersonLinesFill,
  BsGraphUp,
  BsCash,
  BsWalletFill,
  BsFileTextFill,
  BsToggles,
  BsGlobeAsiaAustralia,
  BsFillPersonFill,
  BsCloudDownloadFill
} from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { IoReceipt } from "react-icons/io5";
import { BiSolidBank } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection lightBg={false}>
        <PricingWrapper>
          <PricingHeading>Key Features</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaAddressCard />
                </PricingCardIcon>
                <PricingCardPlan>Manage customer profiles with built-in ID verification</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsCurrencyExchange />
                </PricingCardIcon>
                <PricingCardPlan>Manage remittance orders with automated processes</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiSolidBank />
                </PricingCardIcon>
                <PricingCardPlan>Automate AUSTRAC reporting (IFTI-DRA, SMR)</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoReceipt />
                </PricingCardIcon>
                <PricingCardPlan>Instant printable receipts with Whatsapp & email integration</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsGraphUp />
                </PricingCardIcon>
                <PricingCardPlan>Dashboards & sales analytics to maximise your business growth</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsCash />
                </PricingCardIcon>
                <PricingCardPlan>Manage exchange rates & fees</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsCloudDownloadFill />
                </PricingCardIcon>
                <PricingCardPlan>Import & export customer and sales data</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdDashboardCustomize />
                </PricingCardIcon>
                <PricingCardPlan>Custom features as per your requirements</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdConnectWithoutContact />
                </PricingCardIcon>
                <PricingCardPlan>Continuous daily support to provide the best user experience</PricingCardPlan>
                <PricingCardFeatures>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing