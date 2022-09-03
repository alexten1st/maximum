import React from 'react'
import styles from "../../styles/OfferList.module.css";
import Offer from "../Offer/Offer";

export default function OfferList({mainData}) {
  return (
    <>
    
    <ul className={styles.offers}>
              {mainData.map(({ feedData, photobank, _id }) => {
                const {
                  modelByClassifierName,
                  productionYear,
                  vin,
                  dealerPrice,
                  equipmentVariantFuelType,
                  equipmentVariantEnginePower,
                  equipmentVariantTransmission,
                  engine,
                  dealerPriceWithOption,
                  advancedOptions,
                  colorByClassifierName,
                  equipmentVariantTransmissionType,
                  equipmentName,
                  adjustment,
                  autoPrice,
                  autoPriceSummary,
                  brandName,
                } = feedData;
                const { imgs } = photobank;
                const props = {
                  modelByClassifierName,
                  autoPrice,
                  adjustment,
                  equipmentVariantTransmissionType,
                  brand: brandName,
                  equipmentName,
                  productionYear,
                  equipmentVariantTransmission,
                  vin,
                  dealerPrice,
                  equipmentVariantFuelType,
                  equipmentVariantEnginePower,
                  autoPriceSummary,
                  engineCapacity: engine.engineCapacity.toLocaleString(
                    undefined,
                    { minimumFractionDigits: 1 }
                  ),
                  imgs,
                  dealerPriceWithOption,
                  advancedOptions,
                  colorByClassifierName,
                };
                return (
                  <li key={_id}>
                    <Offer key={_id} props={props} />
                  </li>
                );
              })}
            </ul>
            </>
  )
}
